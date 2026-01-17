import React from 'react';

const Banner = () => {
    return (
        <section className="relative w-full h-[650px] overflow-hidden bg-black flex items-center">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <img
                    src="bannerbg.png"
                    alt="Keyboard Banner"
                    className="w-full h-full object-cover opacity-80"
                />
                {/* Corrected Gradient Layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d0625]  to-right"></div>
            </div>

            {/* Main Content Container */}
            <div className="container mx-auto px-6 md:px-12 relative z-10 text-white">
                <div className="max-w-2xl">
                    <h1 className="text-white text-3xl md:text-5xl lg:text-6xl  font-[roboto-bold] lg:whitespace-nowrap
[text-shadow:0_0px_8px_rgba(0,0,0,0.7),0_1px_6px_rgba(255,255,255,0.85),0_2px_5px_rgba(255,255,255,0.65)]">
                        Type Anywhere, In Style <br />
                        Slim Design with Vibrant Colors
                    </h1>

                    <p className="text-xl md:text-2xl text-white mb-8 font-[roboto-bold] drop-shadow-sm">
                        Perfect for students, travelers, and anyone on the go.
                    </p>


                </div>
            </div>

            {/* Floating Keyboard*/}
            <div className="absolute bottom-0 right-0 z-20 overflow-hidden translate-x-10 translate-y-10">
                <img
                    src="floatkeyboard.png"
                    alt="Keyboard"
                    className="w-[200px] md:w-[300px] lg:w-[400px] drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] object-contain rotate-[-10deg]"
                />
            </div>
        </section>
    );
};

export default Banner;