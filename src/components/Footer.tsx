import { Link } from 'react-router-dom';
import Logo from './Logo';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import React from 'react';

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="my-6 gap-1 flex flex-col items-center">
      <ul className="flex items-center justify-center gap-2">
        <li>
          <Link to="/" aria-label="Link to home page">
            <Logo size={24} />
          </Link>
        </li>
        <li>
          <Link
            to="https://github.com/hazeltonbw"
            aria-label="Link to GitHub page"
            target="_blank"
            className="transition-colors ease-in-out hover:fill-sky-500 hover:text-sky-500"
            rel="noopener noreferrer"
          >
            <AiFillGithub size={24} aria-label="Github Logo" />
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/hazeltonbw/"
            aria-label="Link to LinkedIn page"
            target="_blank"
            className="transition-colors ease-in-out hover:fill-sky-500 hover:text-sky-500"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size={24} aria-label="LinkedIn Logo" />
          </Link>
        </li>
        <li>
          <Link
            to="mailto:hazeltonbw@gmail.com"
            aria-label="Link to email me"
            target="_blank"
            className="transition-colors ease-in-out hover:fill-sky-500 hover:text-sky-500"
            rel="noopener noreferrer"
          >
            <AiFillMail size={24} aria-label="Generic Mail icon" />
          </Link>
        </li>
      </ul>
      <p className="font-semibold">
        &copy; {new Date().getFullYear()} Brandon Hazelton
      </p>
    </footer>
  );
};

export default Footer;
