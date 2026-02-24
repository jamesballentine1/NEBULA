import { Phone } from "lucide-react";

const PHONE = "(888) 290-4405";

const FloatingCallButton = () => (
  <a
    href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 md:hidden"
    style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
    aria-label={`Call ${PHONE}`}
  >
    <Phone className="w-6 h-6 text-primary-foreground" />
  </a>
);

export default FloatingCallButton;
