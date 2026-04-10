/*
 * Design: Perimeter Mesh — Architectural Minimalism
 * Demos page: showcase Loom video demos of agents and services
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import { ArrowRight, Play } from "lucide-react";

interface Demo {
  title: string;
  description: string;
  loomId: string;
}

const demos: Demo[] = [
  {
    title: "Cold Outreach Agent Demo",
    description:
      "See how our Cold Outreach Agent automates personalized email campaigns, from lead sourcing to follow-up sequences, all within defined guardrails.",
    loomId: "aa38e9cef4b34a0288ee192f564ebe8c",
  },
];

export default function Demos() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-20 bg-background relative">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-3xl">
              <SectionLabel label="Demos" />
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-normal text-foreground mb-6 leading-[1.1]">
                See our agents{" "}
                <span className="italic text-primary">in action</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Watch real demos of our AI agents handling business workflows.
                Each video walks through the agent's capabilities, integrations,
                and the guardrails that keep everything under control.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== DEMO VIDEOS ===== */}
      <section className="pb-20 lg:pb-28 bg-background">
        <div className="container">
          <div className="space-y-16">
            {demos.map((demo, i) => (
              <AnimatedSection key={demo.loomId} delay={i * 0.1}>
                <div className="max-w-4xl mx-auto">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-sm bg-primary/10 flex items-center justify-center">
                        <Play className="w-4.5 h-4.5 text-primary" />
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-normal text-foreground font-serif">
                        {demo.title}
                      </h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
                      {demo.description}
                    </p>
                  </div>

                  {/* Loom Embed */}
                  <div className="relative w-full rounded-sm overflow-hidden border border-border bg-card">
                    <div
                      style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
                    >
                      <iframe
                        src={`https://www.loom.com/embed/${demo.loomId}`}
                        frameBorder="0"
                        allowFullScreen
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                        title={demo.title}
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* More Demos Coming */}
          <AnimatedSection delay={0.2}>
            <div className="mt-16 max-w-4xl mx-auto text-center">
              <p className="text-muted-foreground mb-2">
                More demos coming soon.
              </p>
              <p className="text-muted-foreground mb-6">
                Have a specific use case you'd like to see?{" "}
                <Link
                  href="/contact"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  Let us know
                </Link>
                .
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-normal text-foreground mb-4 max-w-2xl mx-auto">
              Ready to see what an agent can do for{" "}
              <span className="italic text-primary">your business</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Tell us about your workflows and we'll scope a custom agent
              tailored to your needs.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-12"
              >
                Request a Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
