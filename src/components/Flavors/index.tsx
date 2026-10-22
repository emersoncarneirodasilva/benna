"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FlavorsModal from "./FlavorsModal";
import WaveDivider from "../WaveDivider";
import { FEATURED_FLAVORS } from "@/src/constants/featuredFlavors";

export default function Flavors() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="sabores"
        className="pt-16 pb-32 lg:pt-28 lg:pb-40 bg-background-alt relative"
      >
        <div className="wrapper">
          {/* CABEÇALHO DA SEÇÃO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl space-y-4 mb-16 lg:mb-24"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/5 border border-primary/10 text-[11px] font-semibold tracking-widest uppercase text-text-main">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/60 animate-pulse" />
              <span>Seleção Benna</span>
            </div>

            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-text-title tracking-tight leading-[1.15]">
              Cada sabor tem seu{" "}
              <span className="italic text-berry">jeito de encantar.</span>
            </h2>

            <p className="font-jakarta text-sm sm:text-base text-text-main/80 leading-relaxed">
              Receitas artesanais, texturas irresistíveis e pequenos prazeres
              que merecem ser descobertos.
            </p>
          </motion.div>

          {/* LISTA EM ZIGUEZAGUE: IMAGENS NO WRAPPER & TEXTO APROXIMADO */}
          <div className="space-y-20 lg:space-y-32">
            {FEATURED_FLAVORS.map((item, index) => {
              const isEven = index % 2 === 1;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* IMAGEM DO SABOR (Fixa na borda do Wrapper e com tamanho original 540px) */}
                  <div
                    className={`lg:col-span-6 flex ${
                      isEven
                        ? "lg:order-2 lg:justify-end"
                        : "lg:order-1 lg:justify-start"
                    }`}
                  >
                    <div className="relative w-full max-w-135 aspect-square rounded-3xl overflow-hidden shadow-xl bg-baunilha/30 border border-border/50">
                      <Image
                        src={item.image}
                        alt={`Sabor ${item.title}`}
                        fill
                        priority
                        className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 1024px) 100vw, 540px"
                      />
                    </div>
                  </div>

                  {/* CONTEÚDO E TEXTOS (Aproximados em direção à Imagem) */}
                  <div
                    className={`lg:col-span-6 flex ${
                      isEven
                        ? "lg:order-1 lg:justify-end"
                        : "lg:order-2 lg:justify-start"
                    }`}
                  >
                    <div className="space-y-5 max-w-md w-full">
                      {/* Categoria + Número Colorido */}
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-display italic text-lg ${item.textColor}`}
                        >
                          {item.number}
                        </span>
                        <span className="w-10 h-px bg-border/80" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-text-main/60 font-jakarta">
                          {item.category}
                        </span>
                      </div>

                      {/* Título do Sabor */}
                      <h3 className="font-display font-semibold text-4xl sm:text-5xl text-text-title tracking-tight">
                        {item.title}
                      </h3>

                      {/* Descrição */}
                      <p className="font-jakarta text-base text-text-main/80 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Tags / Bullets */}
                      <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-text-main/70 font-jakarta">
                        {item.tags.map((tag, tagIdx) => (
                          <div key={tagIdx} className="flex items-center gap-2">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${item.bulletColor}`}
                            />
                            <span>{tag}</span>
                            {tagIdx < item.tags.length - 1 && (
                              <span className="ml-4 text-text-main/30">•</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* BOTÃO E RODAPÉ */}
          <div className="mt-24 lg:mt-32 text-center space-y-3">
            <div className="w-12 h-px bg-border mx-auto mb-8" />

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-transparent border border-text-title/20 text-text-title text-xs uppercase tracking-widest font-semibold hover:bg-primary hover:text-baunilha hover:border-primary transition-all duration-300 shadow-sm group cursor-pointer"
            >
              <span>Ver todos os sabores</span>
              <div className="w-6 h-6 rounded-full bg-primary/10 group-hover:bg-baunilha/20 flex items-center justify-center transition-colors">
                <ArrowRight className="w-3.5 h-3.5 text-text-title group-hover:text-baunilha group-hover:translate-x-0.5 transition-all" />
              </div>
            </button>

            <p className="text-[11px] uppercase tracking-widest text-text-main/50 font-semibold font-jakarta pt-1">
              Explore nosso cardápio completo de sabores artesanais
            </p>
          </div>
        </div>

        {/* TRANSIÇÃO EM ONDAS FLUIDAS COM VOLUME, MOVIMENTO E CURVAS MACIAS */}
        <WaveDivider
          backWaveColor="fill-berry/15"
          frontWaveColor="fill-background"
        />
      </section>

      {/* MODAL DOS SABORES */}
      <FlavorsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
