"use client";

import React, { useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { 
  Bell, FileText, Download, ShieldCheck, 
  Cpu, Building, Server, Trophy, 
  Smartphone, Filter, ArrowRight 
} from "lucide-react";

export default function CircularsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Release", "Compliance", "Announcement", "Update", "Award"];

  const circulars = [
    {
      id: 1,
      type: "Release",
      date: "August 28, 2026",
      title: "StorePulse v4.0 Full Release featuring Generative Insights",
      description: "We are thrilled to announce the rollout of StorePulse version 4.0. This release integrates generative AI capabilities directly into your dashboard, allowing retail managers to query camera feeds in natural language.",
      icon: <Cpu className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />,
      colorClass: "from-cyan-500 hover:via-blue-500",
      glowClass: "bg-cyan-500/10 group-hover:bg-cyan-500/30",
      borderClass: "group-hover:border-cyan-500/50"
    },
    {
      id: 2,
      type: "Compliance",
      date: "August 10, 2026",
      title: "Updated Facial Recognition Privacy Mandates",
      description: "In accordance with recent regional regulations, our CheckCam and biometric infrastructure tools have been updated with automated data-anonymization protocols. Please review the updated documentation before your next deployment.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />,
      colorClass: "from-emerald-500 hover:via-teal-500",
      glowClass: "bg-emerald-500/10 group-hover:bg-emerald-500/30",
      borderClass: "group-hover:border-emerald-500/50"
    },
    {
      id: 3,
      type: "Announcement",
      date: "July 22, 2026",
      title: "Partnership with National Highway Authorities",
      description: "Transline Technologies has secured a landmark contract to deploy our AI-powered Traffic Monitoring System (TMS) across 5,000 kilometers of national highway, bridging the gap between hardware sensors and centralized analytics.",
      icon: <Building className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />,
      colorClass: "from-blue-500 hover:via-indigo-500",
      glowClass: "bg-blue-500/10 group-hover:bg-blue-500/30",
      borderClass: "group-hover:border-blue-500/50"
    },
    {
      id: 4,
      type: "Update",
      date: "June 15, 2026",
      title: "Scheduled Maintenance for CamStore Cloud Storage",
      description: "We will be performing scheduled backend maintenance on our CamStore remote storage servers on Sunday, June 20, from 02:00 to 04:00 AM IST. No downtime is expected for existing streams, but archival exports will be temporarily paused.",
      icon: <Server className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />,
      colorClass: "from-purple-500 hover:via-fuchsia-500",
      glowClass: "bg-purple-500/10 group-hover:bg-purple-500/30",
      borderClass: "group-hover:border-purple-500/50"
    },
    {
      id: 5,
      type: "Award",
      date: "May 05, 2026",
      title: "Recognized as 'Smart City Innovator of the Year'",
      description: "We are humbled to receive the 'Smart City Innovator of the Year' award at the 2026 International Tech Summit for our continuous work on integrated IoT municipal systems and public safety infrastructure.",
      icon: <Trophy className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors" />,
      colorClass: "from-amber-500 hover:via-yellow-500",
      glowClass: "bg-yellow-500/10 group-hover:bg-yellow-500/30",
      borderClass: "group-hover:border-yellow-500/50"
    },
    {
      id: 6,
      type: "Release",
      date: "April 18, 2026",
      title: "Id1 Attendance Solution: Mobile Application Launch",
      description: "Our core biometric attendance offering, Id1, now has a native mobile application available for iOS and Android, featuring geo-fenced clock-ins, liveness detection, and instant sync with HRMS platforms.",
      icon: <Smartphone className="w-6 h-6 text-pink-400 group-hover:text-pink-300 transition-colors" />,
      colorClass: "from-pink-500 hover:via-rose-500",
      glowClass: "bg-pink-500/10 group-hover:bg-pink-500/30",
      borderClass: "group-hover:border-pink-500/50"
    },
    {
      id: 7,
      type: "Compliance",
      date: "March 11, 2026",
      title: "ISO 27001 Certification Renewed",
      description: "Transline Technologies has successfully passed the rigorous annual audit to renew our ISO 27001 certification, underscoring our unwavering commitment to data security and enterprise-grade safety.",
      icon: <FileText className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />,
      colorClass: "from-emerald-500 hover:via-green-500",
      glowClass: "bg-emerald-500/10 group-hover:bg-emerald-500/30",
      borderClass: "group-hover:border-emerald-500/50"
    }
  ];

  const filteredCirculars = activeFilter === "All" 
    ? circulars 
    : circulars.filter(c => c.type === activeFilter);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white selection:bg-white/30">
      {/* Background Image - Bridge (fixed so it stays while scrolling) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="/images/bridge.png"
          alt="Background"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />

        {/* Header Section */}
        <div className="pt-40 pb-20 px-6 lg:px-12 max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col items-center md:items-start text-center md:text-left mb-16">
            <div className="inline-flex items-center gap-3 text-sm font-mono text-cyan-300 mb-6 uppercase tracking-wider bg-cyan-950/40 border border-cyan-500/30 px-4 py-2 rounded-full">
              <Bell className="w-4 h-4" />
              <span>Official Communications</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-semibold text-white mb-6 drop-shadow-2xl">
              Circulars & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Notifications</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              Stay informed with the latest announcements, compliance mandates, software releases, and essential operational updates from Gaak.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 bg-white/[0.02] border border-white/5 p-4 rounded-3xl backdrop-blur-md">
            <div className="flex items-center gap-3 text-white/50 w-full md:w-auto px-4">
              <Filter className="w-5 h-5" />
              <span className="font-mono text-sm uppercase tracking-widest">Filter By</span>
            </div>
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase transition-all duration-300 ${
                    activeFilter === filter 
                    ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Circulars Feed */}
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

            <div className="space-y-8">
              {filteredCirculars.map((circular) => (
                <div key={circular.id} className="relative flex flex-col md:flex-row gap-8 items-start group">
                  {/* Timeline Dot (Desktop only) */}
                  <div className="hidden md:flex relative z-10 mt-8 w-16 h-16 rounded-full bg-[#050505] border border-white/10 items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-xl overflow-hidden">
                    <div className={`absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${circular.colorClass}`} />
                    <div className="relative z-10 w-12 h-12 rounded-full bg-[#050505] flex items-center justify-center">
                       {circular.icon}
                    </div>
                  </div>

                  {/* Card Container */}
                  <div className={`relative w-full rounded-[2.5rem] p-[1px] overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:to-transparent transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl`}>
                    {/* Hover Border Gradient injection via a pseudo-element style setup */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${circular.colorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                    
                    <div className="relative h-full bg-[#050505] rounded-[2.5rem] p-8 md:p-10 flex flex-col overflow-hidden">
                      {/* Subtle Glow */}
                      <div className={`absolute top-0 right-0 w-64 h-64 blur-[80px] rounded-full transition-colors duration-1000 ${circular.glowClass}`} />
                      
                      <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 mb-6">
                        <div className="flex items-center gap-3">
                          <div className="md:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                            {circular.icon}
                          </div>
                          <span className={`px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase font-bold border ${circular.borderClass} transition-colors bg-white/5 text-white/70 group-hover:text-white`}>
                            {circular.type}
                          </span>
                        </div>
                        <span className="text-white/40 font-mono text-xs tracking-wider uppercase md:ml-auto">
                          {circular.date}
                        </span>
                      </div>

                      <h3 className="relative z-10 text-2xl md:text-3xl font-display font-medium text-white/90 mb-4 group-hover:text-white transition-colors">
                        {circular.title}
                      </h3>
                      
                      <p className="relative z-10 text-white/50 text-base leading-relaxed font-light mb-8 group-hover:text-white/70 transition-colors">
                        {circular.description}
                      </p>

                      <div className="relative z-10 mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                        <button className="flex items-center gap-2 text-sm font-mono tracking-wider text-white/40 hover:text-white uppercase transition-colors group/btn">
                          <span>Read Full Details</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                        
                        <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group-hover:border-white/20">
                           <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {filteredCirculars.length === 0 && (
                <div className="text-center py-20 text-white/40 font-mono text-sm tracking-widest uppercase border border-white/5 rounded-3xl bg-white/[0.02]">
                  No {activeFilter} circulars found.
                </div>
              )}
            </div>
            
            <div className="flex justify-center mt-12">
               <button className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white hover:text-black hover:scale-105 transition-all text-sm font-mono tracking-wider uppercase">
                  Load Older Communications
               </button>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <FooterSection />
        </div>
      </div>
    </main>
  );
}
