import React from 'react';

const OrderForm = () => {
    return (
        <section className="bg-[#0b0a24] min-h-screen flex flex-col items-center py-16 px-4 text-white font-sans">
<div className="text-center mb-10">
    <span className="bg-[#ff46ff] px-6 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-[0_0_15px_#ff46ff]">
        Special Offer
    </span>
    
    <h2 className="text-2xl md:text-3xl font-bold mt-4 flex flex-wrap items-center justify-center gap-2">
        Buy Now at
        <span className="bg-yellow-400 text-black px-3 py-1 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.6)]">
            1490 ৳
        </span>
        & Get
        <img className="h-[90px] w-[90px] object-contain inline-block" src="delivery.png" alt="delivery" />
    </h2>
</div>
\            <div className="w-full max-w-2xl bg-transparent relative z-10">
                <form className="space-y-6">

                    {/* Name Field */}
                    <div>
                        <label className="block text-lg font-semibold mb-2 ml-1">Name*</label>
                        <input
                            type="text"
                            className="w-full bg-[#d1d5db] text-black py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition shadow-inner"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-lg font-semibold mb-2 ml-1">Email*</label>
                        <input
                            type="email"
                            className="w-full bg-[#d1d5db] text-black py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Contact Number Field */}
                    <div>
                        <label className="block text-lg font-semibold mb-2 ml-1">Contact Number*</label>
                        <input
                            type="tel"
                            className="w-full bg-[#d1d5db] text-black py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>

                    {/* Address Field */}
                    <div>
                        <label className="block text-lg font-semibold mb-2 ml-1">Address*</label>
                        <input
                            type="text"
                            className="w-full bg-[#d1d5db] text-black py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                            placeholder="Enter your full address"
                            required
                        />
                    </div>

                    {/* Colour Selection Field */}
                    <div>
                        <label className="block text-lg font-semibold mb-2 ml-1">Colour*</label>
                        <div className="relative">
                            <select className="w-full bg-white text-black py-3 px-4 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 font-bold">
                                <option className='text-black bg-white'>White</option>
                                <option className='text-white bg-black'>Black</option>
                                <option className='text-black bg-blue-400'>Light Blue</option>
                                <option className='text-black bg-amber-200'>Buttermilk</option>
                                <option className='text-black bg-yellow-500'>Bright Sun</option>
                                <option className='text-black bg-pink-300'>Pale Rose</option>
                                <option className='text-black bg-green-200'>Tea Green</option>
                                <option className='text-black bg-blue-300'>Bluish Cyan</option>
                                <option className='text-black bg-purple-400'>Purple</option>
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-black">
                                ▼
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-[#6a82fb] to-[#fc5c7d] hover:from-[#5a72eb] hover:to-[#ec4c6d] text-white font-bold py-3 px-10 rounded-2xl shadow-[0_0_20px_rgba(106,130,251,0.5)] transition duration-300 transform hover:scale-105"
                        >
                            Submit Order
                        </button>
                    </div>

                </form>
            </div>

            {/* 3. Footer Contact */}
            <div className="mt-16 text-center">
                <h4 className="text-2xl font-bold mb-4">Contact Us</h4>
                <div className="flex justify-center">
                    <a href="https://www.facebook.com/md.anas.776581/" className="bg-white p-2 rounded-full hover:scale-110 transition">
                        <img src="facebook.png" alt="Facebook" className="w-8 h-8" />
                    </a>
                </div>
            </div>

        </section>
    );
};

export default OrderForm;