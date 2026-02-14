import CTASection from "@/components/CTASection";

const CookiesPolicy = () => (
  <main className="relative z-10 pt-32 pb-16 px-4">
    <div className="container mx-auto max-w-3xl">
      <h1 className="font-display text-4xl font-bold text-foreground mb-8">Cookies Policy</h1>

      <div className="glass-card p-8 space-y-6 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">What Are Cookies</h2>
          <p>Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to site owners.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Cookies</h2>
          <p>NebulaNet 360 uses cookies to understand how you interact with our website, remember your preferences, improve your experience, and analyze site traffic. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period).</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Types of Cookies We Use</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-foreground">Essential Cookies:</strong> Required for the website to function properly.</li>
            <li><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
            <li><strong className="text-foreground">Marketing Cookies:</strong> Used to deliver relevant advertisements.</li>
            <li><strong className="text-foreground">Preference Cookies:</strong> Remember your settings and preferences.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Managing Cookies</h2>
          <p>You can control and manage cookies through your browser settings. Most browsers allow you to refuse or accept cookies, delete existing cookies, and set preferences for certain websites. Please note that disabling cookies may affect the functionality of our website.</p>
        </section>

        <p className="text-sm text-muted-foreground/60 pt-4 border-t border-border/30">Last updated: February 2026</p>
      </div>
    </div>
    <CTASection />
  </main>
);

export default CookiesPolicy;
