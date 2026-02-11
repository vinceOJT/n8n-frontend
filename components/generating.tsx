import React from 'react'
import { Sparkles } from "lucide-react";

function GenerateReq() {
    return (
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
    )
}

export default GenerateReq
