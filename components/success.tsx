import React from 'react'


interface SuccessReqProps {
    urlGenerated: string;
    generateAgain: (value: string | null) => void
}


function SuccessReq({ urlGenerated, generateAgain }: SuccessReqProps) {
    return (
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
                        href={urlGenerated}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#FFD200] to-[#f9a8d4] hover:from-[#e6bc00] hover:to-[#f472b6] transition-all duration-200 shadow-lg text-center text-sm"
                    >
                        View Blog
                    </a>

                    <button
                        onClick={() => generateAgain(null)}
                        className="w-full px-6 py-3 rounded-xl font-semibold text-slate-900 bg-white border border-slate-200 hover:bg-slate-100 transition-all duration-200 shadow-sm text-sm"
                    >
                        Generate Again
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SuccessReq
