import TechUsed from '../components/TechUsed'
import {
  FaReact,
  FaNodeJs,
  FaCcStripe,
  FaHtml5,
  FaLinux,
  FaCss3,
  FaJs,
} from 'react-icons/fa'
import {
  SiRedux,
  SiReactrouter,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiExpress,
  SiPassport,
  SiJest,
} from 'react-icons/si'
import { VscTerminalBash } from 'react-icons/vsc'
import Tech from '../components/Tech'

const About = () => {
  return (
    <>
      <section className='sm:my-16'>
        <div className='flex px-4 md:px-32'>
          <div className='flex flex-1 flex-col xl:flex-row'>
            <div className='mb-0 mr-0 max-w-[740px] lg:mb-0 lg:mr-16'>
              {/* <h1 className="mb-8 hidden text-center font-marck text-5xl text-sky-500 sm:mb-0 sm:text-left sm:text-8xl md:block md:text-6xl lg:text-left ">
                Brandon Hazelton
              </h1> */}
              <p
                className='mb-4 text-xl first-letter:text-7xl
                first-letter:font-bold
              first-letter:text-sky-500
                md:text-4xl'
              >
                Hey there! My name is{' '}
                <span className='font-marck text-5xl text-sky-500'>
                  Brandon Hazelton
                </span>{' '}
                and I design and build websites from the ground up.
              </p>
              <p className='text-lg leading-loose'>
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
            <div className="after:content-[' '] relative my-16 self-center rounded-xl border-2 border-t-[.9rem] border-slate-700 border-t-slate-600 bg-black pb-20 pl-8 pr-32 pt-6 text-3xl text-white before:absolute before:-top-[2.1rem] before:left-2 before:content-['...'] after:absolute after:inline-block after:h-8 after:w-4 after:animate-blink after:bg-slate-200 after:align-top sm:pb-96 sm:pl-12 sm:pr-96 sm:pt-10 sm:text-4xl sm:before:-top-[2.35rem] sm:before:left-2 after:sm:h-9 after:sm:w-4">
              <span className='text-sky-500'>{'>_'}</span>
              build
            </div>
          </div>
        </div>
      </section>
      <section className='items-center justify-center bg-sky-900 py-16 text-white lg:px-32'>
        <h1 className='mb-16 text-center '>Skills</h1>
        <TechUsed iconSize={'64'}>
          <Tech>
            <FaReact />
            <h3>React</h3>
          </Tech>
          <Tech>
            <SiRedux />
            <h3>Redux</h3>
          </Tech>
          <Tech>
            <SiReactrouter />
            <h3>React Router</h3>
          </Tech>
          <Tech>
            <SiTypescript />
            <h3>TypeScript</h3>
          </Tech>
          <Tech>
            <SiTailwindcss />
            <h3>TailwindCSS</h3>
          </Tech>
          <Tech>
            <SiPostgresql />
            <h3>PostgreSQL</h3>
          </Tech>
          <Tech>
            <SiExpress />
            <h3>Express</h3>
          </Tech>
          <Tech>
            <FaNodeJs />
            <h3>Node</h3>
          </Tech>
          <Tech>
            <SiPassport />
            <h3>Passport</h3>
          </Tech>
          <Tech>
            <FaCcStripe />
            <h3>Stripe</h3>
          </Tech>
          <Tech>
            <SiJest />
            <h3>Jest</h3>
          </Tech>
          <Tech>
            <FaHtml5 />
            <h3>HTML</h3>
          </Tech>
          <Tech>
            <FaCss3 />
            <h3>CSS3</h3>
          </Tech>
          <Tech>
            <FaJs />
            <h3>JavaScript</h3>
          </Tech>
          <Tech>
            <VscTerminalBash />
            <h3>Shell Scripts</h3>
          </Tech>
          <Tech>
            <FaLinux />
            <h3>Unix</h3>
          </Tech>
        </TechUsed>
      </section>
    </>
  )
}

export default About
