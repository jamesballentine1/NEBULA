import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const PHONE = "(888) 290-4405";
const telLink = `tel:${PHONE.replace(/[^0-9]/g, "")}`;

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(20).optional(),
  address: z.string().trim().max(300).optional(),
  service_interest: z.string().max(100).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const serviceOptions = [
  "Streaming Services",
  "Internet Plans",
  "Bundles",
  "Technical Support",
  "Billing Inquiry",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", service_interest: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast({ title: "Validation Error", description: result.error.errors[0]?.message, variant: "destructive" });
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: result.data.name,
      email: result.data.email,
      phone: result.data.phone || null,
      address: result.data.address || null,
      service_interest: result.data.service_interest || null,
      message: result.data.message,
    });
    setLoading(false);

    if (error) {
      toast({ title: "Error", description: "Something went wrong. Please call us instead.", variant: "destructive" });
    } else {
      toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
      setForm({ name: "", email: "", phone: "", address: "", service_interest: "", message: "" });
    }
  };

  return (
    <main className="relative z-10">
      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <p className="text-primary font-medium mb-4 text-sm tracking-widest uppercase">Get in Touch</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Contact <span className="text-gradient">NebulaNet 360</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have questions? We're here 24/7. Call us or fill out the form below and we'll reach out.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl grid lg:grid-cols-5 gap-8">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-8 space-y-6">
              <h2 className="font-display text-xl font-bold">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <a href={telLink} className="font-semibold hover:text-primary transition-colors">{PHONE}</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-semibold">support@nebulanet360.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Service Hours</p>
                    <p className="font-semibold">24/7 Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Call CTA */}
            <div className="glass-card p-8 text-center">
              <p className="text-muted-foreground text-sm mb-4">Skip the form — call us instantly!</p>
              <a href={telLink} className="glow-button inline-flex items-center">
                <Phone className="w-4 h-4 mr-2" /> Call Now: {PHONE}
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <h2 className="font-display text-xl font-bold mb-2">Send Us a Message</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-1 block">Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required maxLength={100} className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-1 block">Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required maxLength={255} className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring" placeholder="you@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-1 block">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} maxLength={20} className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring" placeholder="(123) 456-7890" />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-1 block">Address</label>
                  <input name="address" value={form.address} onChange={handleChange} maxLength={300} className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your address" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1 block">Service Interested In</label>
                <select name="service_interest" value={form.service_interest} onChange={handleChange} className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Select a service...</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1 block">Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} required maxLength={2000} rows={4} className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="How can we help you?" />
              </div>
              <button type="submit" disabled={loading} className="glow-button w-full inline-flex items-center justify-center">
                <Send className="w-4 h-4 mr-2" /> {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-card p-12 flex items-center justify-center min-h-[300px]">
            <div className="text-center text-muted-foreground">
              <MapPin className="w-10 h-10 mx-auto mb-4 text-primary" />
              <p className="font-display font-semibold text-lg text-foreground">Service Available Nationwide</p>
              <p className="text-sm mt-2">Enter your address above or call {PHONE} to check availability in your area.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
