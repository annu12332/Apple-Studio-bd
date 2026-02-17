import React from 'react';

const Features = () => {
    return (
        <section className="relative w-full bg-[#0d0625] overflow-hidden flex items-center py-10 lg:py-12">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-10 w-[250px] h-[250px] bg-purple-500/5 blur-[80px] rounded-full"></div>

            <div className="flex flex-col lg:flex-row w-full items-center max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Left Side: Product Image (Shifted for overlap) */}
                <div className="w-full lg:w-[40%] flex justify-start relative order-2 lg:order-1 mt-8 lg:mt-0">
                    <div className="relative z-10 transform -ml-10 md:-ml-20 lg:-ml-32 opacity-90 transition-all duration-700 hover:brightness-110">
                        <img
                            src="keyboard2.png"
                            alt="Keyboard"
                            className="hidden md:block max-w-[100%] drop-shadow-[0_15px_40px_rgba(0,0,0,0.7)]"
                        />
                    </div>
                </div>

                {/* Right Side: Content Area */}
                <div className="w-full lg:w-[60%] flex flex-col md:flex-row justify-between items-center md:items-start text-white order-1 lg:order-2 gap-6">
                    
                    {/* Features Column */}
                    <div className="flex flex-col space-y-3 w-full md:max-w-[300px]">
                        <h4 className="text-indigo-400 font-medium tracking-wider text-[17px] uppercase mb-1 ml-1 opacity-80">Core Features</h4>
                        
                        {/* Slim Feature Card 1 */}
                        <div className="group p-4 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.05]">
                            <h2 className="text-lg font-semibold mb-0.5 group-hover:text-indigo-200 transition-colors">
                                Silent Keypress
                            </h2>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                Whisper-quiet typing for any environment.
                            </p>
                        </div>

                        {/* Slim Feature Card 2 */}
                        <div className="group p-4 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.05]">
                            <h2 className="text-lg font-semibold mb-0.5 group-hover:text-indigo-200 transition-colors">
                                Long-Lasting Battery
                            </h2>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                30h active use / 40 days standby.
                            </p>
                        </div>
                    </div>

                    {/* Compatibility Column */}
                    <div className="flex flex-col w-full md:w-auto mt-6 md:mt-0">
                        <h4 className="text-gray-500 font-medium tracking-wider text-[17px] uppercase mb-4 text-left md:text-right opacity-80">Compatibility</h4>
                        
                        <div className="grid grid-cols-2 md:flex md:flex-col gap-2">
                            {['iOS / iPad OS', 'Android OS', 'Windows', 'Smart TV'].map((item) => (
                                <div 
                                    key={item}
                                    className="px-4 py-2 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center md:justify-end transition-all hover:bg-white/[0.06] hover:border-white/20"
                                >
                                    <span className="text-sm md:text-base font-medium text-gray-200">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;