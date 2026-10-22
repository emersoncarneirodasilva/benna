import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Fonte Editorial / Títulos
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Fonte Moderna / Leitura & UI
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// Substituir pela URL final do domínio da Benna
const siteUrl = "https://benna.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Benna — Gelateria & Sorvete Artesanal",
    template: "%s | Benna — Sorvete Artesanal",
  },
  description:
    "Gelatos e sorvetes artesanais feitos com ingredientes selecionados, sabor autêntico e afeto em cada colherada. Descubra a experiência Benna.",
  keywords: [
    "Gelato artesanal",
    "Sorveteria artesanal",
    "Sorvete premium",
    "Benna sorvetes",
    "Pistache artesanal",
    "Gelateria",
    "Sobremesas artesanais",
    "Café e gelato",
  ],
  authors: [{ name: "RAM Stack", url: "https://ramstack.com.br" }],
  creator: "Benna Sorvete Artesanal",
  publisher: "Benna Sorvete Artesanal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // URL Canônica
  alternates: {
    canonical: siteUrl,
  },

  // Open Graph (WhatsApp, Facebook, LinkedIn)
  openGraph: {
    title: "Benna — Gelateria & Sorvete Artesanal",
    description:
      "Feito com tempo. Servido com afeto. Descubra sabores únicos preparados com ingredientes selecionados.",
    url: siteUrl,
    siteName: "Benna Sorvete Artesanal",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Crie uma imagem 1200x630px para o preview social
        width: 1200,
        height: 630,
        alt: "Benna — Sorvete Artesanal e Gelateria",
      },
    ],
  },

  // Twitter / X Cards
  twitter: {
    card: "summary_large_image",
    title: "Benna — Gelateria & Sorvete Artesanal",
    description:
      "Feito com tempo. Servido com afeto. Gelatos artesanais de altíssima qualidade.",
    images: ["/og-image.jpg"],
  },

  // Configuração de Robôs de Busca
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Ícones do Navegador (Favicon e Apple Touch)
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      className={`${playfair.variable} ${plusJakarta.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
