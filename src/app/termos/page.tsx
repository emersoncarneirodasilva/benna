import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-background text-text-main py-16 lg:py-24">
      <div className="wrapper max-w-4xl mx-auto space-y-12">
        {/* Voltar para Home */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-berry hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Voltar para o início</span>
          </Link>
        </div>

        {/* Cabeçalho */}
        <header className="space-y-4 border-b border-border/60 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint/10 text-mint text-xs font-semibold tracking-wider uppercase">
            <FileText className="w-4 h-4" />
            <span>Condições Gerais</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text-title tracking-tight">
            Termos de Uso
          </h1>

          <p className="text-sm sm:text-base text-text-main/80 leading-relaxed font-jakarta">
            Estes termos regulam a navegação e utilização do site da Benna
            Sorveteria Artesanal, desenvolvido como um projeto conceitual e
            demonstrativo.
          </p>

          {/* Data de Última Atualização */}
          <p className="text-xs text-text-main/50 font-jakarta pt-1">
            Última atualização:{" "}
            <time dateTime="2026-10-01">outubro de 2026</time>
          </p>
        </header>

        {/* Conteúdo dos Termos */}
        <article className="space-y-10 text-sm sm:text-base leading-relaxed text-text-main/90 font-jakarta">
          {/* Seção 1 */}
          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text-title">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar e navegar por este site, você concorda em cumprir e se
              submeter aos presentes Termos de Uso. Caso não concorde com
              qualquer disposição aqui apresentada, solicitamos que interrompa a
              navegação.
            </p>
          </section>

          {/* Seção 2 */}
          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text-title">
              2. Natureza Demonstrativa do Projeto
            </h2>
            <p>
              Este site é uma plataforma conceitual demonstrativa desenvolvida
              pela marca{" "}
              <strong className="text-text-title font-medium">RAM Stack</strong>{" "}
              para apresentação de design, identidade visual e engenharia web de
              alta performance. Os dados de localização, cardápios e valores
              apresentados possuem caráter exclusivamente ilustrativo.
            </p>
          </section>

          {/* Seção 3 */}
          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text-title">
              3. Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo presente neste site — incluindo logotipos,
              combinações de cores, layouts, textos, elementos gráficos e
              código-fonte — é protegido pelas leis de direitos autorais e
              propriedade intelectual. A reprodução ou distribuição não
              autorizada é expressamente proibida.
            </p>
          </section>

          {/* Seção 4 */}
          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text-title">
              4. Limitação de Responsabilidade
            </h2>
            <p>
              Emprenhamo-nos em manter as informações do site atualizadas e
              precisas. No entanto, não nos responsabilizamos por eventuais
              indisponibilidades temporárias do serviço ou por inconsistências
              decorrentes de falhas técnicas externas.
            </p>
          </section>

          {/* Seção 5 */}
          <section className="space-y-3 border-t border-border/60 pt-8">
            <h2 className="font-display font-semibold text-xl text-text-title">
              5. Contato e Dúvidas
            </h2>
            <p>
              Se você tiver qualquer dúvida sobre estes Termos de Uso ou sobre o
              desenvolvimento do projeto, entre em contato através do e-mail{" "}
              <a
                href="mailto:contato@ramstack.com.br"
                className="text-berry font-medium hover:underline"
              >
                contato@ramstack.com.br
              </a>
              .
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
