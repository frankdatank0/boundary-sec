/*
 * Design: Perimeter Mesh — Architectural Minimalism
 * Cybersecurity page: AI/agentic pentesting, traditional, mobile, deliverables, methodology
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import {
  ArrowRight, Bot, Wifi, Globe, Smartphone,
  FileText, AlertTriangle, CheckCircle2, RotateCcw,
  Shield, Search, Target, Layers, BookOpen
} from "lucide-react";

const CYBER_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/rVMGzB003I0cU3qB6oVyTC/sandbox/RmYmua8S9TtgIAl6RtQ0Kp-img-3_1771475490000_na1fn_Y3liZXJzZWN1cml0eS12aXN1YWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvclZNR3pCMDAzSTBjVTNxQjZvVnlUQy9zYW5kYm94L1JtWW11YThTOVR0Z0lBbDZSdFEwS3AtaW1nLTNfMTc3MTQ3NTQ5MDAwMF9uYTFmbl9ZM2xpWlhKelpXTjFjbWwwZVMxMmFYTjFZV3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=RUoyu85Occ8tY-E8hNHN5PxpOLZLNST-rpGsNPg8KZKFodHPdVGRejCnOt2PA3MPG5quoU4lTpub3t0YEN8BfxT2FV3zfAaeYpXL1JLAoDEqBwVmkTS5KRr6NEMJ3a5tmZ7rUH3r81lGq4cqEvUm3lrwvHPSWTgD5bwIx2t5j6wNeoqEohVMmfLTFeLMm1NixlceoVqGurr5YgRbSKRIt3zg48cpGRGKncIA2P1b0fXlS3QQe06UN-Zi7Vn2ede0nAZeBRtnHbk8mdNl2HJYb-snp1T1sDunL46~xH6aEHatkkkOUrzV-zOomS88orivYDl8GRbynzkFbXicnioFQA__";

const aiPentestAreas = [
  "Prompt injection and jailbreak testing",
  "Tool/function abuse and privilege escalation",
  "Data exfiltration paths through agent workflows",
  "Authorization bypass via agent-to-agent communication",
  "Supply-chain risks in agent dependencies and plugins",
  "Logging gaps and audit trail completeness",
];

const traditionalServices = [
  {
    icon: Wifi,
    title: "Internal Network Testing",
    desc: "Comprehensive assessment of internal infrastructure including Active Directory environments, network segmentation, lateral movement paths, and privilege escalation vectors."
  },
  {
    icon: Globe,
    title: "External Network Testing",
    desc: "Perimeter assessment identifying exposed services, misconfigurations, and exploitable vulnerabilities from an external attacker's perspective."
  },
  {
    icon: Globe,
    title: "Web Application & API Testing",
    desc: "In-depth testing of web applications and APIs for injection flaws, authentication weaknesses, business logic vulnerabilities, and data exposure risks."
  },
];

const deliverables = [
  { icon: FileText, title: "Executive Summary", desc: "High-level overview of findings, risk posture, and strategic recommendations for leadership." },
  { icon: AlertTriangle, title: "Technical Findings", desc: "Detailed vulnerability descriptions with evidence, reproduction steps, and technical context." },
  { icon: Target, title: "Risk Rating", desc: "Each finding rated by severity using industry-standard frameworks (CVSS) with business impact context." },
  { icon: Shield, title: "Remediation Guidance", desc: "Actionable, prioritized remediation steps with implementation guidance for each finding." },
  { icon: RotateCcw, title: "Retest Option", desc: "Follow-up testing to verify remediation effectiveness and confirm vulnerabilities are resolved." },
  { icon: CheckCircle2, title: "Reproduction Steps", desc: "Step-by-step instructions to reproduce each finding, enabling your team to validate independently." },
];

const methodologySteps = [
  { num: "01", title: "Scoping & Rules of Engagement", desc: "Define targets, boundaries, testing windows, and communication protocols." },
  { num: "02", title: "Reconnaissance & Enumeration", desc: "Systematic discovery of attack surface, services, and potential entry points." },
  { num: "03", title: "Vulnerability Analysis", desc: "Identification and validation of vulnerabilities using manual and automated techniques." },
  { num: "04", title: "Exploitation & Post-Exploitation", desc: "Controlled exploitation to demonstrate real-world impact and lateral movement potential." },
  { num: "05", title: "Reporting & Debrief", desc: "Comprehensive report delivery with walkthrough session and Q&A." },
];

export default function Cybersecurity() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative pt-28 lg:pt-36 pb-20 lg:pb-28 bg-[oklch(0.13_0.02_270)] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={CYBER_IMG} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.13_0.02_270)] via-[oklch(0.13_0.02_270)]/85 to-[oklch(0.13_0.02_270)]/60" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection>
              <SectionLabel label="Cybersecurity Services" />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-normal leading-[1.1] mb-6">
                Offensive security for{" "}
                <span className="italic text-primary">modern threats</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg text-[oklch(0.70_0.005_80)] leading-relaxed mb-8 max-w-2xl">
                From traditional infrastructure to AI-powered systems, we test what matters. Our team combines deep technical expertise with an attacker's mindset to find vulnerabilities before they're exploited.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-12">
                  Request an Assessment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== AI / AGENTIC PENTESTING ===== */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div>
                <SectionLabel number="01" label="AI & Agentic Penetration Testing" />
                <h2 className="text-3xl lg:text-4xl font-normal text-foreground mb-4">
                  Testing the systems that{" "}
                  <span className="italic text-primary">think for themselves</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  AI agents and LLM-powered systems introduce entirely new classes of vulnerabilities. We specialize in identifying these risks before they become incidents, from prompt injection to data exfiltration through agent workflows.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="p-8 border border-border rounded-sm bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground font-sans">Testing Areas</h3>
                </div>
                <ul className="space-y-3">
                  {aiPentestAreas.map((area) => (
                    <li key={area} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Search className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== TRADITIONAL PENTESTING ===== */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl mb-12">
              <SectionLabel number="02" label="Traditional Penetration Testing" />
              <h2 className="text-3xl lg:text-4xl font-normal text-foreground mb-4">
                Proven methodology, <span className="italic text-primary">thorough results</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {traditionalServices.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.1}>
                <div className="p-6 lg:p-8 border border-border rounded-sm bg-card h-full">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center mb-5">
                    <svc.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-normal text-foreground mb-3 font-serif">{svc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MOBILE TESTING ===== */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-4xl">
            <AnimatedSection>
              <div>
                <SectionLabel number="03" label="Mobile Testing" />
                <h2 className="text-3xl lg:text-4xl font-normal text-foreground mb-4">
                  iOS & Android <span className="italic text-primary">assessment</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Comprehensive mobile application security testing covering both iOS and Android platforms. We assess data storage, network communication, authentication mechanisms, and platform-specific vulnerabilities.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Smartphone, label: "iOS Assessment" },
                  { icon: Smartphone, label: "Android Assessment" },
                  { icon: Shield, label: "Data Storage Review" },
                  { icon: Layers, label: "API Security Testing" },
                ].map((item) => (
                  <div key={item.label} className="p-5 border border-border rounded-sm bg-card text-center">
                    <item.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <span className="text-xs font-medium text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== DELIVERABLES ===== */}
      <section className="py-20 lg:py-28 bg-[oklch(0.13_0.02_270)] text-white">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl mb-16">
              <SectionLabel number="04" label="Deliverables" />
              <h2 className="text-3xl lg:text-4xl font-normal mb-4">
                What you <span className="italic text-primary">receive</span>
              </h2>
              <p className="text-[oklch(0.65_0.005_80)] text-lg leading-relaxed">
                Every engagement produces a comprehensive, actionable report designed for both technical teams and executive stakeholders.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="p-6 border border-white/10 rounded-sm hover:border-primary/30 transition-colors bg-white/[0.03]">
                  <item.icon className="w-5 h-5 text-primary mb-4" />
                  <h3 className="text-base font-medium text-white mb-1.5 font-sans">{item.title}</h3>
                  <p className="text-sm text-[oklch(0.55_0.005_80)] leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== METHODOLOGY ===== */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl mb-16">
              <SectionLabel number="05" label="Methodology" />
              <h2 className="text-3xl lg:text-4xl font-normal text-foreground mb-4">
                Structured <span className="italic text-primary">approach</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our methodology aligns with industry-recognized frameworks including OWASP, PTES, and NIST guidelines, adapted for each engagement's specific requirements and threat model.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl space-y-0">
            {methodologySteps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.08}>
                <div className="flex gap-6 py-6 border-b border-border last:border-0">
                  <span className="text-3xl font-serif text-primary/40 shrink-0 w-12">{step.num}</span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1 font-sans">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-12 flex items-center gap-3 text-sm text-muted-foreground">
              <BookOpen className="w-4 h-4 text-primary" />
              <span>Aligned with OWASP, PTES, and NIST frameworks</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-normal text-foreground mb-4 max-w-2xl mx-auto">
              Secure your systems <span className="italic text-primary">before attackers do</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Schedule a consultation to discuss your security assessment needs and receive a tailored scope proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-12">
                  Request an Assessment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
