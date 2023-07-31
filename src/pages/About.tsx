const About = () => {
  return (
    <>
      <section className="">
        <div className="flex px-16">
          <div className="mb-16 flex flex-col md:flex-row justify-evenly gap-16 flex-1">
            <div className="max-w-[740px]">
              <h1 className="font-marck text-6xl sm:text-8xl text-sky-500 text-center sm:text-left ">
                Brandon Hazelton
              </h1>
              <p className="text-4xl mb-4 leading-relaxed">
                Hey there! My name is Brandon and I design and build websites
                from the ground up.
              </p>
              <p className="text-lg leading-relaxed">
                I'm an enthusiastic and driven full-stack developer with a
                passion for crafting innovative and user-friendly digital
                solutions. With a solid foundation in both front-end and
                back-end technologies, I thrive on turning ideas into reality
                through clean and efficient code. My journey in the world of
                programming began with a curiosity for web development, which
                led me to explore HTML, CSS, and JavaScript. I am constantly
                honing my skills, eager to embrace new technologies and best
                practices to create seamless and impactful applications. My
                ultimate goal is to contribute my creativity and problem-solving
                skills to a dynamic and collaborative team, all while
                continuously evolving as a professional in the ever-evolving
                landscape of software development.
              </p>
            </div>
            <div className="px-16 py-8 sm:pr-20 sm:pl-12 sm:py-24 rounded-xl bg-black sm:text-7xl self-center after:absolute after:inline-block after:bg-slate-200 after:align-top after:w-4 after:h-8 after:sm:w-8 after:sm:h-16 after:animate-blink after:content-[' '] text-3xl">
              <span className="text-sky-500">{'>_'}</span>build
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <h1>Tech Stack</h1>
      </section>
    </>
  );
};

export default About;
