import { Link2, Phone, Shield, BookOpen, ExternalLink, Globe, FileText, AlertCircle } from 'lucide-react';

const RESOURCES = [
  {
    category: 'Emergências e Segurança Pública',
    items: [
      { name: 'Polícia Militar — Emergência 190', url: 'https://www.gov.br/mj/pt-br', description: 'Ligue em caso de perigo imediato ou ameaça física.' },
      { name: 'Disque 100 — Direitos Humanos', url: 'https://www.gov.br/mdh/pt-br/navegue-por-temas/criancas-e-adolescentes/disque-100', description: 'Denúncias de violações de direitos humanos, incluindo crianças e adolescentes.' },
      { name: '180 — Central de Atendimento à Mulher', url: 'https://www.gov.br/mdh/pt-br/navegue-por-temas/mulheres/ligue-180', description: 'Atendimento à mulher em situação de violência. Funciona 24h, é gratuito e sigiloso.' },
      { name: '188 — CVV (Centro de Valorização da Vida)', url: 'https://www.cvv.org.br', description: 'Apoio emocional e prevenção ao suicídio. Chat, email e telefone, 24h.' },
    ],
  },
  {
    category: 'Cybercrimes e Crimes Digitais',
    items: [
      { name: 'Cybercrime — Portal do Governo Federal', url: 'https://www.gov.br/mj/pt-br/assuntos/noticias/cybercrime', description: 'Informações sobre como registrar crimes digitais e boletim de ocorrência eletrônico.' },
      { name: 'Delegacia Eletrônica (estados)', url: 'https://www.gov.br/pt-br/servicos/registrar-boleim-de-ocorrencia-online', description: 'Registro de boletim de ocorrência online, disponível em diversos estados.' },
    ],
  },
  {
    category: 'Privacidade e Proteção de Dados',
    items: [
      { name: 'ANPD — Autoridade Nacional de Proteção de Dados', url: 'https://www.gov.br/anpd/pt-br', description: 'Órgão oficial responsável pela LGPD. Canal para reclamações e dúvidas sobre proteção de dados.' },
      { name: 'LGPD — Texto completo da lei', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm', description: 'Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais.' },
    ],
  },
  {
    category: 'Fact-Checking e Combate à Desinformação',
    items: [
      { name: 'Agência Lupa', url: 'https://piaui.folha.uol.com.br/lupa/', description: 'Maior agência de fact-checking do Brasil. Verificação de notícias e declarações.' },
      { name: 'Boatos.org', url: 'https://www.boatos.org', description: 'Banco de dados de boatos, correntes falsas e notícias falsas circulando na internet.' },
      { name: 'Comprova', url: 'https://projetocomprova.com.br', description: 'Coalizão de veículos de imprensa para verificação de conteúdo suspeito.' },
    ],
  },
  {
    category: 'Educação Digital e Midiática',
    items: [
      { name: 'BNCC — Base Nacional Comum Curricular', url: 'http://basenacionalcomum.mec.gov.br/', description: 'Diretrizes curriculares nacionais, incluindo competências sobre cultura digital.' },
      { name: 'SaferNet Brasil', url: 'https://www.safernet.org.br', description: 'ONG de combate a crimes online e promoção de cidadania digital. Canal de denúncia anônima.' },
    ],
  },
];

export default function RecursosPage() {
  return (
    <div className="animate-fade-in">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-stc-primary/20 bg-stc-primary/10 mb-4">
            <Link2 className="h-6 w-6 text-stc-primary" />
          </div>
          <h1 className="font-display text-3xl font-bold text-stc-text-primary mb-3">
            Recursos e Referências
          </h1>
          <p className="text-sm text-stc-text-secondary max-w-2xl mx-auto leading-relaxed">
            Fontes confiáveis, canais oficiais e materiais complementares para aprofundar seu conhecimento sobre cidadania digital.
          </p>
        </div>

        <div className="space-y-8">
          {RESOURCES.map((group) => (
            <div key={group.category}>
              <h2 className="font-display text-base font-semibold text-stc-text-primary mb-4">
                {group.category}
              </h2>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stc-card p-4 flex items-start gap-3 group"
                  >
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-stc-primary/20 bg-stc-primary/10">
                      <ExternalLink className="h-4 w-4 text-stc-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-stc-text-primary group-hover:text-stc-primary transition-colors">
                        {item.name}
                      </p>
                      <p className="text-xs text-stc-text-muted mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-stc-warning/20 bg-stc-warning/5 p-5">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-stc-warning shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-stc-text-primary mb-1">Sobre os links</h3>
              <p className="text-xs text-stc-text-secondary leading-relaxed">
                Os links listados são de fontes oficiais e organizações reconhecidas. Todos foram verificados em outubro de 2024. Se encontrar um link quebrado ou desatualizado, por favor nos avie pela página de contato. Não nos responsabilizamos pelo conteúdo de sites externos.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 stc-card p-6">
          <h2 className="font-display text-base font-semibold text-stc-text-primary mb-3">
            Referências Legais Utilizadas
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-stc-text-secondary">
              <FileText className="h-4 w-4 text-stc-primary shrink-0 mt-0.5" />
              Código Penal Brasileiro — Arts. 147 (Ameaça), 171 (Estelionato), 286 (Incitação), 307 (Falsificação de Identidade)
            </li>
            <li className="flex items-start gap-2 text-sm text-stc-text-secondary">
              <FileText className="h-4 w-4 text-stc-primary shrink-0 mt-0.5" />
              Lei nº 7.716/1989 (Lei Caó) — Crimes de preconceito e discriminação
            </li>
            <li className="flex items-start gap-2 text-sm text-stc-text-secondary">
              <FileText className="h-4 w-4 text-stc-primary shrink-0 mt-0.5" />
              Lei nº 13.709/2018 (LGPD) — Proteção de dados pessoais
            </li>
            <li className="flex items-start gap-2 text-sm text-stc-text-secondary">
              <FileText className="h-4 w-4 text-stc-primary shrink-0 mt-0.5" />
              Código Civil Art. 20 — Direito à imagem e direitos da personalidade
            </li>
            <li className="flex items-start gap-2 text-sm text-stc-text-secondary">
              <FileText className="h-4 w-4 text-stc-primary shrink-0 mt-0.5" />
              Código de Defesa do Consumidor (CDC) Art. 30 — Publicidade enganosa
            </li>
            <li className="flex items-start gap-2 text-sm text-stc-text-secondary">
              <FileText className="h-4 w-4 text-stc-primary shrink-0 mt-0.5" />
              Estatuto da Criança e do Adolescente (ECA) — Lei nº 8.069/1990
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
