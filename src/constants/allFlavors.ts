import { StaticImageData } from "next/image";

import pistacheImg from "@/public/images/sorvete-pistach-p.webp";
import baunilhaImg from "@/public/images/sorvete-baunilha-p.webp";
import morangoImg from "@/public/images/sorvete-morango-p.webp";
import cioccolatoImg from "@/public/images/sorvete-cioccolato.webp";
import nocciolaImg from "@/public/images/sorvete-nocciola.webp";
import caramelloImg from "@/public/images/sorvete-caramello.webp";
import mangaImg from "@/public/images/sorvete-manga.webp";
import limoneImg from "@/public/images/sorvete-limao.webp";
import frutasVermelhasImg from "@/public/images/sorvete-frutas-vermelhas.webp";
import ricotaImg from "@/public/images/sorvete-ricota-figo.webp";
import cafeImg from "@/public/images/sorvete-cafe.webp";
import mascarponeLaranjaImg from "@/public/images/sorvete-mascarpone-laranja.webp";
import lavandaImg from "@/public/images/sorvete-lavanda.webp";
import biancoImg from "@/public/images/sorvete-bianco.webp";
import stracciatellaImg from "@/public/images/sorvete-stracciatella.webp";

interface Flavor {
  id: string;
  name: string;
  category: "clássicos" | "frutas" | "autorais" | "chocolates";
  categoryLabel: string;
  description: string;
  badge?: string;
  isVegan?: boolean;
  image: StaticImageData;
}

export const ALL_FLAVORS: Flavor[] = [
  // Clássicos Italianos
  {
    id: "pistacchio",
    name: "Pistacchio Puro",
    category: "clássicos",
    categoryLabel: "Clássico Italiano",
    description:
      "Pasta pura de pistaches mediterrâneos tostados artesanalmente. Intenso e aveludado.",
    badge: "Mais Pedido",
    image: pistacheImg,
  },
  {
    id: "baunilha",
    name: "Baunilha de Madagascar",
    category: "clássicos",
    categoryLabel: "Clássico Italiano",
    description:
      "Infusão lenta de favas de baunilha reais. Aromático, suave e repleto de sementes.",
    image: baunilhaImg,
  },
  {
    id: "cioccolato",
    name: "Cioccolato Fondente 70%",
    category: "clássicos",
    categoryLabel: "Clássico Italiano",
    description:
      "Blend exclusivo de cacau 70% origem. Profundo, encorpado e levemente amargo.",
    image: cioccolatoImg,
  },
  {
    id: "nocciola",
    name: "Nocciola Piemonte",
    category: "clássicos",
    categoryLabel: "Clássico Italiano",
    description:
      "Avelãs tostadas do Piemonte transformadas em um creme denso e inconfundível.",
    image: nocciolaImg,
  },
  {
    id: "caramello",
    name: "Caramello Salato",
    category: "clássicos",
    categoryLabel: "Clássico Italiano",
    description: "Caramelo artesanal com toque preciso de flor de sal marinha.",
    image: caramelloImg,
  },

  // Frutas da Estação (Sorbets Veganos)
  {
    id: "morango",
    name: "Morango Silvestre",
    category: "frutas",
    categoryLabel: "Frutas & Sorbets",
    description:
      "Sorbet leve e refrescante feito exclusivamente com morangos frescos selecionados.",
    isVegan: true,
    image: morangoImg,
  },
  {
    id: "manga",
    name: "Manga Taiti com Manjericão",
    category: "frutas",
    categoryLabel: "Frutas & Sorbets",
    description:
      "Adoçado naturalmente pela fruta com um subtil e elegante toque de infusão de manjericão.",
    isVegan: true,
    badge: "Sazonal",
    image: mangaImg,
  },
  {
    id: "limone",
    name: "Limone Siciliano",
    category: "frutas",
    categoryLabel: "Frutas & Sorbets",
    description:
      "Acidez equilibrada e refrescância pura com raspas frescas de limão siciliano.",
    isVegan: true,
    image: limoneImg,
  },
  {
    id: "frutas-vermelhas",
    name: "Frutas Vermelhas",
    category: "frutas",
    categoryLabel: "Frutas & Sorbets",
    description:
      "Mix vibrante de framboesas, amoras e mirtilos frescos em textura leve.",
    isVegan: true,
    image: frutasVermelhasImg,
  },

  // Linha Autoral Benna
  {
    id: "ricota-figo",
    name: "Ricota Artesanal com Figos",
    category: "autorais",
    categoryLabel: "Criações Benna",
    description:
      "Base cremosa de ricota fresca da casa finalizada com pedaços de figos caramelizados.",
    badge: "Exclusivo",
    image: ricotaImg,
  },
  {
    id: "cafe-cardamomo",
    name: "Café Especial & Cardamomo",
    category: "autorais",
    categoryLabel: "Criações Benna",
    description:
      "Grãos especiais da estação extraídos a frio com notas aromáticas de cardamomo.",
    image: cafeImg,
  },
  {
    id: "mascarpone-laranja",
    name: "Mascarpone com Zest de Laranja",
    category: "autorais",
    categoryLabel: "Criações Benna",
    description:
      "Queijo mascarpone italiano batido com raspas finas de laranja Bahia e especiarias.",
    image: mascarponeLaranjaImg,
  },
  {
    id: "mel-lavanda",
    name: "Flor de Mel & Lavanda",
    category: "autorais",
    categoryLabel: "Criações Benna",
    description:
      "Delicada infusão de flores de lavanda silvestre combinada com mel silvestre puro.",
    image: lavandaImg,
  },

  // Chocolates Especiais
  {
    id: "bianco-pistache",
    name: "Chocolate Branco com Pistache",
    category: "chocolates",
    categoryLabel: "Especiais de Cacau",
    description:
      "Chocolate branco artesanal cremoso enriquecido com pasta e pedaços de pistache.",
    image: biancoImg,
  },
  {
    id: "stracciatella",
    name: "Stracciatella di Fave di Cacao",
    category: "chocolates",
    categoryLabel: "Especiais de Cacau",
    description:
      "Fior di latte clássico com fios crocantes de chocolate amargo derretido na hora.",
    image: stracciatellaImg,
  },
];
