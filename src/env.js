// Produção: valores vêm de /env.js (variáveis de ambiente do container, definidas na stack).
// Dev: /env.js vem vazio e vale o .env local.
const r = window.__ENV || {};

export const GTM_ID = r.GTM_ID || import.meta.env.VITE_GTM_ID;
export const WEBHOOK_URL = r.WEBHOOK_URL || import.meta.env.VITE_WEBHOOK_URL;
export const WHATSAPP_URL = r.WHATSAPP_URL || import.meta.env.VITE_WHATSAPP_URL;
