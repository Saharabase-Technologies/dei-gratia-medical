import { Icon } from "@/components/icon";
import { site } from "@/config/site";

/** Persistent WhatsApp tap-target, bottom-right on every page. */
export function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${site.shortName} on WhatsApp`}
      className="lift fixed right-4 bottom-4 z-40 grid h-14 w-14 place-items-center rounded-full text-white shadow-[0_10px_28px_-8px_rgba(14,133,122,0.55)] md:right-6 md:bottom-6"
      style={{ background: "linear-gradient(150deg, #2bc46e, #1ba85c)" }}
    >
      <Icon name="whatsapp" size={27} viewBox="0 0 32 32" />
    </a>
  );
}
