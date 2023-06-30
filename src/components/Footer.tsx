import { Link } from "react-router-dom";
import Logo from "./Logo";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="pb-2">
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
            className="hover:fill-sky-500 hover:text-sky-500 transition-colors ease-in-out"
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
            className="hover:fill-sky-500 hover:text-sky-500 transition-colors ease-in-out"
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
            className="hover:fill-sky-500 hover:text-sky-500 transition-colors ease-in-out"
            rel="noopener noreferrer"
          >
            <AiFillMail size={24} aria-label="Generic Mail icon" />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
