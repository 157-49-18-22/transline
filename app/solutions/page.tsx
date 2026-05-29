"use client";
import React from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { 
  Video, 
  BrainCircuit, 
  Building, 
  Fingerprint, 
  Server, 
  Cctv, 
  Store, 
  Camera, 
  Network, 
  Contact, 
  ClipboardList, 
  LifeBuoy, 
  Wrench 
} from "lucide-react";

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Video Surveillance",
      subtitle: "REAL-TIME MONITORING",
      description: "We offer a suite of AI-based video surveillance solutions aimed at enhancing security, operational efficiency, and data insights.",
      icon: <Video className="w-8 h-8 text-blue-300 group-hover:text-white transition-colors" />,
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80"
    },
    {
      title: "AI & Storage",
      subtitle: "AI-DRIVEN TOOLS",
      description: "We offer customers AI-driven tools for real-time surveillance and operational optimization.",
      icon: <BrainCircuit className="w-8 h-8 text-blue-300 group-hover:text-white transition-colors" />,
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80"
    },
    {
      title: "Smart Cities IoT",
      subtitle: "IOT-ENABLED SOLUTIONS",
      description: "We support various initiatives through IoT-enabled solutions that include traffic monitoring and people counting.",
      icon: <Building className="w-8 h-8 text-blue-300 group-hover:text-white transition-colors" />,
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80"
    },
    {
      title: "Biometric Solutions",
      subtitle: "ENROLMENT & AUTHENTICATION",
      description: "We offer a range of biometric solutions that include biometric enrolment and authentication systems",
      icon: <Fingerprint className="w-8 h-8 text-blue-300 group-hover:text-white transition-colors" />,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
    },
    {
      title: "IT Infrastructure",
      subtitle: "IT SERVICES",
      description: "We offer our customers a comprehensive suite of IT services ranging from designing and deploying communication infrastructure.",
      icon: <Server className="w-8 h-8 text-blue-300 group-hover:text-white transition-colors" />,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
    },
    {
      title: "E-Surveillance",
      subtitle: "ADVANCED VIDEO ANALYTICS",
      description: "We offer e-surveillance solutions that are designed to enhance security across diverse environments.",
      icon: <Cctv className="w-8 h-8 text-blue-300 group-hover:text-white transition-colors" />,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
    }
  ];

  const products = [
    {
      title: "StorePulse",
      subtitle: "AI VIDEO ANALYTICS",
      description: "Our StorePulse software is an AI-powered video analytics tool that integrates with CCTV systems to cater to unique operational needs.",
      icon: <Store className="w-8 h-8 text-purple-300 group-hover:text-white transition-colors" />,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80"
    },
    {
      title: "CamStore",
      subtitle: "VIDEO DATA OPTIMIZATION",
      description: "Our CamStore is a real time video compression tool designed specifically for CCTV remote storage environments.",
      icon: <Camera className="w-8 h-8 text-purple-300 group-hover:text-white transition-colors" />,
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80"
    },
    {
      title: "CheckCam",
      subtitle: "NETWORK HEALTH MONITORING",
      description: "Our CheckCam software is a CCTV network health monitoring system designed to optimize and safeguard surveillance infrastructure.",
      icon: <Network className="w-8 h-8 text-purple-300 group-hover:text-white transition-colors" />,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
    },
    {
      title: "Id1",
      subtitle: "ATTENDANCE SOLUTION",
      description: "Our ID1 software provides a secure, contactless centralized attendance solution integrated with multiple biometric modalities.",
      icon: <Contact className="w-8 h-8 text-purple-300 group-hover:text-white transition-colors" />,
      image: "https://images.unsplash.com/photo-1533727785465-926f9661f0ce?auto=format&fit=crop&q=80"
    }
  ];

  const services = [
    {
      title: "Project Management",
      subtitle: "IT & COMMUNICATIONS",
      description: "We intend to plan and execute IT and communications project assignments and according to our customers' guidelines.",
      icon: <ClipboardList className="w-8 h-8 text-emerald-300 group-hover:text-white transition-colors" />,
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80"
    },
    {
      title: "Support Services",
      subtitle: "END-TO-END SUPPORT",
      description: "We offer end-to-end support services that streamline technology and maintenance.",
      icon: <LifeBuoy className="w-8 h-8 text-emerald-300 group-hover:text-white transition-colors" />,
      image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80"
    },
    {
      title: "Managed Services",
      subtitle: "ONSITE OPERATIONAL SUPPORT",
      description: "We offer our customers IT managed services where we provide technical manpower and offer annual maintenance services.",
      icon: <Wrench className="w-8 h-8 text-emerald-300 group-hover:text-white transition-colors" />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <>
      {/* Background Image */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-black">
        <img 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/connection-KeJwWPQvn6l0a7C48tCARYtNEdC92H.png" 
          alt="Hands Connection Background" 
          className="w-full h-full object-cover object-center opacity-40 saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>

      <main className="relative min-h-screen overflow-x-hidden text-white selection:bg-white/30 w-full">

      <div className="relative z-10">
        <Navigation />

        {/* Main Header */}
        <div className="relative pt-40 pb-16 lg:pt-52 lg:pb-24 px-6 lg:px-12 text-center max-w-[1400px] mx-auto z-10">
          <div className="inline-flex items-center gap-3 text-sm font-mono text-blue-300 mb-6 uppercase tracking-wider backdrop-blur-md bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Empowering Industries
          </div>
          <h1 className="text-5xl lg:text-[6rem] leading-[1.1] font-display font-semibold tracking-tight text-white mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Products & Solutions
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Cutting-edge surveillance, advanced analytics, and robust IT solutions engineered for the future.
          </p>
        </div>

        {/* Our Solutions Section */}
        <section className="relative py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-4xl lg:text-6xl font-display font-semibold text-white mb-6 drop-shadow-md">Our Solutions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.5)]" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, idx) => (
              <div key={idx} className="group relative rounded-[2.5rem] p-[1.5px] overflow-hidden bg-gradient-to-b from-white/10 to-white/0 hover:from-cyan-500 hover:via-blue-500 hover:to-transparent transition-all duration-700 shadow-2xl hover:shadow-[0_0_80px_rgba(6,182,212,0.15)] hover:-translate-y-2">
                <div className="relative h-full bg-[#050505] rounded-[2.5rem] p-10 flex flex-col overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 saturate-100 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                  
                  {/* Subtle Background Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full group-hover:bg-cyan-500/30 transition-colors duration-1000 z-0" />
                  
                  {/* Icon Container */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-10 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 group-hover:scale-110 transition-all duration-500 backdrop-blur-md">
                    <div className="text-white/80 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-500">
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Typography */}
                  <div className="relative z-10 flex flex-col flex-grow">
                    <h3 className="text-2xl font-display font-medium text-white/90 mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                    <div className="text-[10px] font-mono tracking-[0.2em] text-white/40 mb-6 group-hover:text-cyan-300 transition-colors uppercase font-bold">
                      {item.subtitle}
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed mt-auto group-hover:text-white/90 transition-colors font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Products Section */}
        <section className="relative py-32 px-6 lg:px-12 bg-black/40 border-y border-white/10 backdrop-blur-2xl">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col items-center mb-20 text-center">
              <h2 className="text-4xl lg:text-6xl font-display font-semibold text-white mb-6 drop-shadow-md">Our Products</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-[1100px] mx-auto">
              {products.map((item, idx) => (
                <div key={idx} className="group relative rounded-[2.5rem] p-[1.5px] overflow-hidden bg-gradient-to-b from-white/10 to-white/0 hover:from-purple-500 hover:via-fuchsia-500 hover:to-transparent transition-all duration-700 shadow-2xl hover:shadow-[0_0_80px_rgba(217,70,239,0.15)] hover:-translate-y-2">
                  <div className="relative h-full bg-[#050505] rounded-[2.5rem] p-10 lg:p-12 flex flex-col overflow-hidden">
                    <div className="absolute inset-0 z-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 saturate-100 transition-all duration-1000" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>
                    
                    {/* Subtle Background Elements */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 blur-[80px] rounded-full group-hover:bg-purple-500/30 transition-colors duration-1000 z-0" />
                    
                    {/* Icon Container */}
                    <div className="relative z-10 w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-10 group-hover:bg-purple-500/20 group-hover:border-purple-500/50 group-hover:scale-110 transition-all duration-500 backdrop-blur-md">
                      <div className="text-white/80 group-hover:text-purple-300 scale-125 group-hover:drop-shadow-[0_0_15px_rgba(217,70,239,0.8)] transition-all duration-500">
                        {item.icon}
                      </div>
                    </div>
                    
                    {/* Typography */}
                    <div className="relative z-10 flex flex-col flex-grow">
                      <h3 className="text-3xl font-display font-medium text-white/90 mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                      <div className="text-[10px] font-mono tracking-[0.2em] text-white/40 mb-6 group-hover:text-purple-300 transition-colors uppercase font-bold">
                        {item.subtitle}
                      </div>
                      <p className="text-white/60 text-base leading-relaxed mt-auto group-hover:text-white/90 transition-colors font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="relative py-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-4xl lg:text-6xl font-display font-semibold text-white mb-6 drop-shadow-md">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((item, idx) => (
              <div key={idx} className="group relative rounded-[2.5rem] p-[1.5px] overflow-hidden bg-gradient-to-b from-white/10 to-white/0 hover:from-emerald-500 hover:via-teal-500 hover:to-transparent transition-all duration-700 shadow-2xl hover:shadow-[0_0_80px_rgba(16,185,129,0.15)] hover:-translate-y-2">
                <div className="relative h-full bg-[#050505] rounded-[2.5rem] p-10 flex flex-col overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 saturate-100 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                  
                  {/* Subtle Background Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full group-hover:bg-emerald-500/30 transition-colors duration-1000 z-0" />
                  
                  {/* Icon Container */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-10 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 group-hover:scale-110 transition-all duration-500 backdrop-blur-md">
                    <div className="text-white/80 group-hover:text-emerald-300 group-hover:drop-shadow-[0_0_10px_rgba(52,211,153,0.8)] transition-all duration-500">
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Typography */}
                  <div className="relative z-10 flex flex-col flex-grow">
                    <h3 className="text-2xl font-display font-medium text-white/90 mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                    <div className="text-[10px] font-mono tracking-[0.2em] text-white/40 mb-6 group-hover:text-emerald-300 transition-colors uppercase font-bold">
                      {item.subtitle}
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed mt-auto group-hover:text-white/90 transition-colors font-light">
                      {item.description}
                    </p>
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
