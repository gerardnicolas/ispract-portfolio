import React from 'react'

const Hero = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <div className='flex-col text-center p-9 max-w-sm'>
                    <h1 className='font-bold text-2xl lg:text-3xl md:text-3xl'>Gerard Nicolas</h1>
                    <h4 className='mt-1 mb-5 text-xs font-semibold lg:text-base md:text-base'>BS - Information Systems</h4>
                    <p className='text-xs lg:text-base md:text-base'>As of now my current aspiration is to become a Front End Developer, 
                    in which I am fascinated with latest technologies such as <span className='font-bold'>React</span>, <span className='font-bold'>Next.JS</span>, and <span className='font-bold'>Tailwind CSS</span>.</p>
                </div>
            </div>
        </div>
        
        
    )
}

export default Hero