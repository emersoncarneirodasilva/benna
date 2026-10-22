"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import gelatoImage from "@/public/images/essence-image.webp";

// Variantes de animação do Framer Motion
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export default function Essence() {
  return (
    <section id="essencia" className="bg-background py-16 lg:py-28">
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24 items-start">
          {/* Lado da Imagem com Animação de Entrada */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-16/10 w-full overflow-hidden rounded-3xl border border-border/50 bg-baunilha/30 shadow-xl">
              <Image
                src={gelatoImage}
                alt="Gelato artesanal preparado à mão"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-background-alt/90 px-4 py-2 font-display text-xs italic text-text-title shadow-sm backdrop-blur-sm sm:bottom-6 sm:left-6">
                Mãos artesanais em movimento contínuo
              </span>
            </div>
          </motion.div>

          {/* Lado do Conteúdo Staggered */}
          <div className="lg:col-span-5">
            <motion.div
              className="max-w-lg space-y-5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-80px" }}
            >
              {/* Badge Estilo Hero */}
              <motion.div variants={fadeInUp} className="inline-block">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-primary/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-text-main/80 shadow-xs backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-pistachio animate-pulse" />
                  <span>Mais do que um sorvete</span>
                </span>
              </motion.div>

              {/* Título Principal */}
              <motion.h2
                variants={fadeInUp}
                className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-text-title sm:text-5xl"
              >
                Feito com tempo.
                <br />
                <span className="italic text-berry">Servido com afeto.</span>
              </motion.h2>

              {/* Parágrafo de Apresentação */}
              <motion.p
                variants={fadeInUp}
                className="font-jakarta text-base leading-relaxed text-text-main/80"
              >
                Na Benna, cada detalhe importa. A escolha dos ingredientes, o
                cuidado com as receitas e o prazer de compartilhar algo gostoso
                fazem parte da nossa maneira de criar sorvetes.
              </motion.p>

              {/* Citação / Citação Editorial */}
              <motion.blockquote
                variants={fadeInUp}
                className="border-l-2 border-berry pl-5 font-display text-lg italic leading-relaxed text-text-title/80"
              >
                “Porque os melhores momentos nem sempre precisam de uma ocasião
                especial.”
              </motion.blockquote>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
