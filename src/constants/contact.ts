export const STORE_ADDRESS =
  "Av. Hermes da Fonseca, 9999 — Tirol, Natal - RN";

export const OPENING_HOURS = "Terça a Domingo: 12h às 21h";

export const CLOSED_HOURS =
  "Segundas-feiras: Fechado para produção artesanal";

export const PHONE_NUMBER =
  process.env.NEXT_PUBLIC_PHONE_NUMBER || "(84) 99999-9999";

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+5584999999999";

const whatsappMessage =
  "Olá! Gostaria de saber mais sobre os sabores do dia e horários da Benna Sorveteria.";

export const WHATSAPP_URL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;
