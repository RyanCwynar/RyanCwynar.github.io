"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Example {
  businessName: string;
  niche: string;
  generatedSiteUrl: string;
  currentWebsite: string;
  location: string;
}

function ExampleCard({ example }: { example: Example }) {
  return (
    <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600 transition">
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{example.businessName}</h3>
            <p className="text-slate-400 text-sm capitalize">{example.niche}</p>
          </div>
          <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
            {example.location}
          </span>
        </div>
        
        <div className="flex gap-3 mt-4">
          <a
            href={example.currentWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-sm py-2 px-4 rounded-lg transition font-medium text-center"
          >
            View Original
          </a>
          <a
            href={example.generatedSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-sm py-2 px-4 rounded-lg transition font-medium text-center"
          >
            View Redesign
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ExamplesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [examples, setExamples] = useState<Example[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchExamples() {
      try {
        const res = await fetch("https://convex-actions.byldr.co/examples");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setExamples(data);
      } catch (err) {
        setError("Failed to load examples");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchExamples();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-white">Ryan Cwynar</Link>
          {/* Desktop nav */}
          <div className="hidden md:flex gap-6 text-sm">
            <Link href="/#about" className="text-slate-400 hover:text-white transition">About</Link>
            <Link href="/#how-it-works" className="text-slate-400 hover:text-white transition">How It Works</Link>
            <Link href="/examples" className="text-white font-medium">Examples</Link>
            <Link href="/#get-started" className="text-slate-400 hover:text-white transition">Get Started</Link>
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
            <Link href="/#about" onClick={() => setMenuOpen(false)} className="text-lg text-slate-300 hover:text-white transition">About</Link>
            <Link href="/#how-it-works" onClick={() => setMenuOpen(false)} className="text-lg text-slate-300 hover:text-white transition">How It Works</Link>
            <Link href="/examples" onClick={() => setMenuOpen(false)} className="text-lg text-white font-medium">Examples</Link>
            <Link href="/#get-started" onClick={() => setMenuOpen(false)} className="text-lg text-slate-300 hover:text-white transition">Get Started</Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Website Redesigns
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {loading ? "Loading examples..." : `${examples.length} sites redesigned and counting. Click to compare original vs redesign.`}
          </p>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-400">{error}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {examples.map((example) => (
                <ExampleCard key={example.generatedSiteUrl} example={example} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want Your Site Redesigned?
          </h2>
          <p className="text-slate-400 mb-8">
            Get a free preview of your website reimagined. No commitment required.
          </p>
          <Link 
            href="/#get-started"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition"
          >
            Get Your Free Preview →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Ryan Cwynar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
