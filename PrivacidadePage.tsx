import { Lock, Shield, Mail, Send, ExternalLink, Accessibility, Eye, Keyboard, AlertCircle } from 'lucide-react';
import { FORUM_URL, FORUM_LABEL } from '@/types';

const PRIVACY_SECTIONS = [
  {
    title: 'Coleta de Dados',
    content: 'A STC Academy adota o princípio de minimização de dados. Não exigimos cadastro, login ou fornecimento de dados pessoais para acessar os materiais educativos. Não coletamos nome, email, telefone, CPF ou qualquer dado pessoal identificável. O Laboratório de Situações Digitais funciona inteiramente no seu navegador — suas respostas e pontuação são armazenadas localmente e não são enviadas a nenhum servidor.',
  },
  {
    title: 'Cookies e Rastreamento',
    content: 'A STC Academy não utiliza cookies de rastreamento, cookies publicitários nem ferramentas de analytics que identificam usuários. Não compartilhamos dados com terceiros. Caso no futuro sejam adicionadas ferramentas de análise agregada e anônima, esta política será atualizada e os usuários serão informados.',
  },
  {
    title: 'LGPD e Seus Direitos',
    content: 'A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) garante a você o direito de acessar, corrigir, solicitar exclusão e revogar consentimento sobre seus dados pessoais. Como a STC Academy não coleta dados pessoais, esses direitos são automaticamente garantidos. Em caso de dúvida, entre em contato.',
  },
  {
    title: 'Proteção de Crianças e Adolescentes',
    content: 'A STC Academy segue os princípios do Estatuto da Criança e do Adolescente (ECA) e da LGPD quanto ao tratamento de dados de menores. Não coletamos dados de crianças ou adolescentes. Os cenários do Laboratório são fictícios e educativos, com linguagem apropriada à faixa etária indicada. Recomendamos que menores de 14 anos utilizem a plataforma com orientação de um adulto responsável.',
  },
  {
    title: 'Links Externos',
    content: 'A STC Academy contém links para sites externos (órgãos governamentais, organizações de fact-checking, canais de ajuda). Esses links são de fontes oficiais e revisados periodicamente. Não controlamos o conteúdo ou as políticas de privacidade de sites externos. Ao clicar em um link externo, você está sujeito à política de privacidade daquele site.',
  },
];

const ACCESSIBILITY_SECTIONS = [
  {
    icon: Eye,
    title: 'Contraste e Legibilidade',
    description: 'Utilizamos uma paleta de cores com contraste adequado para garantir legibilidade em todos os elementos. Textos têm tamanho mínimo de 12px e espaçamento de linha de 150% para conteúdo.',
  },
  {
    icon: Keyboard,
    title: 'Navegação por Teclado',
    description: 'Todos os elementos interativos são acessíveis por teclado. O foco visual é claramente indicado com outline roxo em todos os componentes focáveis.',
  },
  {
    icon: Accessibility,
    title: 'Compatibilidade com Leitores de Tela',
    description: 'Utilizamos marcação semântica HTML, labels ARIA e descrições alternativas em elementos visuais para garantir compatibilidade com leitores de tela.',
  },
  {
    icon: Shield,
    title: 'Movimento Reduzido',
    description: 'Respeitamos a preferência por movimento reduzido do sistema. Quando ativada, todas as animações e transições são minimizadas automaticamente.',
  },
];

export default function PrivacidadePage() {
  return (
    <div className="animate-fade-in">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-stc-primary/20 bg-stc-primary/10 mb-4">
            <Lock className="h-6 w-6 text-stc-primary" />
          </div>
          <h1 className="font-display text-3xl font-bold text-stc-text-primary mb-3">
            Privacidade, Acessibilidade e Contato
          </h1>
          <p className="text-sm text-stc-text-secondary max-w-2xl mx-auto leading-relaxed">
            Política transparente sobre dados, cookies, acessibilidade e canais de comunicação.
          </p>
        </div>

        {/* Privacy Policy */}
        <h2 className="font-display text-xl font-semibold text-stc-text-primary mb-6">
          Política de Privacidade
        </h2>

        <div className="space-y-4 mb-12">
          {PRIVACY_SECTIONS.map((section) => (
            <div key={section.title} className="stc-card p-5">
              <h3 className="font-display text-sm font-semibold text-stc-text-primary mb-2">
                {section.title}
              </h3>
              <p className="text-sm text-stc-text-secondary leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Accessibility */}
        <h2 className="font-display text-xl font-semibold text-stc-text-primary mb-6">
          Acessibilidade
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-8">
          {ACCESSIBILITY_SECTIONS.map((item) => (
            <div key={item.title} className="stc-card p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-stc-primary/20 bg-stc-primary/10">
                  <item.icon className="h-4.5 w-4.5 text-stc-primary" />
                </div>
                <h3 className="font-display text-sm font-semibold text-stc-text-primary">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-stc-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-stc-warning/20 bg-stc-warning/5 p-5 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-stc-warning shrink-0 mt-0.5" />
            <p className="text-xs text-stc-text-secondary leading-relaxed">
              <strong className="text-stc-warning">Melhoria contínua:</strong> Acessibilidade é um processo contínuo. Se você encontrar alguma barreira de acesso, por favor nos avie. Seu feedback ajuda a tornar a STC Academy mais inclusiva.
            </p>
          </div>
        </div>

        {/* Contact */}
        <h2 className="font-display text-xl font-semibold text-stc-text-primary mb-6">
          Contato
        </h2>

        <div className="stc-card p-6">
          <p className="text-sm text-stc-text-secondary leading-relaxed mb-6">
            Para sugestões, correções, dúvidas ou manifestação de interesse no projeto-piloto para escolas, entre em contato pelo nosso fórum da comunidade.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href={FORUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-stc-primary/30 bg-stc-primary/10 px-6 py-3 text-sm font-semibold text-stc-primary transition-all hover:bg-stc-primary/20 hover:border-stc-primary/50"
            >
              <Send className="h-4 w-4" />
              {FORUM_LABEL}
              <ExternalLink className="h-3.5 w-3.5 opacity-60" />
            </a>

            <div className="flex items-start gap-2 text-xs text-stc-text-muted">
              <Mail className="h-3.5 w-3.5 shrink-0 mt-0.5 text-stc-primary/50" />
              <p>
                Para questões de privacidade, correções de conteúdo ou parcerias institucionais, utilize o fórum da comunidade. Não fornecemos email direto para evitar coleta desnecessária de dados. Respeitamos sua privacidade — não pedimos dados pessoais para responder a questões educativas.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[10px] text-stc-text-muted">
            Esta política foi revisada em outubro de 2024. Questões que envolvam interpretação jurídica da LGPD ou do ECA exigem validação por especialista em direito digital.
          </p>
        </div>
      </div>
    </div>
  );
}
