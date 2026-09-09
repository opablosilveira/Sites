import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { whatsapp } from "./shared";
const categories = [
  {
    title: "Saúde",
    tagline: "Cuidado que acompanha você.",
    text: "Medicamentos de referência, genéricos e similares, com orientação para você cuidar do que mais importa.",
    label: "Consultar um produto",
    image: "1.jpeg",
    alt: "Prateleiras de medicamentos da Unifarmas",
    tags: ["Medicamentos", "Orientação farmacêutica"],
    message: "Olá! Gostaria de consultar a disponibilidade de um medicamento.",
  },
  {
    title: "Beleza",
    tagline: "Seu momento. Seu cuidado.",
    text: "Perfumaria, cosméticos e cuidados pessoais para transformar pequenos rituais em bons momentos do seu dia.",
    label: "Conhecer a perfumaria",
    image: "2.jpeg",
    alt: "Área de perfumaria e cosméticos da Unifarmas",
    tags: ["Perfumaria", "Cuidados pessoais"],
    message:
      "Olá! Gostaria de conhecer os produtos de perfumaria e cuidados pessoais.",
  },
  {
    title: "Bem-estar",
    tagline: "Mais equilíbrio para sua rotina.",
    text: "Encontre produtos para complementar a sua rotina de bem-estar. Converse com nossa equipe e consulte as opções disponíveis.",
    label: "Conversar com a equipe",
    image: "5.jpeg",
    alt: "Produtos e suplementos disponíveis na Unifarmas",
    tags: ["Suplementos", "Sua rotina"],
    message: "Olá! Gostaria de informações sobre os produtos de bem-estar.",
  },
];

export default function CareSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const active = categories[activeCategory];
  return (
    <section className="care-section section-pad" id="cuidado">
      <div className="section-heading reveal">
        <div>
          <span className="eyebrow">
            <span /> UM CUIDADO. MUITAS POSSIBILIDADES.
          </span>
          <h2>
            Faz parte da vida.
            <br />
            <span>Faz bem pra você.</span>
          </h2>
        </div>
        <p>
          Tem o cuidado de todo dia.
          <br />
          Tem aquele só seu.
          <br />E tem a Unifarmas para estar junto.
        </p>
      </div>
      <div
        className="category-tabs reveal"
        role="tablist"
        aria-label="Explore nossos produtos"
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
              if (
                ["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)
              ) {
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
        <div className="category-photo" key={active.image}>
          <img
            src={`/images/${active.image}`}
            alt={active.alt}
            loading="lazy"
          />
          <div className="image-tag">
            <Plus size={16} /> O SEU CUIDADO COMEÇA AQUI
          </div>
        </div>
        <div className="category-copy">
          <span className="category-symbol" aria-hidden="true">
            {activeCategory === 0 ? "✚" : activeCategory === 1 ? "✳" : "♡"}
          </span>
          <div className="tags">
            {active.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
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
