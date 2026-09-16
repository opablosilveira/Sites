export interface SiteConfig {
  name: string;
  nickname: string;
  tagline: string;
  bio: string;
  location: string;
  instagram: {
    handle: string;
    url: string;
    followers: string;
  };
  whatsapp: {
    number: string;
    generalUrl: string;
    consultingUrl: string;
    challengeUrl: string;
  };
  checkout: {
    challengeUrl: string;
    guaranteeDays: number;
  };
  authority: {
    experienceYears: string;
    activeStudents: string;
    npcChampionships: string;
    bjjTitle: string;
  };
  offers: {
    challenge: {
      name: string;
      duration: string;
      tag: string;
      description: string;
      price: string;
      priceInstallments: string;
      features: string[];
    };
    consulting: {
      name: string;
      target: string;
      tag: string;
      description: string;
      features: string[];
    };
  };
  reels: {
    challenge90DaysUrl: string;
    challenge90DaysTitle: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  name: "Marcos Fonseca",
  nickname: "Foguinho",
  tagline: "Do seu ponto de partida ao físico que você busca.",
  bio: "Faixa preta de Jiu-Jitsu, preparador físico de alta performance e treinador de atletas campeões Overall NPC. Transformando vidas e físicos no Brasil e no exterior.",
  location: "Maranhão, Brasil • Atendimento Global",
  instagram: {
    handle: "@foguinhobjj",
    url: "https://www.instagram.com/foguinhobjj/",
    followers: "+90 mil",
  },
  whatsapp: {
    number: "5598988888888",
    generalUrl: `https://wa.me/5598988888888?text=${encodeURIComponent(
      "Olá Marcos! Vi o seu site e gostaria de saber mais sobre seu acompanhamento e vagas disponíveis."
    )}`,
    consultingUrl: `https://wa.me/5598988888888?text=${encodeURIComponent(
      "Olá Marcos! Quero me candidatar para a Consultoria Individualizada (Brasil & Exterior). Como funciona a aplicação?"
    )}`,
    challengeUrl: `https://wa.me/5598988888888?text=${encodeURIComponent(
      "Olá Marcos! Quero garantir minha vaga no Desafio 90 Dias com início imediato."
    )}`,
  },
  checkout: {
    challengeUrl: "https://checkout.exemplo.com/desafio-90-dias",
    guaranteeDays: 7,
  },
  authority: {
    experienceYears: "+10 Anos",
    activeStudents: "+90.000",
    npcChampionships: "Campeão Overall NPC",
    bjjTitle: "Faixa Preta BJJ",
  },
  offers: {
    challenge: {
      name: "Desafio 90 Dias",
      duration: "90 Dias (12 Semanas de Acompanhamento)",
      tag: "TRANSFORMAÇÃO ACELERADA",
      description:
        "Protocolo intensivo de 12 semanas com treino periodizado, direcionamento alimentar estratégico e rotina estruturada para você queimar gordura visceral e construir densidade muscular máxima.",
      price: "R$ 197",
      priceInstallments: "12x de R$ 19,70",
      features: [
        "Planilha completa de 90 dias focada em queima e hipertrofia",
        "Divisões adaptáveis para academia ou treino em casa",
        "Guia nutricional prático sem passar fome nem dietas malucas",
        "Comunidade exclusiva de alunos com suporte contínuo",
        "Vídeos demonstrativos de execução correta de cada exercício",
        "Acesso imediato à plataforma de treinamento",
      ],
    },
    consulting: {
      name: "Consultoria Individual Online",
      target: "Brasil e Exterior",
      tag: "ALTO RENDIMENTO & INDIVIDUALIDADE",
      description:
        "Acompanhamento personalizado diretamente com Marcos Fonseca. Análise biomecânica, periodização individual com base na sua rotina e suporte contínuo via WhatsApp.",
      features: [
        "Avaliação física completa e anamnese profunda",
        "Periodização sob medida (ganho seco ou secagem extrema)",
        "Adaptação para fuso horário de alunos no exterior",
        "Ajustes periódicos de carga, volume e estímulo muscular",
        "Canal direto de WhatsApp para tirar dúvidas diárias",
        "Estratégia para atletas e praticantes dedicados",
      ],
    },
  },
  reels: {
    challenge90DaysUrl: "https://www.instagram.com/p/DY-75D2RQYV/",
    challenge90DaysTitle: "Final do Desafio 90 Dias — Antes e Depois",
  },
};
