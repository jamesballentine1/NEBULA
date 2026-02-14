import CTASection from "@/components/CTASection";

const PrivacyPolicy = () => (
  <main className="relative z-10 pt-32 pb-16 px-4">
    <div className="container mx-auto max-w-3xl">
      <h1 className="font-display text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

      <div className="glass-card p-8 space-y-6 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h2>
          <p>We collect information you provide directly, such as your name, email address, phone number, and mailing address when you fill out forms on our website or contact us. We may also collect usage data including your IP address, browser type, pages visited, and time spent on our site.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Your Information</h2>
          <p>We use collected information to provide and improve our services, process your inquiries, send service-related communications, personalize your experience, and comply with legal obligations. We do not sell your personal information to third parties.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Data Protection</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Cookies</h2>
          <p>We use cookies and similar tracking technologies to enhance your browsing experience. For more details, please see our <a href="/cookies" className="text-primary hover:underline">Cookies Policy</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, contact us at support@nebulanet360.com.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
        </section>

        <p className="text-sm text-muted-foreground/60 pt-4 border-t border-border/30">Last updated: February 2026</p>
      </div>
    </div>
    <CTASection />
  </main>
);

export default PrivacyPolicy;
