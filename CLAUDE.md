# LP · Chá com a Rainha do Crédito (edição corretores de imóveis)

Página de captura do evento presencial de quinta-feira, 26 de novembro de 2026, em Palmas (TO). Gratuito. Irmã das LPs do Beabá, da Consulta e da Confirmação RMA: mesma stack, mesma identidade, mesmo deploy.

## Stack
- Vite 5 + React 18 + Tailwind 3. Ícones: lucide-react. Fontes via @fontsource, sem Google Fonts.
- `npm install` → `npm run dev` → `npm run build` (gera `dist/`).
- Deploy: Dockerfile (node → nginx), `.github/workflows/docker-image.yml` publica `ghcr.io/felip2ee/lp-evento-corretores` a cada push na `main`, `docker-stack.yml` sobe no Swarm (Portainer) atrás do Traefik, rede `RainhaNet`.

## .env (lido no build, não em runtime)
As variáveis `VITE_` entram no bundle na hora do `npm run build`. Mudou o `.env`: commit, push, esperar a imagem nova e atualizar o serviço. Não adianta definir variável de ambiente na stack do Portainer. Por isso o `.env` é versionado; nada ali é segredo.
- `VITE_SITE_URL`: domínio público, sem barra no fim. Monta a URL absoluta da capa de compartilhamento (`public/og-cha-corretores.jpg`, 1200x630) no `index.html`.
- `VITE_GTM_ID`: container do GTM. Vazio = GTM não carrega (`src/main.jsx`).
- `VITE_WEBHOOK_URL`: recebe o lead por POST JSON. Vazio = formulário mostra erro.
- `VITE_WHATSAPP_URL`: destino depois do envio. Vazio = só a confirmação na página.

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
