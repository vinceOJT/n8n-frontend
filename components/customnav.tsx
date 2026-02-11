import React from 'react'

function CustomNav() {
    return (
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
    )
}

export default CustomNav
