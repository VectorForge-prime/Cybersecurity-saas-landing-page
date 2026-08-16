import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import {
  Activity,
  ArrowRight,
  BellRing,
  Check,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Cpu,
  Database,
  Eye,
  LockKeyhole,
  Menu,
  Network,
  Radar,
  ScanSearch,
  Search,
  Send,
  Server,
  ShieldAlert,
  ShieldCheck,
  TriangleAlert,
  X,
} from "lucide-react"

import AuthModal from "./components/AuthModal"

const features = [
  {
    icon: <Radar size={24} />,
    title: "Real-time threat detection",
    description:
      "Detect suspicious traffic, malware activity and abnormal behavior as it happens.",
  },
  {
    icon: <ScanSearch size={24} />,
    title: "Vulnerability scanning",
    description:
      "Continuously scan systems and applications for weaknesses and misconfigurations.",
  },
  {
    icon: <Eye size={24} />,
    title: "24/7 monitoring",
    description:
      "Maintain constant visibility across endpoints, cloud environments and critical infrastructure.",
  },
  {
    icon: <Cpu size={24} />,
    title: "AI threat analysis",
    description:
      "Prioritize alerts intelligently and identify potentially dangerous activity faster.",
  },
  {
    icon: <Network size={24} />,
    title: "Network protection",
    description:
      "Detect abnormal connections, suspicious access attempts and unexpected data movement.",
  },
  {
    icon: <LockKeyhole size={24} />,
    title: "Incident response",
    description:
      "Investigate incidents through centralized alerts, evidence and response workflows.",
  },
]

const integrations = [
  {
    name: "AWS",
    description: "Cloud infrastructure",
    icon: <Cloud size={25} />,
  },
  {
    name: "Microsoft Azure",
    description: "Cloud security",
    icon: <Cloud size={25} />,
  },
  {
    name: "Microsoft 365",
    description: "Identity & productivity",
    icon: <ShieldCheck size={25} />,
  },
  {
    name: "GitHub",
    description: "Source code security",
    icon: <Database size={25} />,
  },
  {
    name: "Slack",
    description: "Security notifications",
    icon: <BellRing size={25} />,
  },
  {
    name: "Jira",
    description: "Incident management",
    icon: <Activity size={25} />,
  },
]

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    description: "Security monitoring for small teams and growing startups.",
    features: [
      "Up to 25 assets",
      "Real-time monitoring",
      "Vulnerability scanning",
      "Email alerts",
      "7-day log retention",
    ],
  },
  {
    name: "Pro",
    price: "$89",
    description: "Advanced protection for growing organizations.",
    features: [
      "Up to 150 assets",
      "AI threat analysis",
      "Advanced vulnerability scanning",
      "Incident response",
      "30-day log retention",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Custom security infrastructure for larger organizations.",
    features: [
      "Unlimited assets",
      "Custom security policies",
      "Advanced integrations",
      "Dedicated support",
      "Custom log retention",
      "Enterprise SLA",
    ],
  },
]

const faqs = [
  {
    question: "What can SentinelX monitor?",
    answer:
      "SentinelX provides a unified interface for monitoring endpoints, servers, networks, cloud infrastructure and security events.",
  },
  {
    question: "Do I need a dedicated security team?",
    answer:
      "No. The interface is designed to surface important alerts clearly, while also providing deeper information for dedicated security teams.",
  },
  {
    question: "How quickly are threats detected?",
    answer:
      "Security activity is analyzed continuously so suspicious events can be surfaced as quickly as possible.",
  },
  {
    question: "Can SentinelX integrate with existing tools?",
    answer:
      "Yes. SentinelX is designed to integrate with cloud platforms, communication tools, ticketing systems and other security services.",
  },
]

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [authModal, setAuthModal] = useState(null)

  // about | contact | status | null
  const [infoModal, setInfoModal] = useState(null)

  const openLogin = () => setAuthModal("login")
  const openSignup = () => setAuthModal("signup")
  const closeAuth = () => setAuthModal(null)

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-[-250px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-slate-950/75 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
              <ShieldCheck size={22} />
            </div>

            <div>
              <span className="text-xl font-bold tracking-tight">
                SentinelX
              </span>

              <span className="ml-2 text-[10px] font-semibold tracking-widest text-cyan-400">
                SECURITY
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#platform">Platform</NavLink>
            <NavLink href="#integrations">Integrations</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <button
              onClick={openLogin}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Sign in
            </button>

            <button
              onClick={openSignup}
              className="rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Start free
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-slate-800 p-2 text-slate-300 md:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-slate-800 bg-slate-950 md:hidden"
            >
              <div className="flex flex-col gap-5 px-6 py-6">
                <MobileLink href="#features" setMenuOpen={setMenuOpen}>
                  Features
                </MobileLink>

                <MobileLink href="#platform" setMenuOpen={setMenuOpen}>
                  Platform
                </MobileLink>

                <MobileLink href="#integrations" setMenuOpen={setMenuOpen}>
                  Integrations
                </MobileLink>

                <MobileLink href="#pricing" setMenuOpen={setMenuOpen}>
                  Pricing
                </MobileLink>

                <button
                  onClick={() => {
                    setMenuOpen(false)
                    openLogin()
                  }}
                  className="rounded-xl border border-slate-700 px-5 py-3 font-semibold"
                >
                  Sign in
                </button>

                <button
                  onClick={() => {
                    setMenuOpen(false)
                    openSignup()
                  }}
                  className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950"
                >
                  Start free
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pb-20 pt-32 lg:grid-cols-2 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            All systems protected
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Protect your business{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              before threats become breaches.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
            Real-time threat monitoring, vulnerability detection and AI-powered
            security analysis in one modern cybersecurity platform.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.button
              onClick={openSignup}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950"
            >
              Start free trial
              <ArrowRight size={18} />
            </motion.button>

            <motion.a
              href="#features"
              whileHover={{ scale: 1.03 }}
              className="flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/40 px-6 py-3.5 font-semibold text-slate-200"
            >
              View live demo
            </motion.a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
            <span>✓ No credit card</span>
            <span>✓ 14-day free trial</span>
            <span>✓ Cancel anytime</span>
          </div>
        </motion.div>

        {/* DASHBOARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-10 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative rounded-3xl border border-slate-700/70 bg-slate-900/80 p-5 shadow-2xl">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Security Operations Center
                </p>
                <h2 className="mt-1 text-xl font-semibold">
                  Threat Overview
                </h2>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-emerald-400/10 px-3 py-1.5 text-sm text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Protected
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <MetricCard
                label="Threats blocked"
                value="1,842"
                note="+14.8% this week"
                icon={<ShieldCheck size={17} />}
              />

              <MetricCard
                label="Active alerts"
                value="12"
                note="3 require review"
                icon={<TriangleAlert size={17} />}
                warning
              />

              <MetricCard
                label="Assets"
                value="286"
                note="100% online"
                icon={<Server size={17} />}
              />
            </div>

            <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">
                    Live threat activity
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Real-time network monitoring
                  </p>
                </div>

                <Activity size={20} className="text-cyan-400" />
              </div>

              <div className="flex h-40 items-end gap-2">
                {[35, 60, 45, 80, 52, 92, 64, 75, 48, 88, 67, 96].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{
                        duration: 0.7,
                        delay: 0.3 + index * 0.04,
                      }}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-cyan-600 to-cyan-300"
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-28 lg:px-8"
      >
        <SectionHeading
          eyebrow="Advanced protection"
          title="One platform. Complete visibility."
          description="Monitor infrastructure, identify suspicious activity and respond before threats impact your organization."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -6 }}
              className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-7"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PLATFORM */}
      <section
        id="platform"
        className="relative z-10 scroll-mt-20 border-y border-slate-800 bg-slate-900/25"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Unified security platform
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Secure every layer of your infrastructure.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Bring cloud, network, endpoint and data monitoring together in a
              unified security environment.
            </p>

            <div className="mt-10 space-y-5">
              <SecurityItem
                icon={<Cloud size={20} />}
                title="Cloud security"
                text="Monitor workloads, permissions and suspicious cloud activity."
              />

              <SecurityItem
                icon={<Server size={20} />}
                title="Endpoint security"
                text="Protect employee devices and critical servers."
              />

              <SecurityItem
                icon={<Database size={20} />}
                title="Data protection"
                text="Detect unexpected access to sensitive data."
              />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
            <h3 className="mb-6 text-xl font-semibold">
              Security Status
            </h3>

            <div className="space-y-4">
              <StatusRow name="Cloud Infrastructure" score="98%" />
              <StatusRow name="Corporate Network" score="96%" />
              <StatusRow name="Employee Endpoints" score="94%" />
              <StatusRow name="Databases" score="99%" />
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section
        id="integrations"
        className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-28 lg:px-8"
      >
        <SectionHeading
          eyebrow="Integrations"
          title="Connect your security stack."
          description="Bring SentinelX into the tools your team already uses every day."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration) => (
            <motion.div
              key={integration.name}
              whileHover={{ y: -5 }}
              className="flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-cyan-400/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                {integration.icon}
              </div>

              <div>
                <h3 className="font-semibold">
                  {integration.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {integration.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="relative z-10 border-y border-slate-800 bg-slate-900/25 px-6 py-28"
      >
        <SectionHeading
          eyebrow="How it works"
          title="From detection to response in seconds."
          description="SentinelX continuously analyzes your environment and surfaces the threats that matter."
        />

        <div className="mx-auto mt-16 grid max-w-7xl gap-6 lg:grid-cols-3">
          <StepCard
            number="01"
            icon={<Search size={26} />}
            title="Monitor"
            text="Analyze activity across cloud, endpoints and network infrastructure."
          />

          <StepCard
            number="02"
            icon={<BellRing size={26} />}
            title="Detect"
            text="Prioritize suspicious activity automatically."
          />

          <StepCard
            number="03"
            icon={<ShieldAlert size={26} />}
            title="Respond"
            text="Investigate threats from one security dashboard."
          />
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-28 lg:px-8"
      >
        <SectionHeading
          eyebrow="Pricing"
          title="Security that scales with you."
          description="Start with the protection you need and scale as your infrastructure grows."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 ${
                plan.popular
                  ? "border-cyan-400/50 bg-cyan-400/[0.06]"
                  : "border-slate-800 bg-slate-900/50"
              }`}
            >
              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-slate-950">
                  Most popular
                </span>
              )}

              <h3 className="text-xl font-semibold">{plan.name}</h3>

              <div className="mt-6">
                <span className="text-4xl font-bold">{plan.price}</span>

                {plan.price !== "Custom" && (
                  <span className="text-slate-500"> / month</span>
                )}
              </div>

              <p className="mt-4 text-slate-400">
                {plan.description}
              </p>

              <button
                onClick={
                  plan.price === "Custom"
                    ? () => setInfoModal("contact")
                    : openSignup
                }
                className={`mt-8 w-full rounded-xl px-5 py-3 font-semibold ${
                  plan.popular
                    ? "bg-cyan-400 text-slate-950"
                    : "border border-slate-700"
                }`}
              >
                {plan.price === "Custom"
                  ? "Contact sales"
                  : "Start free"}
              </button>

              <div className="mt-8 space-y-4">
                {plan.features.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 text-sm text-slate-300"
                  >
                    <Check
                      size={18}
                      className="text-cyan-400"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 border-y border-slate-800 bg-slate-900/25">
        <div className="mx-auto max-w-4xl px-6 py-28">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions."
            description="Everything you need to know about SentinelX."
          />

          <div className="mt-14 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-800 bg-slate-950/70"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-semibold">
                  {faq.question}

                  <ChevronDown
                    size={20}
                    className="transition group-open:rotate-180"
                  />
                </summary>

                <p className="px-6 pb-6 leading-7 text-slate-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <div className="rounded-[32px] border border-cyan-400/20 bg-cyan-400/[0.05] px-6 py-20 text-center">
          <ShieldCheck
            size={42}
            className="mx-auto text-cyan-300"
          />

          <h2 className="mt-7 text-4xl font-bold sm:text-5xl">
            Start protecting your infrastructure today.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Get real-time visibility across your security environment.
          </p>

          <button
            onClick={openSignup}
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950"
          >
            Start free trial
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-800">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-4 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <ShieldCheck size={21} />
              </div>

              <span className="text-lg font-bold">
                SentinelX
              </span>
            </div>

            <p className="mt-5 max-w-xs leading-7 text-slate-500">
              Modern cybersecurity visibility for organizations that need
              speed, clarity and control.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Product</h3>

            <div className="mt-5 flex flex-col gap-4">
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#platform">Platform</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
              <FooterLink href="#integrations">Integrations</FooterLink>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Company</h3>

            <div className="mt-5 flex flex-col items-start gap-4">
              <FooterButton onClick={() => setInfoModal("about")}>
                About
              </FooterButton>

              <FooterButton onClick={() => setInfoModal("contact")}>
                Contact
              </FooterButton>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Resources</h3>

            <div className="mt-5">
              <FooterButton onClick={() => setInfoModal("status")}>
                Status
              </FooterButton>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl border-t border-slate-800 px-6 py-6 text-sm text-slate-600">
          © 2026 SentinelX. Demo cybersecurity SaaS.
        </div>
      </footer>

      {/* AUTH */}
      <AuthModal
        isOpen={authModal !== null}
        mode={authModal || "login"}
        onClose={closeAuth}
        onChangeMode={setAuthModal}
      />

      {/* ABOUT */}
      <SimpleModal
        isOpen={infoModal === "about"}
        onClose={() => setInfoModal(null)}
        title="About SentinelX"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
          <ShieldCheck size={28} />
        </div>

        <p className="mt-6 leading-7 text-slate-400">
          SentinelX is a fictional cybersecurity SaaS platform designed to
          demonstrate a modern security monitoring experience.
        </p>

        <p className="mt-4 leading-7 text-slate-400">
          The platform concept combines threat detection, vulnerability
          monitoring, endpoint visibility and incident response in one unified
          dashboard.
        </p>

        <div className="mt-7 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] p-4 text-sm text-cyan-200">
          Portfolio demo project — not a real cybersecurity service.
        </div>
      </SimpleModal>

      {/* STATUS */}
      <SimpleModal
        isOpen={infoModal === "status"}
        onClose={() => setInfoModal(null)}
        title="System Status"
      >
        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-5">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-emerald-400" />

            <div>
              <p className="font-semibold text-emerald-300">
                All systems operational
              </p>

              <p className="mt-1 text-sm text-slate-400">
                No incidents detected.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <ServiceStatus name="Threat Detection API" />
          <ServiceStatus name="Security Dashboard" />
          <ServiceStatus name="Monitoring Network" />
          <ServiceStatus name="Alert Delivery" />
          <ServiceStatus name="Cloud Integrations" />
        </div>
      </SimpleModal>

      {/* CONTACT */}
      <SimpleModal
        isOpen={infoModal === "contact"}
        onClose={() => setInfoModal(null)}
        title="Contact SentinelX"
      >
        <ContactForm
          onSuccess={() => setInfoModal(null)}
        />
      </SimpleModal>
    </main>
  )
}

/* COMPONENTS */

function SimpleModal({ isOpen, onClose, title, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
          className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/80 px-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            onMouseDown={(event) => event.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-lg p-2 text-slate-500 hover:bg-slate-800 hover:text-white"
            >
              <X size={20} />
            </button>

            <h2 className="pr-10 text-3xl font-bold">
              {title}
            </h2>

            <div className="mt-6">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ContactForm({ onSuccess }) {
  function handleSubmit(event) {
    event.preventDefault()
    alert("Demo message sent successfully.")
    onSuccess()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Name
        </label>

        <input
          required
          type="text"
          placeholder="Your name"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Email
        </label>

        <input
          required
          type="email"
          placeholder="you@company.com"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Message
        </label>

        <textarea
          required
          rows="4"
          placeholder="How can we help?"
          className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400"
        />
      </div>

      <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3.5 font-semibold text-slate-950">
        Send message
        <Send size={18} />
      </button>

      <p className="text-center text-xs text-slate-600">
        Demo form — no message is actually sent.
      </p>
    </form>
  )
}

function ServiceStatus({ name }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4">
      <span className="text-sm text-slate-300">
        {name}
      </span>

      <span className="flex items-center gap-2 text-xs text-emerald-400">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        Operational
      </span>
    </div>
  )
}

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-slate-500 transition hover:text-cyan-300"
    >
      {children}
    </a>
  )
}

function FooterButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="text-left text-slate-500 transition hover:text-cyan-300"
    >
      {children}
    </button>
  )
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm text-slate-300 transition hover:text-cyan-300"
    >
      {children}
    </a>
  )
}

function MobileLink({ href, children, setMenuOpen }) {
  return (
    <a
      href={href}
      onClick={() => setMenuOpen(false)}
      className="text-slate-300"
    >
      {children}
    </a>
  )
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-400">
        {description}
      </p>
    </div>
  )
}

function MetricCard({
  label,
  value,
  note,
  icon,
  warning = false,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">{label}</p>

        <div className={warning ? "text-amber-400" : "text-cyan-400"}>
          {icon}
        </div>
      </div>

      <p className="mt-3 text-2xl font-bold">{value}</p>

      <p
        className={`mt-1 text-xs ${
          warning ? "text-amber-400" : "text-emerald-400"
        }`}
      >
        {note}
      </p>
    </div>
  )
}

function SecurityItem({ icon, title, text }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold">{title}</h3>

        <p className="mt-1 text-sm leading-6 text-slate-400">
          {text}
        </p>
      </div>
    </div>
  )
}

function StatusRow({ name, score }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-4">
      <div>
        <p className="font-medium">{name}</p>

        <p className="mt-1 flex items-center gap-1 text-xs text-emerald-400">
          <CheckCircle2 size={13} />
          Protected
        </p>
      </div>

      <p className="font-semibold text-cyan-300">
        {score}
      </p>
    </div>
  )
}

function StepCard({ number, icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8"
    >
      <span className="absolute right-6 top-3 text-7xl font-bold text-slate-800/60">
        {number}
      </span>

      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
        {icon}
      </div>

      <h3 className="relative mt-6 text-2xl font-semibold">
        {title}
      </h3>

      <p className="relative mt-3 leading-7 text-slate-400">
        {text}
      </p>
    </motion.div>
  )
}

export default App