import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
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
            <ShieldCheck className="w-4 h-4" />
            <span>LGPD & Transparência</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text-title tracking-tight">
            Política de Privacidade
          </h1>

          <p className="text-sm sm:text-base text-text-main/80 leading-relaxed font-jakarta">
            A Benna Sorveteria Artesanal valoriza a sua confiança e está
            comprometida em proteger a privacidade e a segurança dos seus dados
            pessoais.
          </p>

          {/* Data de Última Atualização */}
          <p className="text-xs text-text-main/50 font-jakarta pt-1">
            Última atualização:{" "}
            <time dateTime="2026-10-01">outubro de 2026</time>
          </p>
        </header>

        {/* Conteúdo da Política */}
        <article className="space-y-10 text-sm sm:text-base leading-relaxed text-text-main/90 font-jakarta">
          {/* Seção 1 */}
          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text-title">
              1. Informações que Coletamos
            </h2>
            <p>
              Podemos coletar informações fornecidas diretamente por você
              através dos nossos canais de atendimento e formulários de contato,
              tais como:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-text-main/80">
              <li>Nome completo;</li>
              <li>Número de telefone / WhatsApp;</li>
              <li>Endereço de e-mail;</li>
              <li>Mensagens e preferências enviadas voluntariamente.</li>
            </ul>
          </section>

          {/* Seção 2 */}
          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text-title">
              2. Finalidade do Uso dos Dados
            </h2>
            <p>
              Os dados coletados são utilizados exclusivamente para as seguintes
              finalidades:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-text-main/80">
              <li>
                Atendimento a dúvidas, sugestões ou solicitações de pedidos;
              </li>
              <li>
                Envio de novidades, sabores sazonais e eventos (mediante
                autorização);
              </li>
              <li>
                Melhoria contínua da experiência no nosso site e atendimento
                presencial.
              </li>
            </ul>
          </section>

          {/* Seção 3 */}
          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text-title">
              3. Compartilhamento de Dados
            </h2>
            <p>
              A Benna não vende, aluga nem compartilha suas informações pessoais
              com terceiros para fins comerciais. O compartilhamento ocorre
              apenas em situações estritamente necessárias para a operação da
              empresa ou cumprimento de obrigações legais.
            </p>
          </section>

          {/* Seção 4 */}
          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text-title">
              4. Cookies e Tecnologias de Navegação
            </h2>
            <p>
              Utilizamos cookies essenciais para garantir o correto
              funcionamento da nossa página e otimizar a navegação. Você pode, a
              qualquer momento, alterar as configurações do seu navegador para
              bloquear ou gerenciar os cookies.
            </p>
          </section>

          {/* Seção 5 */}
          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text-title">
              5. Seus Direitos (LGPD)
            </h2>
            <p>
              Em conformidade com a Lei Geral de Proteção de Dados (Lei nº
              13.709/2018), você possui o direito de solicitar a confirmação, o
              acesso, a correção ou a exclusão de seus dados armazenados em
              nossa base a qualquer momento.
            </p>
          </section>

          {/* Seção 6 */}
          <section className="space-y-3 border-t border-border/60 pt-8">
            <h2 className="font-display font-semibold text-xl text-text-title">
              6. Contato
            </h2>
            <p>
              Para esclarecer dúvidas sobre esta Política de Privacidade ou
              exercer seus direitos relativos aos seus dados pessoais, entre em
              contato conosco através do e-mail{" "}
              <a
                href="mailto:contato@ramstack.com.br"
                className="text-berry font-medium hover:underline"
              >
                contato@ramstack.com.br
              </a>{" "}
              ou pelo nosso WhatsApp de atendimento.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
