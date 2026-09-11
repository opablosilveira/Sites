import { ArrowUpRight, Camera, MapPin, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { site } from "./site";

const Link = ({ href, children, className = "button" }: { href: string; children: React.ReactNode; className?: string }) => <a className={className} href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={16} /></a>;

export default function App() {
  const [open, setOpen] = useState(false);
  return <div className={`site ${site.kind}`}>
    <a className="skip" href="#conteudo">Pular para o conteúdo</a>
    <header><a className="brand" href="#inicio"><img src="/images/brand.jpg" alt="" /><span>{site.name}</span></a><nav className={open ? "open" : ""}><a href="#sobre" onClick={() => setOpen(false)}>A experiência</a><a href="#destaques" onClick={() => setOpen(false)}>Destaques</a><a href="#contato" onClick={() => setOpen(false)}>Contato</a></nav><Link href={site.contact}>{site.cta}</Link><button className="menu" onClick={() => setOpen(!open)} aria-label="Abrir menu">{open ? <X /> : <Menu />}</button></header>
    <main id="conteudo"><section className="hero" id="inicio"><div className="hero-copy"><p className="eyebrow">{site.tag}</p><h1>{site.headline.map((line, index) => <span key={line} className={index === 1 ? "accent" : ""}>{line}</span>)}</h1><p className="lead">{site.intro}</p><Link href={site.contact}>{site.cta}</Link></div><div className="hero-media"><img src="/images/photo-1.jpg" alt={`Imagem oficial de ${site.name}`} /><div className="media-note">{site.label}<b>01</b></div></div></section>
    <div className="marquee" aria-hidden="true"><span>{Array(6).fill(site.label).join(" · ")}</span></div>
    <section className="intro section" id="sobre"><p className="eyebrow">{site.kind === "venue" ? "PERCORRA O ESPAÇO" : "DO SEU JEITO"}</p><h2>{site.kind === "venue" ? "A cada passo, uma nova pausa." : site.kind === "architecture" ? "Matéria, forma e paisagem em conversa." : "Uma escolha mais simples começa aqui."}</h2><p>{site.kind === "venue" ? "Deslize e imagine a chegada, o encontro e a celebração ocupando cada canto." : "Informações diretas, atendimento pelo canal oficial e uma experiência feita para a sua rotina."}</p></section>
    <section className="gallery" id="destaques"><div className="gallery-image first"><img src="/images/photo-2.jpg" alt="Detalhe do perfil oficial" /></div><div className="gallery-copy"><p className="eyebrow">O QUE VOCÊ ENCONTRA</p>{site.features.map((feature, i) => <div className="feature" key={feature}><span>0{i + 1}</span><h3>{feature}</h3></div>)}<Link href={site.contact} className="text-link">Saiba mais</Link></div><div className="gallery-image second"><img src="/images/photo-3.jpg" alt="Publicação oficial" /></div></section>
    <section className="contact section" id="contato"><div><p className="eyebrow">VAMOS CONVERSAR</p><h2>{site.kind === "food" ? "Sua mesa está esperando." : site.kind === "workshop" ? "Seu próximo projeto começa agora." : site.kind === "architecture" ? "Venha vivenciar novas possibilidades." : "Pronto para o próximo passo?"}</h2><p><MapPin size={18} /> {site.address}</p><Link href={site.contact}>{site.cta}</Link></div><img src="/images/photo-4.jpg" alt="Imagem complementar do perfil oficial" /></section></main>
    <footer><a className="brand" href="#inicio"><img src="/images/brand.jpg" alt="" /><span>{site.name}</span></a><p>{site.label}</p><Link href={site.instagram} className="social"><Camera size={17} /> Instagram</Link></footer><Link href={site.contact} className="float"><MessageCircle size={24} /><span className="sr-only">{site.cta}</span></Link>
  </div>;
}

