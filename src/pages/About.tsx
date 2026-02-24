import { Phone, Target, Eye, Users, Shield, Server, HeartHandshake } from "lucide-react";
import CTASection from "@/components/CTASection";

const PHONE = "(888) 290-4405";

const values = [
  { icon: Target, title: "Our Mission", desc: "To deliver seamless entertainment and connectivity experiences that empower every household to stay connected, entertained, and informed." },
  { icon: Eye, title: "Our Vision", desc: "A world where premium internet and entertainment are accessible, affordable, and unified under one trusted provider." },
  { icon: Users, title: "Customer-First Approach", desc: "Every decision we make starts with our customers. From plan flexibility to 24/7 support, your satisfaction drives us forward." },
  { icon: Shield, title: "Reliability Promise", desc: "We invest in redundant infrastructure and proactive monitoring to deliver 99.9% uptime across our network." },
  { icon: Server, title: "Infrastructure Quality", desc: "Our fiber-ready network spans coast to coast, with continuous upgrades to support next-generation speeds and services." },
  { icon: HeartHandshake, title: "Support Commitment", desc: "Our U.S.-based support team is available 24/7, 365 days a year. Real people, real solutions, every time you call." },
];

const About = () => (
  <main className="relative z-10">
    {/* Hero */}
    <section className="min-h-[60vh] flex items-center justify-center px-4 pt-28 pb-16">
      <div className="container mx-auto text-center max-w-3xl">
        <p className="text-primary font-medium mb-4 text-sm tracking-widest uppercase">About Us</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Powering Connections <span className="text-gradient">Across the Nation</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          NebulaNet 360 was built to unify entertainment and connectivity into one seamless ecosystem. We believe everyone deserves premium internet and world-class streaming — without the complexity.
        </p>
      </div>
    </section>

    {/* Brand Story */}
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold mb-8">Our Story</h2>
        <div className="glass-card p-8 md:p-12 text-left space-y-4 text-muted-foreground leading-relaxed">
          <p>
            In a world of fragmented services and complicated bills, NebulaNet 360 was born from a simple idea: <strong className="text-foreground">what if one provider could do it all — and do it brilliantly?</strong>
          </p>
          <p>
            We set out to build a network that doesn't just deliver internet — it delivers experiences. From crystal-clear 4K streaming to lag-free gaming, from remote work reliability to whole-home smart connectivity, every aspect of our service is designed with one thing in mind: you.
          </p>
          <p>
            Today, NebulaNet 360 serves communities nationwide with a commitment to transparency, quality, and innovation. No hidden fees. No contracts. Just exceptional service backed by people who genuinely care.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="font-display text-3xl font-bold text-center mb-12">What We Stand For</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="glass-card p-8 hover:scale-[1.02] transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection headline="Join the NebulaNet 360 Family" subheadline="Experience the difference of a provider that puts you first." label="Call to Get Started" />
  </main>
);

export default About;
