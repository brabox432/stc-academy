import { useState } from 'react';
import { Shield, Menu, X, Send, ExternalLink, GraduationCap } from 'lucide-react';
import { FORUM_URL, FORUM_LABEL, SITE_TITLE } from '@/types';

export type PageId =
  | 'home'
  | 'aprenda'
  | 'laboratorio'
  | 'seguranca'
  | 'como-agir'
  | 'escolas'
  | 'recursos'
  | 'sobre'
  | 'privacidade';

interface NavItem {
  id: PageId;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Início' },
  { id: 'aprenda', label: 'Aprenda' },
  { id: 'laboratorio', label: 'Laboratório' },
  { id: 'seguranca', label: 'Segurança e Direitos' },
  { id: 'como-agir', label: 'Como Agir' },
  { id: 'escolas', label: 'Para Escolas' },
  { id: 'recursos', label: 'Recursos' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'privacidade', label: 'Privacidade' },
];

interface LayoutProps {
  children: React.ReactNode;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export function Header({ currentPage, onNavigate }: { currentPage: PageId; onNavigate: (page: PageId) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-stc-border bg-stc-bg/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 group"
            aria-label="STC Academy - Página inicial"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-stc-primary/20 blur-lg rounded-lg transition-opacity group-hover:opacity-100 opacity-50" />
              <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-stc-primary/40 bg-stc-bg-soft">
                <Shield className="h-5 w-5 text-stc-primary" />
              </div>
            </div>
            <div className="text-left">
              <h1 className="font-display text-base font-bold tracking-tight text-stc-text-primary sm:text-lg">
                STC Academy
              </h1>
              <p className="text-[10px] text-stc-text-muted hidden sm:block">
                Cidadania Digital e Segurança Online
              </p>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-stc-primary bg-stc-primary/10'
                    : 'text-stc-text-secondary hover:text-stc-text-primary hover:bg-stc-panel/60'
                }`}
                aria-current={currentPage === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md text-stc-text-secondary hover:text-stc-text-primary hover:bg-stc-panel/60 transition-colors"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden border-t border-stc-border bg-stc-bg animate-fade-in" aria-label="Navegação mobile">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-stc-primary bg-stc-primary/10'
                    : 'text-stc-text-secondary hover:text-stc-text-primary hover:bg-stc-panel/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <footer className="border-t border-stc-border bg-stc-bg-soft mt-16">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-stc-primary/40 bg-stc-bg">
                <Shield className="h-4 w-4 text-stc-primary" />
              </div>
              <span className="font-display text-sm font-bold text-stc-text-primary">STC Academy</span>
            </div>
            <p className="text-xs text-stc-text-muted leading-relaxed">
              Iniciativa educativa independente de cidadania digital, prevenção de abusos online e comportamento responsável na internet.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stc-text-secondary mb-3">Navegação</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.slice(0, 5).map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-xs text-stc-text-muted hover:text-stc-primary transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stc-text-secondary mb-3">Mais</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.slice(5).map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-xs text-stc-text-muted hover:text-stc-primary transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stc-text-secondary mb-3">Comunidade</h3>
            <a
              href={FORUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-stc-primary/30 bg-stc-primary/10 px-4 py-2.5 text-xs font-medium text-stc-primary transition-all hover:bg-stc-primary/20 hover:border-stc-primary/50"
            >
              <Send className="h-3.5 w-3.5" />
              {FORUM_LABEL}
              <ExternalLink className="h-3 w-3 opacity-60" />
            </a>
            <p className="text-[10px] text-stc-text-muted mt-2">
              Participe do nosso fórum no Telegram para discussões sobre cidadania digital.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-stc-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-stc-text-muted text-center sm:text-left">
            © 2024 STC Academy. Iniciativa educativa independente. Sem vínculo oficial com governos, plataformas ou instituições.
          </p>
          <div className="flex items-center gap-2 text-[10px] text-stc-text-muted">
            <GraduationCap className="h-3.5 w-3.5 text-stc-primary/50" />
            <span>Conteúdo revisado em outubro de 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  return (
    <div className="min-h-screen stc-grid-bg flex flex-col">
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      <main className="flex-1">{children}</main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
