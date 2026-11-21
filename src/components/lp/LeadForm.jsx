import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { captura } from '../../content';
import { Button, Field } from './ui';

const f = captura.form;
const WEBHOOK = import.meta.env.VITE_WEBHOOK_URL;
const WHATSAPP = import.meta.env.VITE_WHATSAPP_URL;

// (63) 99999-9999 conforme a pessoa digita
export function mascaraTelefone(v) {
  const d = v.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export default function LeadForm() {
  const [dados, setDados] = useState({ nome: '', whatsapp: '', imobiliaria: '' });
  const [erros, setErros] = useState({});
  const [estado, setEstado] = useState('parado'); // parado | enviando | ok | erro

  const set = (campo) => (e) =>
    setDados((d) => ({ ...d, [campo]: campo === 'whatsapp' ? mascaraTelefone(e.target.value) : e.target.value }));

  async function enviar(e) {
    e.preventDefault();
    const novos = {};
    if (dados.nome.trim().length < 3) novos.nome = 'Informe o seu nome.';
    if (dados.whatsapp.replace(/\D/g, '').length < 10) novos.whatsapp = 'Informe o WhatsApp com DDD.';
    if (!dados.imobiliaria.trim()) novos.imobiliaria = 'Informe a imobiliária ou o CRECI.';
    setErros(novos);
    if (Object.keys(novos).length) return;

    setEstado('enviando');
    try {
      if (!WEBHOOK) throw new Error('VITE_WEBHOOK_URL vazio');
      const res = await fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: dados.nome.trim(),
          whatsapp: dados.whatsapp.replace(/\D/g, ''),
          imobiliaria: dados.imobiliaria.trim(),
          evento: 'cha-com-a-rainha-corretores-2026-11-24',
          pagina: window.location.href, // leva junto os UTMs da URL
          enviadoEm: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(`webhook ${res.status}`);
      window.dataLayer?.push({ event: 'lead_evento_corretores' });
      setEstado('ok');
      // Pequena espera pro GTM disparar a conversão antes de sair da página
      if (WHATSAPP) setTimeout(() => { window.location.href = WHATSAPP; }, 800);
    } catch (err) {
      console.error(err);
      setEstado('erro'); // os campos continuam preenchidos pra tentar de novo
    }
  }

  if (estado === 'ok') {
    return (
      <div className="rounded-2xl border border-accent/40 bg-primary/60 p-6 text-center sm:p-8" role="status">
        <CheckCircle2 size={40} className="mx-auto text-accent" aria-hidden="true" />
        <p className="mt-3 font-display text-xl font-extrabold text-white">{f.sucessoTitulo}</p>
        <p className="mt-2 leading-relaxed text-ivory/80">{f.sucesso}</p>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} noValidate className="space-y-4 rounded-2xl border border-accent/40 bg-primary/60 p-5 shadow-gold sm:p-7">
      <p className="text-center font-display text-lg font-extrabold text-white sm:text-xl">{f.titulo}</p>
      <Field label="Nome" id="nome" autoComplete="name" value={dados.nome} onChange={set('nome')} error={erros.nome} />
      <Field label="WhatsApp" id="whatsapp" type="tel" inputMode="numeric" autoComplete="tel-national" placeholder="(63) 99999-9999" value={dados.whatsapp} onChange={set('whatsapp')} error={erros.whatsapp} />
      <Field label="Imobiliária ou CRECI" id="imobiliaria" autoComplete="organization" value={dados.imobiliaria} onChange={set('imobiliaria')} error={erros.imobiliaria} />
      <Button type="submit" size="block" className="w-full" disabled={estado === 'enviando'}>
        {estado === 'enviando' ? f.enviando : f.cta}
      </Button>
      {estado === 'erro' && <p role="alert" className="text-center text-sm text-red-300">{f.erro}</p>}
      <p className="text-center text-xs text-ivory/50">{f.privacidade}</p>
    </form>
  );
}
