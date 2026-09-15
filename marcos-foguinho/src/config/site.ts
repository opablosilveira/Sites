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
      "Olá Marcos! Quero garantir minha vaga no Desafio 60 Dias com início imediato."
    )}`,
  },
  checkout: {
    challengeUrl: "https://checkout.exemplo.com/desafio-60-dias",
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
      name: "Desafio 60 Dias",
      duration: "60 Dias de Acompanhamento",
      tag: "TRANSFORMAÇÃO ACELERADA",
      description:
        "Protocolo intensivo com treino periodizado, direcionamento alimentar estratégico e rotina estruturada para você queimar gordura visceral e construir densidade muscular em 8 semanas.",
      price: "R$ 197",
      priceInstallments: "12x de R$ 19,70",
      features: [
        "Planilha de treinos focada em queima e hipertrofia",
        "Divisões adaptáveis para academia ou treino em casa",
        "Guia nutricional prático sem passar fome",
        "Comunidade exclusiva de alunos com suporte",
        "Vídeos de execução correta de cada movimento",
        "Acesso imediato à plataforma de alunos",
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
        "Ajustes quinzenais de carga, volume e estímulo",
        "Canal direto de WhatsApp para tirar dúvidas diárias",
        "Estratégia para atletas e praticantes dedicados",
      ],
    },
  },
};
