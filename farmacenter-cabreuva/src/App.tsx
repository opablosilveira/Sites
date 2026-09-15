import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Clock3,
  MapPin,
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";
import { Brand, ContactButton, maps, whatsapp } from "./shared";
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
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.09 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
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
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>

      <header className="header">
        <Brand />
        <nav
          className={menuOpen ? "navigation is-open" : "navigation"}
          id="navigation"
          aria-label="Navegação principal"
        >
          {[
            ["Produtos", "#cuidado"],
            ["Como comprar", "#servicos"],
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
            Pedir pelo WhatsApp ↗
          </a>
        </nav>
        <a
          className="header-contact"
          href={whatsapp()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Fazer um pedido <ArrowUpRight size={18} />
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
            <span><span className="status-dot" /> ABERTA TODOS OS DIAS</span>
            <span className="hero-edition">CENTRO · CABREÚVA</span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">
                O cuidado
                <br />
                que você
                <br />
                <span className="care-word">
                  precisa
                  <svg viewBox="0 0 550 30" aria-hidden="true">
                    <path d="M5 21Q250 -5 540 16" />
                  </svg>
                </span>
                <span className="period">.</span>
              </h1>
              <p>
                Consulte medicamentos e produtos pelo WhatsApp.
                <br className="desktop-break" /> Retire na loja ou consulte a entrega.
              </p>
              <ContactButton label="Pedir pelo WhatsApp" className="button-lime" />
              <div className="hero-note">
                <span className="mini-cross">✚</span> Farmacenter. Perto para cuidar.
              </div>
            </div>

            <div className="hero-visual">
              <div className="photo-card photo-main">
                <img
                  src="/images/map-1.jpg"
                  alt="Fachada da Drogaria Farmacenter em Cabreúva"
                  fetchPriority="high"
                />
                <div className="photo-gradient" />
                <span className="photo-caption">
                  SUA FARMÁCIA NO CENTRO.
                  <ArrowUpRight size={20} />
                </span>
              </div>

              <div className="orbit-label">
                <MapPin size={25} />
                <span>
                  CABREÚVA.
                  <br />
                  <strong>Bem no Centro.</strong>
                </span>
              </div>

              <div className="photo-card photo-small quick-card">
                <Clock3 size={25} />
                <span className="quick-kicker">HOJE TEM</span>
                <strong>ATENDIMENTO<br />ATÉ ÀS 20H</strong>
                <small>DOMINGO · ATÉ 12H</small>
              </div>

              <div className="hero-sticker" aria-hidden="true">
                <Sparkles />
                <span>
                  compra,
                  <br />
                  retira ou recebe.
                </span>
              </div>
              <span className="visual-cross" aria-hidden="true">+</span>
            </div>
          </div>

          <div className="hero-bottom">
            <a href="#cuidado">
              <span className="scroll-circle"><ArrowDown size={16} /></span>{" "}
              VEJA COMO A GENTE AJUDA
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
          aria-label="Medicamentos, higiene, bem-estar e atendimento pelo WhatsApp"
        >
          <div className="marquee-track" aria-hidden="true">
            {[0, 1, 2, 3].map((item) => (
              <span key={item}>
                MEDICAMENTOS <span>✳</span> HIGIENE <span>✳</span> BEM-ESTAR{" "}
                <span>✳</span> PEDIDO NO WHATSAPP <span>✳</span>{" "}
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
            Compra na loja, retirada e entrega.
            <br />
            No Centro de Cabreúva.
          </p>
          <a href={maps} target="_blank" rel="noopener noreferrer">
            Abrir no Google Maps <ArrowUpRight size={18} />
          </a>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Drogaria Farmacenter · Cabreúva / SP
            <br />
            Informações de disponibilidade e entrega são confirmadas no atendimento.
          </span>
          <button type="button" onClick={() => setPrivacyOpen(true)}>
            Privacidade
          </button>
          <span>
            PERTO PARA CUIDAR <Sparkles size={13} />
          </span>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsapp()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Farmacenter no WhatsApp"
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
        <span className="eyebrow">FARMACENTER</span>
        <h2>Sua privacidade</h2>
        <p>
          Esta página não possui formulário de cadastro ou ferramentas de publicidade.
          Ao usar os links de WhatsApp ou Google Maps, você acessa serviços externos,
          sujeitos às respectivas políticas de privacidade.
        </p>
        <p>
          As fontes desta página são fornecidas pelo Google Fonts. Informações enviadas
          voluntariamente durante o atendimento são tratadas pela farmácia para responder
          à sua solicitação.
        </p>
        <p>
          Contato: <a href="tel:+5511942975214">(11) 94297-5214</a>
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
