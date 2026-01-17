import React from 'react';

const Navbar = () => {
    return (
        <div className=" top-0 z-[100] w-full ">
            <div className="navbar bg-[#130830] shadow-sm px-2 md:px-4 lg:px-10">
                <div className="navbar-start">
                    <div>
                        <img className='h-[30px] md:h-[60px] lg:h-[70px]  ' src={"logo.jpg"} alt="logo" />
                    </div>
                </div>

                <div className="navbar-end">
                    <a href='#order-form' className="btn rounded-full px-4 md:px-7 py-1 text-white border-2 md:border-3 border-[#7C83D3] bg-[#7a85D0] font-[roboto-bold] text-[20px] md:text-[25px] lg:text-[30px] min-h-0 h-9 md:h-12 
    shadow-[0_0px_15px_4px_rgba(124,131,211,0.8)] 
    hover:shadow-[0_0px_15px_9px_rgba(14,10,111,0.8)] 
    transition-all duration-300">
                        Buy Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;