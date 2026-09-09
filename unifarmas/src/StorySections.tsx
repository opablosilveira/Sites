import {
  ArrowUpRight,
  Heart,
  MapPin,
  MessageCircle,
  Minus,
  MoveUpRight,
  Plus,
  Sparkles,
} from "lucide-react";
import { ContactButton, maps, whatsapp } from "./shared";
export default function StorySections() {
  return (
    <>
      <section className="services-section section-pad" id="servicos">
        <div className="section-heading reveal">
          <div>
            <span className="eyebrow">
              <span /> MAIS PRESENÇA. MAIS CUIDADO.
            </span>
            <h2>
              Além do balcão.
              <br />
              <span>Ao seu lado.</span>
            </h2>
          </div>
          <p>
            Uma conversa atenta faz diferença.
            <br />
            Conheça os serviços disponíveis
            <br />e fale com nossa equipe.
          </p>
        </div>
        <div className="service-grid">
          {[
            {
              icon: <Heart />,
              number: "01",
              title: "Pressão & glicemia",
              text: "Aferição de pressão arterial e medição de glicemia para acompanhar sua saúde.",
              message:
                "Olá! Gostaria de informações sobre aferição de pressão e medição de glicemia.",
            },
            {
              icon: <Sparkles />,
              number: "02",
              title: "Um novo detalhe",
              text: "Perfuração do lóbulo da orelha e colocação de brincos com profissionais capacitados.",
              message:
                "Olá! Gostaria de informações sobre perfuração de orelha.",
            },
            {
              icon: <MessageCircle />,
              number: "03",
              title: "Pode perguntar",
              text: "Atendimento próximo e orientação farmacêutica para cuidar da sua rotina.",
              message: "Olá! Gostaria de conversar com a equipe farmacêutica.",
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
                Saiba mais <ArrowUpRight size={22} />
              </div>
            </a>
          ))}
        </div>
        <p className="service-note">
          Consulte disponibilidade, horários e condições dos serviços com a
          equipe.
        </p>
      </section>
      <section className="manifesto">
        <img
          src="/images/4.jpeg"
          alt="Um olhar para o espaço da Unifarmas"
          loading="lazy"
        />
        <div className="manifesto-overlay" />
        <div className="manifesto-content reveal">
          <span className="eyebrow">A VIDA ACONTECE AQUI.</span>
          <h2>
            No seu bairro.
            <br />
            Na sua rotina.
            <br />
            <span>Do seu lado.</span>
          </h2>
          <p>
            Mais do que um lugar para encontrar o que você precisa.
            <br />
            Um lugar para se sentir bem cuidado.
          </p>
          <a className="button button-white" href="#contato">
            Vem conhecer a Unifarmas <ArrowUpRight size={20} />
          </a>
        </div>
        <div className="manifesto-mark" aria-hidden="true">
          ✚
        </div>
      </section>
      <section className="visit-section section-pad" id="contato">
        <div className="visit-copy reveal">
          <span className="eyebrow">
            <span /> É LOGO ALI.
          </span>
          <h2>
            Um caminho curto
            <br />
            para se <span>cuidar.</span>
          </h2>
          <p>
            Estamos no centro de Cabreúva.
            <br />
            Passe por aqui ou chame a gente no WhatsApp.
          </p>
          <address>
            <MapPin />
            <div>
              <strong>Av. Marciano Xavier de Oliveira, 70</strong>
              <span>Centro · Cabreúva / SP</span>
              <span>CEP 13315-045</span>
            </div>
          </address>
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
              Consultar horários <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="phone-line">
            <span>Fale com a equipe</span>
            <a href="tel:+5511921065952">(11) 92106-5952</a>
            <a href="tel:+5511999282368">(11) 99928-2368</a>
          </div>
        </div>
        <a
          href={maps}
          target="_blank"
          rel="noopener noreferrer"
          className="location-card reveal"
          aria-label="Abrir rota para a Unifarmas no Google Maps"
        >
          <img
            src="/images/3.jpeg"
            alt="Fachada da Unifarmas em Cabreúva"
            loading="lazy"
          />
          <div className="location-chip">
            <MapPin size={17} /> TE ESPERAMOS AQUI <ArrowUpRight size={20} />
          </div>
        </a>
      </section>
      <section className="faq-section section-pad">
        <div className="reveal">
          <span className="eyebrow">
            <span /> A GENTE TE AJUDA.
          </span>
          <h2>
            Ficou com
            <br />
            <span>alguma dúvida?</span>
          </h2>
          <a
            className="text-link"
            href={whatsapp()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Vamos conversar <ArrowUpRight size={20} />
          </a>
        </div>
        <div className="faq-list reveal">
          {[
            {
              q: "Como consultar um produto?",
              a: "Toque em “Falar no WhatsApp” e conte à equipe qual produto você procura. Por lá, você pode consultar disponibilidade, valores e formas de atendimento.",
            },
            {
              q: "Onde fica a Unifarmas?",
              a: "Na Av. Marciano Xavier de Oliveira, 70, Centro, Cabreúva/SP. Use o botão “Como chegar” para abrir a localização no Google Maps.",
            },
            {
              q: "Quais serviços posso encontrar?",
              a: "O site apresenta aferição de pressão arterial, medição de glicemia, perfuração de lóbulo auricular e orientação farmacêutica. Fale com a equipe para confirmar disponibilidade e condições.",
            },
            {
              q: "Como saber o horário de atendimento?",
              a: "Consulte os horários diretamente com a equipe pelo WhatsApp ou pelos telefones informados nesta página.",
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
          <span className="eyebrow">TODO DIA É UM BOM DIA PARA SE CUIDAR.</span>
          <h2>
            Seu próximo cuidado
            <br />
            começa com um <span>oi.</span>
          </h2>
          <ContactButton label="Oi, Unifarmas!" className="button-lime" />
        </div>
        <span className="cta-flower" aria-hidden="true">
          ✳
        </span>
      </section>
    </>
  );
}
