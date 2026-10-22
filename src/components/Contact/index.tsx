"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock3, MapPin } from "lucide-react";
import {
  CLOSED_HOURS,
  OPENING_HOURS,
  STORE_ADDRESS,
  WHATSAPP_URL,
} from "@/src/constants/contact";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  STORE_ADDRESS,
)}`;

// Variantes do Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
} as const;

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-36"
    >
      <div className="wrapper grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Lado Esquerdo - Chamada Editorial Staggered */}
        <motion.div
          className="lg:col-span-7"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-60px" }}
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="inline-block">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-baunilha/60 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-text-main/80 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse" />
              Visite a nossa loja
            </div>
          </motion.div>

          {/* Título Principal */}
          <motion.h2
            variants={fadeInUp}
            className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-text-title sm:text-5xl lg:text-6xl"
          >
            Tem sempre espaço para{" "}
            <span className="italic text-berry">mais um sabor.</span>
          </motion.h2>

          {/* Subtítulo */}
          <motion.p
            variants={fadeInUp}
            className="mt-5 max-w-xl font-jakarta text-base leading-relaxed text-text-main/75 sm:text-lg"
          >
            Encontre seu favorito e transforme uma pausa comum em um momento
            especial.
          </motion.p>

          {/* Botão de Ação */}
          <motion.div variants={fadeInUp} className="mt-8">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[#45342d] px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-baunilha shadow-sm transition-all hover:bg-[#342721] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <span>Venha nos visitar</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>

        {/* Lado Direito - Card de Informações com Scale + Fade In */}
        <motion.div
          className="rounded-3xl border border-border/60 bg-[#f4efe8]/90 p-7 shadow-sm sm:p-9 lg:col-span-5"
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <div className="space-y-6">
            {/* Bloco 1: Localização */}
            <div className="border-b border-border/60 pb-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-berry/80">
                Localização
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-start gap-2.5 text-sm font-medium leading-relaxed text-text-title transition-colors hover:text-berry"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-berry/70" />
                <span>{STORE_ADDRESS}</span>
              </a>
            </div>

            {/* Bloco 2: Horário de Atendimento */}
            <div className="border-b border-border/60 pb-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-pistachio">
                Horário de Atendimento
              </p>
              <div className="mt-2 flex items-start gap-2.5 text-sm text-text-title">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-pistachio" />
                <div>
                  <p className="font-semibold text-text-title">
                    {OPENING_HOURS}
                  </p>
                  <p className="mt-1 text-xs text-text-main/70">
                    {CLOSED_HOURS}
                  </p>
                </div>
              </div>
            </div>

            {/* Bloco 3: Redes Sociais */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-main/50">
                Redes Sociais
              </p>
              <div className="mt-3 flex flex-col items-start gap-2.5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm font-medium text-text-title transition-colors hover:text-berry"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 text-text-title/80"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>@bennasorvetes</span>
                </a>

                {WHATSAPP_URL && (
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm font-medium text-text-title transition-colors hover:text-berry"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 text-text-title/80"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
