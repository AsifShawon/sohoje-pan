import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image
                    src="/images/maid-1.webp"
                    width={720}
                    height={520}
                    className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl rounded-lg" alt="hero image" />
                <div>
                    <h1 className="text-6xl font-bold pb-3 text-green-600">Expert Housemaids</h1>
                    <h1 className="text-4xl font-bold">For a Clean and Happy Home</h1>
                    <p className="py-6">
                        Find the perfect housemaid for your home. Our professional and dedicated maids ensure your 
                        living space is spotless, comfortable, and welcoming.
                    </p>
                    <button className="btn bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800">Get Started</button>
                </div>
            </div>
        </div>

    )
}

export default Hero
