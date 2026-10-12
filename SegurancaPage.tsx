import { Shield, Lock, KeyRound, UserCheck, Eye, FileText, AlertCircle } from 'lucide-react';

const SECTIONS = [
  {
    icon: Lock,
    title: 'Privacidade e LGPD',
    content: [
      'A Lei Geral de Proteção de Dados (LGPD) garante a você o controle sobre seus dados pessoais. Toda empresa que coleta seus dados deve informar claramente quais dados são coletados, para que servem, com quem são compartilhados e por quanto tempo são mantidos.',
      'Você tem o direito de solicitar acesso aos seus dados, corrigir informações incorretas, solicitar a exclusão (direito ao esquecimento) e revogar consentimento a qualquer momento.',
      'Dicas práticas: leia políticas de privacidade antes de aceitar, prefira serviços que minimizam coleta de dados, use senhas fortes e autenticação em dois fatores, e revise periodicamente as permissões dos aplicativos no seu celular.',
    ],
  },
  {
    icon: KeyRound,
    title: 'Proteção de Contas',
    content: [
      'Sua conta é sua identidade digital. Proteja-a como protegeria sua casa. Use senhas únicas e fortes para cada serviço, combine letras, números e símbolos, e nunca reutilize a senha do seu email principal em outros serviços.',
      'Ative a verificação em duas etapas (2FA) sempre que disponível. Isso adiciona uma camada de segurança: mesmo que alguém descubra sua senha, não conseguirá acessar sem o segundo fator.',
      'Cuidado com emails e mensagens que pedem para "verificar sua conta" ou "confirmar seus dados". Plataformas legítimas nunca pedem senhas por email. Em caso de dúvida, acesse o serviço diretamente pelo navegador, não por links em mensagens.',
    ],
  },
  {
    icon: UserCheck,
    title: 'Identidade Digital e Consentimento',
    content: [
      'Sua identidade digital é composta por tudo que existe sobre você online: perfis, fotos, comentários, histórias de navegação. Cada elemento contribui para como você é percebido — e pode ser usado contra você se cair nas mãos erradas.',
      'Consentimento significa permissão explícita, informada e livre. Ninguém pode usar sua imagem, seus dados ou sua voz sem seu consentimento. Isso vale para fotos, vídeos, áudios e qualquer conteúdo que te identifique.',
      'Pense antes de postar: conteúdo publicado na internet pode ser permanente, mesmo após excluído. Capturas de tela, arquivos em cache e plataformas de arquivamento podem preservar informações por anos. A regra é: não publique nada que você não gostaria que fosse visto daqui a 10 anos.',
    ],
  },
  {
    icon: Eye,
    title: 'Prevenção de Abusos Online',
    content: [
      'Abusos online incluem: assédio digital, exposição não consentida, ameaças, falsificação de identidade, discurso de ódio e doxxing. Cada tipo tem características específicas e formas de resposta apropriadas.',
      'A diferença entre conflito e abuso: discordar de alguém, debater ideias ou expressar crítica contundente não são abuso. Abuso envolve padrão de conduta que visa causar dano, medo ou humilhação, especialmente quando há desequilíbrio de poder.',
      'Se você sofre abuso online: não responda no calor do momento, registre as evidências (prints com data e URL), bloqueie o agressor, denuncie na plataforma e, se houver ameaça ou crime, registre boletim de ocorrência.',
    ],
  },
  {
    icon: FileText,
    title: 'Seus Direitos Digitais',
    content: [
      'Direito à imagem: ninguém pode usar sua foto ou vídeo sem seu consentimento. Se acontecer, você pode exigir remoção e buscar reparação civil (Art. 20 do Código Civil).',
      'Direito à honra: calúnia (imputar crime falso), difamação (manchar reputação) e injúria (ofender dignidade) são crimes previstos no Código Penal, mesmo quando cometidos online.',
      'Liberdade de expressão: você tem o direito de expressar opiniões, críticas e ideias — mesmo impopulares. Esse direito não protege discursos de ódio, incitação à violência, ameaças ou crimes. Conheça os limites para exercer seus direitos sem violar os dos outros.',
    ],
  },
  {
    icon: AlertCircle,
    title: 'Cuidados com Crianças e Adolescentes',
    content: [
      'O Estatuto da Criança e do Adolescente (ECA) estabelece proteção integral. Crianças e adolescentes são especialmente vulneráveis a abusos digitais e merecem atenção redobrada.',
      'Orientação para famílias: mantenha diálogo aberto sobre vida digital, conheça os apps que seus filhos usam, defina regras claras de uso, e ensine a não compartilhar dados pessoais, fotos ou localização com estranhos.',
      'Sinais de alerta: mudanças bruscas de comportamento, ansiedade ao usar dispositivos, isolamento social, ou resistência em falar sobre atividade online podem indicar cyberbullying ou groomin. Procure ajuda profissional se notar esses sinais.',
    ],
  },
];

export default function SegurancaPage() {
  return (
    <div className="animate-fade-in">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-stc-primary/20 bg-stc-primary/10 mb-4">
            <Shield className="h-6 w-6 text-stc-primary" />
          </div>
          <h1 className="font-display text-3xl font-bold text-stc-text-primary mb-3">
            Segurança e Direitos Digitais
          </h1>
          <p className="text-sm text-stc-text-secondary max-w-2xl mx-auto leading-relaxed">
            Tudo o que você precisa saber sobre privacidade, consentimento, identidade digital, proteção de contas e prevenção de abusos online.
          </p>
        </div>

        <div className="space-y-6">
          {SECTIONS.map((section) => (
            <div key={section.title} className="stc-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-stc-primary/20 bg-stc-primary/10">
                  <section.icon className="h-4.5 w-4.5 text-stc-primary" />
                </div>
                <h2 className="font-display text-lg font-semibold text-stc-text-primary">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-3">
                {section.content.map((paragraph, idx) => (
                  <p key={idx} className="text-sm text-stc-text-secondary leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-stc-warning/20 bg-stc-warning/5 p-5">
          <p className="text-xs text-stc-text-secondary leading-relaxed">
            <strong className="text-stc-warning">Aviso:</strong> As informações desta página têm caráter educativo e não substituem aconselhamento jurídico. Para questões específicas, consulte um advogado. Os conteúdos foram revisados em outubro de 2024 e podem ser atualizados conforme mudanças legislativas.
          </p>
        </div>
      </div>
    </div>
  );
}
