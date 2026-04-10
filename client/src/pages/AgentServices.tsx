/*
 * Design: Perimeter Mesh — Architectural Minimalism
 * Agent Services page: what is an agent, capabilities matrix, management, hosting, CTA
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import {
  ArrowRight, Bot, Cpu, Zap, Shield,
  Smartphone, LayoutDashboard, CheckCircle2, ClipboardList, Users,
  Cloud, Server, Lock, Eye, Settings
} from "lucide-react";

const AGENT_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/rVMGzB003I0cU3qB6oVyTC/sandbox/RmYmua8S9TtgIAl6RtQ0Kp-img-2_1771475499000_na1fn_YWdlbnQtc2VydmljZXMtdmlzdWFs.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvclZNR3pCMDAzSTBjVTNxQjZvVnlUQy9zYW5kYm94L1JtWW11YThTOVR0Z0lBbDZSdFEwS3AtaW1nLTJfMTc3MTQ3NTQ5OTAwMF9uYTFmbl9ZV2RsYm5RdGMyVnlkbWxqWlhNdGRtbHpkV0ZzLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=e3tczoMcRdAd~90sFK2ldsNelmymcIQ8dogmaIkwqR55qpc~X0ZvBpaWZgTt3NbgOLbTNrl3wT1qY5BKIXwnGAZ4zsJExtg56bNApbY2wg1s1nbG39nWzf0W7nAwbO-T-vYr1rW5z6SfxamUmci2mxi4VrvISoB31LxpO6KCzA3PU5czZd46HJDSQALPaFBdiLsfnHpixIzIF9iDxz~OnO0RWabqBbAyvhfXzbVMR9ObGWBznf8uftgYJh-I5sx0iGZi2oihHwyl~vjCZK2j3ik5FDCUQ0N0uYlXnPKzWSbSXnRJ225UBdDlUgES3yq-w0Or~HCa3iZwV~mtqBPcWg__";

const capabilities = [
  {
    capability: "Cold Outreach",
    inputs: "Ideal Customer Profiles (ICPs), number of companies to reach out to",
    actions: "Personalize, send, follow-up, track replies",
    guardrails: "Rate limits, opt-out compliance, content review",
    deliverables: "Campaign reports, reply analytics, qualified leads"
  },
  {
    capability: "Social Media",
    inputs: "Content calendar, brand guidelines, topics",
    actions: "Draft, schedule, publish, engage",
    guardrails: "Brand tone check, approval workflow, platform rules",
    deliverables: "Published content, engagement metrics, audience growth"
  },
  {
    capability: "Lead Qualification",
    inputs: "Inbound leads, scoring criteria, CRM data",
    actions: "Enrich, score, route, update CRM",
    guardrails: "Data validation, PII handling, scoring thresholds",
    deliverables: "Qualified pipeline, enriched contacts, scoring reports"
  },
  {
    capability: "Support Triage",
    inputs: "Support tickets, knowledge base, SLAs",
    actions: "Categorize, respond, escalate, resolve",
    guardrails: "Escalation rules, response templates, human handoff",
    deliverables: "Resolution reports, SLA compliance, ticket analytics"
  },
  {
    capability: "Internal Ops",
    inputs: "Data sources, report templates, schedules",
    actions: "Aggregate, analyze, generate, distribute",
    guardrails: "Data access controls, validation checks, audit trail",
    deliverables: "Automated reports, dashboards, trend analysis"
  },
];

const managementFeatures = [
  { icon: Smartphone, title: "Phone Control", desc: "Approve, pause, or kill any agent directly from your phone. Real-time notifications keep you informed of critical actions." },
  { icon: LayoutDashboard, title: "Management Dashboard", desc: "A centralized view of all your agents: their status, recent actions, performance metrics, and configuration." },
  { icon: CheckCircle2, title: "Approval Workflows", desc: "Set up human-in-the-loop approvals for sensitive actions. Agents pause and wait for your confirmation before proceeding." },
  { icon: ClipboardList, title: "Activity Logs", desc: "Complete audit trail of every action taken by every agent. Searchable, exportable, and retention-configurable." },
  { icon: Users, title: "Role-Based Access", desc: "Control who can view, configure, or manage agents. Granular permissions for teams of any size." },
  { icon: Eye, title: "Real-Time Monitoring", desc: "Live dashboards showing agent activity, error rates, and performance. Alerts for anomalies and threshold breaches." },
];

export default function AgentServices() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="pt-28 lg:pt-36 pb-20 lg:pb-28 bg-background relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <SectionLabel label="Agent Services" />
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-normal text-foreground mb-6 leading-[1.1]">
                  Intelligent automation with{" "}
                  <span className="italic text-primary">guardrails</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                  An agent is more than a chatbot. It's a purpose-built automation that can act across your tools: sending emails, updating CRMs, posting content, generating reports, and making decisions. All within boundaries you define.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-12">
                      Request a Demo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <img
                src={AGENT_IMG}
                alt="AI agent workflow visualization"
                className="w-full h-auto rounded-sm"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== WHAT IS AN AGENT ===== */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <SectionLabel number="01" label="What Is an Agent" className="justify-center" />
              <h2 className="text-3xl lg:text-4xl font-normal text-foreground mb-4">
                Beyond chatbots and <span className="italic text-primary">simple automations</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Traditional automation follows rigid rules. AI agents reason about context, make decisions, and execute multi-step workflows across your tools all while operating within strict guardrails you control.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Bot, title: "Autonomous Execution", desc: "Agents independently complete multi-step tasks across tools without constant human input." },
              { icon: Cpu, title: "Contextual Reasoning", desc: "They understand your business context, adapt to new information, and make informed decisions." },
              { icon: Zap, title: "Controlled Boundaries", desc: "Every agent operates within defined guardrails: permission scopes, approval gates, and kill switches." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="text-center p-6">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-normal text-foreground mb-2 font-serif">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CAPABILITIES MATRIX ===== */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl mb-12">
              <SectionLabel number="02" label="Capabilities Matrix" />
              <h2 className="text-3xl lg:text-4xl font-normal text-foreground mb-4">
                What each agent <span className="italic text-primary">delivers</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full min-w-[800px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    {["Capability", "Inputs", "Actions", "Guardrails", "Deliverables"].map((h) => (
                      <th key={h} className="text-left py-4 px-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground font-sans">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {capabilities.map((row, i) => (
                    <tr key={row.capability} className={`border-b border-border ${i % 2 === 0 ? "bg-muted/30" : ""}`}>
                      <td className="py-4 px-4 text-sm font-semibold text-foreground">{row.capability}</td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">{row.inputs}</td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">{row.actions}</td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">{row.guardrails}</td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">{row.deliverables}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          {/* Custom Agent Callout */}
          <AnimatedSection delay={0.2}>
            <div className="mt-10 p-8 lg:p-10 border border-dashed border-primary/30 rounded-sm bg-primary/5 text-center">
              <h3 className="text-xl lg:text-2xl font-normal text-foreground mb-3 font-serif">
                Don't see what you need?
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed">
                The agents above are just examples of what we've built. Every engagement starts with your unique workflows and goals. We design and develop custom-tailored agents for any business process; if it can be described, it can be automated.
              </p>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Tell Us What You Need
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== MANAGEMENT & CONTROL ===== */}
      <section className="py-20 lg:py-28 bg-[oklch(0.13_0.02_270)] text-white">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl mb-16">
              <SectionLabel number="03" label="Management & Control" />
              <h2 className="text-3xl lg:text-4xl font-normal mb-4">
                You stay in <span className="italic text-primary">control</span>
              </h2>
              <p className="text-[oklch(0.65_0.005_80)] text-lg leading-relaxed">
                Every agent comes with a full management layer. Monitor, approve, pause, or shut down any agent — from your dashboard or your phone.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {managementFeatures.map((feat, i) => (
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

      {/* ===== HOSTING OPTIONS ===== */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl mb-12">
              <SectionLabel number="04" label="Hosting Options" />
              <h2 className="text-3xl lg:text-4xl font-normal text-foreground mb-4">
                Flexible <span className="italic text-primary">deployment</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <AnimatedSection delay={0.05}>
              <div className="p-8 border border-border rounded-sm bg-card h-full">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center mb-5">
                  <Cloud className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-normal text-foreground mb-3 font-serif">Hosted by Boundary Sec</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  We manage the infrastructure, updates, monitoring, and security. Your agents run on our hardened, SOC-compliant environment with 99.9% uptime.
                </p>
                <ul className="space-y-2">
                  {["Fully managed infrastructure", "Automatic updates & patching", "24/7 monitoring included", "No DevOps overhead"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-3.5 h-3.5 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="p-8 border border-border rounded-sm bg-card h-full">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center mb-5">
                  <Server className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-normal text-foreground mb-3 font-serif">Customer-Managed</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Deploy agents on your own infrastructure. We provide the build, documentation, and ongoing support while you maintain full control of the environment.
                </p>
                <ul className="space-y-2">
                  {["Your infrastructure, your rules", "Full source access", "Deployment documentation", "Ongoing support available"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Settings className="w-3.5 h-3.5 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-normal text-foreground mb-4 max-w-2xl mx-auto">
              Ready to build your first <span className="italic text-primary">agent</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Let's discuss your workflows and identify the highest-impact automation opportunities for your business.
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
