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
} from 'react-icons/fa';
import reddit_mp4 from '../assets/reddit.mp4';
import reddit_webp from '../assets/reddit.webp';
import reddit_png from '../assets/reddit.png';

// import reddit_gif from '../assets/reddit.gif'
// import ecommerce_gif from '../assets/ecommerce.gif'
// import jammming_gif from '../assets/jammming4.gif'
import ecommerce_png from '../assets/ecommerce.png';
import ecommerce_mp4 from '../assets/ecommerce.mp4';

import jammming_png from '../assets/jammming.png';
import jammming_mp4 from '../assets/jammming.mp4';
import jammming_webp from '../assets/jammming.webp';
import TechUsed from '../components/TechUsed';
import { Link } from 'react-router-dom';
import {
  SiRedux,
  SiReactrouter,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiExpress,
  SiPassport,
  SiJest,
} from 'react-icons/si';
import Tech from '../components/Tech';

const Projects = () => {
  return (
    <section className="p-4">
      <header>
        <h1 className="my-8 text-center">Projects</h1>
      </header>

      <div className="grid justify-center gap-8 md:grid-cols-2 lg:m-16 xl:grid-cols-3">
        <article
          className="flex flex-1 flex-col rounded-xl 
        p-4"
        >
          <div className="">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="">eCommerce Shopping App</h2>
              <div className="flex gap-x-2">
                <Link
                  to="https://ecommerce-frontend-cs5n.onrender.com"
                  target="_blank"
                  aria-label="Link to live site"
                  title="Link to live site"
                  className="transition-all ease-in-out hover:text-sky-500 dark:hover:text-sky-500"
                >
                  <FaLink />
                </Link>
                <Link
                  to="https://github.com/hazeltonbw/ecommerce-frontend"
                  target="_blank"
                  aria-label="Link to code"
                  title="Link to code"
                  className="transition-all ease-in-out hover:text-sky-500 dark:hover:text-sky-500"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
            <video
              autoPlay
              loop
              muted
              poster={ecommerce_png}
              className="rounded-xl"
            >
              <source src={ecommerce_mp4} type="video/mp4" />
              <img
                src={ecommerce_png}
                alt="Screenshot of Ecommerce Shopping App"
                className="mx-auto rounded-lg object-cover"
                loading="lazy"
              />
              Your device does not support the playback of this video.
            </video>
          </div>
          <aside className="">
            <h2 className="mt-4">About</h2>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              voluptate non tempora ipsa at quia et odit nihil voluptas eaque
              excepturi, sunt ex nulla libero aspernatur dolor sequi eveniet?
              Quam.
            </p>
          </aside>
          <h2 className="">Tech used</h2>
          <TechUsed iconSize="32">
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
              <SiExpress />
              <h3>Express</h3>
            </Tech>
            <Tech>
              <FaNodeJs />
              <h3>Node</h3>
            </Tech>
            <Tech>
              <SiTailwindcss />
              <h3>TailwindCSS</h3>
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
              <SiPostgresql />
              <h3>PostgreSQL</h3>
            </Tech>
            <Tech>
              <FaHtml5 />
              <h3>HTML</h3>
            </Tech>
          </TechUsed>
          <Link
            to="https://ecommerce-frontend-cs5n.onrender.com"
            target="_blank"
            className="mt-auto flex items-center justify-center gap-2 
            rounded-xl bg-sky-900 p-4 text-white transition-colors hover:bg-sky-800 dark:bg-sky-700"
          >
            <p>View project</p>
            <FaExternalLinkAlt />
          </Link>
        </article>

        <article className="flex flex-1 flex-col rounded-xl p-4">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2>Reddit Minimal</h2>
              <div className="flex gap-x-2">
                <Link
                  to="https://bwhredditclone.netlify.app/"
                  target="_blank"
                  aria-label="Link to live site"
                  title="Link to live site"
                  className="transition-all ease-in-out hover:text-sky-500 dark:hover:text-sky-500"
                >
                  <FaLink />
                </Link>
                <Link
                  to="https://github.com/hazeltonbw/reddit"
                  target="_blank"
                  aria-label="Link to code"
                  title="Link to code"
                  className="transition-all ease-in-out hover:text-sky-500 dark:hover:text-sky-500"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
            <video
              autoPlay
              loop
              muted
              poster={reddit_png}
              className="rounded-xl"
            >
              <source src={reddit_mp4} type="video/mp4" />
              <img
                src={reddit_webp}
                alt="Screenshot of Reddit Minimal"
                className="mx-auto rounded-lg object-cover"
                loading="lazy"
              />
              <img
                src={reddit_png}
                alt="Screenshot of Reddit Minimal"
                className="mx-auto rounded-lg object-cover"
                loading="lazy"
              />
              Your device does not support the playback of this video.
            </video>
          </div>
          <aside className="">
            <h2 className="mt-4">About</h2>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              voluptate non tempora ipsa at quia et odit nihil voluptas eaque
              excepturi, sunt ex nulla libero aspernatur dolor sequi eveniet?
              Quam.
            </p>
          </aside>
          <h2 className="">Tech used</h2>
          <TechUsed iconSize="32">
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
            to="https://bwhredditclone.netlify.app/"
            target="_blank"
            className="mt-auto flex items-center justify-center gap-2 
            rounded-xl bg-sky-900 p-4 text-white transition-colors hover:bg-sky-800 dark:bg-sky-700"
          >
            <p>View project</p>
            <FaExternalLinkAlt />
          </Link>
        </article>

        <article className="flex flex-1 flex-col rounded-xl p-4">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2>Jammming Spotify Playlist Creator</h2>
              <div className="flex gap-x-2">
                <Link
                  to="https://webejammming.netlify.app"
                  target="_blank"
                  aria-label="Link to live site"
                  title="Link to live site"
                  className="transition-all ease-in-out hover:text-sky-500 dark:hover:text-sky-500"
                >
                  <FaLink />
                </Link>
                <Link
                  to="https://github.com/hazeltonbw/jamming"
                  target="_blank"
                  aria-label="Link to code"
                  title="Link to code"
                  className="transition-all ease-in-out hover:text-sky-500 dark:hover:text-sky-500"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
            <video
              autoPlay
              loop
              muted
              poster={jammming_png}
              className="rounded-xl"
            >
              <source src={jammming_mp4} type="video/mp4" />
              <img
                src={jammming_webp}
                alt="Screenshot of Jammming Spotify Playlist Creator"
                className="mx-auto rounded-lg object-cover"
                loading="lazy"
              />
              <img
                src={jammming_png}
                alt="Screenshot of Jammming Spotify Playlist Creator"
                className="mx-auto rounded-lg object-cover"
                loading="lazy"
              />
              Your device does not support the playback of this video.
            </video>
          </div>
          <aside className="">
            <h2 className="mt-4">About</h2>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              voluptate non tempora ipsa at quia et odit nihil voluptas eaque
              excepturi, sunt ex nulla libero aspernatur dolor sequi eveniet?
              Quam.
            </p>
          </aside>
          <h2 className="">Tech used</h2>
          <TechUsed iconSize="32">
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
            to="https://webejammming.netlify.app"
            target="_blank"
            className="mt-auto flex items-center justify-center gap-2 
            rounded-xl bg-sky-900 p-4 text-white transition-colors hover:bg-sky-800 dark:bg-sky-700"
          >
            <p>View project</p>
            <FaExternalLinkAlt />
          </Link>
        </article>
      </div>
    </section>
  );
};

export default Projects;
