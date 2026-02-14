import { Phone, Tv, Wifi, Link2, Globe, DollarSign, Headphones, ShieldCheck, Zap, Gift, Star } from "lucide-react";
import CTASection from "@/components/CTASection";

const PHONE = "(888) 341-3350";
const telLink = `tel:${PHONE.replace(/[^0-9]/g, "")}`;

const services = [
  { icon: Tv, title: "Streaming Services", desc: "Live TV, on-demand movies, premium channels, and 4K streaming — all in one place.", link: "/streaming" },
  { icon: Wifi, title: "High-Speed Internet", desc: "Blazing-fast speeds up to 1 Gig. Low latency, fiber-ready, and built for modern life.", link: "/internet" },
  { icon: Link2, title: "Smart Bundles", desc: "Combine streaming and internet for maximum savings. One bill, zero hassle.", link: "#plans" },
];

const whyUs = [
  { icon: Globe, title: "Nationwide Availability" },
  { icon: DollarSign, title: "Competitive Pricing" },
  { icon: Headphones, title: "24/7 Customer Support" },
  { icon: ShieldCheck, title: "No Hidden Fees" },
  { icon: Zap, title: "Fast Installation" },
  { icon: Gift, title: "Bundle & Save" },
];

const plans = [
  { name: "Basic Connect", speed: "100 Mbps", channels: "80+ Channels", price: "$49.99/mo", features: ["HD Streaming", "Standard Router", "Email Support"] },
  { name: "Pro Stream", speed: "300 Mbps", channels: "150+ Channels", price: "$79.99/mo", popular: true, features: ["4K Streaming", "Premium Router", "24/7 Support", "Sports Add-ons"] },
  { name: "Ultimate 360", speed: "1 Gig", channels: "250+ Channels", price: "$119.99/mo", features: ["4K + HDR", "Mesh Wi-Fi System", "Priority Support", "All Premium Channels", "Smart Home Hub"] },
];

const testimonials = [
  { name: "Sarah M.", location: "Austin, TX", text: "NebulaNet 360 transformed our home entertainment. The speed is incredible and the streaming quality is unmatched.", stars: 5 },
  { name: "James R.", location: "Denver, CO", text: "Switched from our old provider and couldn't be happier. The bundle savings are real — and the support team is fantastic.", stars: 5 },
  { name: "Maria L.", location: "Phoenix, AZ", text: "Finally, one provider that does it all. Internet, streaming, and amazing customer service. Highly recommended!", stars: 5 },
];

const Index = () => (
  <main className="relative z-10">
    {/* Hero */}
    <section className="min-h-screen flex items-center justify-center px-4 pt-28 pb-16">
      <div className="container mx-auto text-center max-w-4xl">
        <p className="text-primary font-medium mb-4 text-sm tracking-widest uppercase animate-fade-in">Complete Connectivity. Infinite Entertainment.</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Entertainment & Internet at the{" "}
          <span className="text-gradient">Speed of Light</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Premium streaming, high-speed internet, and smart bundles — all under one universe.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <a href={telLink} className="glow-button inline-flex items-center text-lg">
            <Phone className="w-5 h-5 mr-2" /> Call Now: {PHONE}
          </a>
          <a href="/contact" className="glow-button-secondary inline-flex items-center text-lg">
            Check Availability
          </a>
        </div>
        <p className="text-muted-foreground/50 text-xs mt-6">Limited Time Offer · Availability May Vary by Location</p>
      </div>
    </section>

    {/* Services Overview */}
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">Everything you need for a connected life, all from one provider.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="glass-card p-8 text-center group hover:scale-[1.02] transition-transform duration-300">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
              <a href={s.link} className="text-primary text-sm font-medium hover:underline">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">Why Choose NebulaNet 360</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {whyUs.map((item) => (
            <div key={item.title} className="glass-card p-6 text-center hover:scale-[1.02] transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-sm md:text-base">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Plans */}
    <section id="plans" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">Featured Plans</h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">Choose the perfect plan for your household. All plans include professional installation.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`glass-card p-8 flex flex-col relative ${plan.popular ? "ring-2 ring-primary" : ""}`}>
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{plan.speed} · {plan.channels}</p>
              <p className="font-display text-3xl font-bold text-gradient mb-6">{plan.price}</p>
              <ul className="space-y-2 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ShieldCheck className="w-4 h-4 text-accent shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a href={telLink} className="glow-button text-center text-sm">
                <Phone className="w-4 h-4 mr-2 inline" /> Call {PHONE}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <CTASection />
  </main>
);

export default Index;
