import React from 'react';
import { CalendarDays, MapPin, Phone } from 'lucide-react';
import { captura as c } from './content';
import { Container, Button, H2, XItem } from './components/lp/ui';
import Hero from './components/lp/Hero';
import LeadForm from './components/lp/LeadForm';
import Footer from './components/lp/Footer';

function Info({ icon: Icon, titulo, children }) {
  return (
    <div className="rounded-2xl border border-accent/25 bg-primary/40 p-6">
      <p className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-accent">
        <Icon size={18} aria-hidden="true" />
        {titulo}
      </p>
      <div className="mt-3 leading-relaxed text-ivory/85">{children}</div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-ivory">
      <div className="noise-overlay" aria-hidden="true" />

      <Hero eyebrow={c.eyebrow} titulo={c.titulo} tituloDestaque={c.tituloDestaque}>
        <p className="hero-in-2 mt-4 inline-block rounded-full bg-accent px-4 py-1.5 font-display text-xs font-extrabold uppercase tracking-wide text-dark sm:text-sm">
          {c.selo}
        </p>
        <p className="hero-in-2 mt-4 text-[0.95rem] leading-relaxed text-ivory/80 sm:text-lg">{c.subtitulo}</p>
        <p className="hero-in-2 mt-3 font-semibold text-white">
          {c.resumo} <span className="block text-accent">{c.gratuito}</span>
        </p>
        <div id="inscricao" className="hero-in-3 mx-auto mt-6 max-w-md scroll-mt-6 sm:mt-8">
          <LeadForm />
        </div>
      </Hero>

      {/* ============================ DORES ============================ */}
      <section className="pt-14 md:pt-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <H2 className="text-center">{c.doresTitulo}</H2>
            <ul className="mt-8 space-y-4">
              {c.dores.map((d) => <XItem key={d}>{d}</XItem>)}
            </ul>
            <p className="mt-8 rounded-2xl border border-accent/40 bg-primary/40 p-6 text-center font-display text-lg font-bold text-white sm:text-xl">
              {c.doresFecho} <span className="text-accent">{c.doresFechoDestaque}</span>
            </p>
          </div>
        </Container>
      </section>

      {/* ============================ TEMAS ============================ */}
      <section className="py-14 md:py-20">
        <Container>
          <H2 className="mx-auto max-w-2xl text-center">{c.temasTitulo}</H2>
          <ol className="mx-auto mt-8 max-w-2xl divide-y divide-accent/25 border-y border-accent/25">
            {c.temas.map((tema, i) => (
              <li key={tema} className="flex items-start gap-4 py-5">
                <span className="font-display text-2xl font-extrabold text-accent" aria-hidden="true">0{i + 1}</span>
                <span className="pt-1 text-lg leading-relaxed text-ivory/90">{tema}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ============================ EXPERT ============================ */}
      <section className="overflow-hidden pb-14 md:pb-20">
        <Container>
          <div className="mx-auto grid max-w-4xl items-center gap-6 md:grid-cols-2 md:gap-10">
            <div className="mx-auto w-full max-w-md">
              <img
                src="/assets/eliane-hero.webp"
                alt={c.expert.fotoAlt}
                width="2000"
                height="1227"
                className="photo-fade w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="font-display text-sm font-bold uppercase tracking-wide text-accent">{c.expert.chamada}</p>
              <H2 className="mt-2">{c.expert.nome}</H2>
              <p className="mt-1 font-display text-lg font-bold text-ivory/80">{c.expert.titulo}</p>
              <div className="mt-5 space-y-4 leading-relaxed text-ivory/85">
                {c.expert.bio.map((b) => <p key={b}>{b}</p>)}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ======================== DATA E LOCAL ======================== */}
      <section className="bg-dark/50 py-14 md:py-20">
        <Container>
          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3">
            <Info icon={CalendarDays} titulo="Quando">
              <p className="font-bold text-white">{c.quando.data}</p>
              {c.quando.agenda.map((a) => (
                <p key={a.hora}><strong className="text-accent">{a.hora}</strong> {a.item}</p>
              ))}
            </Info>
            <Info icon={MapPin} titulo="Localização">
              {c.local.linhas.map((l) => <p key={l}>{l}</p>)}
            </Info>
            <Info icon={Phone} titulo="Contato">
              <a href={c.contato.href} className="font-display text-xl font-bold text-white hover:text-accent">{c.contato.texto}</a>
            </Info>
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center font-display text-xl font-bold text-white sm:text-2xl">
            {c.fechamento} <span className="text-accent">{c.fechamentoDestaque}</span>
          </p>
          <p className="mt-8 text-center">
            <Button href="#inscricao" size="lg">{c.form.cta}</Button>
          </p>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
