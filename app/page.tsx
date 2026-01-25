"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    phone: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch("https://convex-actions.byldr.co/upgrade-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setStatus("success");
        setMessage("Got it! I'll create your mockup and send it to your email within 24-48 hours.");
        setFormData({ name: "", email: "", website: "", phone: "" });
      } else if (data.error === "daily_limit") {
        setStatus("error");
        setMessage("We've reached our daily limit of 15 mockups! Try again tomorrow.");
      } else if (data.error === "domain_exists") {
        setStatus("error");
        setMessage("We've already created a mockup for this website. Check your email!");
      } else {
        throw new Error(data.message || "Failed to submit");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Something went wrong. Try emailing me directly at ryan@byldr.co");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Message */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-slate-300 text-sm mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Free mockup, no obligation
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Your website could be <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">so much better</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                If you&apos;re here, it&apos;s because I found your business online and think 
                your website deserves an upgrade. Let me build you a free mockup — 
                no strings attached.
              </p>

              <div className="hidden lg:block">
                <div className="flex items-center gap-4 text-slate-400">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">R</div>
                  </div>
                  <div className="text-sm">
                    <span className="text-white font-medium">Ryan Cwynar</span>
                    <br />Web Developer · ryan@byldr.co
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <h2 className="text-2xl font-bold text-white mb-2">Upgrade My Website</h2>
                <p className="text-slate-400 mb-6">I&apos;ll send you a custom mockup within 48 hours</p>
                
                {status === "success" ? (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-6 text-center">
                    <div className="text-4xl mb-4">✅</div>
                    <p className="text-green-300">{message}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@business.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Current Website</label>
                      <input
                        type="url"
                        required
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://yourbusiness.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Phone (optional)</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-400 text-sm">{message}</p>
                    )}
                    
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Get My Free Mockup →"
                      )}
                    </button>
                    
                    <p className="text-slate-500 text-xs text-center">
                      No payment required. I&apos;ll build your mockup first.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Simple process. No commitment until you love what you see.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">1️⃣</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Submit Your Site</h3>
              <p className="text-slate-400 text-sm">
                Fill out the form with your current website URL
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">2️⃣</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">I Build a Mockup</h3>
              <p className="text-slate-400 text-sm">
                Custom design using your content and branding
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">3️⃣</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Review & Decide</h3>
              <p className="text-slate-400 text-sm">
                Check your email for the mockup link
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">4️⃣</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Go Live for $200</h3>
              <p className="text-slate-400 text-sm">
                Love it? One payment and it&apos;s yours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Just $200
                </h2>
                <p className="text-slate-300 mb-6">
                  One-time payment. No subscriptions. You own everything.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-slate-300">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom modern design
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Mobile responsive
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Fast loading
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Full source code
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-white mb-2">$200</div>
                <p className="text-slate-400 mb-6">one-time</p>
                <a 
                  href="#"
                  onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="inline-block bg-white text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition"
                >
                  Get Started Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400">© 2026 Ryan Cwynar</p>
          <div className="flex gap-6">
            <a href="mailto:ryan@byldr.co" className="text-slate-400 hover:text-white transition">
              ryan@byldr.co
            </a>
            <a href="https://byldr.co" className="text-slate-400 hover:text-white transition">
              byldr.co
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
