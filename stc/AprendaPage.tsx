import { BookOpen, Shield, AlertTriangle, FlaskConical, Scale, Eye, Gavel, GraduationCap, ChevronRight } from 'lucide-react';
import type { PageId } from '@/components/Layout';

interface AprendaPageProps {
  onNavigate: (page: PageId) => void;
}

const TOPICS = [
  {
    icon: Shield,
    title: 'Privacidade e Proteção de Dados',
    description: 'O que são dados pessoais, como a LGPD protege você, e como controlar suas informações online.',
    level: 'Iniciante',
    ageRange: '12+ anos',
    topics: ['LGPD', 'Cookies', 'Permissões de apps', 'Rastreamento online'],
    page: 'seguranca' as PageId,
  },
  {
    icon: AlertTriangle,
    title: 'Identificando Abusos Online',
    description: 'Aprenda a distinguir conflito pessoal de abuso real: phishing, doxxing, discurso de ódio, ameaças e mais.',
    level: 'Intermediário',
    ageRange: '14+ anos',
    topics: ['Phishing', 'Doxxing', 'Discurso de ódio', 'Ameaças', 'Falsificação de perfil'],
    page: 'como-agir' as PageId,
  },
  {
    icon: FlaskConical,
    title: 'Laboratório Prático',
    description: 'Coloque o conhecimento em prática com cenários fictícios interativos de dificuldade progressiva.',
    level: 'Todos os níveis',
    ageRange: '12+ anos',
    topics: ['Simulação', 'Pensamento crítico', 'Análise de contexto', 'Tomada de decisão'],
    page: 'laboratorio' as PageId,
  },
  {
    icon: Scale,
    title: 'Direitos e Deveres Digitais',
    description: 'Compreenda seus direitos online e os limites da liberdade de expressão versus condutas abusivas.',
    level: 'Intermediário',
    ageRange: '14+ anos',
    topics: ['Liberdade de expressão', 'Direitos da personalidade', 'Responsabilidade civil', 'Crime digital'],
    page: 'seguranca' as PageId,
  },
  {
    icon: Eye,
    title: 'Desinformação e Conteúdo Manipulado',
    description: 'Como identificar notícias falsas, deepfakes, conteúdo gerado por IA e técnicas de enganação digital.',
    level: 'Avançado',
    ageRange: '16+ anos',
    topics: ['Deepfakes', 'IA generativa', 'Fact-checking', 'Bolhas informacionais'],
    page: 'como-agir' as PageId,
  },
  {
    icon: Gavel,
    title: 'Denúncia Responsável',
    description: 'A diferença entre discordar, suspeitar de violação e identificar situações que exigem autoridades.',
    level: 'Avançado',
    ageRange: '16+ anos',
    topics: ['Registro de incidentes', 'Preservação de provas', 'Canais apropriados', 'Boas práticas'],
    page: 'como-agir' as PageId,
  },
];

const LEVEL_COLORS: Record<string, string> = {
  'Iniciante': 'border-stc-success/30 bg-stc-success/10 text-stc-success',
  'Intermediário': 'border-stc-warning/30 bg-stc-warning/10 text-stc-warning',
  'Avançado': 'border-stc-error/30 bg-stc-error/10 text-stc-error',
  'Todos os níveis': 'border-stc-primary/30 bg-stc-primary/10 text-stc-primary',
};

export default function AprendaPage({ onNavigate }: AprendaPageProps) {
  return (
    <div className="animate-fade-in">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-stc-primary/20 bg-stc-primary/10 mb-4">
            <BookOpen className="h-6 w-6 text-stc-primary" />
          </div>
          <h1 className="font-display text-3xl font-bold text-stc-text-primary mb-3">Aprenda</h1>
          <p className="text-sm text-stc-text-secondary max-w-2xl mx-auto leading-relaxed">
            Conteúdos organizados por temas, níveis de dificuldade e faixa etária. Cada trilha combina teoria, exemplos práticos e encaminhamento para o Laboratório de Situações Digitais.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {TOPICS.map((topic) => (
            <button
              key={topic.title}
              onClick={() => onNavigate(topic.page)}
              className="stc-card p-6 text-left group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-stc-primary/20 bg-stc-primary/10">
                  <topic.icon className="h-5 w-5 text-stc-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-base font-semibold text-stc-text-primary mb-1">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-stc-text-secondary leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${LEVEL_COLORS[topic.level]}`}>
                  {topic.level}
                </span>
                <span className="text-[10px] text-stc-text-muted">{topic.ageRange}</span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {topic.topics.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-stc-panel-light text-stc-text-muted">
                    {t}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-1 text-xs text-stc-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Acessar conteúdo
                <ChevronRight className="h-3 w-3" />
              </span>
            </button>
          ))}
        </div>

        <div className="mt-12 stc-card p-6 text-center">
          <GraduationCap className="h-8 w-8 text-stc-primary mx-auto mb-3" />
          <h2 className="font-display text-lg font-semibold text-stc-text-primary mb-2">
            Mapeamento Educacional
          </h2>
          <p className="text-sm text-stc-text-secondary leading-relaxed max-w-2xl mx-auto mb-4">
            Os conteúdos da STC Academy buscam dialogar com as diretrizes educacionais brasileiras, incluindo a BNCC e as orientações de educação digital e midiática. O alinhamento completo requer validação pedagógica e jurídica especializada.
          </p>
          <button
            onClick={() => onNavigate('escolas')}
            className="text-sm text-stc-primary hover:text-stc-primary-bright transition-colors font-medium"
          >
            Ver materiais para escolas e educadores
          </button>
        </div>
      </div>
    </div>
  );
}
