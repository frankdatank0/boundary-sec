/*
 * Design: Perimeter Mesh — Architectural Minimalism
 * About page: bio, experience, approach, partnership, trust signals
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import {
  ArrowRight, ShieldCheck, Code, Target, Handshake,
  Eye, Lightbulb, Users
} from "lucide-react";

const ABOUT_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/rVMGzB003I0cU3qB6oVyTC/sandbox/RmYmua8S9TtgIAl6RtQ0Kp-img-4_1771475492000_na1fn_YWJvdXQtdGVhbQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvclZNR3pCMDAzSTBjVTNxQjZvVnlUQy9zYW5kYm94L1JtWW11YThTOVR0Z0lBbDZSdFEwS3AtaW1nLTRfMTc3MTQ3NTQ5MjAwMF9uYTFmbl9ZV0p2ZFhRdGRHVmhiUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=NDCgdjR6~g3kNxbFdLK0zKwowqNjS~R3UlpadBN58eNJrwBHLH0jicySZ-NCjB~ClPYDVyPGzGNBrsOBSUIW96-0bYky33vR4X0zMSzLK6HXaM-MkZ-uB67hgyZ66QctRwsQwVsim86Msm8NENiZVwmSK0h5ANXfcThHeqJK7uAiymE6-SVcFV4lBsP1AFLqzfDVqh8zZWOCsgo~-aMykfox2g92GuykJ8-1UMNjsRzVb0K~PHU9Au~VnzQxBphpVx5YTDqhxEjL-Iwd26XYk9Sq29dMphUo0dxwlm5FlI-TxU687QgPmfdZ0CNMWDSopP~URrnDB8FPpX9GFDAxiA__";

const values = [
  {
    icon: Code,
    title: "Engineering-First Mindset",
    desc: "We're builders at heart. Every solution we deliver is grounded in practical engineering, not theoretical frameworks or vendor pitches. We write code, break systems, and ship results."
  },
  {
    icon: Target,
    title: "Offensive Testing Perspective",
    desc: "Our cybersecurity work is informed by an attacker's mindset. We think like adversaries to find the vulnerabilities that automated scanners miss, especially in AI and agentic systems."
  },
  {
    icon: Handshake,
    title: "Partnership Over Transactions",
    desc: "We don't do one-off projects and disappear. We build long-term partnerships, providing ongoing support, monitoring, and improvements as your business evolves."
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    desc: "No hidden costs, no vague timelines, no black-box processes. We communicate openly about scope, pricing, limitations, and progress throughout every engagement."
  },
];

const credentials = [
  { label: "OSCP", desc: "Offensive Security Certified Professional" },
  { label: "CRTO", desc: "Certified Red Team Operator" },
];

export default function About() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="pt-28 lg:pt-36 pb-20 lg:pb-28 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <SectionLabel label="About Boundary Security" />
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-normal text-foreground mb-6 leading-[1.1]">
                  Built by engineers.{" "}
                  <span className="italic text-primary">Tested by attackers.</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Boundary Security was founded on a simple observation: businesses need AI automation to stay competitive, but most automation is built without security in mind. We bridge that gap.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our team combines deep experience in software engineering, AI systems, and offensive cybersecurity. We build the agents that power your business and test them with the same rigor we apply to penetration testing.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <img
                src={ABOUT_IMG}
                alt="Boundary Security approach"
                className="w-full h-auto rounded-sm"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl mb-16">
              <SectionLabel number="01" label="Our Approach" />
              <h2 className="text-3xl lg:text-4xl font-normal text-foreground mb-4">
                How we <span className="italic text-primary">work</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, i) => (
              <AnimatedSection key={val.title} delay={i * 0.08}>
                <div className="flex gap-5">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                    <val.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-normal text-foreground mb-2 font-serif">{val.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CREDENTIALS ===== */}
      <section className="py-20 lg:py-28 bg-[oklch(0.13_0.02_270)] text-white">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl mb-16">
              <SectionLabel number="02" label="Credentials" />
              <h2 className="text-3xl lg:text-4xl font-normal mb-4">
                Proven <span className="italic text-primary">expertise</span>
              </h2>
              <p className="text-[oklch(0.65_0.005_80)] text-lg leading-relaxed">
                Our certifications reflect hands-on, practical expertise. Not just theoretical knowledge. These are earned through rigorous, real-world testing scenarios.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {credentials.map((cred, i) => (
              <AnimatedSection key={cred.label} delay={i * 0.1}>
                <div className="p-6 border border-white/10 rounded-sm bg-white/[0.03]">
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <span className="text-xl font-serif text-white">{cred.label}</span>
                  </div>
                  <p className="text-sm text-[oklch(0.55_0.005_80)]">{cred.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-12 max-w-2xl">
              <p className="text-sm text-[oklch(0.50_0.005_80)] leading-relaxed">
                Beyond certifications, our approach is rooted in continuous learning and real-world experience. We stay current with the latest attack techniques, AI developments, and security research to deliver relevant, effective results.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHY BOUNDARY ===== */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <SectionLabel number="03" label="Why Boundary Security" className="mb-6" />
              <h2 className="text-3xl lg:text-4xl font-normal text-foreground mb-8">
                The intersection of{" "}
                <span className="italic text-primary">building and breaking</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Most automation companies don't think about security. Most security companies don't build automation. We do both, and we believe that's what makes the difference.
                </p>
                <p>
                  When we build an agent for your business, we're simultaneously thinking about how an attacker would exploit it. When we test your AI systems, we understand the engineering decisions that created the vulnerabilities. This dual perspective produces better outcomes on both sides.
                </p>
                <p>
                  We're not a large consultancy with layers of account managers. We're a focused team that works directly with you, communicates honestly, and delivers measurable results. If something isn't working, we'll tell you and we'll fix it.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-normal text-foreground mb-4 max-w-2xl mx-auto">
              Let's build something <span className="italic text-primary">together</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Whether you need automation, security, or both, we'd love to hear about your challenges.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-12">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
