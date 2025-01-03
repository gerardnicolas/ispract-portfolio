import React from 'react';

const Hero = () => {
  const description = ``;

  return (
    // <div className="flex">
    //   <div className="flex justify-center">
    //     <div className="flex-col text-center p-9 max-w-3xl">
    //       <h1 className="font-bold text-3xl lg:text-3xl md:text-3xl">
    //         Gerard Nicolas
    //       </h1>
    //       <h4 className="mt-1 mb-5 text-md font-semibold lg:text-base md:text-base">
    //         BS - Information Systems
    //       </h4>
    //     </div>
    //   </div>

    //   <div>
    //     <p className="text-base lg:text-base md:text-base">
    //       Hi there! I'm Gerard Nicolas, a recent graduate with a Bachelor’s
    //       degree in Information Systems. I'm passionate about creating beautiful
    //       and functional user interfaces. Currently, I'm focusing on becoming a
    //       front-end developer with the ultimate goal of mastering full-stack
    //       development. My technical skills include HTML, CSS, and JavaScript,
    //       and I have hands-on experience with React and TailwindCSS. I'm also
    //       expanding my knowledge by learning Next.js.During my internship, I
    //       gained valuable experience as part of the quality assurance team,
    //       which has given me a well-rounded perspective on delivering
    //       high-quality software products. I'm excited to connect with
    //       like-minded professionals and contribute to innovative projects. Let's
    //       build something amazing together!{' '}
    //     </p>
    //   </div>
    // </div>
    <div className="flex items-center justify-evenly p-10">
      <div>
        <img
          src="/assets/barong-pic.JPG"
          alt=""
          className="w-96 h-96 object-cover object-[80%_20%] rounded-full"
        />
      </div>
      <div className="flex-col text-justify max-w-lg">
        <p className="text-2xl font-bold">Gerard Nicolas</p>
        <p className="text-lg font-semibold">BS - Information Systems</p>

        <p className="my-5 text-base">
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
