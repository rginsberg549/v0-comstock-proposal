"use client"

import { useState, useEffect } from "react"
import { CheckCircle, Clock, ArrowRight, Shield, Users, Zap, Globe, ChevronRight, AlertTriangle, TrendingUp, Smartphone, Newspaper, BarChart3, DollarSign, Layout, Target, Megaphone, FileText, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DigitalDeploymentLogo } from "@/components/logo"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

export default function SalesProposal() {
  const [activeOption, setActiveOption] = useState(3)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: optionsRef, inView: optionsInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({ top: elementPosition, behavior: "smooth" })
    }
  }

  const handleScheduleCall = () => {
    window.open("https://calendly.com/ryan-ginsberg/meet-with-ryan", "_blank")
  }

  const options = [
    {
      id: 1,
      title: "Basic Migration",
      subtitle: "Client-Led Content",
      description: "Re-platform from Drupal 7 to WordPress while maintaining your current design. Your editorial team handles content migration with our guidance.",
      price: "$38,000",
      timeline: "4-5 months",
      features: [
        "WordPress CMS installation & configuration",
        "Page templates & Gutenberg block builder",
        "Mobile-responsive foundation",
        "ADA compliance baseline (WCAG 2.1 AA)",
        "301 redirect mapping for SEO preservation",
        "All 20 ad blocks migrated",
        "Post-launch QA support"
      ],
      clientResponsibility: "Content migration, image preparation, internal QA review",
      idealFor: "Publications with internal capacity who want to minimize investment while escaping Drupal 7 security risks."
    },
    {
      id: 2,
      title: "Migration + Enhancement",
      subtitle: "40-Hour Design Block",
      description: "Everything in Basic Migration plus professional content handling and 40 hours of strategic design improvements to refresh your brand presence.",
      price: "$52,000",
      timeline: "6-7 months",
      features: [
        "All Basic Migration features",
        "Professional content migration",
        "Homepage visual refresh",
        "Improved article templates",
        "Enhanced ad placement logic",
        "Editorial workflow setup (PublishPress)",
        "Cross-browser & device QA testing",
        "Core Web Vitals optimization",
        "Comprehensive staff training"
      ],
      idealFor: "Publications seeking improved aesthetics and ad performance without a complete redesign."
    },
    {
      id: 3,
      title: "Full Redesign",
      subtitle: "Complete Transformation",
      description: "A comprehensive website transformation with strategic discovery, custom design, and advanced ad technology optimization.",
      price: "$68,000",
      timeline: "8-9 months",
      recommended: true,
      features: [
        "Strategic discovery & business assessment",
        "Content audit & competitive analysis",
        "Custom sitemap & navigation structure",
        "Two design concepts with revisions",
        "High-fidelity mockups",
        "Custom WordPress theme",
        "Advanced ad management system",
        "Header bidding foundation",
        "Sponsored content workflow",
        "Full professional content migration",
        "WCAG 2.1 AA compliance",
        "Core Web Vitals optimization",
        "Comprehensive training",
        "30-day hyper-care support"
      ],
      idealFor: "Publications ready to maximize ad revenue, modernize their brand, and position for sustainable growth."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Floating Header */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <DigitalDeploymentLogo />
            <div className="hidden md:flex items-center gap-8">
              {["Overview", "Options", "Timeline", "About"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-slate-600 hover:text-[#00aec5] transition-colors"
                >
                  {item}
                </button>
              ))}
              <Button
                onClick={handleScheduleCall}
                className="bg-[#00aec5] hover:bg-[#008ca2] text-white rounded-full px-6 py-2 text-sm font-medium shadow-lg shadow-[#00aec5]/25 hover:shadow-[#00aec5]/40 transition-all"
              >
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00aec5]/5 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl">
            <div className={cn(
              "transition-all duration-700 delay-100",
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <div className="inline-flex items-center gap-2 bg-[#00aec5]/10 text-[#00aec5] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-[#00aec5] rounded-full animate-pulse" />
                Proposal for Comstock Magazine
              </div>
            </div>

            <h1 className={cn(
              "text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6 transition-all duration-700 delay-200",
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Your Platform,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aec5] to-[#0891b2]">
                Modernized
              </span>
            </h1>

            <p className={cn(
              "text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl transition-all duration-700 delay-300",
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              After 10+ years of trusted business journalism on Drupal 7, it's time for
              a platform that matches your editorial excellence. Migrate to WordPress,
              protect your SEO equity, and unlock the ad technology your advertisers expect.
            </p>

            <div className={cn(
              "flex flex-wrap gap-4 transition-all duration-700 delay-400",
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <Button
                size="lg"
                onClick={() => scrollToSection("overview")}
                className="bg-[#00aec5] hover:bg-[#008ca2] text-white rounded-full px-8 py-6 text-base font-medium shadow-xl shadow-[#00aec5]/25 hover:shadow-[#00aec5]/40 hover:scale-105 transition-all"
              >
                View Options
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleScheduleCall}
                className="rounded-full px-8 py-6 text-base font-medium border-2 border-slate-200 hover:border-[#00aec5] hover:text-[#00aec5] transition-all"
              >
                Schedule Discussion
              </Button>
            </div>
          </div>

          {/* Quick stats */}
          <div className={cn(
            "mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-500",
            heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            {[
              { value: "25+", label: "Years Experience" },
              { value: "500+", label: "Public Sector Clients" },
              { value: "41.4%", label: "Web Powered by WordPress" },
              { value: "95%", label: "Client Retention" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Urgency Section - Drupal 7 EOL */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              The Clock is Ticking
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Drupal 7 reached end-of-life on January 5, 2025. Every day on the legacy
              platform increases security risk, compliance exposure, and technical debt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Lock,
                title: "Security Vulnerabilities",
                desc: "No more security patches. Every new vulnerability leaves your site—and advertiser data—exposed to compliance violations (FedRAMP, PCI-DSS, SOC 2)."
              },
              {
                icon: DollarSign,
                title: "Rising Maintenance Costs",
                desc: "Extended Drupal 7 security support runs $20,000-$50,000 annually. Specialists charge $50-65/hour vs. $30-41 for WordPress."
              },
              {
                icon: Users,
                title: "Competitive Disadvantage",
                desc: "Advertisers expect modern, fast-loading experiences. Slow pages drive 53% of mobile users away, directly impacting CPMs and revenue."
              },
              {
                icon: TrendingUp,
                title: "Missed Revenue",
                desc: "Legacy ad infrastructure captures only a fraction of programmatic revenue. Header bidding, viewability optimization—all require modern CMS."
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#00aec5]/5 to-[#0891b2]/5 rounded-2xl p-8 border border-[#00aec5]/20">
              <div className="text-sm font-medium text-[#00aec5] mb-2">Your Assets</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                10+ Years of Editorial Excellence
              </h3>
              <div className="space-y-3">
                {[
                  "Trusted business journalism serving Northern California",
                  "Premium advertising inventory with 20 ad blocks",
                  "Established SEO equity and organic traffic",
                  "Strong advertiser relationships to protect",
                  "Editorial workflows that need preservation"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00aec5] flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="text-sm font-medium text-[#00aec5] mb-2">The Opportunity</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Transform Investment Into Revenue
              </h3>
              <p className="text-slate-600 mb-6">
                Regional business publications migrating from legacy platforms to WordPress
                report significant revenue improvements from optimized ad technology alone.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <BarChart3 className="h-4 w-4 text-green-600" />
                  <span>30-70% CPM increases from modern ad tech</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span>10-25% traffic growth from improved page speed</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Zap className="h-4 w-4 text-green-600" />
                  <span>70-80% reduction in time for routine updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Options Overview */}
      <section id="overview" ref={optionsRef} className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Three Paths Forward
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Each option protects your content, preserves your SEO, and gets you off Drupal 7.
              Choose the level of transformation that fits your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {options.map((option, index) => (
              <div
                key={option.id}
                onClick={() => setActiveOption(option.id)}
                className={cn(
                  "relative rounded-2xl p-8 cursor-pointer transition-all duration-500",
                  "border-2 hover:shadow-xl",
                  activeOption === option.id
                    ? "border-[#00aec5] bg-white shadow-xl shadow-[#00aec5]/10"
                    : "border-slate-200 bg-white hover:border-slate-300",
                  optionsInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12",
                  index === 0 && "delay-100",
                  index === 1 && "delay-200",
                  index === 2 && "delay-300"
                )}
              >
                {option.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#00aec5] to-[#0891b2] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      RECOMMENDED
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <div className="text-sm font-medium text-[#00aec5] mb-1">{option.subtitle}</div>
                  <h3 className="text-2xl font-bold text-slate-900">{option.title}</h3>
                </div>

                <p className="text-slate-600 text-sm mb-6 min-h-[60px]">
                  {option.description}
                </p>

                <div className="border-t border-slate-100 pt-6 mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-900">{option.price}</span>
                  </div>
                  <div className="text-sm text-slate-500 mt-1 flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {option.timeline}
                  </div>
                </div>

                <Button
                  variant={activeOption === option.id ? "default" : "outline"}
                  className={cn(
                    "w-full rounded-full transition-all",
                    activeOption === option.id
                      ? "bg-[#00aec5] hover:bg-[#008ca2] text-white"
                      : "border-slate-200 hover:border-[#00aec5] hover:text-[#00aec5]"
                  )}
                  onClick={(e) => {
                    e.stopPropagation()
                    scrollToSection("options")
                  }}
                >
                  View Details
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Options */}
      <section id="options" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Detailed Scope
            </h2>
            <p className="text-xl text-slate-600">
              Everything included in each engagement option
            </p>
          </div>

          <div className="space-y-8">
            {options.map((option) => (
              <div
                key={option.id}
                className={cn(
                  "rounded-2xl border-2 overflow-hidden transition-all duration-300",
                  activeOption === option.id
                    ? "border-[#00aec5] shadow-lg"
                    : "border-slate-200"
                )}
              >
                <div
                  className={cn(
                    "p-6 cursor-pointer transition-colors",
                    activeOption === option.id ? "bg-[#00aec5]/5" : "bg-slate-50 hover:bg-slate-100"
                  )}
                  onClick={() => setActiveOption(option.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg",
                        activeOption === option.id
                          ? "bg-[#00aec5] text-white"
                          : "bg-slate-200 text-slate-600"
                      )}>
                        {option.id}
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold text-slate-900">{option.title}</h3>
                          {option.recommended && (
                            <span className="text-xs font-medium text-[#00aec5] bg-[#00aec5]/10 px-2 py-1 rounded-full">
                              Recommended
                            </span>
                          )}
                        </div>
                        <p className="text-slate-500 text-sm">{option.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-slate-900">{option.price}</div>
                        <div className="text-sm text-slate-500">{option.timeline}</div>
                      </div>
                      <ChevronRight className={cn(
                        "h-6 w-6 text-slate-400 transition-transform",
                        activeOption === option.id && "rotate-90"
                      )} />
                    </div>
                  </div>
                </div>

                {activeOption === option.id && (
                  <div className="p-8 bg-white border-t border-slate-100">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#00aec5]" />
                          What's Included
                        </h4>
                        <ul className="space-y-3">
                          {option.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#00aec5] mt-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-6">
                        {option.clientResponsibility && (
                          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                            <h4 className="font-semibold text-amber-900 mb-2">Client Responsibility</h4>
                            <p className="text-amber-800 text-sm">{option.clientResponsibility}</p>
                          </div>
                        )}
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                          <h4 className="font-semibold text-slate-900 mb-2">Ideal For</h4>
                          <p className="text-slate-600 text-sm">{option.idealFor}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Analysis Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-900 to-emerald-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Financial Opportunity</h2>
            <p className="text-xl text-emerald-200 max-w-3xl mx-auto">
              Regional business publications migrating from legacy platforms to WordPress report
              <span className="font-bold text-white"> 415% ROI over three years</span>. Here's what that could mean for Comstock.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { value: "$25-40K", label: "Annual Operational Savings", desc: "Lower maintenance, developer costs, and hosting expenses" },
              { value: "$150-240K", label: "Ad Revenue Lift (Conservative)", desc: "30% improvement from modern ad tech alone" },
              { value: "$25-50K", label: "Traffic Growth Revenue", desc: "10-25% organic traffic increase from faster page speed" },
              { value: "2-4 mo", label: "Payback Period", desc: "Investment returns within first quarter post-launch" }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-emerald-300 mb-2">{item.value}</div>
                <div className="font-semibold text-white mb-1">{item.label}</div>
                <div className="text-emerald-200 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Conservative First-Year Projection</h3>
                <div className="space-y-3">
                  {[
                    { label: "Operational Savings", value: "$25,000 - $40,000" },
                    { label: "Ad Revenue Improvement (30%)", value: "$150,000 - $240,000" },
                    { label: "Traffic Growth Revenue", value: "$25,000 - $50,000" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-emerald-200">{item.label}</span>
                      <span className="font-semibold text-white">{item.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-lg font-bold text-emerald-300">Total Annual Revenue Lift</span>
                    <span className="text-2xl font-bold text-white">$200,000 - $330,000</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="bg-emerald-500/20 rounded-xl p-6 border border-emerald-500/30">
                  <div className="text-sm text-emerald-300 mb-2">Full Redesign Investment</div>
                  <div className="text-4xl font-bold text-white mb-4">$68,000</div>
                  <div className="text-emerald-200">
                    At conservative estimates, this investment pays for itself in <span className="font-bold text-white">2-4 months</span> and
                    delivers <span className="font-bold text-white">200-400% Year 1 ROI</span>.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Investment Summary</h2>
            <p className="text-xl text-slate-400">
              Transparent pricing with flexible payment terms
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-6 text-slate-400 font-medium">Option</th>
                  <th className="text-center py-4 px-6 text-slate-400 font-medium">Investment</th>
                  <th className="text-center py-4 px-6 text-slate-400 font-medium">Timeline</th>
                  <th className="text-center py-4 px-6 text-slate-400 font-medium">Content Migration</th>
                  <th className="text-center py-4 px-6 text-slate-400 font-medium">Design Work</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Basic Migration", price: "$38,000", time: "4-5 months", migration: "Client-led", design: "Existing" },
                  { name: "Migration + Enhancement", price: "$52,000", time: "6-7 months", migration: "Professional", design: "40-hour refresh" },
                  { name: "Full Redesign", price: "$68,000", time: "8-9 months", migration: "Professional", design: "Complete redesign", recommended: true }
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={cn(
                      "border-b border-slate-800 transition-colors",
                      row.recommended && "bg-[#00aec5]/10"
                    )}
                  >
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{row.name}</span>
                        {row.recommended && (
                          <span className="text-xs bg-[#00aec5] px-2 py-0.5 rounded-full">Recommended</span>
                        )}
                      </div>
                    </td>
                    <td className="py-5 px-6 text-center text-2xl font-bold text-[#00aec5]">{row.price}</td>
                    <td className="py-5 px-6 text-center text-slate-400">{row.time}</td>
                    <td className="py-5 px-6 text-center text-slate-400">{row.migration}</td>
                    <td className="py-5 px-6 text-center text-slate-400">{row.design}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { title: "Hosting", desc: "Managed WordPress hosting with CDN, security monitoring, and automated backups included" },
              { title: "Payment Terms", desc: "25% kickoff, 25% design approval, 25% beta, 25% launch" },
              { title: "Proposal Valid", desc: "Pricing guaranteed for 60 days from proposal date" }
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built For Publishing */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Built for Publishing Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We understand what regional business publications need—from ad technology
              optimization to editorial workflows that let your team focus on journalism,
              not technical headaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Target,
                title: "20 Ad Blocks Optimized",
                desc: "All your premium advertising inventory migrated with improved placement logic, viewability optimization, and foundation for header bidding.",
                highlight: true
              },
              {
                icon: Newspaper,
                title: "Editorial Workflow",
                desc: "Setup of PublishPress or Edit Flow for multi-author coordination, editorial calendars, and streamlined publishing workflows."
              },
              {
                icon: Layout,
                title: "Gutenberg Block Builder",
                desc: "Your editorial team can create beautiful, consistent content without developer help. Publishing as simple as Microsoft Word."
              },
              {
                icon: TrendingUp,
                title: "Core Web Vitals",
                desc: "Image optimization, lazy loading, and critical CSS targeting LCP <2.5s, FID <100ms, CLS <0.1 for improved search rankings."
              },
              {
                icon: Megaphone,
                title: "Sponsored Content Ready",
                desc: "Custom templates and workflows for sponsored content programs that can generate 50%+ margins."
              },
              {
                icon: FileText,
                title: "10+ Years Preserved",
                desc: "Every article, every URL, every piece of SEO equity protected with comprehensive 301 redirect mapping."
              },
              {
                icon: Shield,
                title: "ADA Compliant",
                desc: "WCAG 2.1 AA standards for color contrast, keyboard navigation, alt text, form accessibility, and screen reader compatibility."
              },
              {
                icon: BarChart3,
                title: "Analytics Ready",
                desc: "Clean integration with Google Analytics, Google Ad Manager, and any third-party tracking your advertisers require."
              },
              {
                icon: Smartphone,
                title: "Mobile-First Design",
                desc: "More than half your readers are on mobile. Every page will look and perform beautifully on any device."
              }
            ].map((item, i) => (
              <div
                key={i}
                className={cn(
                  "rounded-2xl p-6 border",
                  item.highlight
                    ? "bg-gradient-to-br from-[#00aec5]/10 to-[#0891b2]/5 border-[#00aec5]/30"
                    : "bg-slate-50 border-slate-100"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                  item.highlight ? "bg-[#00aec5]/20" : "bg-white"
                )}>
                  <item.icon className={cn(
                    "h-6 w-6",
                    item.highlight ? "text-[#00aec5]" : "text-slate-600"
                  )} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why WordPress */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Why WordPress?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                WordPress powers 41.4% of all websites and commands 64.9% CMS market share.
                For publishing specifically, it's the dominant platform because it solves
                the core publisher problem: content management must be simple enough for
                editorial teams to own.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap, title: "Fast Updates", desc: "Publish in minutes, not days" },
                  { icon: Shield, title: "Enterprise Security", desc: "Battle-tested by millions" },
                  { icon: Users, title: "Easy Training", desc: "Intuitive for any skill level" },
                  { icon: Globe, title: "Plugin Ecosystem", desc: "Superior ad technology options" }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-slate-100">
                    <item.icon className="h-8 w-8 text-[#00aec5] mb-3" />
                    <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                The Business Case
              </h3>
              <p className="text-slate-600 mb-6">
                WordPress isn't just about content management—it's about reducing costs
                and increasing revenue.
              </p>
              <div className="space-y-4">
                {[
                  "Developer costs: $30-41/hr vs. $50-65/hr for Drupal specialists",
                  "70-80% reduction in time for routine content updates",
                  "Superior ad plugin ecosystem: Advanced Ads, Ad Inserter, header bidding",
                  "Lower long-term TCO: 30-50% savings vs. Drupal",
                  "Massive talent pool for ongoing support"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00aec5] flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Project Timeline
            </h2>
            <p className="text-xl text-slate-600">
              Full Redesign milestone overview (8-9 months)
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              { phase: "Discovery & Planning", weeks: "1-4", desc: "Content audit, stakeholder alignment, business objectives, technical specifications" },
              { phase: "Information Architecture", weeks: "5-8", desc: "Content mapping, site structure design, navigation optimization, design direction" },
              { phase: "Design & Development", weeks: "9-24", desc: "WordPress setup, custom theme, ad block migration, Core Web Vitals optimization" },
              { phase: "Content Migration", weeks: "20-28", desc: "All editorial content transferred, URL redirects, SEO preservation verified" },
              { phase: "Beta & QA", weeks: "29-32", desc: "Stakeholder review, accessibility audit, ad performance testing, bug fixes" },
              { phase: "Launch", weeks: "33-36", desc: "Training, final QA, go-live with 30-day hyper-care support" }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#00aec5] text-white flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  {i < 5 && <div className="w-0.5 h-full bg-[#00aec5]/30 mt-2" />}
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h4 className="font-bold text-slate-900 text-lg">{item.phase}</h4>
                    <span className="text-sm text-[#00aec5] font-medium bg-[#00aec5]/10 px-3 py-1 rounded-full">
                      Weeks {item.weeks}
                    </span>
                  </div>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-50 rounded-2xl p-8 max-w-4xl mx-auto border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-4">Continuous Publishing</h4>
            <p className="text-slate-600">
              Your editorial team continues publishing throughout the migration with zero
              disruption to daily operations. We work in staging environments with
              comprehensive testing before any live deployment.
            </p>
          </div>
        </div>
      </section>

      {/* About Digital Deployment */}
      <section id="about" ref={statsRef} className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Digital Deployment
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              For over 25 years, we've been the trusted partner for organizations
              that need reliable, professional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { value: "25+", label: "Years in Business", delay: 0 },
              { value: "500+", label: "Clients Served", delay: 100 },
              { value: "50+", label: "Publishing Migrations", delay: 200 },
              { value: "95%", label: "Client Retention", delay: 300 }
            ].map((stat, i) => (
              <div
                key={i}
                className={cn(
                  "text-center bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-100 transition-all duration-700",
                  statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${stat.delay}ms` }}
              >
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00aec5] to-[#0891b2] mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-2xl p-10 text-center">
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-6">
              "We understand publisher business models, editorial workflows, and advertising
              requirements. This isn't a generic website project to us—it's publishing
              infrastructure. Content preservation is our priority. You never lose
              editorial content or traffic."
            </p>
            <div className="text-[#00aec5] font-medium">Digital Deployment Team</div>
          </div>
        </div>
      </section>

      {/* A Forward-Looking Investment */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            A Forward-Looking Investment
          </h2>
          <div className="bg-white rounded-2xl p-10 border border-slate-200 shadow-sm">
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              "Comstock Magazine's 10+ years of editorial excellence deserves a platform that matches its ambition.
              Drupal 7 in 2025 is like driving a 2012 car in a race against 2024 competitors.
              You'll finish, but you'll be slower, more expensive to maintain, and less equipped for what's ahead."
            </p>
            <p className="text-lg text-slate-600">
              WordPress migration isn't a cost—it's a strategic investment. It unlocks operational efficiency.
              It activates advertiser revenue potential. It positions Comstock for sustainable growth.
              And it delivers payback in under 6 months.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#00aec5] to-[#0891b2]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's Modernize Comstock Together
          </h2>
          <p className="text-xl text-white/90 mb-8">
            The urgency is real: security exposure escalates every month Drupal 7
            remains in production. Early action protects your data, your readers,
            and your business reputation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={handleScheduleCall}
              className="bg-white text-[#00aec5] hover:bg-slate-100 rounded-full px-8 py-6 text-base font-medium shadow-xl hover:scale-105 transition-all"
            >
              Schedule a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="mt-8 text-white/80 text-sm space-y-1">
            <p>Prepared for <span className="font-medium text-white">Comstock Magazine Editorial & Business Leadership</span></p>
            <p className="text-white/60 mt-2">December 2024</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-white rounded-lg p-2">
              <DigitalDeploymentLogo />
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-slate-400">© {new Date().getFullYear()} Digital Deployment. All rights reserved.</p>
            <p className="text-slate-500 text-sm mt-1">www.digitaldeployment.com</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
