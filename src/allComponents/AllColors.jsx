import React from 'react';

const AllColors = () => {
    const keyboards = [
        { id: 1, src: 'bluewhite.png', rotate: '-rotate-[55deg]', yPos: 'translate-y-10' },
        { id: 2, src: 'light-yellow.png', rotate: '-rotate-[90deg]', yPos: '-translate-y-20' },
        { id: 3, src: 'yellowwhite.png', rotate: 'rotate-[-60deg]', yPos: 'translate-y-8' },
        { id: 4, src: 'light-pink.png', rotate: 'rotate-[95deg]', yPos: '-translate-y-16' },
        { id: 5, src: 'bluewhite.png', rotate: '-rotate-[60deg]', yPos: 'translate-y-10' },
        { id: 6, src: 'light-purple.png', rotate: 'rotate-[90deg]', yPos: '-translate-y-10' },
    ];

    return (
        <section className="relative w-full py-10 md:py-14 bg-gradient-to-b from-[#100c29] via-[#20125b] to-[#0a0a23] overflow-hidden text-center text-white">

            <div className="relative z-20 px-4 mb-2">
                <h2 className="text-4xl md:text-5xl font-bold mb-3 mt-2 drop-shadow-[0_0_18px_rgba(255,255,255,0.75)]">
                    Express Yourself with Color
                </h2>
                <p className="text-white-400 text-lg md:text-xl max-w-2xl mx-auto font-bold opacity-90">
                    Your tech should match your aesthetic. Choose the color that fits your mood and style!
                </p>
            </div>

            <div className="relative w-full min-h-[450px] md:min-h-[580px] flex items-center justify-center">

                <div className="absolute inset-0 z-0 pointer-events-none flex items-center">
                    <svg viewBox="0 0 1200 300" className="w-full h-full" preserveAspectRatio="none">
                        <path
                            d="M-100 160 C 120 320, 360 -40, 600 160 S 1080 -40, 1320 160"
                            stroke="url(#glow)"
                            strokeWidth="10"
                            fill="none"
                            opacity="0.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <defs>
                            <linearGradient id="glow" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#00eaff" />
                                <stop offset="20%" stopColor="#fff176" />
                                <stop offset="50%" stopColor="#ff5fa2" />
                                <stop offset="80%" stopColor="#4fc3ff" />
                                <stop offset="100%" stopColor="#c084fc" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="relative z-10 w-full max-w-[98%] mx-auto flex justify-between items-center gap-0">
                    {keyboards.map((kb) => (
                        <div
                            key={kb.id}
                            className={`flex-1 flex justify-center transition-transform duration-300 hover:scale-110 ${kb.yPos} ${kb.rotate}`}
                        >
                            <img
                                src={kb.src}
                                alt="Keyboard"
                                className="w-[200px] sm:w-[280px] md:w-[380px] lg:w-[480px] xl:w-[580px] object-contain drop-shadow-[0_40px_70px_rgba(0,0,0,0.95)]"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AllColors;