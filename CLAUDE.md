# LP · Chá com a Rainha do Crédito (edição corretores de imóveis)

Página de captura do evento presencial de quinta-feira, 26 de novembro de 2026, em Palmas (TO). Gratuito. Irmã das LPs do Beabá, da Consulta e da Confirmação RMA: mesma stack, mesma identidade, mesmo deploy.

## Stack
- Vite 5 + React 18 + Tailwind 3. Ícones: lucide-react. Fontes via @fontsource, sem Google Fonts.
- `npm install` → `npm run dev` → `npm run build` (gera `dist/`).
- Deploy: Dockerfile (node → nginx), `.github/workflows/docker-image.yml` publica `ghcr.io/felip2ee/lp-evento-corretores` a cada push na `main`, `docker-stack.yml` sobe no Swarm (Portainer) atrás do Traefik, rede `RainhaNet`.

## Configuração
- **Runtime (stack no Portainer):** `VITE_GTM_ID`, `VITE_WEBHOOK_URL`, `VITE_WHATSAPP_URL`. São variáveis de ambiente do container. O `nginx.conf` é um template: na subida o nginx gera `/env.js` com esses valores (`window.__ENV`), lido em `src/env.js`. Mudou o valor: atualizar a stack, sem build novo. O `docker-stack.yml` precisa do bloco `environment:` repassando as três.
  - `VITE_GTM_ID` vazio = GTM não carrega. `VITE_WEBHOOK_URL` vazio = formulário mostra erro. `VITE_WHATSAPP_URL` vazio = só a confirmação na página.
- **Build (`.env`, versionado):** `VITE_SITE_URL`, domínio público sem barra no fim. Monta a URL absoluta da capa de compartilhamento (`public/og-cha-corretores.jpg`, 1200x630) no `index.html`. Mudou: commit, push e imagem nova.
- **Dev:** `public/env.js` vem vazio e valem os valores do `.env` local.

## Páginas
- `/` corretores de imóveis. `/corretores-de-seguro` corretores de seguros (mesmo evento, mesma data).
- `src/content.js` escolhe a copy pelo endereço: `seguros` é a de `imoveis` com o que muda por cima.
- Cada página tem o seu `index.html` (`corretores-de-seguro/index.html`) só por causa do título e das tags de compartilhamento; capa própria em `public/og-cha-corretores-seguro.jpg`. O `nginx.conf` entrega o slug sem barra no fim.
- O webhook recebe `evento` diferente por página (`cha-com-a-rainha-corretores-seguro-2026-11-26`); o campo `imobiliaria` leva a corretora ou SUSEP. O evento do dataLayer é o mesmo.

## Onde mexer
- **Toda a copy está em `src/content.js`.**
- Layout em `src/App.jsx`. Formulário em `src/components/lp/LeadForm.jsx` (evento `lead_evento_corretores` no dataLayer).
- Componentes compartilhados em `src/components/lp/` (`ui.jsx`, `Hero.jsx`, `Footer.jsx`).

## Identidade visual (tailwind.config.js)
- primary `#063A29` · secondary `#105B41` · accent (dourado) `#DCA452` · background `#04281C` · dark `#02150E` · ivory `#F3EEE4`
- Display: Montserrat · Corpo: Open Sans

## Regras de copy
- **Sem travessão** em lugar nenhum.
- **Nunca prometer aprovação de crédito.** Quem aprova é o banco.
