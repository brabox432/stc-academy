import { Flag, CheckCircle2, MoreHorizontal, Clock, ExternalLink, AlertCircle } from 'lucide-react';
import type { SimulatedPost } from '@/types';

interface FeedPostProps {
  post: SimulatedPost;
  onReport: () => void;
  resolved: boolean;
}

export default function FeedPost({ post, onReport, resolved }: FeedPostProps) {
  if (resolved) {
    return (
      <div className="stc-card stc-border-accent p-4 animate-fade-in">
        <div className="flex items-center gap-3 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-stc-success/40 bg-stc-success/10">
            <CheckCircle2 className="h-5 w-5 text-stc-success" />
          </div>
          <div className="flex-1">
            <p className="font-display text-sm font-semibold text-stc-success">
              Caso Resolvido
            </p>
            <p className="text-xs text-stc-text-muted">
              {post.author.handle} — identificado corretamente
            </p>
          </div>
        </div>
      </div>
    );
  }

  const difficultyColor =
    post.difficulty === 'Iniciante'
      ? 'text-stc-success border-stc-success/30 bg-stc-success/5'
      : post.difficulty === 'Intermediário'
      ? 'text-stc-warning border-stc-warning/30 bg-stc-warning/5'
      : 'text-stc-error border-stc-error/30 bg-stc-error/5';

  return (
    <div className="stc-card p-4 sm:p-5 animate-slide-up">
      <div className="flex items-start gap-3 mb-4">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 font-display text-lg font-bold"
          style={{
            borderColor: post.author.avatarColor,
            color: post.author.avatarColor,
            backgroundColor: `${post.author.avatarColor}15`,
          }}
        >
          {post.author.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-sm text-stc-text-primary truncate">
              {post.author.name}
            </span>
            {post.author.verified && (
              <span className="flex items-center gap-0.5 rounded bg-stc-secondary/10 px-1.5 py-0.5">
                <CheckCircle2 className="h-3 w-3 text-stc-secondary" />
                <span className="text-[8px] font-medium text-stc-secondary">VERIFICADO</span>
              </span>
            )}
            <span className="text-xs text-stc-text-muted truncate">
              {post.author.handle}
            </span>
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <Clock className="h-2.5 w-2.5 text-stc-text-muted/50" />
            <span className="text-[10px] text-stc-text-muted/60">
              {post.timestamp}
            </span>
            <span className={`text-[8px] px-1.5 py-0.5 rounded border ${difficultyColor}`}>
              {post.difficulty}
            </span>
          </div>
        </div>
        <button className="text-stc-text-muted hover:text-stc-primary transition-colors" aria-label="Mais opções">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      <div className="mb-4">
        <p className="text-sm text-stc-text-secondary leading-relaxed whitespace-pre-wrap">
          {post.content}
        </p>
        {post.link && (
          <div className="mt-3 flex items-center gap-2 rounded border border-stc-error/20 bg-stc-error/5 px-3 py-2">
            <ExternalLink className="h-3.5 w-3.5 text-stc-error/60 shrink-0" />
            <span className="text-xs text-stc-error/70 truncate">{post.link}</span>
          </div>
        )}
        {post.imageUrl && (
          <div className="mt-3 flex items-center gap-2 rounded border border-stc-border bg-stc-panel/40 px-3 py-2">
            <AlertCircle className="h-3.5 w-3.5 text-stc-text-muted shrink-0" />
            <span className="text-xs text-stc-text-muted italic">{post.imageUrl}</span>
          </div>
        )}
      </div>

      <div className="mb-4 flex items-center gap-2 border-t border-stc-border pt-3">
        <AlertCircle className="h-3 w-3 text-stc-text-muted" />
        <span className="text-[10px] text-stc-text-muted">
          TEMA: {post.category}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onReport}
          className="group flex items-center gap-2 rounded-lg border border-stc-primary/30 bg-stc-primary/10 px-4 py-2.5 text-xs font-semibold text-stc-primary transition-all hover:bg-stc-primary/20 hover:border-stc-primary/50"
        >
          <Flag className="h-3.5 w-3.5 group-hover:animate-pulse" />
          Analisar Postagem
        </button>
        <span className="ml-auto text-[9px] text-stc-text-muted/40">
          ID: {post.id.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
