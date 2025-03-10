import React from 'react';

function Nav () {
    return (
        <div className='flex p-4 bg-tw-blue font-inter text-white justify-between text-base'>
            <p className='flex text-lg items-center font-semibold select-none'>/gerardnicolas</p>
            <div className='flex items-center'>
                <a href="https://www.linkedin.com/in/gerard-nicolas-4287531a0/" target="_blank" rel='noreferrer' className='text-xs'> 
                    <img src="/assets/linkedin-logo.webp" alt="LinkedIn Logo" className="w-14"/>
                </a>
                <a href="/assets/nicolas-resume_latest.pdf" download="gerardnicolas-resume">
                    <button className='flex px-3 py-1 rounded border-blue-600 bg-blue-600 decoration-blue hover:bg-blue-500 hover:border-blue-500'>
                        Resume
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Nav;