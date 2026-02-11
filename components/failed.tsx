import React from 'react'
import submitlogic from "@/lib/submitlogic";

interface FaileReqProps {
    CloseError: (value: boolean) => void
}


function FailedReq({ CloseError }: FaileReqProps) {

    return (
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
                        onClick={() => CloseError(false)}
                        className="px-6 py-2 rounded-full font-semibold text-slate-900 bg-white border border-slate-200 hover:bg-slate-100 transition-all duration-200 shadow-sm"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FailedReq
