import { useState } from "react";
import { ArrowUpRight, HeartPulse, PackageCheck, Sparkles } from "lucide-react";
import { whatsapp } from "./shared";

const categories = [
  {
    title: "Medicamentos",
    tagline: "O essencial, sem complicação.",
    text: "Envie o nome do medicamento pelo WhatsApp e consulte disponibilidade antes de sair de casa.",
    label: "Consultar medicamento",
    tags: ["Referência", "Genéricos", "Similares"],
    message: "Olá! Gostaria de consultar a disponibilidade de um medicamento.",
    visual: "MED",
    symbol: HeartPulse,
    tone: "health",
  },
  {
    title: "Higiene",
    tagline: "Cuidado para todos os dias.",
    text: "Itens de higiene, cuidados pessoais e conveniência para a rotina de toda a família.",
    label: "Consultar um produto",
    tags: ["Higiene pessoal", "Cuidados diários"],
    message: "Olá! Gostaria de consultar um produto de higiene ou cuidado pessoal.",
    visual: "DIA",
    symbol: Sparkles,
    tone: "care",
  },
  {
    title: "Bem-estar",
    tagline: "Mais praticidade na sua rotina.",
    text: "Converse com a equipe para encontrar produtos de saúde e bem-estar disponíveis na loja.",
    label: "Falar com a equipe",
    tags: ["Saúde", "Bem-estar", "Conveniência"],
    message: "Olá! Gostaria de informações sobre produtos de saúde e bem-estar.",
    visual: "BEM",
    symbol: PackageCheck,
    tone: "wellness",
  },
];

export default function CareSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const active = categories[activeCategory];
  const Symbol = active.symbol;

  return (
    <section className="care-section section-pad" id="cuidado">
      <div className="section-heading reveal">
        <div>
          <span className="eyebrow">
            <span /> O QUE VOCÊ PRECISA, MAIS PERTO.
          </span>
          <h2>
            Cuidado simples.
            <br />
            <span>Atendimento direto.</span>
          </h2>
        </div>
        <p>
          Consulte antes.{" "}
          <br />
          Escolha como receber.{" "}
          <br />E conte com uma farmácia da cidade.
        </p>
      </div>

      <div
        className="category-tabs reveal"
        role="tablist"
        aria-label="Explore nossas categorias"
      >
        {categories.map((category, index) => (
          <button
            type="button"
            id={`tab-${index}`}
            role="tab"
            aria-selected={index === activeCategory}
            aria-controls="category-panel"
            tabIndex={index === activeCategory ? 0 : -1}
            key={category.title}
            onClick={() => setActiveCategory(index)}
            onKeyDown={(event) => {
              if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) {
                event.preventDefault();
                const next =
                  event.key === "Home"
                    ? 0
                    : event.key === "End"
                      ? 2
                      : (index + (event.key === "ArrowRight" ? 1 : 2)) % 3;
                setActiveCategory(next);
                document.getElementById(`tab-${next}`)?.focus();
              }
            }}
          >
            <span>0{index + 1}</span>
            {category.title}
            <ArrowUpRight />
          </button>
        ))}
      </div>

      <div
        className="category-panel reveal"
        id="category-panel"
        role="tabpanel"
        aria-labelledby={`tab-${activeCategory}`}
        tabIndex={0}
      >
        <div className={`category-photo category-art art-${active.tone}`}>
          <div className="art-grid" aria-hidden="true" />
          <Symbol className="art-icon" aria-hidden="true" />
          <strong aria-hidden="true">{active.visual}</strong>
          <div className="image-tag">
            <PackageCheck size={16} /> CONSULTE PELO WHATSAPP
          </div>
        </div>
        <div className="category-copy">
          <span className="category-symbol" aria-hidden="true">+</span>
          <div className="tags">
            {active.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <h3>{active.tagline}</h3>
          <p>{active.text}</p>
          <a
            className="text-link"
            href={whatsapp(active.message)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {active.label}
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
