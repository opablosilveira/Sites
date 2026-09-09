import { useEffect } from "react";
import {
  ArrowUpRight,
  MapPin,
  Plus,
  MessageCircle,
  Camera,
  Globe,
  Music2,
} from "lucide-react";
import { maps, whatsapp } from "./shared";
import "./links.css";

const links = [
  {
    id: "whatsapp",
    kicker: "Fale com a nossa equipe",
    title: (
      <>
        SEU CUIDADO
        <br />
        COMEÇA AQUI.
      </>
    ),
    label: "Conversar no WhatsApp",
    href: whatsapp(
      "Olá, Unifarmas! Vim pela página de links e gostaria de atendimento.",
    ),
    image: "1.jpeg",
    icon: MessageCircle,
    color: "green",
    stamp: "WHATSAPP",
  },
  {
    id: "location",
    kicker: "Aqui no coração de Cabreúva",
    title: (
      <>
        PERTINHO
        <br />
        DE VOCÊ.
      </>
    ),
    label: "Como chegar à Unifarmas",
    href: maps,
    image: "3.jpeg",
    icon: MapPin,
    color: "blue",
    stamp: "COMO CHEGAR",
  },
  {
    id: "website",
    kicker: "Saúde, beleza e bem-estar",
    title: (
      <>
        CONHEÇA
        <br />A UNIFARMAS.
      </>
    ),
    label: "Visitar nosso site",
    href: "/",
    image: "2.jpeg",
    icon: Globe,
    color: "lime",
    stamp: "NOSSO SITE",
  },
  {
    id: "instagram",
    kicker: "Um pouco mais do nosso dia a dia",
    title: (
      <>
        VEM PRO
        <br />
        NOSSO INSTA.
      </>
    ),
    label: "Acompanhar no Instagram",
    href: "https://www.instagram.com/uni_farmas/",
    image: "5.jpeg",
    icon: Camera,
    color: "pink",
    stamp: "@UNI_FARMAS",
  },
  {
    id: "tiktok",
    kicker: "Dê o play e venha com a gente",
    title: (
      <>
        O CUIDADO
        <br />
        EM MOVIMENTO.
      </>
    ),
    label: "Acompanhar no TikTok",
    href: "https://www.tiktok.com/@unifarma3",
    image: "4.jpeg",
    icon: Music2,
    color: "cyan",
    stamp: "TIKTOK",
  },
];

export default function LinksPage() {
  useEffect(() => {
    document.title = "Unifarmas | Todos os nossos links";
  }, []);
  return (
    <div className="links-page">
      <div className="links-background" aria-hidden="true">
        <span>UNI</span>
        <span>FARMAS</span>
        <span>+</span>
      </div>
      <main className="links-shell">
        <header className="links-header">
          <a
            href="/"
            className="links-brand"
            aria-label="Unifarmas, visitar o site"
          >
            <span className="links-brand-cross">
              <Plus strokeWidth={4} />
            </span>
            <span>
              uni<b>farmas</b>
              <small>DROGARIA & PERFUMARIA</small>
            </span>
          </a>
          <span className="links-city">
            <MapPin size={11} /> CABREÚVA / SP
          </span>
          <h1>
            Cuidado de perto.
            <br />
            <span>A um toque de você.</span>
          </h1>
          <p>Escolha seu caminho. A gente cuida do resto.</p>
        </header>
        <nav className="link-banners" aria-label="Links da Unifarmas">
          {links.map((link, index) => (
            <a
              key={link.id}
              className={`link-banner banner-${link.color}`}
              href={link.href}
              target={link.href === "/" ? undefined : "_blank"}
              rel={link.href === "/" ? undefined : "noopener noreferrer"}
              aria-label={link.label}
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <img
                className="banner-photo"
                src={`/images/${link.image}`}
                alt=""
                loading={index < 2 ? "eager" : "lazy"}
              />
              <div className="banner-shade" />
              <span className="banner-graphic" aria-hidden="true">
                {index === 3 ? "✳" : "+"}
              </span>
              <div className="banner-copy">
                <span className="banner-kicker">{link.kicker}</span>
                <h2>{link.title}</h2>
                <span className="banner-label">
                  <link.icon size={12} />
                  {link.stamp}
                </span>
              </div>
              <span className="banner-arrow">
                <ArrowUpRight size={20} />
              </span>
              <span className="banner-number" aria-hidden="true">
                0{index + 1}
              </span>
            </a>
          ))}
        </nav>
        <footer className="links-footer">
          <span className="links-footer-cross" aria-hidden="true">
            ✚
          </span>
          <strong>Uma Unifarmas. Sempre perto.</strong>
          <address>
            Av. Marciano Xavier de Oliveira, 70
            <br />
            Centro · Cabreúva / SP
          </address>
          <a href={maps} target="_blank" rel="noopener noreferrer">
            Traçar minha rota <ArrowUpRight size={13} />
          </a>
          <div className="links-footer-bottom">
            <span>© {new Date().getFullYear()} Unifarmas</span>
            <a href="/">Conheça nosso site ↗</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
