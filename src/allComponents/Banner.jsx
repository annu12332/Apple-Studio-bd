import React from 'react';

const Banner = () => {
    return (
        <section className="relative w-full h-[600px] overflow-hidden bg-black flex items-center">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <img
                    src="bannerbg.png"
                    alt="Keyboard Banner"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Main Content Container */}
            <div className="container mx-auto px-6 md:px-12 relative z-10 text-white">
                <div className="max-w-2xl">
                     <h1 className="text-white text-3xl md:text-4xl font-extrabold whitespace-nowrap
[text-shadow:0_0px_8px_rgba(0,0,0,0.7),0_1px_6px_rgba(255,255,255,0.85),0_2px_5px_rgba(255,255,255,0.65)]">
                   Type Anywhere, In Style <br />
                   Slim Design with Vibrant Colors
                </h1>

                    <p className="text-xl md:text-2xl text-white mb-8 font-semibold drop-shadow-sm">
                        Perfect for students, travelers, and anyone on the go.
                    </p>


                </div>
            </div>

            {/* Floating Keyboard*/}
            <div className="absolute bottom-0 right-0 z-20 overflow-hidden translate-x-10 translate-y-10">
                <img
                    src="bannerkeyboard.png"
                    alt="Keyboard"
                    className="w-[350px] md:w-[500px] drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] object-contain rotate-[-10deg]"
                />
            </div>
        </section>
    );
};

export default Banner;