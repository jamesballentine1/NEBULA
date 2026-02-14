import CTASection from "@/components/CTASection";

const TermsConditions = () => (
  <main className="relative z-10 pt-32 pb-16 px-4">
    <div className="container mx-auto max-w-3xl">
      <h1 className="font-display text-4xl font-bold text-foreground mb-8">Terms &amp; Conditions</h1>

      <div className="glass-card p-8 space-y-6 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Acceptance of Terms</h2>
          <p>By accessing and using the NebulaNet 360 website and services, you accept and agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Service Description</h2>
          <p>NebulaNet 360 provides internet connectivity and streaming entertainment services. Service availability, features, and pricing are subject to change. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">User Responsibilities</h2>
          <p>You agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Payment Terms</h2>
          <p>All fees are due as specified in your service agreement. Late payments may incur additional charges. We reserve the right to suspend services for non-payment after reasonable notice.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and software, is the property of NebulaNet 360 or its content suppliers and is protected by intellectual property laws.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Governing Law</h2>
          <p>These Terms & Conditions are governed by the laws of the United States. Any disputes arising from these terms shall be resolved in the appropriate courts.</p>
        </section>

        <p className="text-sm text-muted-foreground/60 pt-4 border-t border-border/30">Last updated: February 2026</p>
      </div>
    </div>
    <CTASection />
  </main>
);

export default TermsConditions;
