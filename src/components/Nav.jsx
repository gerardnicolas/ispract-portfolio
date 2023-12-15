import React from 'react';

function Nav () {
    return (
        <div className='flex p-4 bg-tw-blue font-inter text-white justify-between text-base'>
            <p className='flex text-xs items-center font-semibold'>ged.dev</p>
            <div className='flex items-center'>
                <a href="https://www.linkedin.com/in/gerard-nicolas-4287531a0/" target="_blank" rel='noreferrer' className='text-xs'> 
                    <img src="/assets/linkedin-logo.webp" alt="LinkedIn Logo" className="w-6"/>
                </a>
                <a href="./src/assets/nicolas-resume.pdf" download="Resume">
                    <button className='flex text-[0.6rem] px-[0.25rem] rounded border-blue-600 bg-blue-600 decoration-blue hover:bg-blue-500 hover:border-blue-500'>
                        Resume
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Nav;