import React from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

const AboutUs = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white selection:bg-white/30">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 max-w-[1400px] mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h1 className="text-4xl lg:text-[4rem] leading-[1.1] font-display font-semibold tracking-tight text-white mb-8">
              Specialized technology solution provider
            </h1>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
              <p>
                We are a specialized technology-solutions provider with a focus on designing, developing, and deploying integrated security and surveillance systems, biometric authentication platforms, and artificial intelligence-driven software products. Our business model generates revenue from multiple streams, including project-based system integration contracts, Software as a Service ("SaaS") subscriptions, sale of hardware and software products, and technical services such as annual maintenance and managed support.
              </p>
              <p>
                We have developed a portfolio of proprietary software tools—StorePulse, an AI powered video analytics platform; CamStore, a real-time video compression and storage optimization solution; and CheckCam, a CCTV network health monitoring system—which are offered as standalone cloud-deployed SaaS solutions or as part of integrated turnkey deployments.
              </p>
              <p>
                We serve a diverse customer base, including government agencies, public sector undertakings ("PSUs"), smart city authorities, educational institutions, and private enterprises in sectors such as transportation, retail, logistics, and telecommunications.
              </p>
            </div>
          </div>
          <div className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-white/5">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <img
              src="/placeholder.jpg"
              alt="Team"
              className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Chairman Section */}
      <section className="relative py-24 px-6 lg:px-12 bg-white/5 border-y border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 relative group order-last lg:order-first">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-blue-500/10">
                <img
                  src="/placeholder-user.jpg"
                  alt="Arun Gupta"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 text-sm font-mono text-blue-400 mb-6">
                <span className="w-8 h-px bg-blue-400/50" />
                Chairman & Managing Director
              </div>
              <h2 className="text-4xl lg:text-6xl font-display font-semibold text-white mb-8">
                Arun Gupta
              </h2>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
                <p>
                  Mr. Arun Gupta, the Promoter and Chairman & Managing Director of Transline Technologies Ltd., has been an integral part of the Company since its Inception. Appointed as a Director on February 2, 2001, he has played a pivotal role in steering the Company's growth and diversification.
                </p>
                <p>
                  With over 23 years of rich experience in the information technology, surveillance, biometrics, and system integration sectors, Mr. Gupta has been instrumental in positioning the Company as a trusted solutions provider. His leadership blends strategic vision with hands-on industry expertise, enabling the Company to achieve consistent innovation and market expansion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="relative py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl lg:text-5xl font-display font-semibold text-white mb-4">Board of Directors</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Ms. Drishti Gupta", role: "Non-Executive Director" },
            { name: "Mr. Satish Sharma", role: "Non-Executive Director" },
            { name: "Mr. Girish Kumar Ahuja", role: "Independent Director" },
          ].map((person, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 mb-6 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="/placeholder-user.jpg" alt={person.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{person.name}</h3>
              <span className="text-xs font-mono font-medium tracking-wider text-blue-400 uppercase bg-blue-900/30 px-4 py-1.5 rounded-full">
                {person.role}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Key Managerial Personnel */}
      <section className="relative py-24 px-6 lg:px-12 max-w-[1400px] mx-auto border-t border-white/10">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl lg:text-5xl font-display font-semibold text-white mb-4">Key Managerial Personnel</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { name: "Mr. Arjun Singh Bisht", role: "Chief Financial Officer" },
            { name: "Ms. Preeti Kataria", role: "Company Secretary & Compliance Officer" },
          ].map((person, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-purple-500 mb-6 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="/placeholder-user.jpg" alt={person.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{person.name}</h3>
              <span className="text-xs font-mono font-medium tracking-wider text-purple-400 uppercase bg-purple-900/30 px-4 py-1.5 rounded-full">
                {person.role}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="relative py-24 px-6 lg:px-12 max-w-[1400px] mx-auto border-t border-white/10">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl lg:text-5xl font-display font-semibold text-white mb-4">Leadership Team</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Mr. Rajesh Kumar", role: "Director (Govt Surveillance Business)" },
            { name: "Mr. K. Ramnath Rao", role: "Vice President (Software Development)" },
            { name: "Mr. Rakesh Jain", role: "Vice President (Project Services)" },
            { name: "Mr. Rajan Verma", role: "Vice President (Enterprises & Retail)" },
          ].map((person, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300 transform hover:-translate-y-1">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-500/50 mb-6 p-1 shadow-lg shadow-emerald-500/20">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="/placeholder-user.jpg" alt={person.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{person.name}</h3>
              <span className="text-[10px] font-mono leading-tight tracking-wider text-emerald-300 uppercase bg-emerald-950 px-3 py-2 rounded-xl border border-emerald-500/30 w-full">
                {person.role}
              </span>
            </div>
          ))}
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default AboutUs;
