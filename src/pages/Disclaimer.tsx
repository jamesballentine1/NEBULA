import CTASection from "@/components/CTASection";

const Disclaimer = () => (
  <main className="relative z-10 pt-32 pb-16 px-4">
    <div className="container mx-auto max-w-3xl">
      <h1 className="font-display text-4xl font-bold text-foreground mb-8">Disclaimer</h1>

      <div className="glass-card p-8 space-y-6 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">General Information</h2>
          <p>The information provided on the NebulaNet 360 website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">No Professional Advice</h2>
          <p>The content on this website does not constitute professional advice. Any reliance you place on such information is strictly at your own risk. You should consult with a qualified professional for specific advice tailored to your situation.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Service Availability</h2>
          <p>Service availability, speeds, and pricing may vary by location and are subject to change without notice. Advertised speeds represent maximum potential speeds and actual speeds may vary based on network conditions, equipment, and other factors.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Third-Party Links</h2>
          <p>This website may contain links to third-party websites. These links are provided for your convenience only. NebulaNet 360 has no control over the content of those sites and accepts no responsibility for them or for any loss or damage arising from your use of them.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
          <p>In no event shall NebulaNet 360 be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising out of or in connection with the use of this website or our services.</p>
        </section>

        <p className="text-sm text-muted-foreground/60 pt-4 border-t border-border/30">Last updated: February 2026</p>
      </div>
    </div>
    <CTASection />
  </main>
);

export default Disclaimer;
