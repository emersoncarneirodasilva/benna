"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import experienceImage from "@/public/images/experience-image.webp";

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="bg-background-alt py-16 sm:py-24 lg:py-32 -scroll-mt-16"
    >
      <div className="wrapper">
        {/* Cabeçalho da Seção */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-baunilha/60 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-text-main/80 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-berry animate-pulse" />
            A Experiência Benna
          </span>

          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-tight text-text-title sm:text-5xl lg:max-w-3xl lg:text-[3.75rem]">
            Seu momento{" "}
            <span className="italic text-berry">merece uma pausa.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-jakarta text-sm leading-relaxed text-text-main/80 sm:text-lg">
            Passe para descobrir seu próximo sabor favorito, compartilhar uma
            casquinha ou simplesmente aproveitar um instante só seu.
          </p>
        </motion.div>

        {/* Container Principal Adaptativo */}
        <motion.div
          className="relative mx-auto mt-10 sm:mt-12 max-w-6xl"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Card Wrapper em Layout Responsivo */}
          <div className="relative flex flex-col md:block overflow-hidden rounded-3xl border border-border/60 bg-background/50 shadow-xl md:shadow-2xl">
            {/* Area da Foto: aspecto 4/3 no mobile, video no desktop */}
            <div className="relative aspect-4/3 md:aspect-video w-full overflow-hidden">
              <Image
                src={experienceImage}
                alt="Ambiente acolhedor e iluminado da Gelateria Benna"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1280px) 100vw, 1152px"
                priority
              />

              {/* Overlay Gradiente (Visível principalmente em Desktop) */}
              <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent hidden md:block" />
            </div>

            {/* Card de Texto: Bloco Integrado no Mobile / Flutuante Absoluto no Desktop */}
            <motion.div
              className="relative p-6 bg-background-alt border-t border-border/40 md:border-t-0 md:absolute md:bottom-6 md:right-6 md:max-w-sm md:rounded-2xl md:border md:border-white/40 md:bg-background-alt/85 md:p-6 md:shadow-lg md:backdrop-blur-md"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-display text-xl sm:text-2xl leading-tight text-text-title">
                Um refúgio no meio do dia
              </h3>

              <p className="mt-2 font-jakarta text-xs sm:text-sm leading-relaxed text-text-main/80">
                Luz natural suave, aromas de waffle assado na hora e bancos
                confortáveis para conversar sem olhar o relógio.
              </p>

              {/* Link Editorial com Ícone do Lucide + Animação de Hover */}
              <Link
                href="#contato"
                className="group mt-4 inline-flex items-center gap-1.5 border-b border-text-title/30 pb-0.5 text-[11px] font-semibold uppercase tracking-widest text-text-title transition-colors hover:border-berry hover:text-berry"
              >
                <span>Venha conhecer a Benna</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
