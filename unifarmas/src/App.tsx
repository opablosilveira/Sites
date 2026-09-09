import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Heart,
  MapPin,
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";
import { Brand, ContactButton, whatsapp } from "./shared";
import CareSection from "./CareSection";
import StorySections from "./StorySections";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
      },
      { threshold: 0.09 },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (privacyOpen) dialog.current?.showModal();
    else dialog.current?.close();
  }, [privacyOpen]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <div className={paused ? "site motion-paused" : "site"}>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="header">
        <Brand />
        <nav
          className={menuOpen ? "navigation is-open" : "navigation"}
          id="navigation"
          aria-label="Navegação principal"
        >
          {[
            ["O nosso cuidado", "#cuidado"],
            ["Serviços", "#servicos"],
            ["Onde estamos", "#contato"],
          ].map(([label, href]) => (
            <a href={href} key={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a
            href={whatsapp()}
            className="mobile-contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com a equipe ↗
          </a>
        </nav>
        <a
          className="header-contact"
          href={whatsapp()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Vamos conversar <ArrowUpRight size={18} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-orbit" aria-hidden="true" />
          <div className="hero-topline">
            <span>
              <span className="status-dot" /> DE CABREÚVA. PARA VOCÊ.
            </span>
            <span className="hero-edition">SAÚDE + BELEZA + BEM-ESTAR</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">
                Sua vida
                <br />
                merece esse
                <br />
                <span className="care-word">
                  cuidado
                  <svg viewBox="0 0 550 30" aria-hidden="true">
                    <path d="M5 21Q250 -5 540 16" />
                  </svg>
                </span>
                <span className="period">.</span>
              </h1>
              <p>
                Dos pequenos rituais aos cuidados essenciais.
                <br className="desktop-break" /> A Unifarmas está perto, em cada
                momento.
              </p>
              <ContactButton
                label="Conte com a gente"
                className="button-lime"
              />
              <div className="hero-note">
                <span className="mini-cross">✚</span> Cuidado de verdade. Aqui
                em Cabreúva.
              </div>
            </div>
            <div className="hero-visual">
              <div className="photo-card photo-main">
                <img
                  src="/images/2.jpeg"
                  alt="Conheça o interior da Unifarmas em Cabreúva"
                  fetchPriority="high"
                />
                <div className="photo-gradient" />
                <span className="photo-caption">
                  BEM-VINDO À SUA FARMÁCIA.
                  <ArrowUpRight size={20} />
                </span>
              </div>
              <div className="orbit-label">
                <Heart size={25} />
                <span>
                  PERTO DE VOCÊ.
                  <br />
                  <strong>De coração.</strong>
                </span>
              </div>
              <div className="photo-card photo-small">
                <img src="/images/3.jpeg" alt="Fachada da Unifarmas" />
                <span>
                  <MapPin size={13} /> CABREÚVA, SP
                </span>
              </div>
              <div className="hero-sticker" aria-hidden="true">
                <Sparkles />
                <span>
                  faz bem
                  <br />
                  se cuidar.
                </span>
              </div>
              <span className="visual-cross" aria-hidden="true">
                ✳
              </span>
            </div>
          </div>
          <div className="hero-bottom">
            <a href="#cuidado">
              <span className="scroll-circle">
                <ArrowDown size={16} />
              </span>{" "}
              DESCUBRA O NOSSO CUIDADO
            </a>
            <button
              type="button"
              className="motion-toggle"
              aria-pressed={paused}
              onClick={() => setPaused(!paused)}
            >
              {paused ? "Ativar movimento" : "Pausar movimento"}
              <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
            </button>
            <span className="hero-index">01 — 05</span>
          </div>
        </section>
        <div
          className="marquee"
          aria-label="Saúde, beleza, bem-estar e cuidado de perto"
        >
          <div className="marquee-track" aria-hidden="true">
            {[0, 1, 2, 3].map((item) => (
              <span key={item}>
                SAÚDE <span>✳</span> BELEZA <span>✳</span> BEM-ESTAR{" "}
                <span>✳</span> CUIDADO DE PERTO <span>✳</span>{" "}
              </span>
            ))}
          </div>
        </div>
        <CareSection />
        <StorySections />
      </main>
      <footer className="footer">
        <div className="footer-main">
          <Brand footer />
          <p>
            Cuidado de perto.
            <br />
            No coração de Cabreúva.
          </p>
          <a
            href="https://www.instagram.com/uni_farmas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acompanhe no Instagram <ArrowUpRight size={18} />
          </a>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Unifarmas · SOUZA & CAMARGO DROGARIA
            LTDA
            <br />
            CNPJ 14.445.113/0001-05
          </span>
          <button type="button" onClick={() => setPrivacyOpen(true)}>
            Privacidade
          </button>
          <span>
            FEITO PARA CUIDAR DE VOCÊ <Heart size={13} />
          </span>
        </div>
      </footer>
      <a
        className="floating-whatsapp"
        href={whatsapp()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Unifarmas no WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
      <dialog
        ref={dialog}
        className="privacy-dialog"
        onCancel={() => setPrivacyOpen(false)}
        onClose={() => setPrivacyOpen(false)}
      >
        <button
          type="button"
          className="dialog-close"
          aria-label="Fechar política de privacidade"
          onClick={() => setPrivacyOpen(false)}
        >
          <X />
        </button>
        <span className="eyebrow">UNIFARMAS</span>
        <h2>Sua privacidade</h2>
        <p>
          Esta página não possui formulário de cadastro ou ferramentas de
          publicidade. Ao usar os links de WhatsApp, Instagram ou Google Maps,
          você acessa serviços externos, sujeitos às respectivas políticas de
          privacidade.
        </p>
        <p>
          As fontes desta página são fornecidas pelo Google Fonts. Esse
          carregamento envolve uma conexão com o serviço. Informações enviadas
          voluntariamente durante o atendimento são tratadas pela farmácia para
          responder à sua solicitação.
        </p>
        <p>
          Contato:{" "}
          <a href="mailto:uni_farma2011@hotmail.com">
            uni_farma2011@hotmail.com
          </a>
        </p>
        <button
          type="button"
          className="button button-blue"
          onClick={() => setPrivacyOpen(false)}
        >
          <Check size={18} /> Entendi
        </button>
      </dialog>
    </div>
  );
}
export default App;
