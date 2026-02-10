'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SliderLogos from "@/components/sliderlogos";
import { Sparkles } from "lucide-react";
import submitlogic from "@/lib/submitlogic";
import { ChartPieDonutText } from "@/components/ui/chart-pie-donut-text";
import PieData from "@/lib/piedata";
import { GetSheetsData } from "@/lib/readSheets";

export default function InputPage() {
  // Custom hook, by sepearting the logic from the ui debugging will be much easier
  // The hook can be 
  const { form, onSubmit, generatedUrl, isGenerating, showError, setShowError, setGeneratedUrl } = submitlogic();
  const { chartData } = PieData();


  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden">

      {/* Loading Overlay */}
      {isGenerating && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl px-16 py-14 shadow-[0_40px_120px_rgba(0,0,0,0.35)] flex flex-col items-center gap-6 animate-in fade-in zoom-in-95">
            <Sparkles className="w-14 h-14 text-[#FFD200] animate-pulse" />
            <p className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Generating your blog…
            </p>
            <p className="text-base text-slate-500 max-w-sm text-center">
              We are analyzing your idea, structuring the article, and writing high-quality content.
            </p>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mt-2">
              <div className="h-full w-2/3 bg-gradient-to-r from-[#FFD200] to-[#f9a8d4] animate-pulse" />
            </div>
          </div>
        </div>
      )}

      {/* Error Overlay */}
      {showError && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white backdrop-blur-md rounded-3xl p-10 flex flex-col items-center gap-6 max-w-sm w-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] animate-scale-up">

            {/* Title */}
            <h2 className="text-2xl font-bold text-red-700 text-center tracking-tight">
              Something Went Wrong
            </h2>

            {/* Message */}
            <p className="text-sm text-slate-700 text-center max-w-xs">
              There is a problem in generating your blog. Please check your connection and try again later.
            </p>

            {/* Close Button */}
            <div className="flex mt-4 w-full justify-center">
              <button
                onClick={() => setShowError(false)}
                className="px-6 py-2 rounded-full font-semibold text-slate-900 bg-white border border-slate-200 hover:bg-slate-100 transition-all duration-200 shadow-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Overlay */}
      {generatedUrl && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-10 flex flex-col items-center gap-8 max-w-sm w-full shadow-lg animate-scale-up">

            {/* Modern Icon */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-green-700 text-center tracking-tight">
              Success! Your Blog Has Been Created.
            </h2>

            <p className="text-sm text-slate-700 text-center max-w-xs">
              Your blog is ready! Click below to view it.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-4 w-full">
              <a
                href={generatedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#FFD200] to-[#f9a8d4] hover:from-[#e6bc00] hover:to-[#f472b6] transition-all duration-200 shadow-lg text-center text-sm"
              >
                View Blog
              </a>

              <button
                onClick={() => setGeneratedUrl(null)}
                className="w-full px-6 py-3 rounded-xl font-semibold text-slate-900 bg-white border border-slate-200 hover:bg-slate-100 transition-all duration-200 shadow-sm text-sm"
              >
                Generate Again
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-md h-16">
        <div className="w-10 md:w-32"></div>
        <div className="flex-shrink-0">
          <img
            src="myimages/Rubik_Bubbles-removebg-preview.png"
            alt="Callbox Logo"
            className="h-15 md:h-40 w-auto"
          />
        </div>
        <div className="w-10 md:w-32"></div>
      </nav>

      <main className={`flex-grow flex flex-col pt-20 transition-all ${isGenerating || showError || generatedUrl ? "blur-sm pointer-events-none" : ""}`}>
        <div className="flex flex-col items-center justify-center text-center m-5">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold bg-[#FFD200]/10 text-[#e6bc00] ring-1 ring-inset ring-[#FFD200]/20 mb-4">
            AI Blog Post Generator
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tighter text-slate-900">
            Turn your{" "}
            <span className="bg-gradient-to-r from-[#FFD200] to-[#f9a8d4] bg-clip-text text-transparent">
              ideas
            </span>
            {" "}into articles.
          </h1>
        </div>
        
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,#FFD200_0%,white_100%)] opacity-10" />

        <div className="flex-grow flex items-center justify-center px-4 md:px-12 py-12">
          {/* Added items-stretch to force equal column heights */}
          <div className="max-w-6xl w-full flex flex-col md:flex-row items-stretch gap-8 md:gap-16">
            
            {/* Left Text / Chart Container */}
            <div className="w-full md:w-1/2 flex">
              <div className="w-full">
                <ChartPieDonutText data={chartData} />
              </div>
            </div>

            {/* Form Card Container */}
            <div className="w-full md:w-[550px] flex flex-col">
              <div className="flex-grow bg-white border border-slate-100 rounded-[1rem] p-6 md:p-10 shadow-[0_16px_64px_-12px_rgba(0,0,0,0.2)] flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-900">Get Started</h2>
                    <p className="text-xs text-slate-500">Describe your topic.</p>
                  </div>

                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">
                        Rough Idea
                      </label>
                      <Input
                        {...form.register("roughIdea")}
                        placeholder="e.g. The future of AI in logistics"
                        className="h-12 rounded-xl bg-slate-50 border-slate-100"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">
                        Target Audience
                      </label>
                      <Input
                        {...form.register("targetAudience")}
                        placeholder="e.g. Small Business Owners"
                        className="h-12 rounded-xl bg-slate-50 border-slate-100"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-slate-900 hover:bg-black text-white font-bold rounded-xl"
                    >
                      Generate Post
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="pb-8">
          <SliderLogos />
        </div>
      </main>
    </div>
  );
}
