/*
 * Design: Perimeter Mesh — Architectural Minimalism
 * Colors: charcoal + warm white + teal accent
 * Typography: Instrument Serif headings, DM Sans body
 * Layout: asymmetric sections, oversized section numbers, boundary-line motifs
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import {
  Mail, Share2, UserCheck, Headphones, BarChart3,
  Search, Wrench, Rocket, TrendingUp,
  ShieldCheck, Lock, FileText, Eye, ToggleRight, Server,
  Wifi, Globe, Smartphone, Bot,
  ArrowRight, ChevronRight
} from "lucide-react";

const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/rVMGzB003I0cU3qB6oVyTC/sandbox/RmYmua8S9TtgIAl6RtQ0Kp-img-1_1771475485000_na1fn_aGVyby1tZXNo.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvclZNR3pCMDAzSTBjVTNxQjZvVnlUQy9zYW5kYm94L1JtWW11YThTOVR0Z0lBbDZSdFEwS3AtaW1nLTFfMTc3MTQ3NTQ4NTAwMF9uYTFmbl9hR1Z5YnkxdFpYTm8ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VFdZ2zW6bnaXTUW3PzOBAPOtHkfhGMbn7fN00zRIQDR2imQ-TMpctfOSpAx4NWsEkDpOR340A7mskoWgXkCH2x0hwhvHW0p8HgPq6feU0Bw0RzNT304ewelHmE-x0hq5sWPe4Zp~iRVPaWVxuaP-ZOh504dVzW55-8Q-Jhh9ieSYJ5wxVkH5XIZTC2b-ite1MbbUkco-LovSNk2DFsXu6owR52tYyczJmRBi6VeB2TepDLFhnSLGel7SilGiFevxtVDq7m7w8vYD1-gnG7pzHCOlc5J08xz9inxGGyXjbuMd6GAI2pnu6X2mwYAuokHkNo48eDN6itcUhbLg4JIgxw__";


const agents = [
  { icon: Mail, title: "Cold Outreach & Email Agent", desc: "Automates personalized cold email campaigns with follow-up sequences and response tracking.", integrations: "Gmail, Apollo, Rainforest, Hunter" },
  { icon: Share2, title: "Social Media Content Agent", desc: "Creates, schedules, and publishes content across platforms with brand-consistent messaging.", integrations: "LinkedIn, X/Twitter, Buffer, Instagram" },
  { icon: UserCheck, title: "Lead Qualification Agent", desc: "Scores inbound leads, enriches contact data, and updates your CRM in real time.", integrations: "HubSpot, Salesforce, Google Sheets, Million Verifier, Scraping Fish" },
  { icon: Headphones, title: "Customer Support Triage Agent", desc: "Routes and responds to support tickets with intelligent categorization and escalation.", integrations: "Zendesk, Slack, Intercom" },
  { icon: BarChart3, title: "Internal Ops & Reporting Agent", desc: "Aggregates data from multiple sources and generates automated reports and dashboards.", integrations: "Notion, Google Sheets, Slack" },
];

const steps = [
  { icon: Search, num: "01", title: "Discovery", desc: "We map your workflows, identify automation opportunities, and define scope with full transparency on timeline and approach." },
  { icon: Wrench, num: "02", title: "Build", desc: "Our team architects and develops your custom agents with secure-by-design principles, integrating with your existing tools." },
  { icon: Rocket, num: "03", title: "Deploy & Host", desc: "Agents are deployed to our managed infrastructure or yours. You get a dashboard and phone-based controls from day one." },
  { icon: TrendingUp, num: "04", title: "Monitor & Improve", desc: "Continuous monitoring, performance reporting, and iterative improvements ensure your agents stay effective and secure." },
];

const securityFeatures = [
  { icon: Lock, title: "Least Privilege", desc: "Agents operate with minimal permissions required for their specific tasks." },
  { icon: FileText, title: "Audit Logging", desc: "Every action is logged with full traceability for compliance and review." },
  { icon: Eye, title: "Secrets Management", desc: "Credentials and API keys are encrypted or vaulted and rotated automatically." },
  { icon: Server, title: "Sandboxing", desc: "Agents run in isolated environments to prevent cross-contamination." },
  { icon: ToggleRight, title: "Kill Switches", desc: "Instant shutdown capability for any agent via dashboard or phone." },
  { icon: ShieldCheck, title: "Secure Architecture", desc: "Built on hardened infrastructure with defense-in-depth principles." },
];

const cyberServices = [
  { icon: Wifi, title: "Network Penetration Testing", desc: "Internal and external network assessments" },
  { icon: Globe, title: "Web & API Testing", desc: "Application security and API vulnerability assessment" },
  { icon: Smartphone, title: "Mobile Testing", desc: "iOS and Android security evaluation" },
  { icon: Bot, title: "AI & Agentic Pentesting", desc: "Prompt injection, tool abuse, and agent workflow testing" },
];


export default function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[oklch(0.13_0.02_270)]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.13_0.02_270)] via-[oklch(0.13_0.02_270)]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.13_0.02_270)] via-transparent to-[oklch(0.13_0.02_270)]/50" />
        </div>

        <div className="container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl">
            <AnimatedSection>
              <SectionLabel label="Boundary Security" className="mb-6" />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.1] text-white mb-6">
                AI Solutions Built for Business.{" "}
                <span className="text-primary italic">Security Built In.</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg lg:text-xl text-[oklch(0.75_0.005_80)] max-w-2xl mb-10 leading-relaxed">
                We build custom AI solutions, from intelligent agents that automate your sales, marketing, and operations to broader AI tooling for teams. Everything is designed with security at its core.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-12">
                    Request a Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

              </div>
            </AnimatedSection>

            {/* Trust signals */}
            <AnimatedSection delay={0.4}>
              <div className="mt-16 flex flex-wrap items-center gap-6 text-sm text-[oklch(0.55_0.005_80)]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>OSCP Certified</span>
                </div>
                <div className="w-px h-4 bg-white/15" />
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>CRTO Certified</span>
                </div>
                <div className="w-px h-4 bg-white/15" />
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary" />
                  <span>Secure by Design</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE BUILD ===== */}
      <section className="py-24 lg:py-32 bg-background relative">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl mb-16">
              <SectionLabel number="01" label="What We Build" />
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal text-foreground mb-4">
                AI solutions that work <span className="italic text-primary">across your tools</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From autonomous agents to team-facing AI tools, each solution is purpose-built for a specific capability, integrating with the platforms you already use.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, i) => (
              <AnimatedSection key={agent.title} delay={i * 0.08}>
                <div className="group p-6 lg:p-8 border border-border rounded-sm bg-card hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                    <agent.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-normal text-card-foreground mb-2 font-serif">{agent.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{agent.desc}</p>
                  <div className="text-xs text-muted-foreground/70 font-medium">
                    Integrates with tools such as: <span className="text-primary/70">{agent.integrations}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Custom Agent Callout */}
          <AnimatedSection delay={0.4}>
            <div className="mt-8 p-8 lg:p-10 border border-dashed border-primary/30 rounded-sm bg-primary/5 text-center">
              <h3 className="text-xl lg:text-2xl font-normal text-foreground mb-3 font-serif">
                Don't see what you need?
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed">
                Every business is different. Whether you need an autonomous agent or a broader AI solution for your team, we design it around your specific workflows, tools, and goals.
              </p>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Let's Build Your Solution
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="mt-8 text-center">
              <Link href="/agent-services">
                <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
                  Explore AI Solutions
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24 lg:py-32 bg-muted/50 relative">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl mb-16">
              <SectionLabel number="02" label="How It Works" />
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal text-foreground mb-4">
                From discovery to <span className="italic text-primary">deployment</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A transparent, four-step engagement process. We scope clearly, build efficiently, and provide ongoing support with honest communication about timelines and pricing at every stage.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.1}>
                <div className="relative">
                  <span className="text-6xl lg:text-7xl font-serif text-border/60 absolute -top-4 -left-1 select-none pointer-events-none">
                    {step.num}
                  </span>
                  <div className="pt-12 relative z-10">
                    <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center mb-4">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-normal text-foreground mb-2 font-serif">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 -right-4 w-8">
                      <div className="boundary-line" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECURITY-FIRST ===== */}
      <section className="py-24 lg:py-32 bg-[oklch(0.13_0.02_270)] text-white relative overflow-hidden">
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="max-w-2xl mb-16">
              <SectionLabel number="03" label="Security-First Differentiation" />
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal mb-4">
                Agentic systems are{" "}
                <span className="italic text-primary">new attack surfaces</span>
              </h2>
              <p className="text-[oklch(0.65_0.005_80)] text-lg leading-relaxed">
                Every AI agent we build follows security-by-design principles. We don't bolt on security after the fact; it's embedded in the architecture from day one.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feat, i) => (
              <AnimatedSection key={feat.title} delay={i * 0.08}>
                <div className="p-6 border border-white/10 rounded-sm hover:border-primary/30 transition-colors bg-white/[0.03]">
                  <feat.icon className="w-5 h-5 text-primary mb-4" />
                  <h3 className="text-base font-medium text-white mb-1.5 font-sans">{feat.title}</h3>
                  <p className="text-sm text-[oklch(0.55_0.005_80)] leading-relaxed">{feat.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CYBERSECURITY PREVIEW ===== */}
      <section className="py-24 lg:py-32 bg-background relative">
        <div className="container">
          <div className="max-w-3xl">
            <AnimatedSection>
              <div>
                <SectionLabel number="04" label="Cybersecurity Services" />
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal text-foreground mb-4">
                  Offensive security for the{" "}
                  <span className="italic text-primary">AI era</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Beyond traditional penetration testing, we specialize in evaluating AI and agentic systems for vulnerabilities that conventional tools miss.
                </p>
                <div className="space-y-4 mb-8">
                  {cyberServices.map((svc) => (
                    <div key={svc.title} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svc.icon className="w-4.5 h-4.5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">{svc.title}</h4>
                        <p className="text-sm text-muted-foreground">{svc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/cybersecurity">
                  <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
                    View All Services
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>


          </div>
        </div>
      </section>


      {/* ===== CTA BAND ===== */}
      <section className="py-20 lg:py-28 bg-[oklch(0.13_0.02_270)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.55 0.12 175) 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }} />
        </div>
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal text-white mb-4 max-w-3xl mx-auto">
              Ready to automate with <span className="italic text-primary">confidence</span>?
            </h2>
            <p className="text-[oklch(0.65_0.005_80)] text-lg mb-10 max-w-xl mx-auto">
              Whether you need intelligent agents or security assurance, we're here to help. Book a free consultation to discuss your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-12">
                  Request a Demo
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
