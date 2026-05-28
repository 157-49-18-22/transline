"use client";
import React, { useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  FileText, 
  Phone, 
  Mail,
  Building,
  Send,
  MessageSquare
} from "lucide-react";

export default function ContactPage() {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const ContactCard = ({ icon: Icon, title, content, subContent }: any) => (
    <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 flex items-start gap-4">
        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 rounded-xl border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-6 h-6 text-blue-300" />
        </div>
        <div>
          <h4 className="text-white/90 font-medium tracking-wide mb-1">{title}</h4>
          <div className="text-white/60 text-sm leading-relaxed">{content}</div>
          {subContent && <div className="mt-2 pt-2 border-t border-white/10">{subContent}</div>}
        </div>
      </div>
    </div>
  );

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#030303] text-white selection:bg-blue-500/30">
      
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2813%29-OQ2DiR3ElVsUg8kTvTL1kC5A3Q6maM.png"
          alt="Contact Background"
          className="w-full h-full object-cover object-center opacity-70 scale-110"
        />
        {/* Subtle gradients to ensure text remains readable without blurring */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      </div>

      <div className="relative z-10">
        <Navigation />

        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-24">
            <h1 className="text-5xl lg:text-7xl font-display font-semibold text-white mb-6 tracking-tight drop-shadow-2xl">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Connect</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column - Contact Info & Map */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <MessageSquare className="w-32 h-32" />
                </div>
                
                <h3 className="text-2xl font-display text-white mb-8 relative z-10">Contact Information</h3>
                
                <div className="space-y-4 relative z-10">
                  <ContactCard 
                    icon={MapPin}
                    title="Corporate Office"
                    content={<>23-A Shivaji Marg, Third Floor,<br/>New Delhi 110015, India</>}
                    subContent={
                      <div className="flex gap-4">
                        <span className="text-[10px] uppercase tracking-wider text-white/50"><strong className="text-white/80">CIN:</strong> U72900DL2001PLC109496</span>
                        <span className="text-[10px] uppercase tracking-wider text-white/50"><strong className="text-white/80">GST:</strong> 07AABCT3687J1ZY</span>
                      </div>
                    }
                  />
                  <ContactCard 
                    icon={Phone}
                    title="Phone Numbers"
                    content={
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between w-full">
                          <a href="tel:+911141500342" className="hover:text-blue-400 transition">+91 11-41500342</a>
                          <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full">HQ</span>
                        </div>
                        <div className="flex justify-between w-full">
                          <a href="tel:8080803988" className="hover:text-purple-400 transition">808 080 3988</a>
                          <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full">SUPPORT</span>
                        </div>
                      </div>
                    }
                  />
                  <ContactCard 
                    icon={Mail}
                    title="Email Addresses"
                    content={
                      <div className="flex flex-col gap-2">
                        <a href="mailto:investor.relation@translineindia.com" className="hover:text-blue-400 transition truncate">investor.relation@translineindia.com</a>
                        <a href="mailto:support@translineindia.com" className="hover:text-purple-400 transition truncate">support@translineindia.com</a>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
            
            {/* Right Column - Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#0a0a0c]/80 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 lg:p-14 shadow-2xl relative">
                {/* Form decorative elements */}
                <div className="absolute top-0 right-10 w-32 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                <div className="absolute bottom-0 left-10 w-32 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                
                <h3 className="text-3xl font-display font-medium text-white mb-2">Send us a Message</h3>
                <p className="text-white/50 mb-10 font-light">Join forces with our team to create something amazing.</p>
                
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Floating Label Inputs */}
                    <div className="relative group">
                      <input 
                        type="text" 
                        id="name"
                        className="w-full bg-transparent border-b-2 border-white/10 px-0 py-3 text-white focus:outline-none focus:border-blue-500 transition-all peer placeholder-transparent"
                        placeholder="Name"
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                      />
                      <label htmlFor="name" className="absolute left-0 -top-3.5 text-blue-400 text-xs font-semibold uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-focus:-top-3.5 peer-focus:text-blue-400 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-wider">Full Name</label>
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${focusedField === 'name' ? 'w-full' : 'w-0'}`} />
                    </div>

                    <div className="relative group">
                      <input 
                        type="tel" 
                        id="phone"
                        className="w-full bg-transparent border-b-2 border-white/10 px-0 py-3 text-white focus:outline-none focus:border-purple-500 transition-all peer placeholder-transparent"
                        placeholder="Phone"
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                      />
                      <label htmlFor="phone" className="absolute left-0 -top-3.5 text-purple-400 text-xs font-semibold uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-focus:-top-3.5 peer-focus:text-purple-400 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-wider">Phone Number</label>
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-purple-500 transition-all duration-300 ${focusedField === 'phone' ? 'w-full' : 'w-0'}`} />
                    </div>
                  </div>

                  <div className="relative group pt-4">
                    <input 
                      type="email" 
                      id="email"
                      className="w-full bg-transparent border-b-2 border-white/10 px-0 py-3 text-white focus:outline-none focus:border-pink-500 transition-all peer placeholder-transparent"
                      placeholder="Email"
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <label htmlFor="email" className="absolute left-0 top-0.5 text-pink-400 text-xs font-semibold uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-7 peer-placeholder-shown:normal-case peer-focus:top-0.5 peer-focus:text-pink-400 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-wider">Email Address</label>
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-pink-500 transition-all duration-300 ${focusedField === 'email' ? 'w-full' : 'w-0'}`} />
                  </div>

                  <div className="relative group pt-4">
                    <input 
                      type="text" 
                      id="subject"
                      className="w-full bg-transparent border-b-2 border-white/10 px-0 py-3 text-white focus:outline-none focus:border-teal-500 transition-all peer placeholder-transparent"
                      placeholder="Subject"
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <label htmlFor="subject" className="absolute left-0 top-0.5 text-teal-400 text-xs font-semibold uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-7 peer-placeholder-shown:normal-case peer-focus:top-0.5 peer-focus:text-teal-400 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-wider">Subject</label>
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-teal-500 transition-all duration-300 ${focusedField === 'subject' ? 'w-full' : 'w-0'}`} />
                  </div>

                  <div className="relative group pt-4">
                    <textarea 
                      id="message"
                      rows={4}
                      className="w-full bg-transparent border-b-2 border-white/10 px-0 py-3 text-white focus:outline-none focus:border-blue-500 transition-all peer placeholder-transparent resize-none"
                      placeholder="Message"
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <label htmlFor="message" className="absolute left-0 top-0.5 text-blue-400 text-xs font-semibold uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-7 peer-placeholder-shown:normal-case peer-focus:top-0.5 peer-focus:text-blue-400 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-wider">Your Message</label>
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${focusedField === 'message' ? 'w-full' : 'w-0'}`} />
                  </div>

                  <div className="pt-8">
                    <Button type="button" size="lg" className="w-full rounded-2xl bg-white text-black hover:bg-white/90 h-16 text-lg font-semibold tracking-wide flex items-center justify-center gap-3 group relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-1">
                      <span className="relative z-10 flex items-center gap-2">
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </span>
                      {/* Button shine effect */}
                      <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            
          </div>
        </section>

        {/* Map Section */}
        <section className="relative pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl lg:text-5xl font-display font-semibold text-white mb-4 drop-shadow-md">Find Us Here</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </div>
          <div className="w-full h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative group">
            <div className="absolute inset-0 bg-blue-500/5 pointer-events-none group-hover:bg-transparent transition-colors duration-700 z-10" />
            <iframe 
              src="https://maps.google.com/maps?q=Omaxe%20World%20Street,%20Sector%2079,%20Faridabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(100%) invert(100%) contrast(1.2) hue-rotate(180deg) opacity(0.85)" }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="scale-[1.02] group-hover:scale-100 transition-transform duration-1000"
            ></iframe>
          </div>
        </section>

        <FooterSection />
      </div>
    </main>
  );
}
