import { Phone, Wifi, Gamepad2, Briefcase, Home, Gauge } from "lucide-react";
import CTASection from "@/components/CTASection";

const PHONE = "(888) 290-4405";
const telLink = `tel:${PHONE.replace(/[^0-9]/g, "")}`;

const tiers = [
  { speed: "100", label: "Mbps", name: "Essential", price: "$39.99/mo", bar: 33, desc: "Perfect for browsing, email, and standard streaming." },
  { speed: "300", label: "Mbps", name: "Performance", price: "$59.99/mo", bar: 60, desc: "Ideal for families, 4K streaming, and work from home.", popular: true },
  { speed: "1", label: "Gig", name: "Ultra", price: "$89.99/mo", bar: 100, desc: "Maximum speed for power users, gaming, and smart homes." },
];

const features = [
  { icon: Gauge, title: "Fiber-Ready Network", desc: "Our infrastructure is built for the future with fiber-optic availability expanding nationwide." },
  { icon: Gamepad2, title: "Low Latency Gaming", desc: "Ultra-low ping times and dedicated bandwidth ensure competitive gaming without lag." },
  { icon: Briefcase, title: "Work-From-Home Optimized", desc: "Reliable video conferencing, fast uploads, and consistent speeds throughout the day." },
  { icon: Home, title: "Smart Home Compatible", desc: "Connect dozens of IoT devices without slowing down. Mesh Wi-Fi options available." },
];

const Internet = () => (
  <main className="relative z-10">
    {/* Hero */}
    <section className="min-h-[60vh] flex items-center justify-center px-4 pt-28 pb-16">
      <div className="container mx-auto text-center max-w-3xl">
        <p className="text-accent font-medium mb-4 text-sm tracking-widest uppercase">Internet Plans</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Blazing Fast Internet for <span className="text-gradient">Every Galaxy</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
          From everyday browsing to competitive gaming — speeds that keep up with your life.
        </p>
        <a href={telLink} className="glow-button inline-flex items-center text-lg">
          <Phone className="w-5 h-5 mr-2" /> Call Now: {PHONE}
        </a>
      </div>
    </section>

    {/* Speed Tiers */}
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-display text-3xl font-bold text-center mb-12">Choose Your Speed</h2>
        <div className="space-y-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`glass-card p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 ${tier.popular ? "ring-2 ring-primary" : ""}`}>
              <div className="md:w-32 text-center md:text-left shrink-0">
                <span className="font-display text-4xl font-bold text-gradient">{tier.speed}</span>
                <span className="text-muted-foreground text-sm ml-1">{tier.label}</span>
                <p className="font-display font-semibold text-sm mt-1">{tier.name}</p>
              </div>
              <div className="flex-1">
                <div className="w-full bg-muted rounded-full h-3 mb-3 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000" style={{ width: `${tier.bar}%` }} />
                </div>
                <p className="text-muted-foreground text-sm">{tier.desc}</p>
              </div>
              <div className="text-center md:text-right shrink-0">
                <p className="font-display text-2xl font-bold mb-2">{tier.price}</p>
                <a href={telLink} className="glow-button text-sm inline-flex items-center">
                  <Phone className="w-4 h-4 mr-1" /> Call Now: {PHONE}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <h2 className="font-display text-3xl font-bold text-center mb-12">Built for How You Live</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="glass-card p-8 hover:scale-[1.02] transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-12 px-4 text-center">
      <p className="text-muted-foreground mb-4">📞 Check Availability Now</p>
      <a href={telLink} className="glow-button inline-flex items-center text-lg">
        <Phone className="w-5 h-5 mr-2" /> Call Now: {PHONE}
      </a>
    </section>

    <CTASection headline="Ready for Faster Internet?" subheadline="Professional installation included with every plan." label="Get Connected Today" />
  </main>
);

export default Internet;
