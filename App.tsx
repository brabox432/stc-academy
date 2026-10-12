import { useState, useCallback } from 'react';
import { CHALLENGES, REPORT_REASONS, type SimulatedPost, type ReportReason } from '@/types';
import Layout, { type PageId } from '@/components/Layout';
import StatusBoard from '@/components/StatusBoard';
import FeedPost from '@/components/FeedPost';
import ReportModal from '@/components/ReportModal';
import FeedbackModal from '@/components/FeedbackModal';
import CompletionScreen from '@/components/CompletionScreen';
import HomePage from '@/pages/HomePage';
import AprendaPage from '@/pages/AprendaPage';
import SegurancaPage from '@/pages/SegurancaPage';
import ComoAgirPage from '@/pages/ComoAgirPage';
import EscolasPage from '@/pages/EscolasPage';
import RecursosPage from '@/pages/RecursosPage';
import SobrePage from '@/pages/SobrePage';
import PrivacidadePage from '@/pages/PrivacidadePage';
import { Radar, FlaskConical } from 'lucide-react';

type GameState = 'playing' | 'complete';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [gameState, setGameState] = useState<GameState>('playing');
  const [feed] = useState<SimulatedPost[]>(CHALLENGES);
  const [resolvedIds, setResolvedIds] = useState<Set<string>>(new Set());
  const [resolved, setResolved] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [correctReports, setCorrectReports] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  const [activeReport, setActiveReport] = useState<SimulatedPost | null>(null);
  const [feedback, setFeedback] = useState<{
    post: SimulatedPost;
    selectedReason: ReportReason;
    isCorrect: boolean;
  } | null>(null);

  const remaining = feed.filter(p => !resolvedIds.has(p.id)).length;

  const navigateTo = useCallback((page: PageId) => {
    setCurrentPage(page);
  }, []);

  const resetGame = useCallback(() => {
    setResolvedIds(new Set());
    setResolved(0);
    setAttempts(0);
    setCorrectReports(0);
    setStreak(0);
    setMaxStreak(0);
    setGameState('playing');
  }, []);

  const handleReport = useCallback((post: SimulatedPost) => {
    setActiveReport(post);
  }, []);

  const handleSubmitReport = useCallback(
    (reasonId: string) => {
      if (!activeReport) return;
      const post = activeReport;
      const selectedReason = REPORT_REASONS.find(r => r.id === reasonId);
      if (!selectedReason) return;

      const isCorrect = post.correctReasonId === reasonId;
      setActiveReport(null);
      setFeedback({ post, selectedReason, isCorrect });

      if (isCorrect) {
        setResolvedIds(prev => {
          const next = new Set([...prev, post.id]);
          if (next.size >= feed.length) {
            setTimeout(() => setGameState('complete'), 100);
          }
          return next;
        });
        setResolved(prev => prev + 1);
        setAttempts(prev => prev + 1);
        setCorrectReports(prev => prev + 1);
        setStreak(prev => {
          const next = prev + 1;
          setMaxStreak(m => Math.max(m, next));
          return next;
        });
      } else {
        setAttempts(prev => prev + 1);
        setStreak(0);
      }
    },
    [activeReport, feed.length]
  );

  const handleFeedbackClose = useCallback(() => {
    if (!feedback) return;
    const wasCorrect = feedback.isCorrect;
    const post = feedback.post;
    setFeedback(null);
    if (!wasCorrect) {
      setTimeout(() => setActiveReport(post), 150);
    }
  }, [feedback]);

  // --- Page rendering ---
  const renderContentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'aprenda':
        return <AprendaPage onNavigate={navigateTo} />;
      case 'seguranca':
        return <SegurancaPage />;
      case 'como-agir':
        return <ComoAgirPage />;
      case 'escolas':
        return <EscolasPage />;
      case 'recursos':
        return <RecursosPage />;
      case 'sobre':
        return <SobrePage />;
      case 'privacidade':
        return <PrivacidadePage />;
      case 'laboratorio':
        return renderLaboratorio();
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  const renderLaboratorio = () => {
    if (gameState === 'complete') {
      return (
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="mb-6 flex items-center gap-2">
            <FlaskConical className="h-5 w-5 text-stc-primary" />
            <h2 className="font-display text-base font-semibold text-stc-text-primary">
              Laboratório de Situações Digitais
            </h2>
          </div>
          <CompletionScreen
            resolved={resolved}
            attempts={attempts}
            correctReports={correctReports}
            streak={maxStreak}
            onRestart={resetGame}
          />
        </div>
      );
    }

    return (
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-6">
          <div className="mb-4 flex items-center gap-2">
            <FlaskConical className="h-5 w-5 text-stc-primary" />
            <h2 className="font-display text-base font-semibold text-stc-text-primary">
              Laboratório de Situações Digitais
            </h2>
            <span className="text-xs text-stc-text-muted">
              ({remaining} casos restantes)
            </span>
          </div>
          <StatusBoard
            resolved={resolved}
            attempts={attempts}
            correctReports={correctReports}
            totalChallenges={feed.length}
            remaining={remaining}
            streak={streak}
          />
        </div>

        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Radar className="h-4 w-4 text-stc-primary animate-spin-slow" />
            <h3 className="font-display text-sm font-semibold text-stc-text-primary">
              Casos para Análise
            </h3>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {feed.map(post => (
            <FeedPost
              key={post.id}
              post={post}
              onReport={() => handleReport(post)}
              resolved={resolvedIds.has(post.id)}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <Layout currentPage={currentPage} onNavigate={navigateTo}>
      <div className="animate-fade-in">
        {renderContentPage()}
      </div>

      {activeReport && (
        <ReportModal
          post={activeReport}
          onClose={() => setActiveReport(null)}
          onSubmit={handleSubmitReport}
        />
      )}

      {feedback && (
        <FeedbackModal
          post={feedback.post}
          selectedReason={feedback.selectedReason}
          isCorrect={feedback.isCorrect}
          onClose={handleFeedbackClose}
          onContinue={handleFeedbackClose}
        />
      )}
    </Layout>
  );
}
