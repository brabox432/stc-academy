import { School, Clock, Target, Users, MessageSquare, FileText, Presentation, FlaskConical, ChevronRight, Mail } from 'lucide-react';

const LESSON_PLANS = [
  {
    title: 'Introdução à Cidadania Digital',
    duration: '20 minutos',
    ageRange: '12-14 anos',
    objectives: [
      'Compreender o conceito de cidadania digital',
      'Identificar diferenças entre mundo online e offline',
      'Reconhecer a permanência do conteúdo digital',
    ],
    activities: [
      'Discussão em grupo: "O que acontece quando apago uma postagem?"',
      'Exercício individual: listar 3 dados pessoais que você compartilha online',
    ],
    debateQuestions: [
      'Tudo o que postamos fica para sempre? Por quê?',
      'Existe diferença entre falar algo pessoalmente e online?',
    ],
  },
  {
    title: 'Identificando Abusos Online',
    duration: '45 minutos',
    ageRange: '14-16 anos',
    objectives: [
      'Distinguir conflito pessoal de abuso digital',
      'Identificar tipos de abusos: phishing, doxxing, ameaças, discurso de ódio',
      'Compreender o sistema de denúncias e seu uso responsável',
    ],
    activities: [
      'Laboratório de Situações Digitais: completar 5 cenários do nível Iniciante',
      'Análise em grupo: discutir um caso fictício e identificar se há infração',
      'Produção individual: escrever um roteiro de denúncia responsável',
    ],
    debateQuestions: [
      'Quando uma opinião forte vira discurso de ódio?',
      'É certo denunciar alguém só porque discordamos dele?',
      'Qual a diferença entre expor alguém e denunciar às autoridades?',
    ],
  },
  {
    title: 'Privacidade e LGPD na Prática',
    duration: '45 minutos',
    ageRange: '14-18 anos',
    objectives: [
      'Entender os princípios básicos da LGPD',
      'Identificar quais dados pessoais são compartilhados online',
      'Aprender a configurar privacidade em redes sociais',
    ],
    activities: [
      'Audit de privacidade: revisar permissões de um app popular em sala',
      'Role-play: alunos simulam solicitar acesso a dados pessoais de uma empresa',
      'Produção em grupo: criar um guia de privacidade para a turma',
    ],
    debateQuestions: [
      'Se um serviço é gratuito, estamos pagando com nossos dados?',
      'Quem é responsável por proteger nossos dados: nós, as empresas, ou o governo?',
    ],
  },
  {
    title: 'Desinformação e Pensamento Crítico',
    duration: '45 minutos',
    ageRange: '16-18 anos',
    objectives: [
      'Identificar técnicas de desinformação',
      'Reconhecer conteúdo manipulado por IA',
      'Aplicar fact-checking em notícias suspeitas',
    ],
    activities: [
      'Análise de 3 notícias: uma verdadeira, uma manipulada, uma gerada por IA',
      'Exercício de fact-checking usando ferramentas online (Lupa, Boatos.org)',
      'Debate estruturado: "Redes sociais têm responsabilidade sobre desinformação?"',
    ],
    debateQuestions: [
      'Como distinguir uma opinião de um fato?',
      'Deepfakes deveriam ser proibidos? Em quais contextos?',
      'Qual o papel de cada usuário na cadeia de desinformação?',
    ],
  },
  {
    title: 'Nível Avançado: Análise de Casos Complexos',
    duration: '45 minutos',
    ageRange: '16-18 anos',
    objectives: [
      'Analisar casos com contexto insuficiente',
      'Identificar quando múltiplas categorias parecem plausíveis',
      'Compreender quando a melhor decisão é não denunciar ou encaminhar a autoridades',
    ],
    activities: [
      'Laboratório de Situações Digitais: completar 5 cenários do nível Avançado',
      'Estudo de caso em grupo: analisar um caso complexo e justificar a decisão',
      'Apresentação: cada grupo apresenta seu raciocínio e recebe feedback da turma',
    ],
    debateQuestions: [
      'É possível que uma denúncia correta cause mais dano que o próprio conteúdo?',
      'Quando a segurança imediata deve ter prioridade sobre a análise de conteúdo?',
      'Como decidir entre denunciar na plataforma e acionar autoridades?',
    ],
  },
];

const MATERIALS = [
  { icon: FileText, title: 'Planos de aula completos', desc: 'Roteiros estruturados com objetivos, atividades e avaliações.' },
  { icon: FlaskConical, title: 'Cenários educativos fictícios', desc: 'Casos para uso em sala, prontos para discussão.' },
  { icon: MessageSquare, title: 'Questionários de avaliação formativa', desc: 'Avaliações rápidas para medir aprendizado.' },
  { icon: Presentation, title: 'Guia de apresentação para coordenação', desc: 'Material para apresentar a STC Academy à direção escolar.' },
];

export default function EscolasPage() {
  return (
    <div className="animate-fade-in">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-stc-primary/20 bg-stc-primary/10 mb-4">
            <School className="h-6 w-6 text-stc-primary" />
          </div>
          <h1 className="font-display text-3xl font-bold text-stc-text-primary mb-3">
            Para Escolas e Educadores
          </h1>
          <p className="text-sm text-stc-text-secondary max-w-2xl mx-auto leading-relaxed">
            Materiais pedagógicos prontos para uso em sala de aula, presenciais ou remotos. Planos de aula, atividades, cenários fictícios e orientações para mediação de discussões delicadas.
          </p>
        </div>

        {/* Materials */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-12">
          {MATERIALS.map((mat) => (
            <div key={mat.title} className="stc-card p-5">
              <div className="flex items-start gap-3">
                <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-stc-primary/20 bg-stc-primary/10">
                  <mat.icon className="h-4.5 w-4.5 text-stc-primary" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-stc-text-primary">{mat.title}</h3>
                  <p className="text-xs text-stc-text-muted mt-1">{mat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lesson Plans */}
        <h2 className="font-display text-xl font-semibold text-stc-text-primary mb-6">
          Planos de Aula
        </h2>

        <div className="space-y-5">
          {LESSON_PLANS.map((plan, idx) => (
            <div key={idx} className="stc-card p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <h3 className="font-display text-base font-semibold text-stc-text-primary">
                  {plan.title}
                </h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded border border-stc-primary/30 bg-stc-primary/10 text-stc-primary">
                    <Clock className="h-3 w-3" />
                    {plan.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded border border-stc-secondary/30 bg-stc-secondary/10 text-stc-secondary">
                    <Users className="h-3 w-3" />
                    {plan.ageRange}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Target className="h-3.5 w-3.5 text-stc-primary" />
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-stc-text-secondary">Objetivos</h4>
                  </div>
                  <ul className="space-y-1.5">
                    {plan.objectives.map((obj, i) => (
                      <li key={i} className="text-xs text-stc-text-muted leading-relaxed flex items-start gap-1.5">
                        <span className="text-stc-primary mt-0.5">•</span>
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <FileText className="h-3.5 w-3.5 text-stc-primary" />
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-stc-text-secondary">Atividades</h4>
                  </div>
                  <ul className="space-y-1.5">
                    {plan.activities.map((act, i) => (
                      <li key={i} className="text-xs text-stc-text-muted leading-relaxed flex items-start gap-1.5">
                        <span className="text-stc-primary mt-0.5">•</span>
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <MessageSquare className="h-3.5 w-3.5 text-stc-primary" />
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-stc-text-secondary">Debate</h4>
                  </div>
                  <ul className="space-y-1.5">
                    {plan.debateQuestions.map((q, i) => (
                      <li key={i} className="text-xs text-stc-text-muted leading-relaxed italic">
                        "{q}"
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mediation guide */}
        <div className="mt-12 stc-card p-6">
          <h2 className="font-display text-lg font-semibold text-stc-text-primary mb-4">
            Orientações para Mediação de Discussões Delicadas
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-stc-text-secondary">
              <span className="text-stc-primary mt-0.5">•</span>
              Estabeleça um acordo de convivência antes de iniciar discussões sobre abusos digitais.
            </li>
            <li className="flex items-start gap-2 text-sm text-stc-text-secondary">
              <span className="text-stc-primary mt-0.5">•</span>
              Use apenas cenários fictícios. Nunca use casos reais envolvendo alunos da turma ou da escola.
            </li>
            <li className="flex items-start gap-2 text-sm text-stc-text-secondary">
              <span className="text-stc-primary mt-0.5">•</span>
              Evite identificar alunos que já passaram por situações de abuso digital, mesmo que voluntariamente.
            </li>
            <li className="flex items-start gap-2 text-sm text-stc-text-secondary">
              <span className="text-stc-primary mt-0.5">•</span>
              Mantenha tom neutro e educativo. Não demonize plataformas nem usuários — foque no comportamento.
            </li>
            <li className="flex items-start gap-2 text-sm text-stc-text-secondary">
              <span className="text-stc-primary mt-0.5">•</span>
              Ofereça canal privado para alunos que queiram relatar situações pessoais após a aula.
            </li>
          </ul>
        </div>

        {/* BNCC note */}
        <div className="mt-8 rounded-lg border border-stc-primary/20 bg-stc-primary/5 p-5">
          <h3 className="font-display text-sm font-semibold text-stc-primary mb-2">
            Alinhamento com a BNCC
          </h3>
          <p className="text-xs text-stc-text-secondary leading-relaxed mb-2">
            Os conteúdos da STC Academy buscam dialogar com as competências da BNCC relacionadas à cultura digital, pensamento científico e cidadania. A aplicação em sala requer adaptação ao projeto pedagógico da escola. Para expansão internacional, os conteúdos podem ser adaptados às diretrizes educacionais de cada região.
          </p>
          <p className="text-[10px] text-stc-text-muted">
            Nota: O alinhamento à BNCC não constitui aprovação oficial ou certificação do MEC. A validação pedagógica formal deve ser conduzida pela instituição de ensino.
          </p>
        </div>

        {/* Pilot project */}
        <div className="mt-8 stc-card p-6 text-center">
          <Mail className="h-8 w-8 text-stc-primary mx-auto mb-3" />
          <h2 className="font-display text-lg font-semibold text-stc-text-primary mb-2">
            Projeto-Piloto para Escolas
          </h2>
          <p className="text-sm text-stc-text-secondary leading-relaxed max-w-2xl mx-auto mb-4">
            Escolas interessadas em participar de um projeto-piloto de aplicação da STC Academy em sala de aula podem manifestar interesse. A participação envolve feedback estruturado sobre os materiais e sugestões de melhoria.
          </p>
          <p className="text-xs text-stc-text-muted">
            Entre em contato pela página de Privacidade e Contato para mais informações.
          </p>
        </div>
      </div>
    </div>
  );
}
