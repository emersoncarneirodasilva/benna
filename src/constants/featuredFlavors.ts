import { StaticImageData } from "next/image";
import pistacheImg from "@/public/images/sorvete-pistach.webp";
import morangoImg from "@/public/images/sorvete-morango.webp";
import baunilhaImg from "@/public/images/sorvete-baunilha.webp";

interface FlavorItem {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  image: StaticImageData;
  bulletColor: string;
  textColor: string;
}

export const FEATURED_FLAVORS: FlavorItem[] = [
  {
    number: "01",
    category: "CLÁSSICO ITALIANO",
    title: "Pistache",
    description: "Cremoso, delicado e com o sabor marcante do pistache.",
    tags: ["Grãos tostados na loja", "Textura aveludada"],
    image: pistacheImg,
    bulletColor: "bg-mint",
    textColor: "text-mint font-semibold",
  },
  {
    number: "02",
    category: "FRUTAS DA ESTAÇÃO",
    title: "Morango",
    description: "Frutado, suave e cheio de frescor.",
    tags: ["Morangos frescos selecionados", "Base leve e aromática"],
    image: morangoImg,
    bulletColor: "bg-berry",
    textColor: "text-berry font-semibold",
  },
  {
    number: "03",
    category: "PURA FAVA DE MADAGASCAR",
    title: "Baunilha",
    description:
      "Um clássico aromático, suave e feito para apreciar sem pressa.",
    tags: ["Sementes reais de baunilha", "Doçura sutil e perfumada"],
    image: baunilhaImg,
    bulletColor: "bg-primary",
    textColor: "text-primary font-semibold",
  },
];
