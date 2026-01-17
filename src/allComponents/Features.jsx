import React from 'react';

const Features = () => {
    return (
        <section className="relative w-full min-h-screen lg:min-h-[650px] bg-[#0d0625] overflow-hidden flex items-center py-16 lg:py-0">
            <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-900/20 blur-[80px] md:blur-[130px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <div className="flex flex-col lg:flex-row w-full items-center max-w-7xl mx-auto">
                
                <div className="w-full lg:w-[45%] flex justify-start relative order-2 lg:order-1 mt-10 lg:mt-0">
                    <div className="relative z-10 transform -ml-12 md:-ml-24 lg:-ml-36 opacity-90 transition-transform duration-700 hover:scale-105">
                        <img 
                            src="keyboard2.png" 
                            alt="Light Blue Keyboard" 
                            className="hidden md:block lg:block max-w-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                        />
                    </div>
                </div>

                <div className="w-full lg:w-[55%] flex flex-col md:flex-row justify-between px-6 md:px-12 lg:px-16 text-white z-20 order-1 lg:order-2 gap-12 md:gap-8">
                    
                    <div className="flex flex-col justify-center space-y-10 md:space-y-16">
                        <div className="group">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] tracking-tight transition-all duration-300 group-hover:text-indigo-300">
                                Silent Keypress
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-[320px]">
                                Work quietly in a library, café, or meeting.
                            </p>
                        </div>

                        <div className="group">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] tracking-tight transition-all duration-300 group-hover:text-indigo-300">
                                Long-Lasting Battery
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-[380px]">
                                Up to 30 hours of continuous typing or 40 days standby.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center md:pl-6 lg:pl-10">
                        <h3 className="text-5xl md:text-6xl lg:text-7xl font-[roboto-font] font-black leading-[1.05] tracking-tighter text-left bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                            Supports <br />
                            iOS/iPad <br />
                            OS <br />
                            Windows <br />
                            TV
                        </h3>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;