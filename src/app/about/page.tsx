import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ScrollProgress, Entrance, Reveal, StaggerContainer, StaggerItem, Counter } from "@/components/motion";
import { TiltCard } from "@/components/interactive";

export const metadata: Metadata = {
  title: "About | Manthan Software Technologies",
  description: "The story behind Manthan — our mission, team, and the values that drive intelligent software development.",
};

const values = [
  { icon: "auto_awesome", title: "AI-First Thinking", description: "Every solution we build starts with the question: how can AI make this smarter?" },
  { icon: "handshake", title: "Client Partnership", description: "We don't just deliver code — we embed in your team and own outcomes together." },
  { icon: "speed", title: "Ship Fast, Ship Right", description: "Rapid iteration with engineering rigor. No shortcuts, no bloat." },
  { icon: "lock", title: "Trust & Transparency", description: "Open communication, honest timelines, and no surprises." },
];

const team = [
  { name: "James W.", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Daniel R.", role: "CTO", img: "https://randomuser.me/api/portraits/men/75.jpg" },
  { name: "Sophia L.", role: "Head of AI", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Ethan C.", role: "Lead Engineer", img: "https://randomuser.me/api/portraits/men/22.jpg" },
  { name: "Olivia M.", role: "Design Lead", img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Liam T.", role: "DevOps Lead", img: "https://randomuser.me/api/portraits/men/46.jpg" },
];

const milestones = [
  { year: "2025", event: "Manthan founded with a vision for AI-powered development", icon: "rocket_launch" },
  { year: "2025", event: "UniLink conceived — solving the multi-LLM connectivity problem", icon: "lightbulb" },
  { year: "2025", event: "First enterprise client — healthcare platform delivery", icon: "handshake" },
  { year: "2026", event: "UniLink v1.0 launched, team grows to 10+ engineers", icon: "celebration" },
  { year: "2026", event: "AI Agent Studio and Workflow Engine enter development", icon: "auto_awesome" },
  { year: "2026", event: "Expanding globally — 30+ clients across industries", icon: "public" },
];

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative pt-24 pb-24 md:pt-32 md:pb-24 px-margin-mobile md:px-margin-desktop overflow-hidden text-center">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] glow-blue -z-10 animate-float-slow" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] glow-purple -z-10 animate-float-slow-reverse" />
          <div className="max-w-3xl mx-auto">
            <Entrance>
              <p className="font-label-caps text-label-caps text-primary mb-6">OUR STORY</p>
            </Entrance>
            <Entrance delay={0.1}>
              <h1 className="font-display-lg text-5xl md:text-7xl tracking-tight text-on-background mb-6">
                Building the future of{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">software</span>
              </h1>
            </Entrance>
            <Entrance delay={0.2}>
              <p className="text-lg text-on-surface-variant/70 max-w-xl mx-auto">
                Manthan was born from a simple belief: software development should be faster,
                smarter, and powered by AI at every stage.
              </p>
            </Entrance>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div>
                <h2 className="font-display-lg text-3xl md:text-4xl mb-6">Our Mission</h2>
                <p className="text-on-surface-variant/70 leading-relaxed mb-4">
                  We streamline the complete software development lifecycle through intelligent
                  workflow automation. From ideation to production, we help engineering teams
                  ship better software, faster.
                </p>
                <p className="text-on-surface-variant/70 leading-relaxed">
                  Whether it&apos;s a custom platform, an AI integration, or scaling your team —
                  Manthan is the engineering partner that grows with you.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="glass-card rounded-3xl p-10 text-center">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: 50, suffix: "+", label: "Projects", color: "text-primary" },
                    { value: 25, suffix: "+", label: "Engineers", color: "text-secondary" },
                    { value: 30, suffix: "+", label: "Clients", color: "text-tertiary" },
                    { value: 1, suffix: "+", label: "Years", color: "text-green-400" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className={`text-3xl font-bold ${s.color} font-display-lg`}>
                        <Counter value={s.value} />{s.suffix}
                      </div>
                      <div className="text-xs text-on-surface-variant/40 mt-1 font-code-sm">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest/30">
          <div className="max-w-[1440px] mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="font-display-lg text-3xl md:text-4xl mb-4">What drives us</h2>
              </div>
            </Reveal>
            <StaggerContainer stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <TiltCard>
                    <div className="glass-card p-8 rounded-2xl h-full text-center group hover:border-primary/20 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined notranslate text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{v.icon}</span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                      <p className="text-sm text-on-surface-variant/60 leading-relaxed">{v.description}</p>
                    </div>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="font-display-lg text-3xl md:text-4xl mb-4">Our team</h2>
                <p className="text-on-surface-variant/60">Engineers, designers, and AI specialists building the next generation of dev tools.</p>
              </div>
            </Reveal>
            <StaggerContainer stagger={0.08} className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {team.map((t) => (
                <StaggerItem key={t.name}>
                  <div className="glass-card rounded-2xl p-6 text-center group hover:border-outline-variant/30 transition-colors">
                    <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" />
                    <h4 className="font-semibold text-on-background">{t.name}</h4>
                    <p className="text-xs text-on-surface-variant/50 mt-1">{t.role}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest/30 overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="text-center mb-20">
                <p className="font-label-caps text-label-caps text-primary mb-4">MILESTONES</p>
                <h2 className="font-display-lg text-3xl md:text-4xl">Our journey</h2>
              </div>
            </Reveal>
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent md:-translate-x-px" />
              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <Reveal key={`${m.year}-${i}`} delay={i * 0.1}>
                    <div className={`relative flex items-start mb-12 last:mb-0 ${isLeft ? "md:justify-start" : "md:justify-end"}`}>
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                        <div className="w-12 h-12 rounded-full bg-surface-container border-2 border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                          <span className="material-symbols-outlined notranslate text-primary text-lg">{m.icon}</span>
                        </div>
                      </div>
                      <div className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${isLeft ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8 md:text-left"}`}>
                        <div className="glass-card rounded-2xl p-5 hover:border-primary/20 transition-all duration-300 hover:translate-y-[-2px]">
                          <span className="inline-block text-xs font-bold font-code-sm text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">{m.year}</span>
                          <p className="text-sm text-on-surface-variant/80 leading-relaxed">{m.event}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop text-center">
          <Reveal>
            <h2 className="font-display-lg text-4xl md:text-5xl mb-6">Want to join us?</h2>
            <p className="text-on-surface-variant/60 mb-8 max-w-md mx-auto">We&apos;re always looking for talented engineers and designers.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/careers" className="bg-primary text-on-primary font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 hover:brightness-110 transition-all">
                <span className="material-symbols-outlined notranslate text-lg">work</span> View Careers
              </a>
              <a href="/contact" className="px-8 py-3.5 rounded-full font-medium border border-outline-variant/30 hover:bg-white/5 transition-all">Contact Us</a>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
