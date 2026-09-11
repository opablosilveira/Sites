import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Award, CheckCircle2, Heart, MapPin, Menu, MessageCircle, ShieldCheck, Sparkles, X } from "lucide-react";

const phone = "5511910137780";
const maps = "https://maps.app.goo.gl/zzPGCyjX3mdRdNoE9";
const instagram = "https://www.instagram.com/dra.jeicevieira/";
const whatsapp = (message = "Olá, Dra. Jeice! Vim pelo site e gostaria de agendar uma avaliação.") => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
const treatments = [
  { number: "01", title: "Clareamento", text: "Um plano pensado para iluminar seu sorriso com acompanhamento profissional.", image: "/images/jeice-2.jpg" },
  { number: "02", title: "Aparelhos", text: "Ortodontia para alinhar função, estética e confiança em todas as fases do tratamento.", image: "/images/jeice-3.jpg" },
  { number: "03", title: "Próteses e implantes", text: "Soluções para recuperar segurança ao sorrir, mastigar e falar.", image: "/images/jeice-4.jpg" },
  { number: "04", title: "Facetas", text: "Planejamento individual para transformar forma, proporção e harmonia do sorriso.", image: "/images/jeice-1.jpg" },
];
const reviews = [
  { name: "Thiago Moraes", text: "Excelente profissional, além do ambiente e atendimento agradável." },
  { name: "Maria Andrelo", text: "Excelente profissional, competente, educada e amorosa." },
  { name: "Williana Brito", text: "Muito cuidadosa e explica tudo com uma linguagem que entendemos." },
  { name: "Christian Corsi", text: "É nítido o amor e o comprometimento pela profissão." },
  { name: "Rosemary Vieira Caires", text: "Local ótimo, bom atendimento e profissionalismo." },
];
function Cta({ label = "Agendar avaliação", message, light = false }: { label?: string; message?: string; light?: boolean }) {
  return <a className={`button ${light ? "button-light" : ""}`} href={whatsapp(message)} target="_blank" rel="noreferrer">{label}<ArrowUpRight size={18} /></a>;
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    const video = document.querySelector<HTMLVideoElement>(".experience-video");
    const videoObserver = video ? new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) void video.play();
      else video.pause();
    }, { threshold: 0.35 }) : null;
    if (video && videoObserver) videoObserver.observe(video);
    return () => { observer.disconnect(); videoObserver?.disconnect(); };
  }, []);
  return <div className="site">
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="header">
      <a className="brand" href="#inicio" aria-label="Início"><span className="brand-mark">JV</span><span>Dra. Jeice Vieira<small>ODONTOLOGIA</small></span></a>
      <nav className={menuOpen ? "nav open" : "nav"} aria-label="Navegação principal">
        <a href="#experiencia" onClick={() => setMenuOpen(false)}>A clínica</a><a href="#tratamentos" onClick={() => setMenuOpen(false)}>Tratamentos</a><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
      </nav>
      <Cta label="Vamos conversar" />
      <button className="menu" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>
    <main id="conteudo">
      <section className="hero" id="inicio">
        <div className="hero-meta"><span><i /> ODONTOLOGIA EM ITU</span><span>CUIDADO + CONFIANÇA + TRANSFORMAÇÃO</span></div>
        <div className="hero-grid"><div className="hero-copy reveal"><p className="kicker">SEU SORRISO, SUA HISTÓRIA.</p><h1>Volte a sorrir<br />com <em>confiança.</em></h1><p className="lead">Atendimento próximo, planejamento individual e mais de 8 anos cuidando de sorrisos em Itu.</p><Cta /><div className="micro-proof"><CheckCircle2 size={17} /> Avaliação personalizada pelo WhatsApp</div></div>
          <div className="hero-visual reveal"><div className="hero-photo"><img src="/images/jeice-1.jpg" alt="Fachada da clínica odontológica da Dra. Jeice Vieira" /></div><div className="experience-badge"><strong>+8</strong><span>anos de<br />experiência</span></div><div className="location-badge"><MapPin size={16} /><span>Centro<br /><b>Itu · SP</b></span></div><Sparkles className="spark" aria-hidden="true" /></div>
        </div><a className="scroll" href="#experiencia"><span><ArrowDown size={16} /></span> CONHEÇA NOSSO CUIDADO</a>
      </section>
      <div className="marquee" aria-hidden="true"><div>CLAREAMENTO ✦ APARELHOS ✦ FACETAS ✦ IMPLANTES ✦ PRÓTESES ✦ CLAREAMENTO ✦ APARELHOS ✦ FACETAS ✦ IMPLANTES ✦ PRÓTESES ✦</div></div>
      <section className="experience section" id="experiencia"><div className="experience-copy reveal"><span className="eyebrow">CUIDADO QUE ACOLHE</span><h2>Antes do tratamento,<br /><em>vem a escuta.</em></h2><p>Cada sorriso tem uma necessidade, um medo e um sonho diferente. Por isso, o atendimento começa com uma conversa atenta e um planejamento feito para você.</p><div className="trust-row"><span><Heart /> Atendimento personalizado</span><span><ShieldCheck /> Planejamento responsável</span><span><Award /> Experiência e confiança</span></div></div><div className="experience-photo reveal"><video className="experience-video" src="/videos/clinica.mp4" poster="/images/jeice-1.jpg" autoPlay muted loop playsInline controls preload="metadata" aria-label="Dra. Jeice Vieira apresentando a clínica odontológica" /><span>CONHEÇA NOSSO<br />ESPAÇO.</span></div></section>
      <section className="reviews-strip" aria-label="Avaliações de pacientes no Google"><div className="reviews-heading"><b>4,9 ★</b><span>AVALIAÇÕES NO GOOGLE</span></div><div className="reviews-window"><div className="reviews-track">{[...reviews, ...reviews].map((review, index) => <blockquote key={`${review.name}-${index}`}><div aria-label="5 estrelas">★★★★★</div><p>“{review.text}”</p><cite>{review.name}</cite></blockquote>)}</div></div></section>
      <section className="treatments section" id="tratamentos"><div className="section-head reveal"><div><span className="eyebrow">TRATAMENTOS</span><h2>Possibilidades para<br /><em>o seu sorriso.</em></h2></div><p>Converse com a equipe para entender qual avaliação combina com a sua necessidade.</p></div><div className="treatment-grid">{treatments.map(item => <a className="treatment-card reveal" key={item.number} href={whatsapp(`Olá! Gostaria de saber mais sobre ${item.title.toLowerCase()} e agendar uma avaliação.`)} target="_blank" rel="noreferrer"><img src={item.image} alt="" /><div className="card-overlay" /><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p><b>Quero saber mais <ArrowUpRight size={18} /></b></div></a>)}</div><p className="clinical-note">A indicação de qualquer tratamento depende de avaliação clínica individual.</p></section>
      <section className="manifesto"><img src="/images/jeice-1.jpg" alt="Clínica odontológica da Dra. Jeice Vieira" /><div className="manifesto-shade" /><div className="manifesto-copy reveal"><span className="eyebrow">UM NOVO CAPÍTULO</span><h2>Seu sorriso pode<br />mudar como você<br /><em>se sente.</em></h2><p>O primeiro passo é uma conversa. Conte o que você deseja transformar.</p><Cta light /></div></section>
      <section className="contact section" id="contato"><div className="contact-copy reveal"><span className="eyebrow">PERTO DE VOCÊ</span><h2>Seu novo sorriso<br />começa <em>aqui.</em></h2><p>Atendimento no Centro de Itu. Fale com a equipe e agende sua avaliação.</p><address><MapPin /><div><strong>Travessa do Carmo, 179</strong><span>Centro · Itu / SP · CEP 13300-013</span></div></address><div className="contact-actions"><a className="button" href={maps} target="_blank" rel="noreferrer">Como chegar <ArrowUpRight size={18} /></a><a className="text-link" href={whatsapp()} target="_blank" rel="noreferrer">Agendar pelo WhatsApp →</a></div></div><a className="contact-photo reveal" href={maps} target="_blank" rel="noreferrer"><img src="/images/jeice-1.jpg" alt="Clínica odontológica no Centro de Itu" /><span><MapPin size={17} /> VER LOCALIZAÇÃO <ArrowUpRight size={18} /></span></a></section>
      <section className="final-cta"><div className="reveal"><span className="eyebrow">VAMOS CONVERSAR?</span><h2>Pronta para cuidar<br />do seu <em>sorriso.</em></h2><Cta light /></div><span className="giant-jv">JV</span></section>
    </main>
    <footer><a className="brand footer-brand" href="#inicio"><span className="brand-mark">JV</span><span>Dra. Jeice Vieira<small>ODONTOLOGIA</small></span></a><p>Dra. Jeice Vieira · CROSP 128971<br />Clínica odontológica em Itu</p><a href={instagram} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={16} /></a><a href="#inicio">Voltar ao topo ↑</a></footer>
    <a className="floating" href={whatsapp()} target="_blank" rel="noreferrer" aria-label="Agendar avaliação pelo WhatsApp"><MessageCircle /></a>
  </div>;
}

