# 🍨 Benna — Gelateria & Sorvete Artesanal

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-16.4.2-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.3.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-14.4.0-E10098?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Deploy-Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Cloudflare Pages" />
</div>

<br>

> **Benna** é uma landing page conceitual de alto padrão desenvolvida pela **RAM Stack** para uma gelateria artesanal fictícia. O projeto combina design editorial requintado, microinterações fluidas e engenharia de software focada em altíssima performance com SSG (Static Site Generation).

---

## 🌐 Acesse o Projeto
- **Demonstração Online:** [https://benna.pages.dev](https://benna.pages.dev)
- **Desenvolvido por:** [RAM Stack — Emerson Carneiro da Silva](https://ramstack.com.br)

---

## 📋 Sobre o Projeto

O projeto **Benna** foi concebido como um estudo de caso para demonstrar a criação de interfaces web imersivas para negócios de alta gastronomia e gastronomia artesanal. 

Diferente de modelos genéricos, o site adota uma estética **editorial contemporânea**, utilizando paleta de cores acolhedora (tons de baunilha, marrom café, pistache e berry), tipografia serifada de alto contraste, elementos gráficos com profundidade em camadas (glassmorphism 2.5D) e animações suaves acionadas por rolagem.

---

## 🎯 Objetivos Estratégicos & Design Highlights

- **Estética Editorial de Luxo:** Tipografia fluida com limitação dinâmica de largura (`max-w-*`), mantendo uma leitura natural sem quebras artificiais de linha.
- **Animações e Microinterações:** Animações orquestradas via **Framer Motion** com entradas em *staggering*, suporte a estados de *hover* dinâmicos e cartões com sensação de profundidade espacial.
- **Arquitetura 100% Estática (SSG):** Configurado com `output: "export"` no Next.js para tempo de carregamento ultrarrápido na borda (Edge CDN) do **Cloudflare Pages**.
- **SEO & Social Sharing:** Metadados enriquecidos com Open Graph, Twitter Cards, suporte a Schema.org (`IceCreamShop` / `LocalBusiness`) e favicon vetorial personalizado.
- **Responsividade Adaptativa:** Layout móvel otimizado com proporções de aspecto adequadas (`aspect-4/3` e `aspect-video`) e elementos integrados sem poluição visual.

---

## 📄 Estrutura e Páginas da Aplicação

A aplicação possui a landing page principal dividida em seções modulares e páginas institucionais para conformidade legal:

1. **Hero (`#inicio`)**: Apresentação de impacto com badge de destaque e chamada para ação principal.
2. **Sabores (`#sabores`)**: Vitrine minimalista interativa com filtros para exibição dos gelatos artesanais e ingredientes selecionados.
3. **Essência (`#essencia`)**: Narrativa de marca focada em afeto, ingredientes naturais e cuidado no preparo.
4. **Experiência (`#experiencia`)**: Card ambiental adaptativo com imagem em destaque e atmosfera do espaço físico.
5. **Contato e Localização (`#contato`)**: Central de informações com endereço, horários de funcionamento, integração com Google Maps, Instagram e WhatsApp.
6. **Privacidade (`/privacidade`)**: Diretrizes e políticas de privacidade da marca.
7. **Termos (`/termos`)**: Termos de uso e regras de navegação da plataforma.

---

## ✨ Recursos Técnicos Principais

- **Tailwind CSS v4 + Turbopack:** Configuração de tema avançada com variáveis CSS customizadas e compilação em tempo real via `@tailwindcss/turbopack`.
- **Iconografia Lucide:** Uso de vetores nítidos e padronizados para uma interface limpa.
- **Otimização de Imagens para SSG:** Uso do componente `next/image` configurado para exportação estática pura (`unoptimized: true`).
- **Acessibilidade & Semântica:** HTML5 estruturado semânticamente com atributos ARIA e tags direcionadas para leitores de tela.

---

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 16.4+ (App Router, SSG Output)
- **Biblioteca UI:** React 19.3
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4 (`@tailwindcss/turbopack`)
- **Animações:** Framer Motion 14.4+
- **Ícones:** Lucide React
- **Hospedagem / CDN:** Cloudflare Pages

---

## 📁 Estrutura do Projeto

```text
benna/
├── public/
│   └── images/                       # Ativos de imagens otimizadas do projeto
├── src/
│   ├── app/
│   │   ├── privacidade/              # Página de Política de Privacidade (/privacidade)
│   │   ├── termos/                   # Página de Termos de Uso (/termos)
│   │   ├── favicon.ico               # Ícone do navegador
│   │   ├── globals.css               # Estilos globais e mapeamento de tema Tailwind v4
│   │   ├── layout.tsx                # Layout raiz, SEO avançado e dados estruturados
│   │   └── page.tsx                  # Página principal integrando as seções
│   ├── components/
│   │   ├── Contact/                  # Seção de Contato e Informações
│   │   ├── Essence/                  # Seção da Essência da marca
│   │   ├── Experience/               # Seção da Experiência no ambiente
│   │   ├── Flavors/                  # Seção e vitrine de Sabores
│   │   ├── Footer/                   # Rodapé da aplicação
│   │   ├── Header/                   # Cabeçalho e navegação fixos
│   │   ├── Hero/                     # Seção principal da página
│   │   ├── CurrentYear.tsx           # Componente utilitário para ano dinâmico
│   │   └── WaveDivider.tsx           # Divisor gráfico ondulado estilizado
│   └── constants/
│       ├── allFlavors.ts             # Lista completa de sabores cadastrados
│       ├── contact.ts                # Constantes de endereço, horários e links
│       ├── featuredFlavors.ts        # Destaques de sabores para a vitrine
│       ├── filter.ts                 # Categorias e filtros da seção de sabores
│       └── navLinks.ts               # Mapeamento dos links de navegação
├── next.config.ts                    # Configuração do Next.js (SSG + Turbopack rules)
├── package.json                      # Dependências e scripts do projeto
├── tsconfig.json                     # Configuração do TypeScript
└── README.md                         # Documentação oficial

```

---

## 📦 Dependências do Projeto (`package.json`)

```json
{
  "name": "benna",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "framer-motion": "^14.4.0",
    "lucide-react": "^1.59.0",
    "next": "16.4.2",
    "react": "19.3.0",
    "react-dom": "19.3.0"
  },
  "devDependencies": {
    "@tailwindcss/turbopack": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.4.2",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

```

---

## 🚀 Como Executar o Projeto Localmente

Certifique-se de ter o **Node.js** (versão 20+) instalado em sua máquina.

1. **Clone o repositório:**

```bash
git clone https://github.com/emersoncarneirodasilva/benna.git
cd benna

```

2. **Instale as dependências:**

```bash
npm install

```

3. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev

```

4. **Acesse no navegador:**
Abra [http://localhost:3000](http://localhost:3000) para visualizar a landing page em execução.

---

## 📚 Scripts Disponíveis

| Script | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com suporte ao Turbopack. |
| `npm run build` | Compila a aplicação gerando o export estático na pasta `out`. |
| `npm run start` | Inicia o servidor local de produção. |
| `npm run lint` | Executa a verificação do ESLint para padronização de código. |

---

## 👨‍💻 Autor & Créditos

Projeto desenvolvido como parte do portfólio de soluções de alta performance da **RAM Stack**, sob liderança de **Emerson Carneiro da Silva**.

* **Website RAM Stack:** [https://ramstack.com.br](https://ramstack.com.br)
* **Localização:** Natal, Rio Grande do Norte — Brasil
* **Contato:** [contato@ramstack.com.br](https://www.google.com/search?q=mailto%3Acontato%40ramstack.com.br)
