import { Phone, Tv, Film, Trophy, Smartphone, Monitor, Sparkles } from "lucide-react";
import CTASection from "@/components/CTASection";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PHONE = "(888) 341-3350";
const telLink = `tel:${PHONE.replace(/[^0-9]/g, "")}`;

const features = [
  { icon: Tv, title: "Live TV", desc: "Access 250+ live channels including local, national, and international networks. Never miss a moment." },
  { icon: Sparkles, title: "Premium Channels", desc: "HBO, Showtime, Starz, and more — get the best in original series, blockbusters, and exclusives." },
  { icon: Trophy, title: "Sports Add-ons", desc: "NFL, NBA, MLB, soccer, and more. Dedicated sports packages for every fan." },
  { icon: Film, title: "On-Demand Library", desc: "Thousands of movies and series available anytime. New releases added weekly." },
  { icon: Smartphone, title: "Multi-Device Access", desc: "Watch on your TV, tablet, phone, or laptop. Up to 5 simultaneous streams." },
  { icon: Monitor, title: "HD & 4K Quality", desc: "Crystal-clear picture quality with Dolby Atmos sound on supported devices." },
];

const comparison = [
  { feature: "Live Channels", basic: "80+", pro: "150+", ultimate: "250+" },
  { feature: "On-Demand Library", basic: "Limited", pro: "Full", ultimate: "Full + Early Access" },
  { feature: "Simultaneous Streams", basic: "2", pro: "3", ultimate: "5" },
  { feature: "4K Streaming", basic: "—", pro: "✓", ultimate: "✓" },
  { feature: "Sports Add-ons", basic: "—", pro: "Available", ultimate: "Included" },
  { feature: "Premium Channels", basic: "—", pro: "2 Included", ultimate: "All Included" },
  { feature: "DVR Storage", basic: "50 hrs", pro: "200 hrs", ultimate: "Unlimited" },
];

const Streaming = () => (
  <main className="relative z-10">
    {/* Hero */}
    <section className="min-h-[60vh] flex items-center justify-center px-4 pt-28 pb-16">
      <div className="container mx-auto text-center max-w-3xl">
        <p className="text-secondary font-medium mb-4 text-sm tracking-widest uppercase">Streaming Services</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Limitless Streaming. <span className="text-gradient">Zero Limits.</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
          Live TV, premium channels, sports, and thousands of on-demand titles — all in stunning HD and 4K.
        </p>
        <a href={telLink} className="glow-button inline-flex items-center text-lg">
          <Phone className="w-5 h-5 mr-2" /> Call Now: {PHONE}
        </a>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="font-display text-3xl font-bold text-center mb-12">Everything You Need to Stream</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="glass-card p-8 hover:scale-[1.02] transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-secondary" />
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
      <a href={telLink} className="glow-button-secondary inline-flex items-center text-lg">
        <Phone className="w-5 h-5 mr-2" /> Call Now: {PHONE}
      </a>
    </section>

    {/* Comparison Table */}
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-display text-3xl font-bold text-center mb-12">Compare Streaming Tiers</h2>
        <div className="glass-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-border/30">
                <TableHead className="text-foreground font-display">Feature</TableHead>
                <TableHead className="text-center text-foreground font-display">Basic</TableHead>
                <TableHead className="text-center text-primary font-display font-bold">Pro</TableHead>
                <TableHead className="text-center text-foreground font-display">Ultimate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparison.map((row) => (
                <TableRow key={row.feature} className="border-border/20">
                  <TableCell className="font-medium text-sm">{row.feature}</TableCell>
                  <TableCell className="text-center text-muted-foreground text-sm">{row.basic}</TableCell>
                  <TableCell className="text-center text-sm">{row.pro}</TableCell>
                  <TableCell className="text-center text-muted-foreground text-sm">{row.ultimate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>

    <CTASection headline="Ready to Start Streaming?" subheadline="Get access to hundreds of channels and thousands of on-demand titles." label="Speak to a Streaming Expert" />
  </main>
);

export default Streaming;
