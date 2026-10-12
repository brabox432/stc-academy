import { Target, TrendingUp, Flame, Trophy, CheckCircle2 } from 'lucide-react';

interface StatusBoardProps {
  resolved: number;
  attempts: number;
  correctReports: number;
  totalChallenges: number;
  remaining: number;
  streak: number;
}

export default function StatusBoard({
  resolved,
  attempts,
  correctReports,
  totalChallenges,
  remaining,
  streak,
}: StatusBoardProps) {
  const accuracy = attempts > 0 ? Math.round((correctReports / attempts) * 100) : 0;
  const progress = Math.round(((totalChallenges - remaining) / totalChallenges) * 100);

  const accuracyColor =
    accuracy >= 80 ? 'text-stc-success' : accuracy >= 50 ? 'text-stc-warning' : 'text-stc-error';

  return (
    <div className="stc-card p-4 sm:p-6">
      <div className="mb-4 flex items-center gap-2 border-b border-stc-border pb-3">
        <Target className="h-4 w-4 text-stc-primary" />
        <h2 className="font-display text-sm font-semibold text-stc-text-primary">
          Painel de Progresso
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <div className="rounded-lg border border-stc-border bg-stc-bg/60 p-3 sm:p-4">
          <div className="flex items-center gap-1.5 mb-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-stc-success" />
            <span className="text-[10px] uppercase text-stc-text-muted tracking-wider font-medium">
              Casos Resolvidos
            </span>
          </div>
          <div className="font-display text-2xl sm:text-3xl font-bold text-stc-success">
            {resolved.toString().padStart(2, '0')}
          </div>
          <div className="text-[9px] text-stc-text-muted mt-1">
            de {totalChallenges} casos
          </div>
        </div>

        <div className="rounded-lg border border-stc-border bg-stc-bg/60 p-3 sm:p-4">
          <div className="flex items-center gap-1.5 mb-2">
            <TrendingUp className="h-3.5 w-3.5 text-stc-primary" />
            <span className="text-[10px] uppercase text-stc-text-muted tracking-wider font-medium">
              Precisao
            </span>
          </div>
          <div className={`font-display text-2xl sm:text-3xl font-bold ${accuracyColor}`}>
            {accuracy}%
          </div>
          <div className="text-[9px] text-stc-text-muted mt-1">
            {correctReports}/{attempts} analises
          </div>
        </div>

        <div className="rounded-lg border border-stc-border bg-stc-bg/60 p-3 sm:p-4">
          <div className="flex items-center gap-1.5 mb-2">
            <Flame className="h-3.5 w-3.5 text-stc-warning" />
            <span className="text-[10px] uppercase text-stc-text-muted tracking-wider font-medium">
              Sequencia
            </span>
          </div>
          <div className="font-display text-2xl sm:text-3xl font-bold text-stc-warning">
            {streak}x
          </div>
          <div className="text-[9px] text-stc-text-muted mt-1">
            acertos consecutivos
          </div>
        </div>

        <div className="rounded-lg border border-stc-border bg-stc-bg/60 p-3 sm:p-4">
          <div className="flex items-center gap-1.5 mb-2">
            <Trophy className="h-3.5 w-3.5 text-stc-primary" />
            <span className="text-[10px] uppercase text-stc-text-muted tracking-wider font-medium">
              Progresso
            </span>
          </div>
          <div className="font-display text-2xl sm:text-3xl font-bold text-stc-primary/80">
            {progress}%
          </div>
          <div className="text-[9px] text-stc-text-muted mt-1">
            {remaining} restantes
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] text-stc-text-muted font-medium">PROGRESSO</span>
          <span className="text-[10px] text-stc-primary/60">{progress}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-stc-bg border border-stc-border">
          <div
            className="h-full bg-gradient-to-r from-stc-primary-dim to-stc-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] text-stc-text-muted font-medium">PRECISAO</span>
          <span className={`text-[10px] ${accuracyColor}`}>{accuracy}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-stc-bg border border-stc-border">
          <div
            className={`h-full transition-all duration-500 ease-out ${
              accuracy >= 80
                ? 'bg-gradient-to-r from-stc-success/60 to-stc-success'
                : accuracy >= 50
                ? 'bg-gradient-to-r from-stc-warning/60 to-stc-warning'
                : 'bg-gradient-to-r from-stc-error/60 to-stc-error'
            }`}
            style={{ width: `${accuracy}%` }}
          />
        </div>
      </div>
    </div>
  );
}
