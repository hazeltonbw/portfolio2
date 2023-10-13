import TechUsed from '../components/TechUsed'
import {
  FaReact,
  FaNodeJs,
  FaCcStripe,
  FaArrowUp,
  FaHtml5,
  FaLinux,
  FaDatabase,
  FaCaretUp,
  FaCss3,
  FaJs,
} from 'react-icons/fa'
import {
  SiRedux,
  SiReactrouter,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPassport,
  SiJest,
} from 'react-icons/si'
import { VscTerminalBash } from 'react-icons/vsc'
import Tech from '../components/Tech'
import ScrollToTop from '../components/ScrollToTop'

const About = () => {
  return (
    <>
      <section className='sm:mb-16'>
        <div className='flex px-4 md:px-32'>
          <div className='flex flex-1 flex-col xl:flex-row gap-4 items-center justify-evenly'>
            <div className='mb-0 mr-0 lg:mb-0 lg:mr-0 max-w-lg'>
              {/* <h1 className="mb-8 hidden text-center font-marck text-5xl text-sky-500 sm:mb-0 sm:text-left sm:text-8xl md:block md:text-6xl lg:text-left ">
                Brandon Hazelton
              </h1> */}
              <p
                className='m-0 text-2xl 
                first-letter:text-4xl
                first-letter:md:text-7xl
                first-letter:font-bold
                first-letter:text-sky-500
                mb-4
                text-center
                sm:text-left
                md:text-4xl
                mx-auto
                sm:m-0
                max-w-xs
                md:max-w-xl
                '
              >
                Hey there! My name is{' '}
                <span className='font-marck text-4xl md:text-5xl text-sky-500 '>
                  Brandon Hazelton
                </span>{' '}
              </p>
              <p className='text-lg leading-loose first-letter:ml-4'>
                I design and build websites from the ground up. I'm an
                enthusiastic and driven full-stack developer with a passion for
                crafting innovative and user-friendly digital solutions. With a
                solid foundation in both front-end and back-end technologies, I
                thrive on turning ideas into reality through clean and efficient
                code.
              </p>
              <p className='text-lg leading-loose mt-2 first-letter:ml-4'>
                My journey in the world of programming began with a curiosity
                for web development, which led me to explore HTML, CSS, and
                JavaScript. I am constantly honing my skills, eager to embrace
                new technologies and best practices to create seamless and
                impactful applications. My ultimate goal is to contribute my
                creativity and problem-solving skills to a dynamic and
                collaborative team.
              </p>
            </div>
            <div className="pb-12 pl-24 pr-32 pt-8 my-16
            relative self-center  
            border-slate-700 border-t-slate-600 bg-black rounded-xl border-2 border-t-[.9rem] 
            text-3xl text-white 
            before:absolute before:-top-[2.1rem] before:left-2 before:content-['...'] 
            after:absolute after:inline-block after:h-8 after:w-4 after:animate-blink after:bg-slate-200 after:align-top after:content-[' '] after:sm:h-9 after:sm:w-4
            sm:pb-[30rem] sm:pl-4 sm:pr-[23rem] sm:pt-4 sm:text-4xl sm:before:-top-[2.35rem] sm:before:left-2">
              <span className='text-sky-500'>{'>_'}</span>
              build
            </div>
          </div>
        </div>
      </section>
      <section className='items-center justify-center bg-sky-900 py-16 text-white lg:px-32 relative'>
        <h1 className='mb-16 text-center'>Skills</h1>
        <TechUsed iconSize={'64'}>
          <Tech>
            <FaReact />
            <p>React</p>
          </Tech>
          <Tech>
            <SiRedux />
            <p>Redux</p>
          </Tech>
          <Tech>
            <SiReactrouter />
            <p>React Router</p>
          </Tech>
          <Tech>
            <SiTypescript />
            <p>TypeScript</p>
          </Tech>
          <Tech>
            <SiTailwindcss />
            <p>TailwindCSS</p>
          </Tech>
          <Tech>
            <FaDatabase />
            <p>SQL</p>
          </Tech>
          <Tech>
            <SiExpress />
            <p>Express</p>
          </Tech>
          <Tech>
            <FaNodeJs />
            <p>Node</p>
          </Tech>
          <Tech>
            <SiPassport />
            <p>Passport</p>
          </Tech>
          <Tech>
            <FaCcStripe />
            <p>Stripe</p>
          </Tech>
          <Tech>
            <SiJest />
            <p>Jest</p>
          </Tech>
          <Tech>
            <FaHtml5 />
            <p>HTML</p>
          </Tech>
          <Tech>
            <FaCss3 />
            <p>CSS3</p>
          </Tech>
          <Tech>
            <FaJs />
            <p>JavaScript</p>
          </Tech>
          <Tech>
            <VscTerminalBash />
            <p>Shell Scripts</p>
          </Tech>
          <Tech>
            <FaLinux />
            <p>Unix</p>
          </Tech>
        </TechUsed>
      </section>
      <ScrollToTop />
    </>
  )
}

export default About
