import React from "react";

const Hero = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 bg-gradient-to-br from-[#0D0A1A] via-[#120E2A] to-[#080512] overflow-hidden min-h-[600px] md:min-h-screen">
            
            <div className="absolute top-1/2 left-[50%] md:left-[60%] -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[900px] h-[300px] md:h-[600px] bg-[#7C83D3]/20 rounded-full blur-[80px] md:blur-[40px]" />

            <div className="w-full md:w-1/2 space-y-3 relative z-10 text-center md:text-left">
                <p className="text-white font-bold text-xl md:text-2xl">
                    Say Goodbye to Bulky Typing
                </p>

                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold md:whitespace-nowrap [text-shadow:0_0px_6px_rgba(0,0,0,0.7),0_1px_6px_rgba(255,255,255,0.85),0_4px_20px_rgba(255,255,255,0.65)]">
                    Fortify MagSafe Wireless Keyboard
                </h1>

                <p className="text-white font-semibold text-base md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
                    A keyboard that delivers a full typing experience
                    in a lightweight and stylish package.
                </p>

                <div className="pt-6">
                    <button
                        className="px-10 py-3 rounded-full text-white text-lg font-bold bg-gradient-to-r from-[#7C83D3] to-[#8F96FF] shadow-[0_0_30px_rgba(124,131,211,0.55)] hover:shadow-[0_0_45px_rgba(124,131,211,0.8)] hover:scale-105 transition-all duration-300"
                    >
                        Buy Now
                    </button>
                </div>
            </div>

            <div className="w-full md:w-1/2 mt-16 md:mt-0 flex justify-center relative z-10">
                <div className="absolute -bottom-10 md:-bottom-25 -right-10 md:-right-60 w-40 md:w-90 h-40 md:h-90 bg-yellow-200/50 rounded-full blur-[25px] md:blur-[30px]" />
                <div className="absolute -bottom-15 md:-bottom-40 -right-0 w-40 md:w-90 h-40 md:h-90 bg-pink-200/55 rounded-full blur-[25px] md:blur-[30px]" />
                <div className="absolute -bottom-20 md:-bottom-75 right-10 md:right-60 w-40 md:w-90 h-40 md:h-90 bg-blue-300/50 rounded-full blur-[25px] md:blur-[30px]" />

                <img
                    src="keyboard.png"
                    alt="Keyboard"
                    className="w-[280px] sm:w-[400px] md:w-[500px] max-w-lg relative z-20 drop-shadow-[0_0_25px_rgba(95,85,115,0.9)] hover:drop-shadow-[0_0_35px_rgba(95,85,115,1)] transition-all duration-300"
                />
            </div>
        </section>
    );
};

export default Hero;