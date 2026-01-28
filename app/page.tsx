"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
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
        setMessage("Got it! I'll build your new site and send the link to your email within 24-48 hours.");
        setFormData({ name: "", email: "", website: "", phone: "" });
      } else if (data.error === "daily_limit") {
        setStatus("error");
        setMessage("We've hit our daily limit! Try again tomorrow.");
      } else if (data.error === "domain_exists") {
        setStatus("error");
        setMessage("We've already built a site for this domain. Check your email!");
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
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-white">Ryan Cwynar</span>
          {/* Desktop nav */}
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="text-slate-400 hover:text-white transition">About</a>
            <a href="#how-it-works" className="text-slate-400 hover:text-white transition">How It Works</a>
            <Link href="/examples" className="text-slate-400 hover:text-white transition">Examples</Link>
            <a href="#get-started" className="text-slate-400 hover:text-white transition">Get Started</a>
          </div>
          {/* Hamburger button - mobile */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-900 border-l border-slate-700 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-slate-400 hover:text-white transition"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-lg text-slate-300 hover:text-white transition">About</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="text-lg text-slate-300 hover:text-white transition">How It Works</a>
            <Link href="/examples" onClick={() => setMenuOpen(false)} className="text-lg text-slate-300 hover:text-white transition">Examples</Link>
            <a href="#get-started" onClick={() => setMenuOpen(false)} className="text-lg text-slate-300 hover:text-white transition">Get Started</a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-slate-300 text-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Free preview — pay only if you want it
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            I Build Better Websites<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">$25 To Go Live</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            If you landed here from a site I built, that&apos;s your website reimagined. 
            The preview is free — if you like it, $25 gets it connected to your domain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#get-started"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition"
            >
              Get Your Free Preview →
            </a>
            <a 
              href="#about"
              className="bg-slate-700/50 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-700 transition border border-slate-600"
            >
              Who Is This Guy?
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 text-center">
              <img 
                src="/profile.png" 
                alt="Ryan Cwynar" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-blue-500/50"
              />
              <h3 className="text-xl font-bold text-white">Ryan Cwynar</h3>
              <p className="text-slate-400">Software Developer</p>
              <div className="flex gap-3 justify-center mt-4">
                <a href="https://github.com/RyanCwynar" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://byldr.co" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </a>
                <a href="mailto:ryan@byldr.co" className="text-slate-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </a>
                <a href="tel:+18777574169" className="text-slate-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </a>
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-4">Hey, I&apos;m Ryan 👋</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  I&apos;m a software developer who builds AI-powered tools and automation systems. 
                  I run <a href="https://byldr.co" className="text-blue-400 hover:underline">Byldr</a>, 
                  where I help businesses modernize their tech.
                </p>
                <p>
                  <strong className="text-white">Why am I building free websites?</strong> Simple: I noticed 
                  a lot of local businesses have outdated websites but don&apos;t know where to start with 
                  a redesign. So I built a system that creates modern sites automatically.
                </p>
                <p>
                  If you&apos;re here because you saw a redesign of your site — that&apos;s my way of 
                  showing you what&apos;s possible. No pressure, no tricks. You can use it or not.
                </p>
                <p className="text-slate-400 text-sm">
                  Based in Colombia 🇨🇴 · Originally from Florida 🌴 · Working with clients worldwide 🌍
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How This Works
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              I use AI + automation to build websites fast. Here&apos;s the process:
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">1. I Find Your Site</h3>
              <p className="text-slate-400 text-sm">
                I search for local businesses that could use a website refresh
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">2. AI Builds a Redesign</h3>
              <p className="text-slate-400 text-sm">
                My system scrapes your content and generates a modern design
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">3. I Reach Out</h3>
              <p className="text-slate-400 text-sm">
                You get an email or text with a link to your new site preview
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">4. You Decide</h3>
              <p className="text-slate-400 text-sm">
                Like it? $25 and it&apos;s yours. Don&apos;t? No worries at all.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">🤔 Why $25?</h3>
            <p className="text-slate-400">
              It covers my time to customize the site to your needs, connect your domain, and handle any 
              revisions. No monthly fees, no hosting costs, no hidden charges. One payment, you own the code.
            </p>
          </div>
        </div>
      </section>

      {/* CTA / Form Section */}
      <section id="get-started" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Get Your Free Redesign</h2>
                <p className="text-slate-400">
                  Submit your current site and I&apos;ll build you something better within 48 hours
                </p>
              </div>
              
              {status === "success" ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <p className="text-green-300">{message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
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
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Your Current Website</label>
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
                      "Build My Free Website →"
                    )}
                  </button>
                  
                  <p className="text-slate-500 text-xs text-center">
                    No payment info required. The site is free — you only pay if you want to keep it.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call CTA */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-500/20">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Prefer to Talk?</h3>
            <p className="text-slate-300 mb-6">
              Call anytime — Alex, my assistant, is available 24/7 to answer questions about the service.
            </p>
            <a 
              href="tel:+18777574169"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (877) 757-4169
            </a>
            <p className="text-slate-500 text-sm mt-4">Toll-free · Available 24/7</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-slate-800/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Common Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Is this actually free?</h3>
              <p className="text-slate-400">
                Yes. I build the site and show it to you — no payment required. You only pay $25 if you 
                want me to connect it to your domain and make it live. If not, no charge.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">What&apos;s the catch?</h3>
              <p className="text-slate-400">
                No catch. My bet is that once you see a modern version of your site, you&apos;ll want it. 
                If I&apos;m wrong, I&apos;ve lost an hour of work. If I&apos;m right, you get a great site 
                and I get a happy customer.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Can I request changes?</h3>
              <p className="text-slate-400">
                Absolutely. The $25 includes revisions — different colors, layout tweaks, content changes. 
                I want you to love the final result.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Do I need to host it somewhere?</h3>
              <p className="text-slate-400">
                It&apos;s hosted for free on GitHub Pages. Fast, reliable, no monthly fees. If you prefer 
                different hosting, I can help with that too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400">© 2026 Ryan Cwynar</p>
          <div className="flex gap-6">
            <a href="tel:+18777574169" className="text-slate-400 hover:text-white transition">
              (877) 757-4169
            </a>
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
