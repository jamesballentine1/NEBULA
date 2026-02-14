import { Phone } from "lucide-react";

const PHONE = "(888) 341-3350";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  label?: string;
}

const CTASection = ({
  headline = "Ready to Upgrade Your Universe?",
  subheadline = "Get premium entertainment and blazing-fast internet today.",
  label = "Call Now",
}: CTASectionProps) => (
  <section className="relative z-10 py-20 px-4">
    <div className="container mx-auto text-center max-w-2xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">{headline}</h2>
      <p className="text-muted-foreground mb-8 text-lg">{subheadline}</p>
      <a href={`tel:${PHONE.replace(/[^0-9]/g, "")}`} className="glow-button inline-flex items-center text-lg">
        <Phone className="w-5 h-5 mr-2" /> Call Now: {PHONE}
      </a>
    </div>
  </section>
);

export default CTASection;
