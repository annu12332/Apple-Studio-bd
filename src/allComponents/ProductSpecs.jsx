import React from 'react';

const ProductSpecs = () => {
  return (
    <section className="bg-[#0b0a24] text-white py-12 md:py-24 px-4 md:px-6 relative overflow-hidden font-sans">
      <div className="text-center mb-1 md:mb-1 relative z-30">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 mt-1 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
          Fortify MagSafe Specifications
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative flex flex-col items-center justify-center min-h-[650px] md:min-h-[900px]">

        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-70 md:opacity-100">
          <div className="w-[300px] md:w-[380px] h-[300px] md:h-[380px] bg-[#ffe0cf] rounded-full blur-[40px] md:blur-[15px] -ml-20 md:-ml-60 opacity-[35%]" />
          <div className="absolute w-[300px] md:w-[380px] h-[300px] md:h-[380px] bg-[#d5edce] rounded-full blur-[40px] md:blur-[15px] -mr-24 md:-mr-80 mt-10 opacity-[35%]" />
          <div className="absolute w-[280px] md:w-[380px] h-[280px] md:h-[380px] bg-[#bcddeb] rounded-full blur-[40px] md:blur-[15px] -mt-40 md:-mt-96 ml-0 md:ml-10 opacity-[35%]" />
        </div>

        <div className="relative z-10 w-full max-w-[320px] sm:max-w-md md:max-w-2xl lg:max-w-4xl flex items-center justify-center mb-12 md:mb-0 transition-all duration-500">
          <img
            src="keyboard.png"
            alt="Keyboards Stack"
            className="w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] relative z-10 object-contain scale-110 md:scale-75 lg:scale-85"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:block w-full gap-4 md:gap-6 lg:gap-0 relative z-20">
          <div className="lg:absolute lg:-top-35 lg:left-32 bg-[#74a9c6]/90 backdrop-blur-md p-5 rounded-2xl w-full lg:w-64 shadow-2xl border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#5a1a7a] p-2 rounded-full text-xs">🔋</span>
              <h3 className="font-bold text-sm md:text-base">Battery Saver</h3>
            </div>
            <p className="text-xs md:text-sm leading-snug">Auto Sleep Mode activated when idle.</p>
          </div>

          <div className="lg:absolute lg:-top-45 lg:right-20 bg-[#74a9c6]/90 backdrop-blur-md p-5 rounded-2xl w-full lg:w-64 shadow-2xl border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#5a1a7a] p-2 rounded-full text-xs">🌐</span>
              <h3 className="font-bold text-sm md:text-base">Connectivity:</h3>
            </div>
            <p className="text-xs md:text-sm leading-snug">Bluetooth 3.0 / 5.0</p>
          </div>

          <div className="lg:absolute lg:bottom-70 lg:left-10 bg-[#74a9c6]/90 backdrop-blur-md p-5 rounded-2xl w-full lg:w-64 shadow-2xl border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#5a1a7a] p-2 rounded-full text-xs">📱</span>
              <h3 className="font-bold text-sm md:text-base">Compatibility:</h3>
            </div>
            <p className="text-xs md:text-sm leading-snug">iOS (iPhone/iPad), Android, Windows, Mac</p>
          </div>

          <div className="lg:absolute lg:bottom-72 lg:right-0 bg-[#74a9c6]/90 backdrop-blur-md p-5 rounded-2xl w-full lg:w-64 shadow-2xl border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#5a1a7a] p-2 rounded-full text-xs">⌨️</span>
              <h3 className="font-bold text-sm md:text-base">Layout:</h3>
            </div>
            <p className="text-xs md:text-sm leading-snug">Compact 78-key (with function keys).</p>
          </div>

          <div className="lg:absolute lg:-bottom-30 lg:left-1/2 lg:-translate-x-1/2 bg-[#74a9c6]/90 backdrop-blur-md p-5 rounded-2xl w-full lg:w-[350px] text-center shadow-2xl border border-white/10 col-span-1 md:col-span-2">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="bg-[#5a1a7a] p-2 rounded-full text-xs">🔄</span>
              <h3 className="font-bold text-sm md:text-base">Portability</h3>
            </div>
            <p className="text-xs md:text-sm leading-snug">The only way to carry pocket keyboard you will ever need</p>
          </div>
        </div>

        <div className="lg:absolute lg:left-0 lg:top-[20%] text-center lg:-rotate-12 z-30 mt-12 lg:mt-0 flex flex-col items-center w-full lg:w-auto">
          <div className="relative inline-block">
            <h1 className='text-2xl font-bold'>Now<span className="bg-[#ff46ff] px-3 py-1 rounded-full font-bold text-sm md:text-2xl shadow-[0_0_30px_#ff46ff] text-white">
              20%
            </span>Cheaper</h1>
            <p className="text-4xl md:text-6xl font-extrabold mt-6 text-white drop-shadow-[0_0_10px_rgba(255,70,255,1)] [text-shadow:0_0_20px_rgba(255,70,255,0.6),0_0_40px_rgba(255,70,255,0.4)]">
              1490 Tk
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductSpecs;