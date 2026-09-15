import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Camera, Check, Dumbbell, Menu, MessageCircle, ShieldCheck, Sparkles, Target, X, Zap } from "lucide-react";

const challengeUrl = "https://loja.infinitepay.io/lunarafonseca/vsl1376-desadio-tf-sempre-magra-21-dias";
const whatsappUrl = "https://wa.me/5541996250807?text=Oi%2C%20Frederico!%20Quero%20entender%20como%20funciona%20a%20Consultoria%20TF%20Sempre%20Magra.";
const instagramUrl = "https://www.instagram.com/treinador_frederico/";

const errors = [
  ["01", "Treinar como se toda mulher tivesse o mesmo corpo e a mesma rotina."],
  ["02", "Fazer cardio sem estratégia e abandonar tudo quando o cansaço aparece."],
  ["03", "Pular de treino em treino sem progressão ou acompanhamento."],
  ["04", "Ignorar alimentação, sono e os hábitos que sustentam o resultado."],
];

const pillars = [
  { icon: Dumbbell, title: "Força estratégica", text: "Treinos pensados para o corpo feminino e para a realidade de quem passou dos 30." },
  { icon: Zap, title: "Cardio com propósito", text: "Protocolos objetivos para complementar a rotina, sem transformar o treino em castigo." },
  { icon: Target, title: "Direção", text: "Metas e planejamento para você saber o que fazer, quando fazer e por que continuar." },
  { icon: ShieldCheck, title: "Consistência", text: "Uma estrutura possível de seguir em casa ou na academia, mesmo com pouco tempo." },
];

function Brand() {
  return <a className="brand" href="#inicio" aria-label="TF Sempre Magra — início"><span className="brand-mark">TF</span><span className="brand-copy">SEMPRE<br /><strong>MAGRA</strong></span></a>;
}

function ActionLink({ href, children, tone = "lime" }: { href: string; children: React.ReactNode; tone?: "lime" | "ghost" | "white" }) {
  return <a className={`button button-${tone}`} href={href} target="_blank" rel="noopener noreferrer"><span>{children}</span><ArrowUpRight size={18} /></a>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  useEffect(() => { if (privacyOpen) dialog.current?.showModal(); else dialog.current?.close(); }, [privacyOpen]);

  return (
    <div className="site">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <header className="header">
        <Brand />
        <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="Navegação principal">
          <a href="#metodo" onClick={() => setMenuOpen(false)}>O método</a><a href="#programas" onClick={() => setMenuOpen(false)}>Programas</a><a href="#frederico" onClick={() => setMenuOpen(false)}>Frederico</a><a href="#duvidas" onClick={() => setMenuOpen(false)}>Dúvidas</a>
        </nav>
        <a className="header-cta" href={challengeUrl} target="_blank" rel="noopener noreferrer">Começar agora <ArrowUpRight size={16} /></a>
        <button className="menu-button" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio">
          <img className="hero-atmosphere" src="/images/tf-atmosphere.webp" alt="" aria-hidden="true" />
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <div className="overline"><span /> MULHERES 30+ · EM CASA OU NA ACADEMIA</div>
              <h1>Seu corpo não precisa de mais uma <em>tentativa.</em></h1>
              <p className="hero-lead">Precisa de um método que caiba na sua vida, respeite a sua fase e transforme intenção em consistência.</p>
              <div className="hero-actions"><ActionLink href={challengeUrl}>Entrar no desafio de 21 dias</ActionLink><a className="text-link" href="#programas">Conhecer os dois caminhos <ArrowDown size={16} /></a></div>
              <div className="trust-row"><div><strong>+5 mil</strong><span>mulheres alcançadas</span></div><div><strong>15 min</strong><span>treinos objetivos</span></div><div><strong>30+</strong><span>método feminino</span></div></div>
            </div>
            <div className="hero-visual reveal">
              <div className="portrait-frame"><img src="/images/frederico-profile.jpg" alt="Treinador Frederico" fetchPriority="high" /><div className="portrait-label"><span>PERSONAL TRAINER</span><strong>FREDERICO</strong></div></div>
              <div className="day-seal" aria-label="Desafio de 21 dias"><strong>21</strong><span>DIAS</span></div>
              <div className="live-chip"><span className="pulse" /> AO VIVO + REPLAY</div><span className="outline-word" aria-hidden="true">MÉTODO</span>
            </div>
          </div>
          <div className="hero-foot"><span>01</span><div /><p>Treinar melhor muda mais do que treinar mais.</p></div>
        </section>

        <div className="marquee" aria-label="Método TF Sempre Magra"><div className="marquee-track" aria-hidden="true">{[0, 1].map((item) => <span key={item}>TF SEMPRE MAGRA <b>✦</b> FORÇA <b>✦</b> CARDIO <b>✦</b> DIREÇÃO <b>✦</b> CONSISTÊNCIA <b>✦</b> </span>)}</div></div>

        <section className="diagnosis section" id="metodo">
          <div className="section-intro reveal"><span className="eyebrow">O PROBLEMA NÃO É VOCÊ</span><h2>Esforço sem estratégia vira <em>frustração.</em></h2><p>Você começa animada, tenta encaixar um plano genérico em uma rotina real e, quando não consegue sustentar, conclui que faltou disciplina. Na maioria das vezes, faltou direção.</p></div>
          <div className="error-list reveal">{errors.map(([number, text]) => <article key={number}><span>{number}</span><p>{text}</p><X size={20} /></article>)}</div>
        </section>

        <section className="method section-dark">
          <div className="method-head section reveal"><span className="eyebrow lime">TF SEMPRE MAGRA</span><h2>Um método feito para você <em>continuar.</em></h2><p>O TF organiza treino, cardio, alimentação e rotina como partes do mesmo processo. Menos improviso. Mais clareza para avançar.</p></div>
          <div className="pillars section reveal">{pillars.map(({ icon: Icon, title, text }, index) => <article className="pillar" key={title}><div className="pillar-number">0{index + 1}</div><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className="programs section" id="programas">
          <div className="section-intro compact reveal"><span className="eyebrow">DOIS CAMINHOS. O MESMO MÉTODO.</span><h2>Escolha o nível de apoio que faz sentido <em>agora.</em></h2></div>
          <div className="program-grid reveal">
            <article className="program-card challenge-card">
              <div className="program-top"><span>COMEÇO RÁPIDO</span><strong>01</strong></div><h3>Desafio TF<br />Sempre Magra</h3><p className="program-description">21 dias para sair da inércia com uma rotina guiada, curta e possível de executar.</p>
              <ul><li><Check /> Treinos ao vivo com replay</li><li><Check /> Sessões de até 15 minutos</li><li><Check /> Protocolos de cardio para casa</li><li><Check /> Cardápio, metas e planner</li><li><Check /> Grupo exclusivo no WhatsApp</li></ul>
              <div className="price"><span>ACESSO POR</span><strong><small>R$</small> 47,70</strong></div><ActionLink href={challengeUrl}>Quero entrar no desafio</ActionLink>
            </article>
            <article className="program-card consulting-card">
              <div className="program-top"><span>ACOMPANHAMENTO</span><strong>02</strong></div><h3>Protocolo TF<br />Sempre Magra</h3><p className="program-description">Consultoria para quem quer uma direção mais próxima, alinhada ao momento, à rotina e ao objetivo.</p>
              <div className="consulting-message"><MessageCircle /><p><strong>Seu próximo passo começa em uma conversa.</strong> Conte sua rotina e entenda como funciona a consultoria.</p></div><ActionLink href={whatsappUrl} tone="white">Falar com o Frederico</ActionLink>
            </article>
          </div>
        </section>

        <section className="authority" id="frederico">
          <div className="authority-photo reveal"><img src="/images/frederico-metodo.jpg" alt="Frederico em evento profissional" /><span className="image-caption">QUEM É O TREINADOR FREDERICO?</span></div>
          <div className="authority-copy reveal"><span className="eyebrow lime">ESTRATÉGIA ANTES DE EXCESSO</span><h2>Treino que conversa com a vida <em>real.</em></h2><p>Frederico é personal trainer com trabalho direcionado ao emagrecimento feminino, especialmente para mulheres 30+. Sua comunidade já reúne mais de 82 mil pessoas e mais de 5 mil mulheres passaram por seus conteúdos e programas.</p><p>A proposta é construir uma rotina que combine força, cardio e hábitos, em casa ou na academia, com orientação para não depender de motivação todos os dias.</p><a className="instagram-link" href={instagramUrl} target="_blank" rel="noopener noreferrer"><Camera /> Acompanhar no Instagram <ArrowUpRight size={17} /></a></div>
        </section>

        <section className="proof section">
          <div className="proof-copy reveal"><span className="eyebrow">RESULTADO É CONSEQUÊNCIA</span><h2>Quando o plano faz sentido, o corpo <em>responde.</em></h2><p>Esse antes e depois foi publicado no perfil do treinador dentro do ecossistema do Protocolo TF Sempre Magra. Cada corpo, rotina e processo têm uma resposta diferente.</p><div className="proof-notes"><span><Check /> Método estruturado</span><span><Check /> Aplicação possível</span><span><Check /> Acompanhamento</span></div></div>
          <figure className="proof-image reveal"><img src="/images/resultado-protocolo.jpg" alt="Antes e depois publicado pelo Protocolo TF Sempre Magra" /><figcaption>Resultado individual. A imagem original informa a associação ao Protocolo TF Sempre Magra + Slim Reset Fran Yasmin.</figcaption></figure>
        </section>

        <section className="fit section-dark"><div className="section fit-grid"><div className="fit-copy reveal"><span className="eyebrow lime">É PARA VOCÊ?</span><h2>Você não precisa esperar a rotina <em>ficar perfeita.</em></h2><p>Precisa de um começo compatível com a rotina que já existe.</p></div><div className="fit-list reveal">{["É mulher 30+ e quer voltar a cuidar de si", "Tem pouco tempo, mas consegue separar alguns minutos", "Quer treinar em casa ou na academia", "Busca orientação em vez de mais um treino solto", "Está disposta a participar ativamente do processo"].map((item) => <div key={item}><Check /> <span>{item}</span></div>)}</div></div></section>

        <section className="offer section"><div className="offer-panel reveal"><div className="offer-badge"><Sparkles /><span>21<br /><small>DIAS</small></span></div><div className="offer-copy"><span className="eyebrow">SUA VIRADA PODE COMEÇAR HOJE</span><h2>Comece pequeno.<br /><em>Continue diferente.</em></h2><p>Treinos curtos, orientação e comunidade para você construir ritmo sem depender de uma rotina perfeita.</p></div><div className="offer-buy"><span>PAGAMENTO ÚNICO</span><strong><small>R$</small> 47,70</strong><ActionLink href={challengeUrl}>Garantir minha participação</ActionLink><small><ShieldCheck /> Checkout seguro InfinitePay</small></div></div></section>

        <section className="faq section" id="duvidas">
          <div className="faq-heading reveal"><span className="eyebrow">ANTES DE COMEÇAR</span><h2>Dúvidas<br /><em>frequentes.</em></h2><p>Se ainda quiser conversar, fale diretamente com o Frederico no WhatsApp.</p><ActionLink href={whatsappUrl} tone="ghost">Tirar outra dúvida</ActionLink></div>
          <div className="faq-list reveal">{[
            ["Posso fazer os treinos em casa?", "Sim. O desafio inclui treinos e protocolos de cardio que podem ser realizados em casa. A proposta também atende quem prefere a academia."],
            ["Quanto tempo dura cada treino?", "Os treinos do desafio foram organizados para durar até 15 minutos por dia."],
            ["E se eu não conseguir acompanhar ao vivo?", "Os encontros ficam gravados para você assistir no horário mais compatível com a sua rotina."],
            ["O que recebo no Desafio de 21 Dias?", "Treinos ao vivo e gravados, protocolos de cardio, cardápio do desafio, dicas, metas, planner e acesso ao grupo exclusivo no WhatsApp."],
            ["Qual a diferença para a consultoria?", "O desafio é uma experiência guiada de 21 dias. A consultoria oferece uma conversa e um acompanhamento mais próximo; os detalhes são explicados diretamente pelo Frederico."],
            ["O resultado é garantido?", "Não existe resultado idêntico para todas as pessoas. A resposta depende da condição inicial, frequência, alimentação, sono e aplicação do método. Consulte um profissional de saúde antes de iniciar uma nova rotina quando necessário."],
          ].map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </section>

        <section className="final-cta"><div className="final-grid section reveal"><div><span className="eyebrow lime">TF SEMPRE MAGRA</span><h2>Chega de recomeçar<br />do <em>zero.</em></h2></div><div><p>Escolha o seu caminho e transforme os próximos dias no início de uma rotina que você consegue sustentar.</p><div className="final-actions"><ActionLink href={challengeUrl}>Entrar no desafio</ActionLink><ActionLink href={whatsappUrl} tone="ghost">Conhecer a consultoria</ActionLink></div></div></div></section>
      </main>

      <footer className="footer"><Brand /><p>Treino, direção e consistência para mulheres 30+.</p><a href={instagramUrl} target="_blank" rel="noopener noreferrer"><Camera size={18} /> @treinador_frederico</a><button type="button" onClick={() => setPrivacyOpen(true)}>Privacidade</button><span>© {new Date().getFullYear()} TF Sempre Magra</span></footer>
      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Falar com o Frederico no WhatsApp"><MessageCircle /></a>
      <dialog ref={dialog} className="privacy-dialog" onCancel={() => setPrivacyOpen(false)} onClose={() => setPrivacyOpen(false)}><button className="dialog-close" type="button" aria-label="Fechar política de privacidade" onClick={() => setPrivacyOpen(false)}><X /></button><span className="eyebrow">PRIVACIDADE</span><h2>Seus dados, sua escolha.</h2><p>Esta página não coleta dados por formulário. Os botões direcionam para WhatsApp, Instagram e InfinitePay, que possuem políticas próprias.</p><button className="button button-lime" type="button" onClick={() => setPrivacyOpen(false)}><Check /> Entendi</button></dialog>
    </div>
  );
}

export default App;
