import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import iceCreamImg from "@/public/images/sorvete.webp";
import FloatingIngredients from "./FloatingIngredients";
import WaveDivider from "../WaveDivider";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-8 pb-20 lg:pt-16 lg:pb-32 overflow-hidden"
    >
      {/* 1. Círculo Superior Esquerdo (Pistache/Mint suave) */}
      <div className="absolute top-20 left-0 -translate-x-1/3 w-100 h-100 bg-mint/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* 2. Círculo Central (Berry/Rosa suave - 15%) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-137.5 h-137.5 bg-berry/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="wrapper relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LADO ESQUERDO: Textos e CTAs (6 colunas) */}
          <div className="lg:col-span-6 space-y-8 z-10">
            {/* Badge de Destaque */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-xs font-semibold tracking-wider uppercase text-text-main">
              <span className="w-1.5 h-1.5 rounded-full bg-berry animate-pulse" />
              <span>Feito com cuidado, servido com carinho</span>
            </div>

            {/* Título Principal Editorial */}
            <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl max-w-xl text-text-title tracking-tight leading-[1.1]">
              Um carinho em forma de{" "}
              <span className="italic text-berry">sorvete.</span>
            </h1>

            {/* Subtítulo */}
            <p className="font-jakarta text-base sm:text-lg text-text-main/80 max-w-xl leading-relaxed">
              Sabores únicos elaborados com dedicação, ingredientes naturais e
              muito afeto, proporcionando momentos especiais sem pressa.
            </p>

            {/* Grupo de Botões / CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="#sabores"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-primary text-baunilha text-xs uppercase tracking-widest font-semibold hover:bg-primary-hover transition-colors shadow-sm"
              >
                Descubra nossos sabores
              </Link>

              <Link
                href="#essencia"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-transparent text-text-title text-xs uppercase tracking-widest font-semibold hover:text-primary transition-colors group"
              >
                <span>Conheça a Benna</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-berry" />
              </Link>
            </div>

            {/* Rodapé da Hero (Manifesto curto + Selo) */}
            <div className="pt-8 border-t border-border/60 flex flex-wrap items-center gap-6 sm:gap-12 text-xs font-jakarta">
              <p className="font-display italic text-berry text-base">
                pequenos momentos, grandes sabores
              </p>
              <div className="flex items-center gap-2 text-text-main/60 uppercase tracking-widest font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-mint" />
                <span>100% Artesanal</span>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: Sorvete GIGANTE e Flutuante (6 colunas) */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-125 lg:min-h-150">
            <div className="relative w-full h-full flex justify-center items-center">
              {/* Iluminação de Fundo Ampliada */}
              <div className="absolute w-100 h-100 sm:w-125 sm:h-125 bg-berry/10 rounded-full blur-3xl -z-10 pointer-events-none" />

              {/* Sorvete com Zoom (scale) */}
              <div className="relative w-72 sm:w-96 lg:w-112.5 h-112.5 sm:h-137.5 lg:h-162.5 animate-float drop-shadow-2xl z-10">
                <Image
                  src={iceCreamImg}
                  alt="Gelato artesanal Benna"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain scale-[1.75] lg:scale-[2.0]"
                />
              </div>

              {/* Sombra no Chão */}
              <div className="absolute bottom-2 w-48 sm:w-64 h-6 bg-text-title/10 rounded-[100%] blur-xl animate-shadow -z-10" />

              <FloatingIngredients />

              {/* Etiquetas Flutuantes */}
              <div className="absolute top-12 left-4 sm:left-12 bg-background-alt/85 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-border/60 flex items-center gap-2 z-20">
                <span className="w-2.5 h-2.5 rounded-full bg-berry" />
                <span className="text-xs sm:text-sm font-semibold text-text-title tracking-wide font-jakarta">
                  Morango Fresco
                </span>
              </div>

              <div className="absolute top-1/2 right-2 sm:right-8 -translate-y-1/2 bg-background-alt/85 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-border/60 flex items-center gap-2 z-20">
                <span className="w-2.5 h-2.5 rounded-full bg-pistachio" />
                <span className="text-xs sm:text-sm font-semibold text-text-title tracking-wide font-jakarta">
                  Pistache Puro
                </span>
              </div>

              <div className="absolute bottom-12 left-8 sm:left-20 bg-background-alt/85 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-border/60 flex items-center gap-2 z-20">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span className="text-xs sm:text-sm font-semibold text-text-title tracking-wide font-jakarta">
                  Waffle Artesanal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TRANSIÇÃO EM ONDAS FLUIDAS COM VOLUME, MOVIMENTO E CURVAS MACIAS */}
      <WaveDivider
        backWaveColor="fill-berry/15"
        frontWaveColor="fill-background-alt"
      />
    </section>
  );
}
