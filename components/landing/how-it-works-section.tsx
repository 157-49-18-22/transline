"use client";

import { useEffect, useRef, useState } from "react";
import { Factory, Landmark, Flame, Truck, Train, ShoppingCart, Building2, GraduationCap, Mail, Pickaxe, ShieldAlert, Shield } from "lucide-react";

const industries = [
  { name: "Manufacturing", Icon: Factory },
  { name: "Banking & Financial Services", Icon: Landmark },
  { name: "Oil & Gas", Icon: Flame },
  { name: "Logistics", Icon: Truck },
  { name: "Railways", Icon: Train },
  { name: "Retail", Icon: ShoppingCart },
  { name: "Smart Cities", Icon: Building2 },
  { name: "Education", Icon: GraduationCap },
  { name: "Postal Department", Icon: Mail },
  { name: "Coal Department", Icon: Pickaxe },
  { name: "Prison Department", Icon: ShieldAlert },
  { name: "Police Department", Icon: Shield },
];

export function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section
      id="industries"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[oklch(0.09_0.01_260)] text-white overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header — titre + image cerisier */}
        <div className="relative mb-0 lg:mb-0 grid lg:grid-cols-2 gap-4 lg:gap-12 items-end">
          {/* Titre colonne gauche */}
          <div className="overflow-hidden pb-0 lg:pb-32">
            <div className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}>
              <span className="inline-flex items-center gap-3 text-sm font-mono text-white/40 mb-8">
                <span className="w-12 h-px bg-white/20" />
                Industries We Serve
              </span>
            </div>
            
            <h2 className={`text-6xl md:text-7xl lg:text-[100px] font-display tracking-tight leading-[0.85] transition-all duration-1000 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            }`}>
              <span className="block">Secure.</span>
              <span className="block text-white/30">Scalable.</span>
              <span className="block text-white/10">Solutions.</span>
            </h2>
          </div>

          {/* Image cerisier — se colle en bas sur les blocs */}
          <div className={`relative h-[320px] lg:h-[640px] overflow-hidden transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tree-uAia6REvB137CQyHFCf0za3O6h2zKO.png"
              alt=""
              aria-hidden="true"
              className="absolute bottom-0 left-0 w-full h-full object-contain object-bottom"
            />
            {/* Fade sur le bord gauche */}
            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.09_0.01_260)] via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* 12 Industries Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => {
            const delay = 300 + index * 50;
            return (
              <div
                key={industry.name}
                className={`group relative text-center p-6 lg:p-8 bg-[#000000] border border-white/10 transition-all duration-500 hover:border-white/40 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                {/* Icon */}
                <div className="mx-auto w-12 h-12 mb-4 flex items-center justify-center text-white/40 group-hover:text-[#eca8d6] transition-colors duration-300 group-hover:scale-110">
                  <industry.Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-sm font-display leading-snug">
                  {industry.name}
                </h3>

                {/* Hover indicator (bottom line) */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#eca8d6] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
