'use client';

// library components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChartPieDonutText } from "@/components/ui/chart-pie-donut-text";
import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";


// custom components/logics
import SliderLogos from "@/components/sliderlogos";
import submitlogic from "@/lib/submitlogic";
import PieData from "@/lib/piedata";
import GenerateReq from "@/components/generating";
import FailedReq from "@/components/failed";
import SuccessReq from "@/components/success";
import CustomNav from "@/components/customnav";

type BubbleBackgroundDemoProps = {
  interactive: boolean;
};
export default function InputPage() {
  // Custom hook, by sepearting the logic from the ui debugging will be much easier
  // The hook can be 
  const { form, onSubmit, generatedUrl, isGenerating, showError, setShowError, setGeneratedUrl } = submitlogic();
  const { chartData } = PieData();



  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden">
      <BubbleBackground />

      {/* <BubbleBackground
        interactive={interactive}
        className="absolute inset-0 flex items-center justify-center rounded-xl"
      />     */}




      {/* Loading Overlay */}
      {isGenerating && (
        <GenerateReq />
      )}

      {/* Error Overlay */}
      {showError && (
        <FailedReq CloseError={setShowError} />
      )}

      {/* Success Overlay */}
      {generatedUrl && (
        <SuccessReq urlGenerated={generatedUrl} generateAgain={setGeneratedUrl} />
      )}

      {/* Navbar */}
      <CustomNav />




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
            <button className="relative inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium bg-primary text-primary-foreground cursor-pointer 
      hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
      disabled:opacity-50 motion-reduce:animate-none"> test </button>

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
