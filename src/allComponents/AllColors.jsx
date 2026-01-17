import React from 'react';

const AllColors = () => {
    const keyboards = [
        { id: 1, src: 'bluewhite.png', rotate: 'rotate-[115deg]', yPos: 'translate-y-8' },
        { id: 2, src: 'light-yellow.png', rotate: '-rotate-[90deg]', yPos: '-translate-y-12' },
        { id: 3, src: 'yellowwhite.png', rotate: '-rotate-[70deg]', yPos: 'translate-y-14' },
        { id: 4, src: 'light-pink.png', rotate: '-rotate-[95deg]', yPos: '-translate-y-10' },
        { id: 5, src: 'bluewhite.png', rotate: '-rotate-[75deg]', yPos: 'translate-y-6' },
        { id: 6, src: 'light-purple.png', rotate: '-rotate-[90deg]', yPos: '-translate-y-4' },
    ];

    return (
        <section className="relative w-full py-20 bg-[#0b0a24] overflow-hidden text-center text-white">
            
            <div className="relative z-20 px-4 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_0_18px_rgba(255,255,255,0.75)]">
                    Express Yourself with Color
                </h2>
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-bold opacity-90">
                    Your tech should match your aesthetic. Choose the color that fits your mood and style!
                </p>
            </div>

            <div className="relative w-full min-h-[300px] sm:min-h-[450px] flex items-center justify-center">
                
                {/* SVG for 3 waves - Responsive for small devices */}
                <div className="absolute inset-0 z-0 pointer-events-none flex items-center">
                    <svg 
                        viewBox="0 0 1200 300" 
                        className="w-full h-[200px] sm:h-full" 
                        preserveAspectRatio="none"
                    >
                        <path
                            /* Responsive path: Mobile e curve ektu kom thakbe jeno overlap na hoy */
                            d="M -50 150 
                               C 150 300, 300 0, 450 150 
                               S 750 0, 900 150 
                               S 1150 0, 1250 150"
                            stroke="url(#keyboard-line-gradient)"
                            strokeWidth="10"
                            fill="none"
                            opacity="0.7"
                            strokeLinecap="round"
                        />
                        <defs>
                            <linearGradient id="keyboard-line-gradient" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#fff176" />
                                <stop offset="25%" stopColor="#a5d6a7" />
                                <stop offset="50%" stopColor="#90caf9" />
                                <stop offset="75%" stopColor="#ce93d8" />
                                <stop offset="100%" stopColor="#64b5f6" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="relative z-10 w-full flex justify-center items-center px-2 sm:px-4">
                    {keyboards.map((kb) => (
                        <div
                            key={kb.id}
                            className={`flex justify-center transition-all duration-500 hover:scale-110 hover:z-50 
                                ${kb.yPos} ${kb.rotate} -mx-8 sm:-mx-10 md:-mx-16 lg:-mx-20`}
                        >
                            <img
                                src={kb.src}
                                alt="Keyboard"
                                className="w-[120px] sm:w-[380px] md:w-[480px] lg:w-[580px] object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.9)]"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AllColors;