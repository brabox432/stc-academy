import { BookOpen, Shield, AlertTriangle, FlaskConical, School, Globe, ChevronRight, GraduationCap, Users, Lock, ArrowRight, Scale, Heart, Eye, FileText, Gavel } from 'lucide-react';
import type { PageId } from '@/components/Layout';
import { SITE_TAGLINE } from '@/types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

const FEATURES = [
  {
    icon: FlaskConical,
    title: 'Laboratório de Situações Digitais',
    description: 'Cenários fictícios e interativos para praticar identificação de problemas e escolhas responsáveis.',
    page: 'laboratorio' as PageId,
  },
  {
    icon: Shield,
    title: 'Segurança e Direitos Digitais',
    description: 'Aprenda sobre privacidade, consentimento, identidade digital, proteção de contas e prevenção de abusos.',
    page: 'seguranca' as PageId,
  },
  {
    icon: AlertTriangle,
    title: 'Como Agir',
    description: 'Orientações práticas para lidar com conflitos, exposição indevida, ameaças, falsificação de identidade e mais.',
    page: 'como-agir' as PageId,
  },
  {
    icon: School,
    title: 'Para Escolas e Educadores',
    description: 'Planos de aula, atividades, objetivos de aprendizagem e materiais para uso em sala de aula.',
    page: 'escolas' as PageId,
  },
];

const AUDIENCES = [
  { icon: GraduationCap, label: 'Estudantes', desc: 'Aprenda a navegar com segurança' },
  { icon: Users, label: 'Famílias', desc: 'Orientação para conversas em casa' },
  { icon: School, label: 'Escolas', desc: 'Materiais pedagógicos prontos' },
  { icon: Globe, label: 'Internet', desc: 'Cidadania digital para todos' },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="animate-fade-in">
      <section className="relative stc-hero-glow overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-stc-primary/30 bg-stc-primary/10 px-4 py-1.5 mb-6">
              <Shield className="h-3.5 w-3.5 text-stc-primary" />
              <span className="text-xs font-medium text-stc-primary">Plataforma Educativa Independente</span>
            </div>

            <h1 className="font-display text-4xl font-bold tracking-tight text-stc-text-primary sm:text-5xl lg:text-6xl mb-6">
              <span className="stc-gradient-text">STC Academy</span>
            </h1>

            <p className="text-lg sm:text-xl text-stc-text-secondary leading-relaxed mb-4">
              {SITE_TAGLINE}
            </p>

            <p className="text-sm text-stc-text-muted leading-relaxed max-w-2xl mx-auto mb-8">
              Plataforma educativa de cidadania digital para estudantes, professores, escolas, famílias e usuários da internet no Brasil e no mundo. Aprenda a identificar abusos online, proteger seus direitos e agir com responsabilidade.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onNavigate('laboratorio')}
                className="group inline-flex items-center gap-2 rounded-lg bg-stc-primary px-6 py-3 text-sm font-semibold text-stc-bg transition-all hover:bg-stc-primary-bright hover:shadow-[0_0_20px_rgba(167,139,250,0.4)]"
              >
                <FlaskConical className="h-4 w-4" />
                Começar Laboratório
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('aprenda')}
                className="inline-flex items-center gap-2 rounded-lg border border-stc-border-light bg-stc-panel/60 px-6 py-3 text-sm font-semibold text-stc-text-primary transition-all hover:border-stc-primary/40 hover:bg-stc-panel"
              >
                <BookOpen className="h-4 w-4" />
                Explorar Conteúdos
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-stc-border">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-stc-text-muted mb-8">
            Para quem é a STC Academy
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {AUDIENCES.map((aud) => (
              <div key={aud.label} className="stc-card p-5 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-stc-primary/20 bg-stc-primary/10 mb-3">
                  <aud.icon className="h-6 w-6 text-stc-primary" />
                </div>
                <p className="font-display text-sm font-semibold text-stc-text-primary">{aud.label}</p>
                <p className="text-xs text-stc-text-muted mt-1">{aud.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stc-border">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-center font-display text-2xl font-bold text-stc-text-primary mb-2">
            O que você vai encontrar
          </h2>
          <p className="text-center text-sm text-stc-text-muted mb-10 max-w-2xl mx-auto">
            Cada área foi pensada para transformar problemas reais do cotidiano digital em aprendizado estruturado e pensamento crítico.
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {FEATURES.map((feat) => (
              <button
                key={feat.title}
                onClick={() => onNavigate(feat.page)}
                className="stc-card p-6 text-left group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-stc-primary/20 bg-stc-primary/10">
                    <feat.icon className="h-5 w-5 text-stc-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-base font-semibold text-stc-text-primary mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-stc-text-secondary leading-relaxed">
                      {feat.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs text-stc-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      Acessar
                      <ChevronRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stc-border bg-stc-bg-soft">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <Lock className="h-8 w-8 text-stc-primary mx-auto mb-4" />
          <h2 className="font-display text-xl font-bold text-stc-text-primary mb-4">
            Nosso compromisso
          </h2>
          <p className="text-sm text-stc-text-secondary leading-relaxed mb-6">
            A STC Academy é uma iniciativa educativa independente, sem cadastro obrigatório, sem coleta de dados desnecessária e sem vínculos oficiais com governos, plataformas ou instituições que não tenham sido formalmente estabelecidos.
          </p>
          <p className="text-sm text-stc-text-muted leading-relaxed">
            Não somos um mural de acusações, nem um serviço de denúncias em massa, nem uma ferramenta para derrubar contas. Somos uma plataforma que ensina a avaliar fatos, distinguir divergências de abusos e agir com responsabilidade.
          </p>
        </div>
      </section>
    </div>
  );
}
