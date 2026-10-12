import { CheckCircle2, XCircle, Scale, X, RotateCcw, BookOpen, GraduationCap } from 'lucide-react';
import type { SimulatedPost, ReportReason } from '@/types';

interface FeedbackModalProps {
  post: SimulatedPost;
  selectedReason: ReportReason;
  isCorrect: boolean;
  onClose: () => void;
  onContinue: () => void;
}

export default function FeedbackModal({
  post,
  selectedReason,
  isCorrect,
  onClose,
  onContinue,
}: FeedbackModalProps) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 modal-overlay animate-fade-in"
      onClick={onClose}
    >
      <div
        className={`stc-card max-w-lg w-full animate-slide-up ${isCorrect ? '' : 'stc-border-error'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`flex items-center justify-between px-5 py-4 border-b ${
            isCorrect ? 'border-stc-success/20' : 'border-stc-error/20'
          }`}
        >
          <div className="flex items-center gap-3">
            {isCorrect ? (
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-stc-success/40 bg-stc-success/10">
                <CheckCircle2 className="h-6 w-6 text-stc-success" />
              </div>
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-stc-error/40 bg-stc-error/10">
                <XCircle className="h-6 w-6 text-stc-error" />
              </div>
            )}
            <div>
              <h3
                className={`font-display text-base font-semibold ${
                  isCorrect ? 'text-stc-success' : 'text-stc-error'
                }`}
              >
                {isCorrect ? 'Identificação Correta!' : 'Análise Incorreta'}
              </h3>
              <p className="text-[10px] text-stc-text-muted">
                ID: {post.id.toUpperCase()} — {post.category}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded p-1 text-stc-text-muted hover:text-stc-text-primary transition-colors"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-5 py-4">
          {isCorrect ? (
            <div className="space-y-4">
              <p className="text-sm text-stc-text-secondary leading-relaxed">
                Voce identificou corretamente a categoria desta postagem. Caso resolvido com precisao.
              </p>

              <div className="rounded-lg border border-stc-success/20 bg-stc-success/5 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-4 w-4 text-stc-success" />
                  <span className="text-xs font-semibold text-stc-success">
                    Caso Resolvido
                  </span>
                </div>
                <p className="text-xs text-stc-text-secondary">
                  <span className="text-stc-text-muted">{post.author.handle}</span> — categoria identificada corretamente
                </p>
              </div>

              <div className="rounded-lg border border-stc-warning/20 bg-stc-warning/5 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Scale className="h-4 w-4 text-stc-warning" />
                  <span className="text-xs font-semibold text-stc-warning">
                    Referencia Legal
                  </span>
                </div>
                <p className="text-xs text-stc-warning/90">
                  {post.lawReference}
                </p>
              </div>

              <div className="rounded-lg border border-stc-primary/10 bg-stc-bg/40 p-3">
                <p className="text-[10px] text-stc-primary/60 mb-1 uppercase font-medium">
                  Analise Detalhada
                </p>
                <p className="text-xs text-stc-text-secondary leading-relaxed">
                  {post.explanation}
                </p>
              </div>

              {post.learningSummary && (
                <div className="rounded-lg border border-stc-secondary/20 bg-stc-secondary/5 p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="h-4 w-4 text-stc-secondary" />
                    <span className="text-xs font-semibold text-stc-secondary">
                      Aprendizado
                    </span>
                  </div>
                  <p className="text-xs text-stc-text-secondary leading-relaxed">
                    {post.learningSummary}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-stc-error leading-relaxed">
                A categoria selecionada nao corresponde a esta postagem. Tente novamente.
              </p>

              <div className="rounded-lg border border-stc-error/20 bg-stc-error/5 p-3 animate-shake">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="h-4 w-4 text-stc-error" />
                  <span className="text-xs font-semibold text-stc-error">
                    Analise Incorreta
                  </span>
                </div>
                <p className="text-xs text-stc-text-secondary leading-relaxed">
                  {post.isViolation
                    ? 'A categoria selecionada nao condiz com a infracao apresentada. Analise novamente o conteudo e identifique a categoria correta.'
                    : 'Esta acao nao configura violacao de diretrizes. O conteudo e legitimo e protegido pela liberdade de expressao. Nao deve ser denunciado.'}
                </p>
              </div>

              <div className="rounded-lg border border-stc-warning/15 bg-stc-warning/5 p-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <Scale className="h-3.5 w-3.5 text-stc-warning/70" />
                  <span className="text-[10px] text-stc-warning/70 uppercase font-medium">
                    Voce selecionou
                  </span>
                </div>
                <p className="text-xs text-stc-warning/80">
                  {selectedReason.label}
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-stc-bg/40 border border-stc-primary/10 p-3">
                <RotateCcw className="h-4 w-4 text-stc-primary/60 shrink-0" />
                <p className="text-xs text-stc-primary/70">
                  Voce pode tentar novamente sem perda de pontuacao por tentativa incorreta.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-end gap-2 border-t border-stc-border px-5 py-3">
          <button
            onClick={onContinue}
            className={`flex items-center gap-2 rounded-md px-5 py-2 text-xs font-semibold transition-all ${
              isCorrect
                ? 'border border-stc-success bg-stc-success/20 text-stc-success hover:bg-stc-success/30'
                : 'border border-stc-error bg-stc-error/20 text-stc-error hover:bg-stc-error/30'
            }`}
          >
            {isCorrect ? (
              <>
                <BookOpen className="h-3.5 w-3.5" />
                Proximo Caso
              </>
            ) : (
              <>
                <RotateCcw className="h-3.5 w-3.5" />
                Tentar Novamente
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
