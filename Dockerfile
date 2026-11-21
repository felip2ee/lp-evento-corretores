# Build
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Runtime
FROM nginx:1.27-alpine
# Template: o entrypoint do nginx roda envsubst e gera o conf.d/default.conf.
# Os ENV vazios garantem que as variáveis existam mesmo sem nada definido na stack.
ENV VITE_GTM_ID="" VITE_WEBHOOK_URL="" VITE_WHATSAPP_URL=""
COPY nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO /dev/null http://127.0.0.1:80/ || exit 1
CMD ["nginx", "-g", "daemon off;"]
