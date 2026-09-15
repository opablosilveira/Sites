import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Check,
  Download,
  MessageCircle,
  PackageCheck,
  ShoppingBag,
  Sparkles,
  Store,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type LocalImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "alt"> & {
  alt: string;
  fill?: boolean;
  priority?: boolean;
};

function Image({ fill, priority, alt, ...props }: LocalImageProps) {
  void fill;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} {...props} loading={priority ? "eager" : props.loading} />
  );
}
const diagnosticAreas = ["Operação", "Clientes", "Estoque", "Economia da venda", "Dados", "Capacidade"];

const pillars = [
  { n: "01", title: "Exploração", text: "Testes rápidos para encontrar ofertas, mensagens e caminhos que convertem." },
  { n: "02", title: "Lapidação", text: "Melhoria contínua do que mostrou potencial, com menos desperdício." },
  { n: "03", title: "Escala", text: "Aumento controlado de volume depois de validar capacidade e margem." },
  { n: "04", title: "Extração", text: "Recompra, indicação e expansão de valor sobre a base já conquistada." },
];

const stages = [
  { name: "Descoberta", challenge: "Ser encontrada pelas pessoas certas sem ampliar o ruído operacional.", actions: ["Presença local organizada", "Conteúdo e parcerias com intenção", "Ofertas de entrada testáveis"], system: "Registra a origem do contato e conecta a primeira interação ao restante da jornada." },
  { name: "Atração", challenge: "Transformar atenção em conversa qualificada e interesse real.", actions: ["Criativos orientados por oferta", "Prova social e bastidores", "Segmentação por intenção"], system: "Classifica o motivo do contato e identifica produto, urgência e estágio de compra." },
  { name: "Consideração", challenge: "Ajudar a cliente a escolher sem depender de uma conversa longa para cada item.", actions: ["Catálogo com contexto", "Comparação e indicação guiada", "Dúvidas frequentes e prova"], system: "Consulta cadastro e disponibilidade, sugere caminhos e transfere o caso consultivo com contexto." },
  { name: "Ação", challenge: "Converter a decisão em pedido com estoque, pagamento e entrega alinhados.", actions: ["Pedido assistido", "Upsell e cross-sell contextual", "Handoff humano quando necessário"], system: "Orquestra CRM, PDV, estoque e pedido para reduzir retrabalho e divergência." },
  { name: "Lealdade", challenge: "Transformar uma compra concluída em recompra, indicação e relacionamento.", actions: ["Lembretes de reposição", "Reativação de clientes", "Fidelidade, indicação e satisfação"], system: "Reconhece padrões de recompra, cria filas de ação e mede o valor acumulado da relação." },
];

const metrics = ["Conversão", "Margem", "Ticket médio", "Recompra", "Mensagens por pedido", "Intervenção manual", "Tempo da liderança", "Origem das vendas"];

function IcebergStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
      setProgress(Math.min(1, Math.max(0, -rect.top / travel)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  const hiddenLeft = ["Oferta", "Atendimento", "CRM", "PDV", "Estoque"];
  const hiddenRight = ["Pedidos", "Logística", "Caixa", "Métricas", "Recompra"];
  return (
    <section className="iceberg-story" id="diferenca" ref={sectionRef} style={{ "--iceberg-progress": progress } as React.CSSProperties}>
      <div className="iceberg-sticky">
        <div className="section-heading iceberg-heading"><span className="eyebrow">A NOSSA DIFERENÇA</span><h2>Muito além dos botões, existe uma operação que precisa funcionar.</h2></div>
        <div className="iceberg-scene" aria-label="O iceberg da operação comercial">
          <div className="visible-layer"><span>Site</span><span>WhatsApp</span><span>Anúncios</span></div>
          <div className="waterline"><span>PONTA VISÍVEL</span></div>
          <div className="underwater">
            <div className="hidden-list left-list">{hiddenLeft.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="iceberg-shape"><strong>O QUE<br />SUSTENTA<br />O RESULTADO</strong></div>
            <div className="hidden-list right-list">{hiddenRight.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </div>
        <p className="iceberg-thesis">A interface inicia a experiência. O método, os dados e o sistema sustentam o resultado.</p>
      </div>
    </section>
  );
}

function Journey() {
  const [active, setActive] = useState(0);
  const stage = stages[active];
  return (
    <section className="section journey" id="jornada">
      <div className="section-heading reveal"><span className="eyebrow pink">JORNADA DO CONSUMIDOR</span><h2>O método acompanha a cliente antes, durante e depois da compra.</h2><p>Cada etapa combina desafio comercial, ações práticas e comportamento de sistema.</p></div>
      <div className="journey-tabs reveal" role="tablist" aria-label="Etapas da jornada">
        {stages.map((item, index) => <button key={item.name} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)}><small>0{index + 1}</small><span>{item.name}</span></button>)}
      </div>
      <div className="journey-panel" role="tabpanel" key={stage.name}>
        <div className="journey-title"><span>ETAPA 0{active + 1}</span><h3>{stage.name}</h3></div>
        <article className="challenge-card"><span>DESAFIO</span><p>{stage.challenge}</p></article>
        <article className="actions-card"><span>AÇÕES PRÁTICAS</span><ul>{stage.actions.map((action) => <li key={action}><Check />{action}</li>)}</ul></article>
        <article className="system-card"><BrainCircuit /><div><span>O SISTEMA</span><p>{stage.system}</p></div></article>
        {active === 2 && <Image className="journey-image" src="/images/photo-3.jpg" alt="Produtos coloridos da Doce Alice" width={300} height={224} />}
      </div>
    </section>
  );
}

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const update = () => { const max = document.documentElement.scrollHeight - window.innerHeight; setScrollProgress(max > 0 ? window.scrollY / max : 0); };
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <main>
      <div className="page-progress" style={{ transform: `scaleX(${scrollProgress})` }} />
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Ostiom, voltar ao início">OSTIOM</a>
        <nav aria-label="Navegação principal"><a href="#diagnostico">Diagnóstico</a><a href="#metodo">Método</a><a href="#jornada">Jornada</a><a href="#sistema">Sistema</a></nav>
        <a className="download-link" href="/downloads/Doce_Alice_Reuniao_Metodo_e_Sistema.pdf" target="_blank" rel="noreferrer">PDF <Download /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy"><span className="eyebrow">OSTIOM × DOCE ALICE</span><h1>Crescer sem transformar cada venda em <em>mais trabalho.</em></h1><p>Um fluxo de vendas com método para decidir, sistema para executar e dados para aprender.</p><a className="primary-cta" href="#diagnostico">Começar pelo diagnóstico <ArrowDown /></a></div>
        <div className="hero-visual"><Image src="/images/photo-2.jpg" alt="Produtos coloridos da Doce Alice" fill priority sizes="(max-width: 1000px) 100vw, 44vw" /><span className="hero-tag">MÉTODO + SISTEMA</span><div className="orbit orbit-one" /><div className="orbit orbit-two" /></div>
      </section>

      <section className="meeting-route section compact">
        <div className="section-heading reveal"><span className="eyebrow">COMO ESTA CONVERSA ACONTECE</span><h2>Primeiro ouvimos. Depois mostramos o caminho.</h2></div>
        <div className="route-line reveal">{["Contexto", "Diagnóstico", "Método", "Sistema", "Próximo ciclo"].map((item, index) => <div key={item}><span>{index + 1}</span><strong>{item}</strong></div>)}</div>
      </section>

      <section className="section diagnosis" id="diagnostico">
        <div className="section-heading reveal"><span className="eyebrow">DIAGNÓSTICO</span><h2>Antes de propor tecnologia, precisamos entender o negócio que ela vai sustentar.</h2><p>A prioridade nasce da operação real, não de uma lista pronta de ferramentas.</p></div>
        <div className="diagnostic-grid reveal">{diagnosticAreas.map((area, index) => <div className={index === 3 ? "highlight" : ""} key={area}><span>0{index + 1}</span><strong>{area}</strong></div>)}</div>
        <div className="diagnosis-callout reveal"><p>O problema certo aparece quando a conversa revela onde a capacidade termina, a informação se perde e a liderança volta para a operação.</p><ArrowRight /></div>
      </section>

      <IcebergStory />

      <section className="section contrast-section">
        <div className="section-heading reveal"><span className="eyebrow">O QUE NORMALMENTE ACONTECE</span><h2>Mais atividade chega. A empresa ainda precisa transformá-la em venda.</h2></div>
        <div className="contrast-flow reveal"><div>Publicam ou anunciam</div><ArrowRight /><div>Entregam números de alcance</div><ArrowRight /><div className="danger">A operação continua fragmentada</div></div>
        <div className="difference-band reveal"><Sparkles /><p><strong>A Ostiom conecta aquisição, conversão, operação e recorrência.</strong> O trabalho continua até o aprendizado virar melhoria.</p></div>
      </section>

      <section className="section method" id="metodo">
        <div className="section-heading reveal"><span className="eyebrow">OS PILARES DO MÉTODO</span><h2>Explorar, lapidar, escalar e extrair mais valor do que já foi construído.</h2></div>
        <div className="pillar-grid">{pillars.map((pillar) => <article className="pillar-card reveal" key={pillar.title}><span>{pillar.n}</span><h3>{pillar.title}</h3><p>{pillar.text}</p></article>)}</div>
        <div className="method-loop reveal"><span>EXPLORAR</span><ArrowRight /><span>APRENDER</span><ArrowRight /><span>MELHORAR</span><ArrowRight /><span>REPETIR</span></div>
      </section>

      <Journey />

      <section className="section architecture" id="sistema">
        <div className="section-heading reveal"><span className="eyebrow pink">O SISTEMA QUE EXECUTA O MÉTODO</span><h2>Um cérebro operacional mantém canais, dados e decisões na mesma conversa.</h2></div>
        <div className="architecture-map reveal">
          <div className="architecture-column"><span>CANAIS</span><div><MessageCircle />WhatsApp</div><div><Store />Loja</div><div><ShoppingBag />E-commerce</div></div><ArrowRight className="map-arrow" />
          <div className="brain-card"><BrainCircuit /><strong>CÉREBRO<br />OPERACIONAL</strong><small>contexto · coordenação · inteligência</small></div><ArrowRight className="map-arrow" />
          <div className="architecture-column records"><span>REGISTROS</span><div><BarChart3 />CRM</div><div><Store />PDV</div><div><PackageCheck />Estoque</div><div><ShoppingBag />Pedidos</div></div>
        </div>
        <div className="outputs reveal"><span>Prioridades</span><span>Alertas</span><span>Próxima ação</span><span>Indicadores</span></div>
      </section>

      <section className="section intelligence">
        <div className="section-heading reveal"><span className="eyebrow pink">INTELIGÊNCIA COM CONTROLE</span><h2>A IA interpreta contexto. As regras protegem a operação.</h2></div>
        <div className="intelligence-grid reveal">{["Classifica conversas", "Consulta disponibilidade", "Sugere o próximo passo", "Identifica recompra", "Resume o que exige decisão"].map((item) => <div key={item}><Check />{item}</div>)}</div>
        <p className="guardrail reveal">Dados críticos e ações sensíveis exigem fonte confiável, regra definida ou aprovação humana.</p>
      </section>

      <section className="section implementation">
        <div className="section-heading reveal"><span className="eyebrow pink">PRIMEIRO CICLO</span><h2>A implementação começa devolvendo capacidade para a operação.</h2></div>
        <div className="implementation-grid reveal">{[["Diagnosticar", "Mapear processo, dados, integrações e linha de base."], ["Conectar", "Unificar catálogo, estoque, conversas e pedidos prioritários."], ["Automatizar", "Retirar repetição com regras, contexto e handoff humano."], ["Otimizar", "Medir, corrigir e escolher o próximo experimento."]].map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        <Image className="implementation-image" src="/images/photo-1.jpg" alt="Chegada da Doce Alice a Itu" width={380} height={260} />
      </section>

      <section className="section measurement">
        <div className="section-heading reveal"><span className="eyebrow">TRANSPARÊNCIA NO PROCESSO</span><h2>O relatório conecta crescimento no caixa à capacidade criada na operação.</h2></div>
        <div className="measurement-layout reveal"><div className="central-metric"><span>MÉTRICA CENTRAL</span><strong>PEDIDOS POR<br />HORA HUMANA</strong><small>crescimento com capacidade</small></div><div className="metric-grid">{metrics.map((metric) => <span key={metric}>{metric}</span>)}</div></div>
      </section>

      <section className="final-section" id="proximo-passo">
        <div className="final-copy reveal"><span className="eyebrow">PRÓXIMO PASSO</span><h2>Transformar o diagnóstico em um primeiro ciclo claro, mensurável e executável.</h2><p>Escopo e investimento serão dimensionados a partir do volume, catálogo, dados, integrações e capacidade da equipe para operar a mudança.</p><a className="primary-cta" href="#inicio">Retomar a visão <ArrowRight /></a></div>
        <div className="final-brand"><Image src="/images/brand.jpg" alt="Doce Alice" width={640} height={854} /><span>OSTIOM × DOCE ALICE</span></div>
      </section>

      <footer><span>OSTIOM</span><p>Sistema de crescimento para empresas que já vendem.</p><a href="/downloads/Doce_Alice_Reuniao_Metodo_e_Sistema.pdf" target="_blank" rel="noreferrer">Abrir apresentação <Download /></a></footer>
    </main>
  );
}

