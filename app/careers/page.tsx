"use client";

import React, { useState, useEffect, useRef } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Lightbulb, 
  GraduationCap, 
  ShieldCheck, 
  MapPin 
} from "lucide-react";

export default function CareersPage() {
  const [isTreeVisible, setIsTreeVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show tree only when the section is entering from bottom and hide when leaving from top or bottom
        setIsTreeVisible(entry.isIntersecting);
      },
      { 
        threshold: [0, 0.15],
        // Only trigger when section is well scrolled into view (not just touching edge)
        rootMargin: "-80px 0px -80px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const perks = [
    {
      title: "Developing Talent to continuously reskill team members",
      description: "Developing talent is to continuously reskill team members to be ready and relevant for current and future",
      icon: <Users className="w-8 h-8 text-red-400 group-hover:text-white transition-colors" />
    },
    {
      title: "Focus on building technology skills",
      description: "Focus on building technology skills coupled with domain awareness",
      icon: <Lightbulb className="w-8 h-8 text-red-400 group-hover:text-white transition-colors" />
    },
    {
      title: "Robust Learning and Development",
      description: "We have a robust learning and development ecosystem that encourages each IT professional to improve their understanding and competency.",
      icon: <GraduationCap className="w-8 h-8 text-red-400 group-hover:text-white transition-colors" />
    },
    {
      title: "Safe and Healthy working conditions",
      description: "Our work force is a critical factor in maintaining quality, productivity and safety, which strengthens our competitive position.",
      icon: <ShieldCheck className="w-8 h-8 text-red-400 group-hover:text-white transition-colors" />
    }
  ];

  return (
    <>
      {/* Background Image - Shield (fixed so it stays while scrolling) */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-black">
        <img
          src="/images/shield.png"
          alt="Background"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90" />
      </div>

    <main className="relative min-h-screen overflow-x-hidden text-white selection:bg-white/30 w-full">

      {/* Floating Tree Background relative to viewport */}
      <div 
        className="fixed top-20 right-0 w-[400px] md:w-[500px] lg:w-[600px] h-[400px] md:h-[500px] lg:h-[600px] z-20 pointer-events-none transition-all duration-[1500ms] ease-[cubic-bezier(0.23,1,0.32,1)] transform-gpu mix-blend-screen"
        style={{
          transform: isTreeVisible ? 'translate(10%, -10%) rotate(-90deg)' : 'translate(100%, -10%) rotate(-90deg)',
          opacity: isTreeVisible ? 0.9 : 0
        }}
      >
        <img 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tree-uAia6REvB137CQyHFCf0za3O6h2zKO.png" 
          alt="Bonsai Tree" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 w-full overflow-hidden">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 max-w-[1400px] mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-10 lg:p-14 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div className="inline-flex items-center gap-3 text-sm font-mono text-blue-300 mb-6 uppercase tracking-wider backdrop-blur-md bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                Welcome to Gaak Technologies
              </div>
              <h1 className="text-5xl lg:text-[5rem] leading-[1.1] font-display font-semibold tracking-tight text-white mb-8 drop-shadow-xl glowing-text">
                Career Opportunities
              </h1>
              <div className="space-y-6 text-white/80 text-lg leading-relaxed font-light mb-10">
                <p>
                  At Gaak Technologies, we are committed to maintaining high standards of workplace health and safety. In addition, we have been certified ISO 14001: 2015 (environmental management system). As a socially responsible IT solutions company, we strive to drive sustainable and responsible business practices through our sustainability policies, practices, and reporting.
                </p>
                <p>
                  We aim to prioritize energy-efficient solutions in our technology offerings, such as promoting energy-efficient servers, networking equipment, which helps customers reduce their carbon footprint and energy consumption.
                </p>
              </div>
              <Button type="button" size="lg" className="bg-white hover:bg-white/90 text-black rounded-full px-8 h-14 text-base font-medium shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105">
                Explore Current Openings
              </Button>
            </div>
            <div className="relative group rounded-[2rem] overflow-hidden border border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.15)] ring-1 ring-white/10 max-h-[380px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent z-10 duration-700 transition-opacity group-hover:opacity-20 mix-blend-overlay" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team Collaborating"
                className="w-full h-full object-cover aspect-[16/9] group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
              />
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section ref={sectionRef} className="relative py-32 px-6 lg:px-12 border-y border-white/10 bg-black/40 backdrop-blur-xl">
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="flex flex-col items-center mb-20 text-center">
              <span className="text-sm font-mono tracking-wider text-blue-300 uppercase mb-4">Join Us</span>
              <h2 className="text-4xl lg:text-7xl font-display font-semibold text-white mb-8 drop-shadow-lg">Why Join Gaak?</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-white rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {perks.map((perk, idx) => (
                <div key={idx} className="group bg-black/60 backdrop-blur-md border border-white/10 rounded-3xl p-10 flex flex-col hover:bg-black/80 hover:border-blue-500/50 shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3">
                    {perk.icon}
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-white mb-4 leading-tight group-hover:text-blue-200 transition-colors">{perk.title}</h3>
                  <p className="text-white/70 leading-relaxed font-light flex-grow">
                    {perk.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Form Section */}
        <section className="relative py-32 px-6 lg:px-12 max-w-[1400px] mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-[2rem] overflow-hidden border border-white/20 shadow-[0_0_80px_rgba(0,0,0,0.8)] ring-1 ring-white/10 backdrop-blur-xl bg-black/50">
            
            {/* Left Panel - Glowing Glassmorphism */}
            <div className="lg:col-span-2 bg-gradient-to-br from-black/80 to-black/60 p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px]" />
              
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-display font-semibold text-white mb-8 leading-tight drop-shadow-md">
                  Submit Your Profile
                </h2>
                <p className="text-white/70 mb-12 text-lg font-light leading-relaxed">
                  Can't find a role that matches your expertise? We're always looking for talented individuals who share our vision. Submit your profile, and let's explore how you can be a part of our journey toward innovation and excellence.
                </p>
                
                <div className="space-y-8 bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
                  <h3 className="text-xl font-medium text-white mb-2">Find Us Across India</h3>
                  <div className="flex items-start gap-4 text-white/80 group">
                    <MapPin className="w-6 h-6 text-blue-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-lg">New Delhi (Head Office)</span>
                  </div>
                  <div className="flex items-start gap-4 text-white/80 group">
                    <MapPin className="w-6 h-6 text-blue-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-lg">Navi Mumbai (Branch Office)</span>
                  </div>
                  <div className="flex items-start gap-4 text-white/80 group">
                    <MapPin className="w-6 h-6 text-blue-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-lg">Hyderabad (Branch Office)</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Panel - Form (Ultra Dark mode styling) */}
            <div className="lg:col-span-3 bg-black/60 p-12 lg:p-16 flex flex-col justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
              <h2 className="text-4xl lg:text-5xl font-display font-semibold text-white mb-4 relative z-10">
                Get In Touch
              </h2>
              <p className="text-white/60 mb-12 font-light text-xl relative z-10">
                Don't see a job that fits? We'd still love to hear from you.
              </p>
              
              <form className="space-y-8 relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-white/80 tracking-wide">FULL NAME</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all font-light"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-white/80 tracking-wide">PHONE NUMBER</label>
                    <input 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all font-light"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-white/80 tracking-wide">EMAIL ADDRESS</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all font-light"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-white/80 tracking-wide">POST APPLYING FOR</label>
                    <input 
                      type="text" 
                      placeholder="Enter post applying for" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all font-light"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-white/80 tracking-wide">
                    RESUME <span className="text-white/40 text-[10px] font-normal uppercase tracking-widest ml-2">(Only PDF, DOC, DOCX up to 5MB)</span>
                  </label>
                  <div className="w-full bg-black/50 border-2 border-white/10 border-dashed rounded-xl px-4 py-8 flex flex-col items-center justify-center hover:bg-white/5 hover:border-blue-500/50 transition-all cursor-pointer group">
                    <div className="bg-white text-black text-xs font-semibold px-6 py-2.5 rounded-full inline-flex items-center gap-2 mb-3 shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:scale-105 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                      Choose File
                    </div>
                    <div className="text-white/40 text-sm font-light">Drag & drop your resume here</div>
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-white/80 tracking-wide">MESSAGE</label>
                  <textarea 
                    placeholder="Tell us why you'd be a great fit..." 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all resize-none font-light"
                  />
                </div>

                <Button type="button" size="lg" className="bg-white hover:bg-white/90 text-black rounded-xl px-10 h-14 w-full mt-4 transition-all text-lg shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] font-medium tracking-wide hover:scale-[1.02]">
                  Submit Application
                </Button>
              </form>
            </div>
            
          </div>
        </section>

        <FooterSection />
      </div>
    </main>
    </>
  );
}
