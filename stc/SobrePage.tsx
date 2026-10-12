import { Shield, Eye, Scale, Heart, BookOpen, CheckCircle2, AlertCircle, History } from 'lucide-react';

const PRINCIPLES = [
  {
    icon: Eye,
    title: 'Independência',
    description: 'A STC Academy é uma iniciativa educativa independente. Não recebe financiamento de plataformas, governos ou organizações que possam comprometer sua neutralidade. Não temos vínculos oficiais com governos, escolas, plataformas ou instituições que não tenham sido formalmente estabelecidos.',
  },
  {
    icon: Scale,
    title: 'Neutralidade e Proporcionalidade',
    description: 'Apresentamos casos de forma neutra, sem nomes reais, sem dados obtidos de conflitos existentes e sem direcionar conclusões. Ensinar a avaliar fatos, não a tomar partido. O foco está na qualidade da análise e na responsabilidade da decisão — não em punir ou banir.',
  },
  {
    icon: Heart,
    title: 'Segurança em Primeiro Lugar',
    description: 'Em situações de risco imediato, a segurança da pessoa tem prioridade sobre a análise de conteúdo. Sempre orientamos a procura de autoridades competentes em casos de crime ou perigo iminente.',
  },
  {
    icon: Shield,
    title: 'Privacidade desde a Concepção',
    description: 'Não exigimos cadastro para acessar materiais educativos. Coletamos o mínimo de dados possível. Não expomos informações pessoais de estudantes, professores, vítimas ou pessoas mencionadas em exemplos.',
  },
];

const LIMITS = [
  'A STC Academy não é um serviço de denúncia. Não processamos denúncias reais, não encaminhamos denúncias a plataformas em nome de usuários e não armazenamos evidências sensíveis.',
  'A STC Academy não é um serviço jurídico. As informações legais têm caráter educativo e não substituem aconselhamento de um advogado.',
  'A STC Academy não é um serviço de saúde mental. Em situações de sofrimento emocional, orientamos a procura de profissionais e do CVV (188).',
  'A STC Academy não investiga casos reais. Todos os cenários do Laboratório são fictícios e não correspondem a pessoas, eventos ou conflitos reais.',
  'A STC Academy não declara alinhamento oficial, aprovação curricular ou certificação sem comprovação e validação apropriada.',
];

const UPDATES = [
  { date: 'Outubro 2024', description: 'Lançamento da plataforma STC Academy com Laboratório de Situações Digitais (12 cenários iniciais + 10 cenários avançados), páginas educativas e materiais para escolas.' },
];

export default function SobrePage() {
  return (
    <div className="animate-fade-in">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-stc-primary/20 bg-stc-primary/10 mb-4">
            <BookOpen className="h-6 w-6 text-stc-primary" />
          </div>
          <h1 className="font-display text-3xl font-bold text-stc-text-primary mb-3">
            Sobre a STC Academy
          </h1>
          <p className="text-lg text-stc-text-secondary max-w-2xl mx-auto leading-relaxed">
            "Entenda o ambiente digital. Proteja direitos. Aja com responsabilidade."
          </p>
        </div>

        {/* Mission */}
        <div className="stc-card p-6 mb-8">
          <h2 className="font-display text-lg font-semibold text-stc-text-primary mb-4">Nossa Missão</h2>
          <p className="text-sm text-stc-text-secondary leading-relaxed mb-4">
            A STC Academy é uma iniciativa educativa independente dedicada a transformar problemas reais do cotidiano digital em aprendizado estruturado, pensamento crítico, proteção de direitos e ações responsáveis.
          </p>
          <p className="text-sm text-stc-text-secondary leading-relaxed">
            Acreditamos que a educação é a ferramenta mais eficaz para prevenir abusos online. Em vez de punir, expor ou coordenar campanhas, ensinamos as pessoas a avaliar fatos, distinguir divergências de possíveis abusos e agir com responsabilidade — seja denunciando dentro de uma plataforma, acionando autoridades ou simplesmente escolhendo não compartilhar.
          </p>
        </div>

        {/* Principles */}
        <h2 className="font-display text-xl font-semibold text-stc-text-primary mb-6">
          Princípios Editoriais
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mb-8">
          {PRINCIPLES.map((principle) => (
            <div key={principle.title} className="stc-card p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-stc-primary/20 bg-stc-primary/10">
                  <principle.icon className="h-4.5 w-4.5 text-stc-primary" />
                </div>
                <h3 className="font-display text-sm font-semibold text-stc-text-primary">
                  {principle.title}
                </h3>
              </div>
              <p className="text-sm text-stc-text-secondary leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Limits */}
        <div className="stc-card p-6 mb-8">
          <h2 className="font-display text-lg font-semibold text-stc-text-primary mb-4">
            O que a STC Academy não é
          </h2>
          <ul className="space-y-3">
            {LIMITS.map((limit, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-stc-text-secondary">
                <AlertCircle className="h-4 w-4 text-stc-warning shrink-0 mt-0.5" />
                <span className="leading-relaxed">{limit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Content criteria */}
        <div className="stc-card p-6 mb-8">
          <h2 className="font-display text-lg font-semibold text-stc-text-primary mb-4">
            Critérios de Produção de Conteúdo
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-sm text-stc-text-secondary">
              <CheckCircle2 className="h-4 w-4 text-stc-success shrink-0 mt-0.5" />
              Todos os cenários do Laboratório são inteiramente fictícios e não correspondem a pessoas ou eventos reais.
            </li>
            <li className="flex items-start gap-2.5 text-sm text-stc-text-secondary">
              <CheckCircle2 className="h-4 w-4 text-stc-success shrink-0 mt-0.5" />
              Referências legais são baseadas na legislação brasileira vigente e verificadas em fontes oficiais.
            </li>
            <li className="flex items-start gap-2.5 text-sm text-stc-text-secondary">
              <CheckCircle2 className="h-4 w-4 text-stc-success shrink-0 mt-0.5" />
              Links para autoridades e canais de ajuda são oficiais e revisados periodicamente.
            </li>
            <li className="flex items-start gap-2.5 text-sm text-stc-text-secondary">
              <CheckCircle2 className="h-4 w-4 text-stc-success shrink-0 mt-0.5" />
              Não publicamos estatísticas sem fontes verificáveis, depoimentos fictícios ou alegações de sucesso sem evidências.
            </li>
            <li className="flex items-start gap-2.5 text-sm text-stc-text-secondary">
              <CheckCircle2 className="h-4 w-4 text-stc-success shrink-0 mt-0.5" />
              Conteúdos que podem mudar com o tempo (leis, links, orientações) incluem data de revisão.
            </li>
          </ul>
        </div>

        {/* Update history */}
        <div className="stc-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <History className="h-5 w-5 text-stc-primary" />
            <h2 className="font-display text-lg font-semibold text-stc-text-primary">
              Histórico de Atualizações
            </h2>
          </div>
          <ul className="space-y-3">
            {UPDATES.map((update, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-xs font-medium text-stc-primary bg-stc-primary/10 px-2 py-1 rounded shrink-0">
                  {update.date}
                </span>
                <p className="text-sm text-stc-text-secondary leading-relaxed">
                  {update.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
