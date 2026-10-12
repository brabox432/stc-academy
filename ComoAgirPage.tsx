import { AlertTriangle, Flag, Phone, Shield, FileText, Ban, Users, Eye, Copy, MessageCircle, Scale, AlertCircle } from 'lucide-react';

const SITUATIONS = [
  {
    icon: Eye,
    title: 'Exposição Não Consentida',
    steps: [
      'Não compartilhe ou reposte o conteúdo — isso amplifica o dano.',
      'Registre: faça captura de tela com data, URL completa e contexto.',
      'Solicite a remoção diretamente à plataforma usando a opção de denúncia.',
      'Se envolver seus dados pessoais (CPF, endereço, telefone), cite a LGPD na solicitação.',
      'Se a暴露 persistir ou causar dano, registre boletim de ocorrência (cybercrime).',
    ],
  },
  {
    icon: Users,
    title: 'Assédio Digital / Cyberbullying',
    steps: [
      'Não responda no calor do momento — reações alimentam o agressor.',
      'Registre todas as mensagens, comentários e prints com data e URL.',
      'Bloqueie o agressor em todas as plataformas.',
      'Denuncie na plataforma com o maior número de evidências possível.',
      'Se houver ameaças ou o assédio envolver menor, registre boletim de ocorrência.',
      'Busque apoio emocional: fale com pessoas de confiança ou procure ajuda profissional.',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Ameaças Online',
    steps: [
      'Leve toda ameaça a sério, mesmo que pareça "só palavras". Ameaça é crime.',
      'Registre imediatamente: print com data, URL, perfil do autor e contexto completo.',
      'Não delete as mensagens — elas são evidências.',
      'Se houver risco iminente à integridade física, ligue 190 imediatamente.',
      'Registre boletim de ocorrência (Art. 147 CP — Ameaça).',
      'Solicite medidas protetivas se necessário.',
    ],
  },
  {
    icon: Copy,
    title: 'Falsificação de Identidade',
    steps: [
      'Registre o perfil falso: URL, prints, data de descoberta.',
      'Denuncie o perfil na plataforma como "falsificação de identidade".',
      'Notifique amigos e contatos para que não caiam no golpe.',
      'Se o perfil falso cometeu crimes em seu nome (golpe, pedido de dinheiro), registre BO.',
      'Em casos de uso de sua imagem, cite direitos da personalidade (Art. 20 CC).',
    ],
  },
  {
    icon: Flag,
    title: 'Denúncia de Má-Fé',
    steps: [
      'Se você está sendo alvo de denúncias em massa coordenadas, documente o padrão.',
      'Registre quem está coordenando, em quais grupos, e os prints das instruções.',
      'Contate a plataforma explicando que é alvo de campanha coordenada de denúncias.',
      'Plataformas têm mecanismos para identificar abuso do sistema de denúncias.',
      'Se houver difamação associada, registre boletim de ocorrência.',
    ],
  },
  {
    icon: FileText,
    title: 'Desinformação e Conteúdo Manipulado por IA',
    steps: [
      'Antes de compartilhar: verifique a fonte. Procure a origem da informação.',
      'Use ferramentas de fact-checking: Agência Lupa, Boatos.org, Google Imagens (busca reversa).',
      'Desconfie de conteúdo sensacionalista com apelo emocional forte ("compartilhem antes que tirem do ar").',
      'Para imagens: busque por sinais de manipulação (dedos errados, sombras inconsistentes, artefatos de IA).',
      'Se confirmar que é falso: não compartilhe, denuncie na plataforma como desinformação.',
      'Se foi criado sobre você: denuncie como conteúdo manipulado/falsificação.',
    ],
  },
];

export default function ComoAgirPage() {
  return (
    <div className="animate-fade-in">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-stc-primary/20 bg-stc-primary/10 mb-4">
            <AlertTriangle className="h-6 w-6 text-stc-primary" />
          </div>
          <h1 className="font-display text-3xl font-bold text-stc-text-primary mb-3">Como Agir</h1>
          <p className="text-sm text-stc-text-secondary max-w-2xl mx-auto leading-relaxed">
            Orientações práticas para lidar com conflitos, exposição indevida, ameaças, falsificação de identidade, desinformação e outros incidentes digitais.
          </p>
        </div>

        {/* Emergency notice */}
        <div className="mb-8 rounded-lg border border-stc-error/30 bg-stc-error/10 p-5">
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-stc-error shrink-0 mt-0.5" />
            <div>
              <h2 className="font-display text-sm font-semibold text-stc-error mb-1">
                Emergência ou Perigo Iminente
              </h2>
              <p className="text-xs text-stc-text-secondary leading-relaxed">
                Se você ou alguém está em perigo imediato, ligue <strong className="text-stc-error">190 (Polícia Militar)</strong> ou <strong className="text-stc-error">188 (CVV — apoio emocional)</strong>. Não espere resolver online o que exige atendimento presencial.
              </p>
            </div>
          </div>
        </div>

        {/* Responsible Reporting Section */}
        <div className="stc-card p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-stc-primary/20 bg-stc-primary/10">
              <Flag className="h-4.5 w-4.5 text-stc-primary" />
            </div>
            <h2 className="font-display text-lg font-semibold text-stc-text-primary">
              Como Denunciar com Responsabilidade
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-stc-text-primary mb-2">Discordar não é denunciar</h3>
              <p className="text-sm text-stc-text-secondary leading-relaxed">
                Discordar de alguém, debater ideias ou achar uma opinião ofensiva não significa que houve violação de regras. Denúncia deve ser usada quando há violação concreta das diretrizes da plataforma ou da lei — não como ferramenta para silenciar opiniões divergentes.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-stc-text-primary mb-2">Boas práticas de registro</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-stc-text-secondary">
                  <span className="text-stc-primary mt-0.5">•</span>
                  Registre a URL completa do conteúdo, não apenas print.
                </li>
                <li className="flex items-start gap-2 text-sm text-stc-text-secondary">
                  <span className="text-stc-primary mt-0.5">•</span>
                  Anote data, horário e contexto relevante.
                </li>
                <li className="flex items-start gap-2 text-sm text-stc-text-secondary">
                  <span className="text-stc-primary mt-0.5">•</span>
                  Não divulgue informações pessoais de envolvidos ao compartilhar o caso.
                </li>
                <li className="flex items-start gap-2 text-sm text-stc-text-secondary">
                  <span className="text-stc-primary mt-0.5">•</span>
                  Encaminhe apenas aos canais apropriados — não a grupos públicos.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-stc-text-primary mb-2">O que uma plataforma pode e não pode fazer</h3>
              <p className="text-sm text-stc-text-secondary leading-relaxed">
                Uma plataforma pode analisar denúncias, restringir conteúdo que viole suas diretrizes e preservar registros conforme suas regras e obrigações legais. No entanto, nenhuma plataforma garante que uma denúncia congelará mensagens, impedirá sua exclusão ou banirá uma conta automaticamente. O resultado depende da análise interna e das políticas de cada serviço.
              </p>
            </div>

            <div className="rounded-md border border-stc-error/20 bg-stc-error/5 p-4">
              <div className="flex items-start gap-2">
                <Ban className="h-4 w-4 text-stc-error shrink-0 mt-0.5" />
                <p className="text-xs text-stc-text-secondary leading-relaxed">
                  <strong className="text-stc-error">Nunca:</strong> organize campanhas coordenadas de denúncias, exponha suspeitos publicamente, faça denúncias falsas ou use o sistema de denúncias como arma em conflitos pessoais. Isso configura abuso e pode ser crime.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Situations */}
        <h2 className="font-display text-xl font-semibold text-stc-text-primary mb-6">
          Situações Comuns e Como Responder
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {SITUATIONS.map((sit) => (
            <div key={sit.title} className="stc-card p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-stc-primary/20 bg-stc-primary/10">
                  <sit.icon className="h-4.5 w-4.5 text-stc-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-stc-text-primary">
                  {sit.title}
                </h3>
              </div>
              <ol className="space-y-2">
                {sit.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-stc-text-secondary">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stc-primary/10 text-[10px] font-semibold text-stc-primary mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-stc-warning/20 bg-stc-warning/5 p-5">
          <div className="flex items-start gap-3">
            <Scale className="h-5 w-5 text-stc-warning shrink-0 mt-0.5" />
            <p className="text-xs text-stc-text-secondary leading-relaxed">
              <strong className="text-stc-warning">Importante:</strong> As orientações acima são educativas e baseadas nas boas práticas de segurança digital e na legislação brasileira. Em situações reais envolvendo crimes, procure sempre as autoridades competentes. O conteúdo foi revisado em outubro de 2024.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
