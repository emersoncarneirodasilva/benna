"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Sparkles, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ALL_FLAVORS } from "@/src/constants/allFlavors";
import { FILTER_CATEGORIES } from "@/src/constants/filter";

interface FlavorsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FlavorsModal({ isOpen, onClose }: FlavorsModalProps) {
  const [activeCategory, setActiveCategory] = useState<string>("todos");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredFlavors =
    activeCategory === "todos"
      ? ALL_FLAVORS
      : ALL_FLAVORS.filter((f) => f.category === activeCategory);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop com blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-text-title/50 backdrop-blur-md"
        />

        {/* Janela Principal do Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-5xl my-auto bg-background-alt border border-border/60 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 max-h-[92vh]"
        >
          {/* Cabeçalho Fixo */}
          <div className="flex items-center justify-between px-6 sm:px-10 py-6 border-b border-border/40 bg-background shrink-0">
            <div className="space-y-1">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-berry font-jakarta">
                Cardápio Completo
              </span>
              <h3 className="font-display font-semibold text-2xl sm:text-3xl text-text-title tracking-tight">
                Nossos Sabores Artesanais
              </h3>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-background-alt border border-border/80 flex items-center justify-center text-text-title hover:bg-primary hover:text-baunilha hover:border-primary transition-all duration-300 cursor-pointer shrink-0"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Barra de Filtros */}
          <div className="px-6 sm:px-10 py-4 bg-background/50 border-b border-border/30 flex items-center gap-2.5 overflow-x-auto shrink-0 no-scrollbar">
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-primary text-baunilha shadow-sm"
                    : "bg-background-alt text-text-main/70 border border-border/50 hover:border-primary/40 hover:text-text-title"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Conteúdo com Rolagem Única */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-6 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredFlavors.map((flavor) => (
                <motion.div
                  key={flavor.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 rounded-2xl bg-background border border-border/50 hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 group"
                >
                  {/* Imagem em Miniatura do Sabor */}
                  <div className="relative w-full sm:w-24 h-36 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-baunilha/30 border border-border/40 shadow-sm">
                    <Image
                      src={flavor.image}
                      alt={flavor.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 640px) 100vw, 96px"
                    />
                  </div>

                  {/* Detalhes do Sabor */}
                  <div className="flex-1 space-y-2 w-full">
                    {/* Linha Superior: Categoria e Badges com quebra controlada */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[10px] font-semibold tracking-widest uppercase text-text-main/50 font-jakarta">
                        {flavor.categoryLabel}
                      </span>

                      <div className="flex items-center gap-1.5">
                        {flavor.isVegan && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-mint/10 text-mint text-[9px] font-semibold tracking-wider uppercase shrink-0">
                            <Leaf className="w-2.5 h-2.5" /> Vegano
                          </span>
                        )}
                        {flavor.badge && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-berry/10 text-berry text-[9px] font-semibold tracking-wider uppercase shrink-0">
                            <Sparkles className="w-2.5 h-2.5" /> {flavor.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    <h4 className="font-display font-semibold text-lg sm:text-xl text-text-title group-hover:text-primary transition-colors">
                      {flavor.name}
                    </h4>

                    <p className="font-jakarta text-xs sm:text-sm text-text-main/70 leading-relaxed">
                      {flavor.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Rodapé Interno do Modal */}
            <div className="pt-6 border-t border-border/30 text-center">
              <p className="font-jakarta text-xs text-text-main/60">
                * A disponibilidade dos sabores pode variar conforme a estação e
                a seleção diária de ingredientes frescos na nossa gelateria.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
