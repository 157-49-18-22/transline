"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products & Solutions", href: "/solutions" },
  { name: "Circulars/Notification", href: "/circulars" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 w-full ${isScrolled ? "top-2 px-4 md:top-4 md:px-0" : "top-0 px-0"}`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${isScrolled || isMobileMenuOpen
          ? "bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-2xl md:max-w-[1200px]"
          : "bg-transparent md:max-w-[1400px]"
          }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-4 md:px-6 lg:px-8 ${isScrolled ? "h-14 md:h-16" : "h-16 md:h-20"}`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center group relative z-50">
            <div className={`relative transition-all duration-500 flex items-center justify-center ${isScrolled ? "px-1 py-1" : "px-2 py-1.5"}`}>
              <Image
                src="/logo.png"
                alt="Gaak Technologies Logo"
                width={320}
                height={90}
                className={`object-contain transition-all duration-500 ${isScrolled ? "h-6 md:h-7 w-auto" : "h-8 md:h-9 w-auto"}`}
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors duration-300 relative group text-white/70 hover:text-white"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full bg-blue-500 rounded-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="/contact">
              <Button
                size="sm"
                className={`rounded-full transition-all duration-500 font-medium ${isScrolled ? "bg-blue-600 hover:bg-blue-700 text-white px-5 h-9" : "bg-white hover:bg-gray-100 text-black px-6 h-10"}`}
              >
                Get Demo
              </Button>
            </a>
          </div>

          {/* Stylish Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 active:scale-95 transition-all text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-4">
              <span className={`absolute left-0 w-full h-[2px] bg-current rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "top-2 rotate-45" : "top-0 rotate-0"}`} />
              <span className={`absolute left-0 w-full h-[2px] bg-current rounded-full transition-all duration-300 ease-in-out top-1.5 ${isMobileMenuOpen ? "opacity-0 translate-x-2" : "opacity-100 translate-x-0"}`} />
              <span className={`absolute left-0 w-full h-[2px] bg-current rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "top-2 -rotate-45" : "top-3 rotate-0"}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Side Drawer Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-700 ease-[0.22,1,0.36,1] ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        {/* Backdrop - Click to close */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-700 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Right Side Drawer Panel */}
        <div className={`absolute top-0 right-0 bottom-0 w-[75vw] sm:w-[50vw] bg-black/95 backdrop-blur-3xl border-l border-white/10 shadow-2xl transition-transform duration-700 ease-[0.22,1,0.36,1] ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          {/* Animated Background Gradients inside Drawer */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute top-0 right-0 w-[80vw] h-[80vw] bg-blue-600/20 rounded-full blur-[100px] transition-transform duration-1000 ${isMobileMenuOpen ? "translate-x-1/4 -translate-y-1/4 scale-100" : "translate-x-full -translate-y-full scale-50"}`} />
            <div className={`absolute bottom-0 left-0 w-[90vw] h-[90vw] bg-purple-600/10 rounded-full blur-[100px] transition-transform duration-1000 delay-100 ${isMobileMenuOpen ? "-translate-x-1/4 translate-y-1/4 scale-100" : "-translate-x-full translate-y-full scale-50"}`} />
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grid-3x3-light-0RkE6J0yT2hW3VZQJ3sVwW8Z8w8Z8w.png')] bg-repeat opacity-[0.03]" />
          </div>

          <div className="relative h-full flex flex-col px-6 pt-24 pb-8 overflow-y-auto">
            {/* Explicit Close Button inside Drawer */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:rotate-90 transition-all focus:outline-none z-50"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 L6 18" />
                <path d="M6 6 L18 18" />
              </svg>
            </button>

            {/* Menu Items Container */}
            <div className="flex-1 flex flex-col gap-6 w-full max-w-sm justify-center mt-4">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`group relative flex items-center justify-between text-2xl sm:text-3xl font-display font-medium text-white/70 hover:text-white transition-all duration-500 ease-[0.22,1,0.36,1] ${
                    isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: isMobileMenuOpen ? `${200 + (i * 50)}ms` : "0ms" }}
                >
                  <span>{link.name}</span>
                  <span className="w-6 h-[1px] bg-white/20 group-hover:bg-blue-500 transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className={`mt-auto pt-8 border-t border-white/10 w-full max-w-sm transition-all duration-700 ease-[0.22,1,0.36,1] ${
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
              style={{ transitionDelay: isMobileMenuOpen ? "400ms" : "0ms" }}
            >
              <p className="text-white/40 text-xs mb-4 font-mono uppercase tracking-wider">Unlock Your Potential</p>
              <a href="/contact" className="w-full block">
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-xl shadow-blue-500/20 border border-blue-400/20 rounded-xl h-12 text-sm font-medium transition-all group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Demo
                  <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

