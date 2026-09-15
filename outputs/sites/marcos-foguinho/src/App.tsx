import React, { useState, useEffect, useRef } from 'react';
import {
  Flame,
  Dumbbell,
  ShieldCheck,
  Zap,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  MessageCircle,
  Menu,
  X,
  Lock,
  ChevronRight,
  Award,
  Users,
  Trophy,
  ExternalLink
} from 'lucide-react';
import { SITE_CONFIG } from './config/site';
import './styles.css';
import './responsive.css';

const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const privacyModalRef = useRef<HTMLDialogElement>(null);

  // IntersectionObserver para reveal suave ao scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const openPrivacyModal = () => {
    privacyModalRef.current?.showModal();
  };

  const closePrivacyModal = () => {
    privacyModalRef.current?.close();
  };

  return (
    <>
      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo principal
      </a>

      {/* ============================================================
          1. HEADER
          ============================================================ */}
      <header className="header" role="banner">
        <div className="section-container header-inner">
          <a href="#" className="brand" aria-label="Marcos Fonseca Personal Trainer Início">
            <div className="brand-mark">MF</div>
            <div className="brand-text">
              <span className="brand-title">{SITE_CONFIG.name}</span>
              <span className="brand-subtitle">{SITE_CONFIG.nickname} | Personal</span>
            </div>
          </a>

          <nav
            className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}
            role="navigation"
            aria-label="Navegação Principal"
          >
            <a href="#diagnostico" onClick={closeMobileMenu}>
              Diagnóstico
            </a>
            <a href="#metodo" onClick={closeMobileMenu}>
              Método
            </a>
            <a href="#ofertas" onClick={closeMobileMenu}>
              Programas
            </a>
            <a href="#autoridade" onClick={closeMobileMenu}>
              Sobre Marcos
            </a>
            <a href="#resultados" onClick={closeMobileMenu}>
              Resultados
            </a>
            <a href="#faq" onClick={closeMobileMenu}>
              Dúvidas
            </a>
          </nav>

          <div className="header-actions">
            <a
              href={SITE_CONFIG.whatsapp.consultingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="header-cta"
              id="header-cta-btn"
            >
              <MessageCircle size={15} />
              <span>Vagas Consultoria</span>
            </a>

            <button
              className="menu-toggle"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* ============================================================
          CONTEÚDO PRINCIPAL
          ============================================================ */}
      <main id="conteudo-principal">
        {/* ============================================================
            2. HERO SECTION
            ============================================================ */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="section-container hero-grid">
            <div className="hero-content">
              <span className="eyebrow">Consultoria &amp; Alta Performance</span>
              <h1 id="hero-title">
                Do seu ponto de partida ao <em>físico que você busca</em>
              </h1>
              <p className="hero-lead">
                O método validado que já transformou centenas de físicos no Brasil e no exterior.
                Da queima acelerada de gordura à preparação de atletas campeões Overall NPC.
              </p>

              <div className="hero-buttons">
                <a
                  href="#ofertas"
                  className="btn btn-fire"
                  id="hero-primary-cta"
                >
                  <span>Conhecer o Desafio 60 Dias</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href={SITE_CONFIG.whatsapp.consultingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  id="hero-secondary-cta"
                >
                  <MessageCircle size={16} />
                  <span>Consultoria Individual</span>
                </a>
              </div>

              <div className="trust-stats">
                <div className="trust-item">
                  <strong>{SITE_CONFIG.authority.activeStudents}</strong>
                  <span>Seguidores Reais</span>
                </div>
                <div className="trust-item">
                  <strong>{SITE_CONFIG.authority.npcChampionships}</strong>
                  <span>Títulos em Fisiculturismo</span>
                </div>
                <div className="trust-item">
                  <strong>{SITE_CONFIG.authority.bjjTitle}</strong>
                  <span>Disciplina Marcial</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="portrait-wrapper">
                <img
                  src="/images/marcos-hero.png"
                  alt="Marcos Fonseca Foguinho Personal Trainer"
                  width="450"
                  height="450"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="portrait-caption">
                  <span>Treinador &amp; Atleta</span>
                  <strong>Marcos Fonseca</strong>
                </div>
              </div>

              {/* Selo 60 Dias */}
              <div className="seal-badge" aria-label="Desafio 60 Dias">
                <strong>60</strong>
                <span>Dias</span>
              </div>

              {/* Chip Status */}
              <div className="live-chip">
                <span className="live-dot" />
                <span>Vagas Abertas • 2026</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            3. FAIXA ANIMADA (MARQUEE)
            ============================================================ */}
        <section className="marquee-bar" aria-label="Destaques do Método">
          <div className="marquee-content">
            <span>HIPERTROFIA REAL</span>
            <b>•</b>
            <span>DEFINIÇÃO ACELERADA</span>
            <b>•</b>
            <span>DESAFIO 60 DIAS</span>
            <b>•</b>
            <span>DISCIPLINA DO JIU-JITSU</span>
            <b>•</b>
            <span>CONSULTORIA BRASIL &amp; EXTERIOR</span>
            <b>•</b>
            <span>SEM DIETAS MALUCAS</span>
            <b>•</b>
            <span>PREPARAÇÃO DE CAMPEÕES</span>
            <b>•</b>
            <span>HIPERTROFIA REAL</span>
            <b>•</b>
            <span>DEFINIÇÃO ACELERADA</span>
            <b>•</b>
            <span>DESAFIO 60 DIAS</span>
            <b>•</b>
            <span>DISCIPLINA DO JIU-JITSU</span>
            <b>•</b>
            <span>CONSULTORIA BRASIL &amp; EXTERIOR</span>
            <b>•</b>
            <span>SEM DIETAS MALUCAS</span>
            <b>•</b>
            <span>PREPARAÇÃO DE CAMPEÕES</span>
            <b>•</b>
          </div>
        </section>

        {/* ============================================================
            4. DIAGNÓSTICO
            ============================================================ */}
        <section id="diagnostico" className="diagnosis-section" aria-labelledby="diag-title">
          <div className="section-container diagnosis-grid reveal">
            <div className="diagnosis-intro">
              <span className="eyebrow">Diagnóstico Real</span>
              <h2 id="diag-title">Por que você treina duro e o resultado não aparece?</h2>
              <p>
                A maioria das pessoas passa meses na academia repetindo séries no piloto automático,
                cortando carboidratos e seguindo fichas genéricas de aplicativo. O problema não é falta de
                força de vontade — é a ausência de um método de estímulo e progressão ajustado para a sua realidade.
              </p>
            </div>

            <div className="error-card-list">
              <div className="error-card">
                <span className="error-index">01</span>
                <div className="error-text">
                  <h3>Treinar sem progressão de sobrecarga</h3>
                  <p>Repetir as mesmas cargas e repetições todo mês faz seu corpo se adaptar e estagnar a queima calórica.</p>
                </div>
                <AlertTriangle size={20} className="error-icon" />
              </div>

              <div className="error-card">
                <span className="error-index">02</span>
                <div className="error-text">
                  <h3>Dietas restritivas que destroem o metabolismo</h3>
                  <p>Cortar tudo de uma vez desacelera seu gasto energético basal e causa compulsão no fim de semana.</p>
                </div>
                <AlertTriangle size={20} className="error-icon" />
              </div>

              <div className="error-card">
                <span className="error-index">03</span>
                <div className="error-text">
                  <h3>Falta de periodização entre força e volume</h3>
                  <p>Sem variar o tipo de estresse na fibra muscular, você não constrói a densidade que dá o aspecto de físico seco e atlético.</p>
                </div>
                <AlertTriangle size={20} className="error-icon" />
              </div>

              <div className="error-card">
                <span className="error-index">04</span>
                <div className="error-text">
                  <h3>Falta de acompanhamento individualizado</h3>
                  <p>Dúvidas simples de execução e ajuste de carga ignoradas durante semanas comprometem meses inteiros de dedicação.</p>
                </div>
                <AlertTriangle size={20} className="error-icon" />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            5. MÉTODO
            ============================================================ */}
        <section id="metodo" className="method-section" aria-labelledby="method-title">
          <div className="section-container reveal">
            <div className="method-header">
              <div>
                <span className="eyebrow">O Método Marcos Fonseca</span>
                <h2 id="method-title">Construído no tatame, lapidado no palco da NPC</h2>
              </div>
              <p>
                Unimos a disciplina inegociável do Jiu-Jitsu à biomecânica da musculação moderna.
                Você aprende a treinar com intenção, intensidade e estratégia para que cada minuto na academia gere resposta hormonal e visual.
              </p>
            </div>

            <div className="pillars-grid">
              <div className="pillar-card">
                <span className="pillar-num">PILAR 01</span>
                <div className="pillar-icon-box">
                  <Dumbbell size={32} />
                </div>
                <h3>Periodização Estruturada</h3>
                <p>
                  Treinos planejados com divisão inteligente de grupos musculares, respeitando a recuperação para estimular crescimento contínuo.
                </p>
              </div>

              <div className="pillar-card">
                <span className="pillar-num">PILAR 02</span>
                <div className="pillar-icon-box">
                  <Zap size={32} />
                </div>
                <h3>Densidade e Intensidade</h3>
                <p>
                  Menos tempo perdido mexendo no celular e mais cadência e tensão mecânica por repetição. Treinos eficientes em 45 a 60 minutos.
                </p>
              </div>

              <div className="pillar-card">
                <span className="pillar-num">PILAR 03</span>
                <div className="pillar-icon-box">
                  <ShieldCheck size={32} />
                </div>
                <h3>Estratégia Metabólica</h3>
                <p>
                  Ajustes para que seu corpo use gordura como combustível sem perder massa muscular, com uma rotina alimentar viável e duradoura.
                </p>
              </div>

              <div className="pillar-card">
                <span className="pillar-num">PILAR 04</span>
                <div className="pillar-icon-box">
                  <Flame size={32} />
                </div>
                <h3>Mentalidade Marcial</h3>
                <p>
                  A constância supera a motivação temporária. Implementamos um padrão de disciplina e direcionamento que vira estilo de vida.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            6. OFERTAS
            ============================================================ */}
        <section id="ofertas" className="offers-section" aria-labelledby="offers-title">
          <div className="section-container reveal">
            <div className="offers-header">
              <span className="eyebrow">Programas &amp; Acompanhamento</span>
              <h2 id="offers-title">Escolha o formato ideal para a sua transformação</h2>
              <p>
                Seja para dar uma virada de chave imediata com o Desafio 60 Dias ou receber acompanhamento
                personalizado e sob medida na Consultoria Individual Online.
              </p>
            </div>

            <div className="offers-grid">
              {/* Card 1: Desafio 60 Dias */}
              <div className="offer-card offer-card-challenge" id="card-desafio-60">
                <div className="offer-tag">
                  <Flame size={14} />
                  <span>{SITE_CONFIG.offers.challenge.tag}</span>
                </div>
                <h3>{SITE_CONFIG.offers.challenge.name}</h3>
                <p className="offer-desc">{SITE_CONFIG.offers.challenge.description}</p>

                <ul className="offer-features">
                  {SITE_CONFIG.offers.challenge.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="offer-pricing">
                  <span>Valor Especial de Início</span>
                  <div className="offer-price-val">{SITE_CONFIG.offers.challenge.price}</div>
                  <span className="offer-price-installments">
                    ou em até {SITE_CONFIG.offers.challenge.priceInstallments} no cartão
                  </span>
                </div>

                <a
                  href={SITE_CONFIG.checkout.challengeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-fire"
                  id="cta-checkout-desafio"
                >
                  <span>Garantir Vaga no Desafio</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Card 2: Consultoria Individual */}
              <div className="offer-card offer-card-consulting" id="card-consultoria">
                <div className="offer-tag">
                  <Award size={14} />
                  <span>{SITE_CONFIG.offers.consulting.tag}</span>
                </div>
                <h3>{SITE_CONFIG.offers.consulting.name}</h3>
                <p className="offer-desc">{SITE_CONFIG.offers.consulting.description}</p>

                <ul className="offer-features">
                  {SITE_CONFIG.offers.consulting.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="offer-pricing">
                  <span>Formato Exclusivo</span>
                  <div className="offer-price-val" style={{ fontSize: '28px' }}>
                    Vagas Limitadas
                  </div>
                  <span className="offer-price-installments">
                    Análise de perfil via WhatsApp com Marcos Fonseca
                  </span>
                </div>

                <a
                  href={SITE_CONFIG.whatsapp.consultingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-white"
                  id="cta-whatsapp-consultoria"
                >
                  <MessageCircle size={16} />
                  <span>Candidatar-se à Consultoria</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            7. AUTORIDADE
            ============================================================ */}
        <section id="autoridade" className="authority-section" aria-labelledby="authority-title">
          <div className="section-container authority-grid reveal">
            <div className="authority-media">
              <img
                src="/images/marcos-authority.jpg"
                alt="Marcos Fonseca no treino com atletas campeões NPC"
                width="600"
                height="300"
                loading="lazy"
              />
              <div className="authority-badge">
                <Trophy size={14} style={{ display: 'inline', marginRight: '6px' }} />
                <span>Campeão Overall NPC</span>
              </div>
            </div>

            <div className="authority-content">
              <span className="eyebrow">Quem é Marcos Fonseca</span>
              <h2 id="authority-title">Prática real, ciência e resultados comprovados</h2>
              <p className="authority-bio">
                Marcos Fonseca, o <strong>Foguinho</strong>, é faixa preta de Jiu-Jitsu e treinador de alta performance.
                Com mais de uma década dedicada ao esporte, já conduziu atletas de Men's Physique ao troféu Overall
                em competições oficiais da NPC (Musclecontest Tocantins e Goiânia), além de transformar os hábitos e a
                autoestima de centenas de alunos comuns no Brasil e no exterior.
              </p>

              <div className="authority-pillars">
                <div className="authority-stat-box">
                  <strong>+90.000</strong>
                  <span>Pessoas acompanhando diariamente no Instagram</span>
                </div>
                <div className="authority-stat-box">
                  <strong>Brasil &amp; Mundo</strong>
                  <span>Alunos com suporte adaptado a diferentes rotinas</span>
                </div>
              </div>

              <a
                href={SITE_CONFIG.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="authority-social-link"
                id="authority-instagram-link"
              >
                <InstagramIcon size={18} />
                <span>Acompanhe os bastidores no Instagram @foguinhobjj</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================
            8. PROVA SOCIAL
            ============================================================ */}
        <section id="resultados" className="proof-section" aria-labelledby="proof-title">
          <div className="section-container proof-grid reveal">
            <div className="proof-content">
              <span className="eyebrow">Provas &amp; Evolução</span>
              <h2 id="proof-title">Físicos construídos com método e constância</h2>
              <p>
                Não existem atalhos mágicos. O que existe é a combinação entre a prescrição correta de treinos,
                ajuste de intensidade e um acompanhamento que não deixa você desanimar no meio do caminho.
              </p>

              <div className="proof-badges">
                <span className="proof-badge-item">
                  <Award size={16} /> Troféu Overall NPC Men's Physique
                </span>
                <span className="proof-badge-item">
                  <Users size={16} /> Turmas do Desafio 60 Dias
                </span>
                <span className="proof-badge-item">
                  <ShieldCheck size={16} /> Alunos no Brasil e Exterior
                </span>
              </div>
            </div>

            <div className="proof-gallery">
              <div className="proof-card">
                <img
                  src="/images/marcos-desafio.jpg"
                  alt="Final do Desafio 60 Dias com alunos e Marcos Fonseca"
                  width="600"
                  height="300"
                  loading="lazy"
                />
                <div className="proof-caption">
                  <strong>Turma do Desafio 60 Dias:</strong> evolução de alunos com foco em definição e saúde.
                </div>
              </div>

              <div className="proof-card">
                <img
                  src="/images/marcos-results.jpg"
                  alt="Evolução física de aluno da consultoria"
                  width="320"
                  height="390"
                  loading="lazy"
                />
                <div className="proof-caption">
                  <strong>Resultados Reais:</strong> redução expressiva de percentual de gordura e ganho muscular.
                </div>
              </div>

              <p className="disclaimer-note">
                * Os resultados são individuais e variam conforme o ponto de partida, frequência de treinos,
                alimentação, descanso e aplicação rigorosa do método.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            9. QUALIFICAÇÃO ("É PARA VOCÊ SE...")
            ============================================================ */}
        <section className="fit-section" aria-labelledby="fit-title">
          <div className="section-container reveal">
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px' }}>
              <span className="eyebrow">Alinhamento &amp; Perfil</span>
              <h2 id="fit-title">Este método foi feito para o seu momento?</h2>
            </div>

            <div className="fit-grid">
              <div className="fit-card fit-card-yes">
                <h3>É para você se...</h3>
                <ul className="fit-list fit-list-yes">
                  <li>
                    <CheckCircle2 size={20} />
                    <span>Quer parar de perder tempo na academia com treinos genéricos que não dão definição.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={20} />
                    <span>Busca um direcionamento claro de cargas, séries e intensidade sem ter que adivinhar o que fazer.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={20} />
                    <span>Está disposto a seguir o plano por pelo menos 60 dias para construir hábitos definitivos.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={20} />
                    <span>Deseja aprimorar sua densidade muscular, postura, fôlego e autoestima.</span>
                  </li>
                </ul>
              </div>

              <div className="fit-card fit-card-no">
                <h3>Não é para você se...</h3>
                <ul className="fit-list fit-list-no">
                  <li>
                    <XCircle size={20} />
                    <span>Procura fórmulas mágicas, pílulas milagrosas ou promessas de emagrecimento sem esforço.</span>
                  </li>
                  <li>
                    <XCircle size={20} />
                    <span>Não tem disposição para cumprir a rotina básica de treinos recomendada na semana.</span>
                  </li>
                  <li>
                    <XCircle size={20} />
                    <span>Prefere continuar culpando a genética em vez de aplicar um método com disciplina.</span>
                  </li>
                  <li>
                    <XCircle size={20} />
                    <span>Não aceita receber correções técnicas e ajustes na sua execução de exercícios.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            10. OFERTA FINAL & BANNER
            ============================================================ */}
        <section className="final-offer-section" aria-labelledby="final-title">
          <div className="section-container reveal">
            <div className="final-panel">
              <div>
                <span className="eyebrow">Decisão &amp; Compromisso</span>
                <h2 id="final-title">Seu novo físico começa na sua próxima decisão</h2>
                <p>
                  Não deixe para a próxima segunda-feira. Entre hoje no <strong>Desafio 60 Dias</strong> ou
                  aplique para a <strong>Consultoria Individual</strong> e receba a estratégia exata para atingir seu ápice físico.
                </p>
              </div>

              <div className="final-actions">
                <a
                  href={SITE_CONFIG.checkout.challengeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-fire"
                  id="final-cta-checkout"
                >
                  <span>Garantir Desafio 60 Dias</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href={SITE_CONFIG.whatsapp.consultingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ color: 'var(--ink)', borderColor: 'rgba(0,0,0,0.2)' }}
                  id="final-cta-whatsapp"
                >
                  <MessageCircle size={16} />
                  <span>Falar Direto no WhatsApp</span>
                </a>

                <div className="guarantee-info">
                  <Lock size={16} />
                  <span>Ambiente seguro • Garantia incondicional de {SITE_CONFIG.checkout.guaranteeDays} dias</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            11. FAQ
            ============================================================ */}
        <section id="faq" className="faq-section" aria-labelledby="faq-title">
          <div className="section-container faq-grid reveal">
            <div className="faq-intro">
              <span className="eyebrow">Tire Suas Dúvidas</span>
              <h2 id="faq-title">Perguntas Frequentes</h2>
              <p>
                Veja as respostas para as principais dúvidas sobre o Desafio 60 Dias e a Consultoria Individual com Marcos Fonseca.
              </p>
            </div>

            <div className="faq-list">
              <details className="faq-item">
                <summary className="faq-summary">
                  <span>Posso treinar em casa ou preciso de academia?</span>
                  <ChevronRight className="faq-icon" size={22} />
                </summary>
                <p className="faq-answer">
                  Você pode fazer tanto na academia quanto em casa! No Desafio 60 Dias temos adaptações completas, e na Consultoria Individual o treino é montado 100% sob medida para os equipamentos ou espaço que você tem à disposição.
                </p>
              </details>

              <details className="faq-item">
                <summary className="faq-summary">
                  <span>Quanto tempo dura cada sessão de treino?</span>
                  <ChevronRight className="faq-icon" size={22} />
                </summary>
                <p className="faq-answer">
                  Nossos treinos duram em média de 45 a 60 minutos. A ênfase é em densidade e intensidade máxima, sem horas intermináveis de esteira ou descanso excessivo.
                </p>
              </details>

              <details className="faq-item">
                <summary className="faq-summary">
                  <span>Qual a diferença entre o Desafio 60 Dias e a Consultoria?</span>
                  <ChevronRight className="faq-icon" size={22} />
                </summary>
                <p className="faq-answer">
                  O Desafio 60 Dias é um protocolo prático e intensivo em formato de programa estruturado com suporte em grupo e início imediato. Já a Consultoria é um acompanhamento individual direto com Marcos Fonseca, com avaliação biomecânica, anamnese e ajustes quinzenais personalizados.
                </p>
              </details>

              <details className="faq-item">
                <summary className="faq-summary">
                  <span>Moro fora do Brasil. Posso fazer a consultoria?</span>
                  <ChevronRight className="faq-icon" size={22} />
                </summary>
                <p className="faq-answer">
                  Com certeza! Marcos atende diversos alunos nos Estados Unidos, Europa e outros países, adaptando horários, métricas e ingredientes da rotina ao país onde você reside.
                </p>
              </details>

              <details className="faq-item">
                <summary className="faq-summary">
                  <span>O resultado é 100% garantido?</span>
                  <ChevronRight className="faq-icon" size={22} />
                </summary>
                <p className="faq-answer">
                  Garantimos a entrega de um método validado e científico. No entanto, os resultados físicos são individuais e dependem da frequência dos treinos, alimentação, sono e adesão de cada aluno. Você também conta com nossa garantia incondicional de 7 dias caso sinta que o programa não é para você.
                </p>
              </details>

              <details className="faq-item">
                <summary className="faq-summary">
                  <span>Como eu recebo o acesso após a inscrição?</span>
                  <ChevronRight className="faq-icon" size={22} />
                </summary>
                <p className="faq-answer">
                  Para o Desafio 60 Dias, o acesso é liberado instantaneamente por e-mail após a aprovação do pagamento. Para a Consultoria, o contato é feito diretamente pelo WhatsApp de Marcos Fonseca para dar início à sua anamnese.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      {/* ============================================================
          12. RODAPÉ
          ============================================================ */}
      <footer className="footer" role="contentinfo">
        <div className="section-container footer-inner">
          <div>
            <strong>{SITE_CONFIG.name} ({SITE_CONFIG.nickname})</strong> — Personal Trainer &amp; Consultoria Online
            <p style={{ marginTop: '4px', fontSize: '11px' }}>
              &copy; {new Date().getFullYear()} Todos os direitos reservados. {SITE_CONFIG.location}
            </p>
          </div>

          <div className="footer-links">
            <a
              href={SITE_CONFIG.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Marcos Fonseca"
            >
              Instagram @foguinhobjj
            </a>

            <a
              href={SITE_CONFIG.whatsapp.generalUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de Marcos Fonseca"
            >
              WhatsApp
            </a>

            <button
              type="button"
              onClick={openPrivacyModal}
              aria-haspopup="dialog"
              style={{ textDecoration: 'underline' }}
            >
              Política de Privacidade
            </button>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante do WhatsApp */}
      <a
        href={SITE_CONFIG.whatsapp.generalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Falar com Marcos Fonseca no WhatsApp"
        id="floating-whatsapp-btn"
      >
        <MessageCircle size={28} />
      </a>

      {/* Modal de Privacidade */}
      <dialog ref={privacyModalRef} className="privacy-modal" aria-labelledby="privacy-title">
        <button
          onClick={closePrivacyModal}
          className="privacy-close-btn"
          aria-label="Fechar modal de privacidade"
        >
          <X size={24} />
        </button>
        <h2 id="privacy-title">Política de Privacidade</h2>
        <p>
          Valorizamos sua privacidade e transparência. As informações e dados fornecidos para contato,
          consultoria ou inscrição são utilizados exclusivamente para a prestação do serviço de treinamento e orientação física.
        </p>
        <p>
          Não compartilhamos seus dados com terceiros para fins comerciais. Seus dados cadastrais e de evolução corporal
          são mantidos em sigilo estrito entre aluno e treinador.
        </p>
        <p style={{ fontSize: '12px', color: '#888', marginTop: '20px' }}>
          Última atualização: {new Date().getFullYear()}. Em conformidade com a LGPD.
        </p>
        <button
          onClick={closePrivacyModal}
          className="btn btn-fire"
          style={{ width: '100%', marginTop: '16px' }}
        >
          Entendido
        </button>
      </dialog>
    </>
  );
};
