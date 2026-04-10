/*
 * Design: Perimeter Mesh — Architectural Minimalism
 * Contact page: form with name/email/company/need/message, booking CTA, alt contact
 */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import {
  ArrowRight, Mail, Calendar, Send, CheckCircle2, Loader2
} from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    need: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
      toast.success("Thank you! We'll be in touch shortly.");
    } catch (err: any) {
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-20 bg-background">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl">
              <SectionLabel label="Contact" />
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-normal text-foreground mb-6 leading-[1.1]">
                Let's start a <span className="italic text-primary">conversation</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're looking for AI solutions, agent automation, cybersecurity services, or all of the above, fill out the form below or book a call directly. We typically respond within one business day.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== FORM + SIDEBAR ===== */}
      <section className="pb-24 lg:pb-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                {submitted ? (
                  <div className="p-12 border border-border rounded-sm bg-card text-center">
                    <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h2 className="text-2xl font-normal text-foreground mb-2 font-serif">Message Received</h2>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We'll review your inquiry and get back to you within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 font-sans">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 font-sans">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 font-sans">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="need" className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 font-sans">
                          What do you need? *
                        </label>
                        <select
                          id="need"
                          name="need"
                          required
                          value={formData.need}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors appearance-none"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 1rem center",
                          }}
                        >
                          <option value="" disabled>Select an option</option>
                          <option value="agents">AI Solutions & Agents</option>
                          <option value="pentest">Penetration Testing</option>
                          <option value="both">Both</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 font-sans">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                        placeholder="Tell us about your project, goals, or questions..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-12"
                      disabled={isPending}
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.15}>
                <div className="space-y-8">
                  {/* Alternative Contact */}
                  <div className="p-6 border border-border rounded-sm bg-card">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 font-sans">
                      Other Ways to Reach Us
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">valery@boundary-sec.com</span>
                      </div>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="p-6 border border-border rounded-sm bg-card">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 font-sans">
                      Response Time
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We typically respond to inquiries within one business day. For urgent security matters, please indicate so in your message.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
