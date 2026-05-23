"use client";

import { useEffect, useState, useRef } from "react";
import { Building, Users, FlaskConical, TrendingUp, Handshake } from "lucide-react";

const strengths = [
  {
    title: "Established Operations",
    description: "Established operations in fast-growing video surveillance, biometrics, and IoT markets",
    Icon: Building,
  },
  {
    title: "Diversified Customer Base",
    description: "Diverse customer base across multiple end-use sectors",
    Icon: Users,
  },
  {
    title: "In-house R&D Capabilities",
    description: "Demonstrated in-house R&D capabilities with proprietary technology solutions",
    Icon: FlaskConical,
  },
  {
    title: "Robust Financial Performance",
    description: "Robust financial performance supported by cash flows and access to capital",
    Icon: TrendingUp,
  },
  {
    title: "Strong Vendor Relations",
    description: "Strong vendor relationships with reliable sourcing network",
    Icon: Handshake,
  }
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="strengths" ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header with Globe */}
        <div className="mb-20">
          <span className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <span className="w-12 h-px bg-foreground/20" />
            Our Strengths
          </span>
          
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-stretch">
            {/* Image globe — left column, full height */}
            <div className={`w-48 lg:w-72 xl:w-80 shrink-0 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/world-3i68QNWJwmO7W19ztZWbevAwJQHzYL.png"
                alt="Global network sphere"
                className="w-full h-full object-contain object-center"
              />
            </div>

            {/* Title & Description stacked */}
            <div className="flex flex-col justify-center">
              <h2 className={`text-6xl md:text-7xl lg:text-[110px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}>
                Our
                <br />
                <span className="text-muted-foreground">Strengths.</span>
              </h2>

              <p className={`mt-8 text-xl text-muted-foreground leading-relaxed max-w-lg transition-all duration-1000 delay-100 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}>
                Inspiring Innovation, Trust, and Impact driving secure and scalable solutions for a modern future.
              </p>
            </div>
          </div>
        </div>

        {/* 5 Strengths Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {strengths.map((item, index) => (
            <div
              key={item.title}
              className={`group relative p-8 border border-foreground/10 bg-foreground/[0.02] overflow-hidden transition-all duration-700 flex flex-col items-center text-center hover:bg-foreground/[0.04] hover:border-foreground/30 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <item.Icon className="w-7 h-7 text-primary group-hover:text-blue-400 transition-colors duration-300" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-display text-xl mb-4 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {/* Animated Bottom Pink Indicator Line matching previous aesthetics */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#eca8d6] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
