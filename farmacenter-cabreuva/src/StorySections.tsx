import {
  ArrowUpRight,
  Clock3,
  MapPin,
  MessageCircle,
  Minus,
  MoveUpRight,
  Plus,
  Store,
  Truck,
} from "lucide-react";
import { ContactButton, maps, whatsapp } from "./shared";

export default function StorySections() {
  return (
    <>
      <section className="services-section section-pad" id="servicos">
        <div className="section-heading reveal">
          <div>
            <span className="eyebrow">
              <span /> DO SEU JEITO.
            </span>
            <h2>
              Chame. Consulte.
              <br />
              <span>Resolva.</span>
            </h2>
          </div>
          <p>
            Um atendimento direto para confirmar{" "}
            <br />
            produtos, combinar a retirada{" "}
            <br />ou pedir entrega.
          </p>
        </div>
        <div className="service-grid">
          {[
            {
              icon: <MessageCircle />,
              number: "01",
              title: "Pedido no WhatsApp",
              text: "Envie o que procura, consulte disponibilidade e tire suas dúvidas com a equipe.",
              message: "Olá! Gostaria de fazer um pedido pelo WhatsApp.",
            },
            {
              icon: <Store />,
              number: "02",
              title: "Retirada na loja",
              text: "Combine o pedido antes e passe na Farmacenter para retirar no Centro de Cabreúva.",
              message: "Olá! Gostaria de consultar um produto para retirada na loja.",
            },
            {
              icon: <Truck />,
              number: "03",
              title: "Entrega",
              text: "Consulte com a equipe a disponibilidade e as condições de entrega para o seu endereço.",
              message: "Olá! Gostaria de saber sobre entrega para o meu endereço.",
            },
          ].map((service) => (
            <a
              key={service.number}
              className="service-card reveal"
              href={whatsapp(service.message)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="service-card-top">
                <span className="service-icon">{service.icon}</span>
                <span>{service.number}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="service-card-bottom">
                Falar com a equipe <ArrowUpRight size={22} />
              </div>
            </a>
          ))}
        </div>
        <p className="service-note">
          Disponibilidade, valores e condições são confirmados diretamente com a equipe.
        </p>
      </section>

      <section className="manifesto">
        <img
          src="/images/map-2.jpg"
          alt="Fachada da Drogaria Farmacenter no Centro de Cabreúva"
          loading="lazy"
        />
        <div className="manifesto-overlay" />
        <div className="manifesto-content reveal">
          <span className="eyebrow">UMA FARMÁCIA DA CIDADE.</span>
          <h2>
            No Centro.
            <br />
            Na sua rotina.
            <br />
            <span>Do seu lado.</span>
          </h2>
          <p>
            Há mais de duas décadas atendendo Cabreúva{" "}
            <br />
            no mesmo endereço.
          </p>
          <a className="button button-white" href="#contato">
            Conhecer a Farmacenter <ArrowUpRight size={20} />
          </a>
        </div>
        <div className="manifesto-mark" aria-hidden="true">+</div>
      </section>

      <section className="visit-section section-pad" id="contato">
        <div className="visit-copy reveal">
          <span className="eyebrow">
            <span /> É BEM NO CENTRO.
          </span>
          <h2>
            Fácil de encontrar.
            <br />
            Simples de <span>resolver.</span>
          </h2>
          <p>
            Passe pela loja ou envie uma mensagem.
            <br />
            A equipe ajuda você a confirmar o que precisa.
          </p>
          <address>
            <MapPin />
            <div>
              <strong>Rua Marechal Deodoro da Fonseca, 126</strong>
              <span>Centro · Cabreúva / SP</span>
              <span>CEP 13315-000</span>
            </div>
          </address>
          <div className="hours-card">
            <Clock3 />
            <div>
              <strong>Segunda a sexta · 07h às 20h</strong>
              <span>Sábado · 08h às 20h</span>
              <span>Domingo · 08h às 12h</span>
            </div>
          </div>
          <div className="visit-actions">
            <a
              className="button button-blue"
              href={maps}
              target="_blank"
              rel="noopener noreferrer"
            >
              Como chegar <MoveUpRight size={19} />
            </a>
            <a
              className="text-link"
              href={whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chamar no WhatsApp <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="phone-line">
            <span>Telefone e WhatsApp</span>
            <a href="tel:+5511942975214">(11) 94297-5214</a>
          </div>
        </div>

        <a
          href={maps}
          target="_blank"
          rel="noopener noreferrer"
          className="location-card reveal"
          aria-label="Abrir rota para a Drogaria Farmacenter no Google Maps"
        >
          <img
            src="/images/map-3.jpg"
            alt="Entrada da Drogaria Farmacenter em Cabreúva"
            loading="lazy"
          />
          <div className="location-chip">
            <MapPin size={17} /> RUA MARECHAL DEODORO, 126 <ArrowUpRight size={20} />
          </div>
        </a>
      </section>

      <section className="faq-section section-pad">
        <div className="reveal">
          <span className="eyebrow">
            <span /> INFORMAÇÃO DIRETA.
          </span>
          <h2>
            Antes de sair,
            <br />
            <span>é só chamar.</span>
          </h2>
          <a
            className="text-link"
            href={whatsapp()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com a Farmacenter <ArrowUpRight size={20} />
          </a>
        </div>
        <div className="faq-list reveal">
          {[
            {
              q: "Como consultar um medicamento?",
              a: "Toque em “Pedir pelo WhatsApp” e envie o nome ou uma foto da embalagem. A equipe confirma disponibilidade e valor pelo atendimento.",
            },
            {
              q: "A Farmacenter faz entrega?",
              a: "Sim. Fale com a equipe pelo WhatsApp para confirmar disponibilidade, prazo e condições para o seu endereço.",
            },
            {
              q: "Posso retirar meu pedido na loja?",
              a: "Sim. Você pode combinar o pedido pelo WhatsApp e retirar na Rua Marechal Deodoro da Fonseca, 126, no Centro.",
            },
            {
              q: "Qual é o horário de atendimento?",
              a: "De segunda a sexta, das 07h às 20h; sábado, das 08h às 20h; domingo, das 08h às 12h.",
            },
          ].map((faq) => (
            <details key={faq.q}>
              <summary>
                {faq.q}
                <Plus className="faq-plus" size={20} />
                <Minus className="faq-minus" size={20} />
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="reveal">
          <span className="eyebrow">FARMACENTER · CABREÚVA</span>
          <h2>
            O que você precisa
            <br />
            pode começar com um <span>oi.</span>
          </h2>
          <ContactButton label="Chamar a Farmacenter" className="button-lime" />
        </div>
        <span className="cta-flower" aria-hidden="true">+</span>
      </section>
    </>
  );
}
