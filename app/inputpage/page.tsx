'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import SliderLogos from "@/components/sliderlogos";


// Keep existing validation rules
const formSchema = z.object({
  roughIdea: z.string().min(5, "Idea must be at least 5 characters"),
  targetAudience: z.string().min(2, "Please specify an audience"),
})

export default function InputPage() {
  // 1. Initialize the form with types
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roughIdea: "",
      targetAudience: "",
    },
  })

  const isLoading = form.formState.isSubmitting;

  // 2. Original onSubmit logic (unmodified)

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_N8N_PATH!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      // const response = {
      //   ok: true,
      //   type: 'basic',
      //   url: "http://localhost:3000/api/v1",
      //   redirected: false,
      //   status: 200
      // }

      console.log(response);
      console.log(`STATUS CODES FROM JSON ${response.status}`);

      if (response.ok) {
        // Parse the JSON response from n8n
        const data = await response.json();
        // const data = await response;


        // Access the "url" property we defined in the Respond node
        const generatedLink = data.url;

        console.log("Success! Link received:", generatedLink);

        // Notify the user without leaving the page
        toast.success("Blog Generated!", {
          className: "!bg-yellow-400 !text-white ",
          position: "top-center",
          description: "Your post is ready! click the yellow button to be redirected",
          // description: `Your post is ready at: ${generatedLink}`,
          duration: 10000, // Keep it visible longer so they can see the link
        });

        form.reset();
      } else {
        // toast.error("Server side error status code:" + response.status)
        toast("Server Error:", {
          className: "!bg-red-400 !text-black ",
          position: "top-center",
          description: "Status Code Received: " + response.status,
          // action: {

          //   label: "Undo",
          //   onClick: () => console.log("Undo"),
          // },
        },
        )
      }
    } catch (error) {
      toast.error("An error occurred: ", {
        className: "!bg-red-400 !text-black ",
        position: "top-center",
        description: "Error type: " + error,

      },)
      console.error(error)
    }
  };






  return (
    <div className="h-screen flex flex-col font-sans bg-white selection:bg-[#FFD200] selection:text-black overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-md h-16">
        <div className="w-10 md:w-32"></div>
        <div className="flex-shrink-0">
          <img
            // src="https://www.callboxinc.com/wp-content/themes/enfold-child/assets/images/callbox-logo-new.svg?x29465"

            src="myimages/Rubik_Bubbles-removebg-preview.png"
            alt="Callbox Logo"
            className="h-15 md:h-40 w-auto"
          />
        </div>
        <div className="w-10 md:w-32"></div>
      </nav>

      {/* Main Container - Changed to h-screen and flex-col */}
      <main className="flex-grow flex flex-col pt-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,#FFD200_0%,white_100%)] opacity-10" />

        {/* Hero Content - Centered in the available space */}
        <div className="flex-grow flex items-center justify-center px-4 md:px-12">
          <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-16">

            {/* Left Text */}
            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold bg-[#FFD200]/10 text-[#e6bc00] ring-1 ring-inset ring-[#FFD200]/20">
                AI Blog Post Generator
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tighter text-slate-900">
                Turn your <span className="bg-gradient-to-r from-[#FFD200] to-[#f9a8d4] bg-clip-text text-transparent">ideas</span> <br />
                into articles.
              </h1>
              <p className="text-slate-600 text-base md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed font-medium">
                Draft professional, creative, and engaging blog posts in seconds.
              </p>
            </div>

            {/* Form Card */}
            <div className="w-full md:w-[450px]">
              <div className="bg-white border border-slate-100 rounded-[2rem] p-6 md:p-10 shadow-[0_16px_64px_-12px_rgba(0,0,0,0.2)]">
                <div className="space-y-6">
                  <div className="space-y-1 text-center">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Get Started</h2>
                    <p className="text-slate-500 text-xs font-medium">Describe your topic.</p>
                  </div>

                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Rough Idea</label>
                      <Input
                        {...form.register("roughIdea")}
                        placeholder="e.g. The future of AI in logistics"
                        className="bg-slate-50 border-slate-100 h-12 rounded-xl focus-visible:ring-[#FFD200]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Target Audience</label>
                      <Input
                        {...form.register("targetAudience")}
                        placeholder="e.g. Small Business Owners"
                        className="bg-slate-50 border-slate-100 h-12 rounded-xl focus-visible:ring-[#FFD200]"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-12 bg-slate-900 hover:bg-black text-white font-bold rounded-xl shadow-lg transition-all"
                    >
                      {isLoading ? "Generating..." : "Generate Post"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pb-8">
          <SliderLogos />
        </div>
      </main>
    </div>
  );
}