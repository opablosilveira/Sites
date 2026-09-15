import { ArrowUpRight, MessageCircle, Plus } from "lucide-react";

const phone = "5511942975214";

export const whatsapp = (
  message = "Olá, Farmacenter! Vim pelo site e gostaria de atendimento.",
) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export const maps =
  "https://www.google.com/maps/search/?api=1&query=Drogaria+Farmacenter,+Rua+Marechal+Deodoro+da+Fonseca,+126,+Centro,+Cabre%C3%BAva,+SP";

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`brand ${footer ? "brand-footer" : ""}`}
      href="#inicio"
      aria-label="Farmacenter, início"
    >
      <span className="brand-icon">
        <Plus strokeWidth={4} />
      </span>
      <span>
        farma<span className="brand-light">center</span>
        <small>DROGARIA · CABREÚVA</small>
      </span>
    </a>
  );
}

export function ContactButton({
  label = "Pedir pelo WhatsApp",
  className = "",
  message,
}: {
  label?: string;
  className?: string;
  message?: string;
}) {
  return (
    <a
      className={`button ${className}`}
      href={whatsapp(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={18} />
      <span>{label}</span>
      <ArrowUpRight size={19} />
    </a>
  );
}
