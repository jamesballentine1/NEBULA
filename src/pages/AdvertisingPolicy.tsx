import CTASection from "@/components/CTASection";

const AdvertisingPolicy = () => (
  <main className="relative z-10 pt-32 pb-16 px-4">
    <div className="container mx-auto max-w-3xl">
      <h1 className="font-display text-4xl font-bold text-foreground mb-8">Advertising Policy</h1>

      <div className="glass-card p-8 space-y-6 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Advertising Practices</h2>
          <p>NebulaNet 360 is committed to honest, transparent advertising. All promotional materials, pricing, and service descriptions are presented as accurately as possible. We strive to clearly distinguish advertising content from editorial content.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Pricing & Promotions</h2>
          <p>Advertised prices reflect current offerings at the time of publication but are subject to change. Promotional rates may apply for a limited time and are subject to specific terms and conditions. Standard rates will apply after promotional periods expire.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Speed Claims</h2>
          <p>Internet speed claims represent maximum potential speeds under optimal conditions. Actual speeds may vary based on network congestion, distance from infrastructure, device capabilities, and other factors.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Third-Party Advertising</h2>
          <p>Our website may display third-party advertisements. NebulaNet 360 does not endorse or guarantee the products or services advertised by third parties. Clicking on third-party ads may redirect you to external websites governed by their own policies.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
          <p>If you have questions about our advertising practices or believe an advertisement is misleading, please contact us at (888) 290-4405 or support@nebulanet360.com.</p>
        </section>

        <p className="text-sm text-muted-foreground/60 pt-4 border-t border-border/30">Last updated: February 2026</p>
      </div>
    </div>
    <CTASection />
  </main>
);

export default AdvertisingPolicy;
