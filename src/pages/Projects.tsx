import {
  FaCcStripe,
  FaCss3,
  FaExternalLinkAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLink,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
import reddit_gif from '../assets/reddit.gif'
import ecommerce_img2 from '../assets/ecommerce.gif'
import jammming_gif from '../assets/jammming4.gif'
import TechUsed from '../components/TechUsed'
import { Link } from 'react-router-dom'
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
import Tech from '../components/Tech'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Projects = () => {
  return (
    <section className='font-playfair flex-1 mb-4'>
      <header>
        <h1 className='my-8 text-center'>Projects</h1>
      </header>

      <div className='grid md:grid-cols-2 xl:grid-cols-3 m-16 justify-center gap-8'>
        <article
          className='flex flex-col flex-1 p-4 
        rounded-xl'
        >
          <div className=''>
            <div className='flex items-center justify-between mb-4'>
              <h2 className=''>eCommerce Shopping App</h2>
              <div className='flex gap-x-2'>
                <Link
                  to='https://ecommerce-frontend-cs5n.onrender.com'
                  target='_blank'
                  aria-label='Link to live site'
                  title='Link to live site'
                  className='hover:text-sky-500 dark:hover:text-sky-500 transition-all ease-in-out'
                >
                  <FaLink />
                </Link>
                <Link
                  to='https://github.com/hazeltonbw/ecommerce-frontend'
                  target='_blank'
                  aria-label='Link to code'
                  title='Link to code'
                  className='hover:text-sky-500 dark:hover:text-sky-500 transition-all ease-in-out'
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
            <img
              src={ecommerce_img2}
              alt='Screenshot of eCommerce Shopping App'
              className='rounded-lg object-cover mx-auto'
              loading='lazy'
            />
          </div>
          <aside className=''>
            <h2 className='mt-4'>About</h2>
            <p className='my-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              voluptate non tempora ipsa at quia et odit nihil voluptas eaque
              excepturi, sunt ex nulla libero aspernatur dolor sequi eveniet?
              Quam.
            </p>
          </aside>
          <h2 className=''>Tech used</h2>
          <TechUsed>
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
          </TechUsed>
          <Link
            to='https://ecommerce-frontend-cs5n.onrender.com'
            className='flex justify-center mt-auto gap-2 items-center 
            p-4 bg-sky-900 dark:bg-sky-700 rounded-xl text-white hover:bg-sky-800 transition-colors'
          >
            <p>View project</p>
            <FaExternalLinkAlt />
          </Link>
        </article>

        <article className='flex flex-col flex-1 p-4 rounded-xl'>
          <div>
            <div className='flex items-center justify-between mb-4'>
              <h2>Reddit Minimal</h2>
              <div className='flex gap-x-2'>
                <Link
                  to='https://bwhredditclone.netlify.app/'
                  target='_blank'
                  aria-label='Link to live site'
                  title='Link to live site'
                  className='hover:text-sky-500 dark:hover:text-sky-500 transition-all ease-in-out'
                >
                  <FaLink />
                </Link>
                <Link
                  to='https://github.com/hazeltonbw/reddit'
                  target='_blank'
                  aria-label='Link to code'
                  title='Link to code'
                  className='hover:text-sky-500 dark:hover:text-sky-500 transition-all ease-in-out'
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
            <img
              src={reddit_gif}
              alt='Screenshot of Reddit Minimal'
              className='rounded-lg object-cover mx-auto'
              loading='lazy'
            />
          </div>
          <aside className=''>
            <h2 className='mt-4'>About</h2>
            <p className='my-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              voluptate non tempora ipsa at quia et odit nihil voluptas eaque
              excepturi, sunt ex nulla libero aspernatur dolor sequi eveniet?
              Quam.
            </p>
          </aside>
          <h2 className=''>Tech used</h2>
          <TechUsed>
            <Tech>
              <FaReact />
              <h3>React</h3>
            </Tech>
            <Tech>
              <SiRedux />
              <h3>Redux</h3>
            </Tech>
            <Tech>
              <FaHtml5 />
              <h3>HTML</h3>
            </Tech>
            <Tech>
              <FaCss3 />
              <h3>CSS</h3>
            </Tech>
            <Tech>
              <FaJs />
              <h3>JavaScript</h3>
            </Tech>
          </TechUsed>
          <Link
            to='https://bwhredditclone.netlify.app/'
            className='flex justify-center mt-auto gap-2 items-center 
            p-4 bg-sky-900 dark:bg-sky-700 rounded-xl text-white hover:bg-sky-800 transition-colors'
          >
            <p>View project</p>
            <FaExternalLinkAlt />
          </Link>
        </article>

        <article className='flex flex-col flex-1 rounded-xl p-4'>
          <div>
            <div className='flex items-center justify-between mb-4'>
              <h2>Jammming Spotify Playlist Creator</h2>
              <div className='flex gap-x-2'>
                <Link
                  to='https://webejammming.netlify.app'
                  target='_blank'
                  aria-label='Link to live site'
                  title='Link to live site'
                  className='hover:text-sky-500 dark:hover:text-sky-500 transition-all ease-in-out'
                >
                  <FaLink />
                </Link>
                <Link
                  to='https://github.com/hazeltonbw/jamming'
                  target='_blank'
                  aria-label='Link to code'
                  title='Link to code'
                  className='hover:text-sky-500 dark:hover:text-sky-500 transition-all ease-in-out'
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
            <img
              src={jammming_gif}
              alt='Screenshot of Jammming Spotify Playlist Creator'
              className='rounded-lg object-cover mx-auto'
              loading='lazy'
            />
          </div>
          <aside className=''>
            <h2 className='mt-4'>About</h2>
            <p className='my-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              voluptate non tempora ipsa at quia et odit nihil voluptas eaque
              excepturi, sunt ex nulla libero aspernatur dolor sequi eveniet?
              Quam.
            </p>
          </aside>
          <h2 className=''>Tech used</h2>
          <TechUsed>
            <Tech>
              <FaReact />
              <h3>React</h3>
            </Tech>
            <Tech>
              <FaHtml5 />
              <h3>HTML</h3>
            </Tech>
            <Tech>
              <FaCss3 />
              <h3>CSS</h3>
            </Tech>
            <Tech>
              <FaJs />
              <h3>JavaScript</h3>
            </Tech>
          </TechUsed>
          <Link
            to='https://webejammming.netlify.app'
            className='flex justify-center mt-auto gap-2 items-center 
            p-4 bg-sky-900 dark:bg-sky-700 rounded-xl text-white hover:bg-sky-800 transition-colors'
          >
            <p>View project</p>
            <FaExternalLinkAlt />
          </Link>
        </article>
      </div>
      <form>
        <input type='text' name='city' />
        <button>Submit</button>
      </form>
    </section>
  )
}

export default Projects
