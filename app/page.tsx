import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-slate-300 text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Available for web projects
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I&apos;m <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Ryan Cwynar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            I build modern, fast websites for local businesses. 
            If you&apos;re viewing a mockup I created for your business, 
            it means I think your current site could use an upgrade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#how-it-works" 
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 transition shadow-lg shadow-white/10"
            >
              How It Works
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a 
              href="mailto:ryan@byldr.co" 
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition border border-white/20"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why You&apos;re Here
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              I found your business online and noticed your website could better represent 
              the quality of your work. So I built you a free mockup.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/50">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">I Found Your Business</h3>
              <p className="text-slate-400">
                I search for local businesses with outdated websites that deserve better. 
                Your business caught my attention.
              </p>
            </div>
            
            <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/50">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Built a Custom Mockup</h3>
              <p className="text-slate-400">
                Using your existing content and branding, I designed a modern website 
                that better showcases your business. No templates.
              </p>
            </div>
            
            <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/50">
              <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Ready to Launch</h3>
              <p className="text-slate-400">
                If you like what you see, we can get your new site live quickly. 
                Fast, modern, and mobile-friendly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple Pricing
            </h2>
            <p className="text-slate-400 text-lg">
              No hidden fees. No monthly subscriptions. Just a one-time payment.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10">
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-4">
                $200
              </div>
              <p className="text-slate-300 text-lg mb-8">
                One-time payment for your complete, ready-to-launch website
              </p>
              
              <ul className="text-left max-w-md mx-auto space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom design based on your mockup
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mobile-responsive design
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fast loading times (modern tech stack)
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Content updates included
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  You own everything — full source code
                </li>
              </ul>
              
              <a 
                href="mailto:ryan@byldr.co?subject=Website%20Mockup%20Inquiry" 
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 transition"
              >
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                About Me
              </h2>
              <p className="text-slate-300 text-lg mb-4">
                I&apos;m a web developer who believes every local business deserves 
                a website that actually works for them — not against them.
              </p>
              <p className="text-slate-400 mb-6">
                Too many small businesses are stuck with outdated, slow websites 
                that turn customers away. I&apos;m on a mission to fix that, one 
                business at a time.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/RyanCwynar" className="text-slate-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="mailto:ryan@byldr.co" className="text-slate-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/50">
                <div className="text-6xl mb-4">👨‍💻</div>
                <h3 className="text-xl font-semibold text-white mb-2">Ryan Cwynar</h3>
                <p className="text-slate-400">Web Developer</p>
                <div className="mt-4 pt-4 border-t border-slate-600/50">
                  <p className="text-slate-400 text-sm">
                    Based in Colombia 🇨🇴<br />
                    Building for businesses worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400">© 2026 Ryan Cwynar. All rights reserved.</p>
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
