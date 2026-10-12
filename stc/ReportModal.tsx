import { useState } from 'react';
import { X, Flag, AlertCircle, FileText, Search } from 'lucide-react';
import { REPORT_REASONS, type SimulatedPost } from '@/types';

interface ReportModalProps {
  post: SimulatedPost;
  onClose: () => void;
  onSubmit: (reasonId: string) => void;
}

export default function ReportModal({ post, onClose, onSubmit }: ReportModalProps) {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay animate-fade-in"
      onClick={onClose}
    >
      <div
        className="stc-card max-w-2xl w-full max-h-[85vh] overflow-y-auto animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-stc-border bg-stc-panel px-4 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded border border-stc-primary/30 bg-stc-primary/10">
              <Search className="h-4 w-4 text-stc-primary" />
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold text-stc-text-primary">
                Análise de Postagem
              </h3>
              <p className="text-[9px] text-stc-text-muted">
                Identifique a categoria mais adequada
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

        <div className="px-4 py-3 border-b border-stc-border">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full border font-display text-sm font-bold"
              style={{
                borderColor: post.author.avatarColor,
                color: post.author.avatarColor,
              }}
            >
              {post.author.name.charAt(0)}
            </span>
            <div className="flex-1 min-w-0">
              <span className="font-bold text-xs text-stc-text-primary">{post.author.name}</span>
              <span className="text-[10px] text-stc-text-muted ml-1">
                {post.author.handle}
              </span>
            </div>
          </div>
          <p className="text-xs text-stc-text-secondary leading-relaxed whitespace-pre-wrap line-clamp-4">
            {post.content}
          </p>
        </div>

        <div className="px-4 py-4">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="h-4 w-4 text-stc-warning" />
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stc-warning">
              Qual categoria melhor descreve esta postagem?
            </h4>
          </div>
          <div className="space-y-2">
            {REPORT_REASONS.map((reason) => (
              <button
                key={reason.id}
                onClick={() => setSelectedReason(reason.id)}
                className={`w-full text-left rounded-lg border p-3 transition-all ${
                  selectedReason === reason.id
                    ? 'border-stc-primary bg-stc-primary/10'
                    : 'border-stc-border bg-stc-bg/40 hover:border-stc-primary/40 hover:bg-stc-panel/60'
                }`}
              >
                <div className="flex items-start gap-2">
                  <div
                    className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                      selectedReason === reason.id
                        ? 'border-stc-primary bg-stc-primary/30'
                        : 'border-stc-text-muted/40'
                    }`}
                  >
                    {selectedReason === reason.id && (
                      <div className="h-2 w-2 rounded-full bg-stc-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p
                      className={`text-xs font-semibold ${
                        selectedReason === reason.id
                          ? 'text-stc-primary'
                          : 'text-stc-text-primary'
                      }`}
                    >
                      {reason.label}
                    </p>
                    <p className="text-[10px] text-stc-text-muted mt-0.5">
                      {reason.description}
                    </p>
                    {selectedReason === reason.id && (
                      <div className="mt-2 flex items-start gap-1.5 rounded bg-stc-bg/60 p-2 border border-stc-primary/10">
                        <FileText className="h-3 w-3 text-stc-primary/60 shrink-0 mt-0.5" />
                        <span className="text-[10px] text-stc-primary/80">
                          {reason.law}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="sticky bottom-0 flex items-center justify-end gap-2 border-t border-stc-border bg-stc-panel px-4 py-3">
          <button
            onClick={onClose}
            className="rounded-md border border-stc-border-light px-4 py-2 text-xs text-stc-text-muted hover:bg-stc-panel transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={() => selectedReason && onSubmit(selectedReason)}
            disabled={!selectedReason}
            className={`flex items-center gap-2 rounded-md px-4 py-2 text-xs font-semibold transition-all ${
              selectedReason
                ? 'border border-stc-primary bg-stc-primary/20 text-stc-primary hover:bg-stc-primary/30'
                : 'border border-stc-border bg-stc-panel/50 text-stc-text-muted/40 cursor-not-allowed'
            }`}
          >
            <Flag className="h-3.5 w-3.5" />
            Confirmar Análise
          </button>
        </div>
      </div>
    </div>
  );
}
