import React from "react";

const Hero = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 bg-[#0d0625] overflow-hidden min-h-[600px] md:min-h-screen">
            
            <div className="" />

            <div className="w-full md:w-1/2 space-y-3 relative z-10 text-center md:text-left">
                <p className="text-white font-bold text-xl md:text-2xl">
                    Say Goodbye to Bulky Typing
                </p>

                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold lg:whitespace-nowrap [text-shadow:0_0px_6px_rgba(0,0,0,0.7),0_1px_6px_rgba(255,255,255,0.85),0_4px_20px_rgba(255,255,255,0.65)]">
                    Fortify MagSafe Wireless Keyboard
                </h1>

                <p className="text-white font-semibold text-base md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
                    A keyboard that delivers a full typing experience
                    in a lightweight and stylish package.
                </p>

                <div className="pt-6">
                    <button className="btn rounded-full px-5 md:px-7 py-1 text-white border-2 md:border-3 border-[#7C83D3] bg-[#7a85D0] font-[roboto-bold] text-[20px] md:text-[25px] lg:text-[30px] min-h-0 h-9 md:h-12 
    shadow-[0_0px_15px_4px_rgba(124,131,211,0.8)] 
    hover:shadow-[0_0px_15px_9px_rgba(14,10,111,0.8)] 
    transition-all duration-300">
                        Buy Now
                    </button>
                </div>
            </div>

            <div className="w-full md:w-1/2 mt-16 md:mt-0 flex justify-center relative z-10">
                <div className="absolute -bottom-5 md:-bottom-40 -right-26 md:-right-70 w-40 md:w-110 h-40 md:h-110 bg-[#bcddeb] rounded-full md:blur-[25px] opacity-[20%] blur-[7px]" />
                <div className="absolute -bottom-20 md:-bottom-55 right-1 w-40  h-40 md:h-110 md:w-110 bg-[#d5edce] rounded-full md:blur-[25px] opacity-[20%] blur-[7px]" />
                <div className="absolute -bottom-35 md:-bottom-90 right-28 md:right-65 w-40 md:w-110 h-40 md:h-110 bg-[#ffe0cf] rounded-full md:blur-[25px] opacity-[20%] blur-[7px]" />

                <img
                    src="keyboard.png"
                    alt="Keyboard"
                    className="w-[280px] sm:w-[400px] md:w-[800px] max-w-lg relative z-20 drop-shadow-[0_0_25px_rgba(95,85,115,0.9)] hover:drop-shadow-[0_0_35px_rgba(95,85,115,1)] transition-all duration-300"
                />
            </div>
        </section>
    );
};

export default Hero;