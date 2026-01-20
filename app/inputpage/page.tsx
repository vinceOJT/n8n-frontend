'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User, Search, Menu } from "lucide-react"

export default function LandingPage() {
  const [roughIdea, setRoughIdea] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Logic for n8n or API call would go here
    console.log({ roughIdea, targetAudience });

    setTimeout(() => {
      setLoading(false);
      // alert("Topic submitted successfully!");
      toast.success("Bagang!")
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-[#FFD200] selection:text-black">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="w-10 md:w-32"></div>

        {/* Centered Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://www.callboxinc.com/wp-content/themes/enfold-child/assets/images/callbox-logo-new.svg?x29465"
            alt="Callbox Logo"
            className="h-10 md:h-12 w-auto"
          />
        </div>

        {/* Right Aligned Navigation */}
        <div className="flex items-center justify-end w-10 md:w-32">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-slate-600 hover:bg-slate-100 rounded-full h-12 w-12 p-0 focus:ring-0">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white border-slate-200 shadow-xl" align="end">
              <DropdownMenuLabel className="text-slate-900 font-bold">Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-slate-600 focus:text-slate-900 focus:bg-slate-50">
                <User className="mr-2 h-4 w-4" /> Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-slate-600 focus:text-slate-900 focus:bg-slate-50">
                <Search className="mr-2 h-4 w-4" /> Search
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-500 font-medium cursor-pointer focus:bg-red-50">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="min-h-screen flex items-center justify-center pt-20 p-4 md:p-12 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,#FFD200_0%,white_100%)] opacity-10" />

        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-16 relative z-10">

          {/* Left Text */}
          <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold bg-[#FFD200]/10 text-[#e6bc00] ring-1 ring-inset ring-[#FFD200]/20">
              AI Blog Post Generator
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter text-slate-900">
              Turn your <span className="bg-gradient-to-r from-[#FFD200] to-[#f9a8d4] bg-clip-text text-transparent">ideas</span> <br />
              into articles.
            </h1>
            <p className="text-slate-600 text-lg max-w-md mx-auto md:mx-0 leading-relaxed font-medium">
              Draft professional, creative, and engaging blog posts in seconds.
              Simply choose a topic and let our AI handle the research and structure.
            </p>

            {/* Social Proof */}
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4 border-t border-slate-100">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] text-slate-400">
                    IMG
                  </div>
                ))}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-slate-900">Joined by 2,000+ writers</span>
                <span className="text-xs text-slate-500 font-medium">Top-rated on G2 and Capterra</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="w-full md:w-[480px]">
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]">

              <div className="space-y-8">
                <div className="space-y-2 text-center">
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Get Started</h2>
                  <p className="text-slate-500 text-sm font-medium">No credit card required.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Rough Idea</label>
                    <Input
                      value={roughIdea}
                      onChange={(e) => setRoughIdea(e.target.value)}
                      placeholder="e.g. The future of AI in logistics"
                      className="bg-slate-50 border-slate-100 text-slate-900 h-14 rounded-2xl focus-visible:ring-[#FFD200] focus-visible:border-[#FFD200]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Target Audience</label>
                    <Input
                      value={targetAudience}
                      onChange={(e) => setTargetAudience(e.target.value)}
                      placeholder="e.g. Small Business Owners"
                      className="bg-slate-50 border-slate-100 text-slate-900 h-14 rounded-2xl focus-visible:ring-[#FFD200] focus-visible:border-[#FFD200]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 bg-slate-900 hover:bg-black text-white font-bold rounded-2xl shadow-lg transition-all hover:scale-[1.01] active:scale-[0.98]"
                  >
                    {loading ? "Generating..." : "Generate Post"}
                  </Button>
                </form>

                <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  Secure & Private Generation
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}