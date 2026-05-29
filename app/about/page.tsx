import React from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export default function AboutPage() {
  return (
    <>
      {/* Background Image - Whale (fixed while scrolling) */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-black">
        <img
          src="/images/whale.png"
          alt="Background"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90" />
      </div>

    <main className="relative min-h-screen overflow-x-hidden text-white selection:bg-white/30 w-full">

      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 max-w-[1400px] mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="bg-black/20 backdrop-blur-lg border border-white/10 p-8 lg:p-12 rounded-3xl shadow-2xl">
              <h1 className="text-4xl lg:text-[4rem] leading-[1.1] font-display font-semibold tracking-tight text-white mb-8 drop-shadow-lg">
                Specialized technology solution provider
              </h1>
              <div className="space-y-6 text-white/80 text-lg leading-relaxed font-light">
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
            <div className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.1)] max-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 duration-700 transition-opacity group-hover:opacity-50" />
              <img
                src="/about/about-main.webp"
                alt="Team"
                className="w-full h-full object-cover aspect-[16/9] group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
          </div>
        </section>

        {/* Chairman Section */}
        <section className="relative py-24 px-6 lg:px-12 border-y border-white/10 bg-black/40 backdrop-blur-xl">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-5 relative group order-last lg:order-first">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(59,130,246,0.15)] ring-1 ring-white/10">
                  <img
                    src="/about/ceo.png"
                    alt="Arun Gupta"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 saturate-50 group-hover:saturate-100"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-white/10 transition-colors duration-500">
                <div className="inline-flex items-center gap-3 text-sm font-mono text-blue-300 mb-6 uppercase tracking-wider">
                  <span className="w-8 h-px bg-blue-400/50" />
                  Chairman & Managing Director
                </div>
                <h2 className="text-5xl lg:text-7xl font-display font-semibold text-white mb-8 drop-shadow-md">
                  Arun Gupta
                </h2>
                <div className="space-y-6 text-white/80 text-lg leading-relaxed font-light">
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
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-4xl lg:text-6xl font-display font-semibold text-white mb-6 drop-shadow-md">Board of Directors</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ms. Drishti Gupta", role: "Non-Executive Director", image: "/about/drishti-gupta-min.png" },
              { name: "Mr. Satish Sharma", role: "Non-Executive Director", image: "/about/satish-sharma.jpg" },
              { name: "Mr. Girish Kumar Ahuja", role: "Independent Director", image: "/about/girish-ahuja.jpg" },
              { name: "Mr. Shankar Sharma", role: "Independent Director", image: "/about/shankar-sharma.jpg" },
              { name: "Ms. Rojina Thapa", role: "Independent Director", image: "/about/rojina-thapa.jpg" },
              { name: "Mrs. Asha Anil Agarwal", role: "Independent Director", image: "/about/asha-agarwal.jpg" },
            ].map((person, idx) => (
              <div key={idx} className="group relative rounded-[2.5rem] p-[1.5px] overflow-hidden bg-gradient-to-b from-white/10 to-white/0 hover:from-blue-500 hover:via-cyan-500 hover:to-transparent transition-all duration-700 shadow-2xl hover:shadow-[0_0_80px_rgba(59,130,246,0.15)] hover:-translate-y-2">
                <div className="relative h-full bg-[#050505] rounded-[2.5rem] p-8 flex flex-col items-center text-center overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-colors duration-1000" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full group-hover:bg-cyan-500/20 transition-colors duration-1000" />
                  <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grid-3x3-light-0RkE6J0yT2hW3VZQJ3sVwW8Z8w8Z8w.png')] bg-repeat opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-1000" />
                  
                  <div className="relative z-10 w-44 h-44 rounded-full mb-8 flex items-center justify-center p-2 bg-white/[0.02] border border-white/5 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-500">
                    <img src={person.image} alt={person.name} className="w-full h-full rounded-full object-cover saturate-50 group-hover:saturate-110 transition-all duration-700 hover:scale-105" />
                  </div>
                  
                  <h3 className="relative z-10 text-2xl font-display font-medium text-white/90 mb-3 group-hover:text-white transition-colors">{person.name}</h3>
                  <div className="relative z-10 text-[10px] font-mono tracking-[0.2em] text-white/30 group-hover:text-blue-300 transition-colors uppercase w-full">
                    {person.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Managerial Personnel */}
        <section className="relative py-24 px-6 lg:px-12 border-t border-white/10 bg-black/40 backdrop-blur-xl">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col items-center mb-20 text-center">
              <h2 className="text-4xl lg:text-6xl font-display font-semibold text-white mb-6 drop-shadow-md">Key Managerial Personnel</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {[
                { name: "Mr. Arjun Singh Bisht", role: "Chief Financial Officer", image: "/about/arjunsingh-min.jpg" },
                { name: "Ms. Preeti Kataria", role: "Company Secretary & Compliance Officer", image: "/about/preeti-mam.jpg" },
              ].map((person, idx) => (
                <div key={idx} className="group relative rounded-[2.5rem] p-[1.5px] overflow-hidden bg-gradient-to-b from-white/10 to-white/0 hover:from-purple-500 hover:via-fuchsia-500 hover:to-transparent transition-all duration-700 shadow-2xl hover:shadow-[0_0_80px_rgba(217,70,239,0.15)] hover:-translate-y-2">
                  <div className="relative h-full bg-[#050505] rounded-[2.5rem] p-8 flex flex-col items-center text-center overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[80px] rounded-full group-hover:bg-purple-500/20 transition-colors duration-1000" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/5 blur-[80px] rounded-full group-hover:bg-pink-500/20 transition-colors duration-1000" />
                    <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grid-3x3-light-0RkE6J0yT2hW3VZQJ3sVwW8Z8w8Z8w.png')] bg-repeat opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-1000" />
                    
                    <div className="relative z-10 w-44 h-44 rounded-full mb-8 flex items-center justify-center p-2 bg-white/[0.02] border border-white/5 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all duration-500">
                      <img src={person.image} alt={person.name} className="w-full h-full rounded-full object-cover saturate-50 group-hover:saturate-110 transition-all duration-700 hover:scale-105" />
                    </div>
                    
                    <h3 className="relative z-10 text-2xl font-display font-medium text-white/90 mb-3 group-hover:text-white transition-colors">{person.name}</h3>
                    <div className="relative z-10 text-[10px] font-mono tracking-[0.2em] text-white/30 group-hover:text-purple-300 transition-colors uppercase w-full">
                      {person.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="relative py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-4xl lg:text-6xl font-display font-semibold text-white mb-6 drop-shadow-md">Leadership Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Mr. Rajesh Kumar", role: "Director (Govt Surveillance Business)", image: "/about/rajeshkumar-min.jpg" },
              { name: "Mr. K. Ramnath Rao", role: "Vice President (Software Development)", image: "/about/ramnathrao-min.jpg" },
              { name: "Mr. Rakesh Jain", role: "Vice President (Project Services)", image: "/about/rakeshjain-min.jpg" },
              { name: "Mr. Rajan Verma", role: "Vice President (Enterprises & Retail)", image: "/about/rajanverma-min.jpg" },
            ].map((person, idx) => (
              <div key={idx} className="group relative rounded-[2.5rem] p-[1.5px] overflow-hidden bg-gradient-to-b from-white/10 to-white/0 hover:from-emerald-500 hover:via-teal-500 hover:to-transparent transition-all duration-700 shadow-2xl hover:shadow-[0_0_80px_rgba(16,185,129,0.15)] hover:-translate-y-2">
                <div className="relative h-full bg-[#050505] rounded-[2.5rem] p-8 flex flex-col items-center text-center overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full group-hover:bg-emerald-500/20 transition-colors duration-1000" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/5 blur-[80px] rounded-full group-hover:bg-teal-500/20 transition-colors duration-1000" />
                  <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grid-3x3-light-0RkE6J0yT2hW3VZQJ3sVwW8Z8w8Z8w.png')] bg-repeat opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-1000" />
                  
                  <div className="relative z-10 w-36 h-36 rounded-full mb-6 flex items-center justify-center p-2 bg-white/[0.02] border border-white/5 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all duration-500">
                    <img src={person.image} alt={person.name} className="w-full h-full rounded-full object-cover saturate-50 group-hover:saturate-110 transition-all duration-700 hover:scale-105" />
                  </div>
                  
                  <h3 className="relative z-10 text-xl font-display font-medium text-white/90 mb-2 group-hover:text-white transition-colors">{person.name}</h3>
                  <div className="relative z-10 text-[10px] font-mono tracking-[0.2em] text-white/30 group-hover:text-emerald-300 transition-colors uppercase w-full">
                    {person.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <FooterSection />
      </div>
    </main>
    </>
  );
}
