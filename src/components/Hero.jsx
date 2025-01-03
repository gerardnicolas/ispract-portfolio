import React from 'react';

const Hero = () => {
  const description = ``;

return (
    <div className="flex flex-col md:flex-row items-center justify-evenly p-10 gap-10">
        <div className="mb-5 md:mb-0">
            <img
                src="/assets/barong-pic.JPG"
                alt=""
                className="w-48 h-48 md:w-96 md:h-96 object-cover object-[80%_20%] rounded-full shadow-lg"
                style={{ minWidth: '12rem', minHeight: '12rem', maxWidth: '24rem', maxHeight: '24rem' }}
            />
        </div>
        <div className="flex-col text-justify max-w-lg max-h-min">
            <p className="text-xl md:text-2xl font-bold">Gerard Nicolas</p>
            <p className="text-base md:text-lg font-semibold">BS - Information Systems</p>

            <p className="my-5 md:text-base">
                Hi there! I'm Gerard Nicolas, a recent graduate with a Bachelor’s
                degree in Information Systems. I'm passionate about creating beautiful
                and functional user interfaces. Currently, I'm focusing on becoming a
                front-end developer with the ultimate goal of mastering full-stack
                development. My technical skills include{' '}
                <span className="font-bold">HTML, CSS, and JavaScript</span>, and I
                have hands-on experience with <span className="font-bold">React</span>{' '}
                and <span className="font-bold">TailwindCSS</span>. I'm also expanding
                my knowledge by learning <span className="font-bold">Next.js</span>.
            </p>
            <p>
                I'm excited to connect with like-minded professionals and contribute
                to innovative projects. Let's build something amazing together!
            </p>
        </div>
    </div>
);
};

export default Hero;
