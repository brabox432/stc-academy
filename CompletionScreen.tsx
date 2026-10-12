import { Trophy, RotateCcw, Award, Target, GraduationCap } from 'lucide-react';

interface CompletionScreenProps {
  resolved: number;
  attempts: number;
  correctReports: number;
  streak: number;
  onRestart: () => void;
}

export default function CompletionScreen({
  resolved,
  attempts,
  correctReports,
  streak,
  onRestart,
}: CompletionScreenProps) {
  const accuracy = attempts > 0 ? Math.round((correctReports / attempts) * 100) : 0;

  const rank =
    accuracy >= 90 ? { label: 'Guardiao Digital', color: 'text-stc-success', desc: 'Excelencia em cidadania digital' }
    : accuracy >= 70 ? { label: 'Analista Avancado', color: 'text-stc-primary', desc: 'Conhecimento solido e consistente' }
    : accuracy >= 50 ? { label: 'Cidadao Digital', color: 'text-stc-warning', desc: 'Em formacao, continue praticando' }
    : { label: 'Iniciante', color: 'text-stc-error', desc: 'Revise os conteudos e tente novamente' };

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-12">
      <div className="stc-card max-w-2xl w-full p-6 sm:p-10 animate-slide-up">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-stc-primary/20 blur-2xl rounded-full" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-stc-primary/40 bg-stc-bg animate-pulse-glow">
              <Trophy className="h-10 w-10 text-stc-primary" />
            </div>
          </div>

          <h2 className="font-display text-2xl font-bold text-stc-text-primary mb-1">
            Laboratorio Concluido
          </h2>
          <p className="text-sm text-stc-text-muted">
            Voce analizou todos os {resolved} casos
          </p>
        </div>

        <div className="mb-6 rounded-lg border border-stc-primary/20 bg-stc-bg/40 p-4 text-center">
          <p className="text-[10px] text-stc-text-muted uppercase mb-1 font-medium">Nivel Alcanado</p>
          <p className={`font-display text-xl font-bold ${rank.color}`}>
            {rank.label}
          </p>
          <p className="text-xs text-stc-text-muted mt-1">{rank.desc}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6 sm:grid-cols-4">
          <div className="rounded-lg border border-stc-border bg-stc-bg/40 p-3 text-center">
            <Target className="h-4 w-4 text-stc-success mx-auto mb-1" />
            <p className="font-display text-xl font-bold text-stc-success">{resolved}</p>
            <p className="text-[9px] text-stc-text-muted uppercase">Resolvidos</p>
          </div>
          <div className="rounded-lg border border-stc-border bg-stc-bg/40 p-3 text-center">
            <Award className="h-4 w-4 text-stc-primary mx-auto mb-1" />
            <p className="font-display text-xl font-bold text-stc-primary">{accuracy}%</p>
            <p className="text-[9px] text-stc-text-muted uppercase">Precisao</p>
          </div>
          <div className="rounded-lg border border-stc-border bg-stc-bg/40 p-3 text-center">
            <Trophy className="h-4 w-4 text-stc-warning mx-auto mb-1" />
            <p className="font-display text-xl font-bold text-stc-warning">{streak}x</p>
            <p className="text-[9px] text-stc-text-muted uppercase">Maior Sequencia</p>
          </div>
          <div className="rounded-lg border border-stc-border bg-stc-bg/40 p-3 text-center">
            <RotateCcw className="h-4 w-4 text-stc-error mx-auto mb-1" />
            <p className="font-display text-xl font-bold text-stc-error">{attempts - correctReports}</p>
            <p className="text-[9px] text-stc-text-muted uppercase">Tentativas</p>
          </div>
        </div>

        <div className="mb-6 rounded-lg border border-stc-secondary/20 bg-stc-secondary/5 p-4">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="h-4 w-4 text-stc-secondary" />
            <span className="text-xs font-semibold text-stc-secondary">
              Continue Aprendendo
            </span>
          </div>
          <p className="text-xs text-stc-text-secondary leading-relaxed">
            Revise os conteudos das paginas Seguranca e Direitos Digitais e Como Agir para aprofundar seu conhecimento. Voce tambem pode repetir o laboratorio para melhorar sua precisao.
          </p>
        </div>

        <button
          onClick={onRestart}
          className="group flex w-full items-center justify-center gap-2 rounded-lg border border-stc-primary bg-stc-primary/15 px-6 py-4 font-display text-base font-semibold text-stc-primary transition-all hover:bg-stc-primary/25 hover:shadow-[0_0_20px_rgba(167,139,250,0.3)]"
        >
          <RotateCcw className="h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
          Reiniciar Laboratorio
        </button>
      </div>
    </div>
  );
}
