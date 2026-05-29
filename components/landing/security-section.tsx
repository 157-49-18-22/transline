"use client";

import { useEffect, useState, useRef } from "react";

const milestones = [
  {
    year: "2008",
    position: "top",
    title: "Biometric Attendance System",
    description: "Received work order for biometric attendance system for a state municipal department, covering 150,000 employees across indoor and outdoor environments.",
  },
  {
    year: "2011",
    position: "bottom",
    title: "Aadhaar Enrolment Agency",
    description: "Executed a contract for the supply of Aadhaar kits for a state nodal agency and generated more than 5.8 million Aadhaar IDs as an enrolment agency.",
  },
  {
    year: "2015",
    position: "top",
    title: "ICT for Schools",
    description: "Deployed information and communication technology project for 204 schools in Srikakulam, Andhra Pradesh.",
  },
  {
    year: "2017",
    position: "bottom",
    title: "Judiciary Biometrics",
    description: "Executed a project for a biometric attendance system for one of the state judiciaries.",
  },
  {
    year: "2019",
    position: "top",
    title: "Pan-India Aadhaar Kits",
    description: "Supplied Aadhaar enrolment kits to major public and private sector banks, postal circles and education departments across various states.",
  },
  {
    year: "2023",
    position: "bottom",
    title: "20,000 CCTV Cameras",
    description: "Installation and commissioning of 20,000 CCTV Cameras at a state public works department.",
  },
  {
    year: "2024",
    position: "top",
    title: "Aadhaar-Enabled Biometrics",
    description: "Received order to develop Aadhaar-enabled biometric attendance systems for a state public sector undertaking.",
  },
  {
    year: "2025",
    position: "bottom",
    title: "Delhi Police Surveillance",
    description: "Installation and commissioning of 1,720 CCTV Cameras at 11 police stations across Delhi.",
  },
];

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMilestone, setActiveMilestone] = useState<number | null>(null);
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
    <section id="milestones" ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden bg-[oklch(0.09_0.01_260)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="mb-20">
          <span className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <span className="w-12 h-px bg-foreground/20" />
            Our Journey
          </span>

          <h2 className={`text-6xl md:text-7xl lg:text-[110px] font-display tracking-tight leading-[0.9] mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Major Events
            <br />
            <span className="text-muted-foreground">& Milestones.</span>
          </h2>
          
          <p className={`text-xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            25+ years of landmark achievements across surveillance, biometrics, and smart city initiatives across India.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className={`hidden lg:block relative transition-all duration-1000 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="grid grid-cols-8 gap-0 mb-0">
            {milestones.map((m, i) => (
              <div key={m.year + "-top"} className={`relative min-h-[200px] px-2 ${m.position === "top" ? "flex flex-col justify-end pb-4" : ""}`}>
                {m.position === "top" && (
                  <div
                    className={`cursor-pointer transition-all duration-300 ${activeMilestone === i ? "opacity-100" : "opacity-80 hover:opacity-100"}`}
                    onClick={() => setActiveMilestone(activeMilestone === i ? null : i)}
                  >
                    <p className={`text-xs text-muted-foreground leading-snug mb-3 transition-all duration-300 ${activeMilestone === i ? "text-foreground" : ""}`}>
                      {m.description}
                    </p>
                    <span className={`text-base font-display font-bold transition-colors duration-300 ${activeMilestone === i ? "text-primary" : "text-primary/80"}`}>
                      {m.year}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="relative flex items-center">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-foreground/10 -translate-y-1/2" />
            <div
              className="absolute top-1/2 left-0 h-px bg-primary/60 -translate-y-1/2 transition-all duration-1000"
              style={{ width: isVisible ? "100%" : "0%" }}
            />
            <div className="grid grid-cols-8 gap-0 w-full relative z-10">
              {milestones.map((m, i) => (
                <div key={m.year + "-dot"} className="flex items-center justify-center py-4">
                  <button
                    onClick={() => setActiveMilestone(activeMilestone === i ? null : i)}
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-300 hover:scale-125 ${
                      activeMilestone === i
                        ? "border-primary bg-primary scale-125"
                        : "border-primary/60 bg-black hover:border-primary"
                    }`}
                    aria-label={m.year}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-8 gap-0 mt-0">
            {milestones.map((m, i) => (
              <div key={m.year + "-bot"} className={`relative min-h-[200px] px-2 ${m.position === "bottom" ? "flex flex-col justify-start pt-4" : ""}`}>
                {m.position === "bottom" && (
                  <div
                    className={`cursor-pointer transition-all duration-300 ${activeMilestone === i ? "opacity-100" : "opacity-80 hover:opacity-100"}`}
                    onClick={() => setActiveMilestone(activeMilestone === i ? null : i)}
                  >
                    <span className={`text-base font-display font-bold mb-3 block transition-colors duration-300 ${activeMilestone === i ? "text-primary" : "text-primary/80"}`}>
                      {m.year}
                    </span>
                    <p className={`text-xs text-muted-foreground leading-snug transition-all duration-300 ${activeMilestone === i ? "text-foreground" : ""}`}>
                      {m.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {activeMilestone !== null && (
            <div className={`mt-12 p-8 border border-primary/30 bg-primary/5 transition-all duration-500`}>
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <span className="text-5xl font-display text-primary">{milestones[activeMilestone].year}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{milestones[activeMilestone].title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestones[activeMilestone].description}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className={`block lg:hidden relative ml-2 py-4 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute left-[7px] top-4 bottom-8 w-px bg-foreground/10" />
          <div 
            className="absolute left-[7px] top-4 w-px bg-primary/60 transition-all duration-1000"
            style={{ height: isVisible ? "90%" : "0%" }}
          />
          
          {milestones.map((m, i) => (
            <div key={m.year + "-mobile"} className="mb-10 relative pl-8">
              <button 
                onClick={() => setActiveMilestone(activeMilestone === i ? null : i)}
                className={`absolute -left-0 top-1 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  activeMilestone === i
                    ? "border-primary bg-primary scale-125"
                    : "border-primary/60 bg-black hover:border-primary"
                }`}
                aria-label={m.year}
              />
              
              <div 
                className="cursor-pointer" 
                onClick={() => setActiveMilestone(activeMilestone === i ? null : i)}
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className={`text-2xl font-display font-bold transition-colors duration-300 ${activeMilestone === i ? "text-primary" : "text-primary/80"}`}>
                    {m.year}
                  </span>
                  {!activeMilestone || activeMilestone !== i ? (
                    <span className="text-sm font-medium text-foreground/80 truncate">
                      {m.title}
                    </span>
                  ) : null}
                </div>
                
                {activeMilestone === i ? (
                  <div className="bg-primary/5 border border-primary/20 p-5 rounded-2xl mt-4">
                     <h3 className="text-lg font-semibold text-foreground mb-2">{m.title}</h3>
                     <p className="text-sm text-muted-foreground leading-relaxed">{m.description}</p>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground leading-snug line-clamp-2 pr-4">
                    {m.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
