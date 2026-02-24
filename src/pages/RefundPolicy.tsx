import CTASection from "@/components/CTASection";

const RefundPolicy = () => (
  <main className="relative z-10 pt-32 pb-16 px-4">
    <div className="container mx-auto max-w-3xl">
      <h1 className="font-display text-4xl font-bold text-foreground mb-8">Refund Policy</h1>

      <div className="glass-card p-8 space-y-6 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Satisfaction Guarantee</h2>
          <p>At NebulaNet 360, we are committed to delivering exceptional service. If you are not satisfied with your service within the first 30 days, you may be eligible for a full refund of your monthly service charges.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Eligibility</h2>
          <p>Refund requests must be made within 30 days of initial service activation. Installation fees, equipment charges, and promotional credits are non-refundable. Partial-month refunds are calculated on a pro-rata basis.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">How to Request a Refund</h2>
          <p>To request a refund, please contact our support team at (888) 290-4405 or email support@nebulanet360.com. Please have your account number and reason for the refund request ready. We will process your request within 5–10 business days.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Equipment Returns</h2>
          <p>If you received equipment as part of your service, it must be returned in good condition within 14 days of service cancellation. Failure to return equipment may result in additional charges.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Exceptions</h2>
          <p>Refunds may not apply to services disrupted due to customer equipment issues, third-party interference, or natural disasters. NebulaNet 360 reserves the right to deny refund requests that do not meet the criteria outlined above.</p>
        </section>

        <p className="text-sm text-muted-foreground/60 pt-4 border-t border-border/30">Last updated: February 2026</p>
      </div>
    </div>
    <CTASection />
  </main>
);

export default RefundPolicy;
