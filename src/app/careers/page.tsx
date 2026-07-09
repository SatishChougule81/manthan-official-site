import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ScrollProgress, Entrance, Reveal, StaggerContainer, StaggerItem } from "@/components/motion";
import { TiltCard } from "@/components/interactive";

export const metadata: Metadata = {
  title: "Careers | Manthan Software Technologies",
  description: "Join Manthan — we're building AI-powered development tools and looking for talented engineers, designers, and AI specialists.",
};

const benefits = [
  { icon: "laptop_mac", title: "Remote-First", description: "Work from anywhere. Async-first culture with flexible hours." },
  { icon: "school", title: "Learning Budget", description: "Annual budget for courses, conferences, and certifications." },
  { icon: "health_and_safety", title: "Health Coverage", description: "Comprehensive health insurance for you and your family." },
  { icon: "rocket_launch", title: "Equity Options", description: "Early-stage equity so you share in our growth." },
  { icon: "devices", title: "Top-Tier Gear", description: "MacBook Pro, 4K display, and any tools you need." },
  { icon: "calendar_today", title: "Flexible PTO", description: "Take the time you need. No tracking, no guilt." },
];

export default function CareersPage() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className="pt-20">
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-margin-mobile md:px-margin-desktop overflow-hidden text-center">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] glow-purple -z-10 animate-float-slow" />
          <div className="max-w-3xl mx-auto">
            <Entrance><p className="font-label-caps text-label-caps text-primary mb-6">CAREERS</p></Entrance>
            <Entrance delay={0.1}>
              <h1 className="font-display-lg text-5xl md:text-7xl tracking-tight mb-6">Build with{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">purpose</span>
              </h1>
            </Entrance>
            <Entrance delay={0.2}>
              <p className="text-lg text-on-surface-variant/70 max-w-xl mx-auto">
                We&apos;re a small team solving big problems. If you care about AI, developer tools, and shipping great software — you&apos;ll fit right in.
              </p>
            </Entrance>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-[1440px] mx-auto">
            <Reveal><h2 className="font-display-lg text-3xl md:text-4xl text-center mb-14">Why Manthan</h2></Reveal>
            <StaggerContainer stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <StaggerItem key={b.title}>
                  <TiltCard>
                    <div className="glass-card p-8 rounded-2xl h-full group hover:border-primary/20 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined notranslate text-xl">{b.icon}</span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
                      <p className="text-sm text-on-surface-variant/60 leading-relaxed">{b.description}</p>
                    </div>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest/30">
          <div className="max-w-3xl mx-auto">
            <Reveal><h2 className="font-display-lg text-3xl md:text-4xl text-center mb-14">Open positions</h2></Reveal>
            <Reveal>
              <div className="glass-card rounded-2xl p-10 md:p-14 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined notranslate text-3xl">work_off</span>
                </div>
                <h3 className="font-semibold text-xl mb-3">No open positions right now</h3>
                <p className="text-sm text-on-surface-variant/60 mb-6 max-w-md mx-auto">We don&apos;t have any openings at the moment, but we&apos;re always interested in hearing from talented people. Send us your resume and we&apos;ll reach out when something fits.</p>
                <a href="mailto:founders@manthanai.co.in" className="inline-flex items-center gap-2 bg-primary text-on-primary font-bold px-6 py-3 rounded-full hover:brightness-110 transition-all">
                  <span className="material-symbols-outlined notranslate text-lg">mail</span>
                  founders@manthanai.co.in
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
