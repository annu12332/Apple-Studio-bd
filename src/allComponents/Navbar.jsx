import React from 'react';

const Navbar = () => {
    return (
        <div className="sticky top-0 z-[100] w-full">
            <div className="navbar bg-blue-950 shadow-sm px-2 md:px-4 lg:px-10">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-lg md:text-xl bg-black text-white flex items-center gap-2 px-2 md:px-4 min-h-0 h-10 md:h-12">
                        <img className='w-[24px] md:w-[30px]' src={'logo.png'} alt="logo" />
                        <span className="hidden sm:inline">Apple Studio<sup className='text-xs'>BD</sup></span>
                        <span className="sm:hidden">AS<sup className='text-[10px]'>BD</sup></span>
                    </a>
                </div>

                <div className="navbar-end">
                    <a className="btn rounded-full px-4 md:px-7 py-1 text-white border-2 md:border-3 border-[#7C83D3] bg-[#7C83D3] shadow-[0_0_15px_rgba(124,131,211,0.7)] md:shadow-[0_0_25px_rgba(124,131,211,0.9)] hover:shadow-[0_0_30px_rgba(124,131,211,0.9)] text-sm md:text-lg font-bold min-h-0 h-9 md:h-12">
                        Buy Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;