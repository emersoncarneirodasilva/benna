"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import Image, { StaticImageData } from "next/image";

import chocolateCurl01 from "@/public/images/lasca-chocolate-01.webp";
import strawberryImg from "@/public/images/morango.webp";
import pistachioImg from "@/public/images/pistache.webp";

interface Ingredient {
  src: StaticImageData;
  alt: string;
  top: string;
  left: string;
  size: number;
  speed: number;
  blur: string;
  rotate: string;
  zIndex: string;
  tiltMultiplier: number;
}

export default function FloatingIngredients() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX: MotionValue<number> = useMotionValue(0);
  const mouseY: MotionValue<number> = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 22 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 22 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth - 0.5);
      mouseY.set(e.clientY / innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Posições perfeitamente calibradas (com margem segura à direita para o chocolate)
  const ingredients: Ingredient[] = [
    {
      src: chocolateCurl01,
      alt: "Lasca de chocolate artesanal",
      top: "18%",
      left: "82%",
      size: 85,
      speed: 25,
      blur: "blur-[0.5px]",
      rotate: "rotate-12",
      zIndex: "z-20",
      tiltMultiplier: 0.8,
    },
    {
      src: strawberryImg,
      alt: "Morango fresco",
      top: "45%",
      left: "5%",
      size: 90,
      speed: 35,
      blur: "",
      rotate: "-rotate-12",
      zIndex: "z-30",
      tiltMultiplier: 1.2,
    },
    {
      src: pistachioImg,
      alt: "Pistache puro",
      top: "78%",
      left: "72%",
      size: 75,
      speed: 18,
      blur: "blur-[1px]",
      rotate: "rotate-25",
      zIndex: "z-10",
      tiltMultiplier: 0.6,
    },
  ];

  return (
    // 'hidden md:block': Visível de tablets médios em diante, oculto apenas no telemóvel
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block"
      style={{ perspective: 1200 }}
    >
      {ingredients.map((item, index) => {
        const x = useTransform(
          smoothMouseX,
          [-0.5, 0.5],
          [-item.speed, item.speed],
        );
        const y = useTransform(
          smoothMouseY,
          [-0.5, 0.5],
          [-item.speed, item.speed],
        );

        const rotateX = useTransform(
          smoothMouseY,
          [-0.5, 0.5],
          [10 * item.tiltMultiplier, -10 * item.tiltMultiplier],
        );
        const rotateY = useTransform(
          smoothMouseX,
          [-0.5, 0.5],
          [-10 * item.tiltMultiplier, 10 * item.tiltMultiplier],
        );

        return (
          <motion.div
            key={index}
            style={{
              top: item.top,
              left: item.left,
              x,
              y,
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className={`absolute pointer-events-none ${item.zIndex}`}
          >
            <motion.div
              animate={{
                y: [0, -10 + index * 3, 0],
                rotateZ: [0, 4 + index * 2, -4 - index * 2, 0],
              }}
              transition={{
                duration: 4.5 + index * 0.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`relative ${item.blur}`}
              style={{ width: item.size, height: item.size }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.size}
                height={item.size}
                className={`w-full h-full object-contain drop-shadow-2xl ${item.rotate}`}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
