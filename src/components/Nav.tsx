import { useEffect } from "react";
import { Link } from "react-router-dom";
import CustomNavLink from "./CustomNavLink";
import Logo from "./Logo";

type Props = {
  navIsOpen: boolean;
  setNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = (props: Props) => {
  useEffect(() => {
    console.log(`nav is open: ${props.navIsOpen}`);
  }, [props.navIsOpen]);

  const toggleNav = () => {
    // Only toggle when nav is open,
    // which means a smaller screen opened it.
    // desktop nav does not need this functionality
    if (props.navIsOpen) props.setNavIsOpen((prev: boolean) => !prev);
  };

  return (
    <nav
      className={`flex min-h-[2rem] md:flex-row md:flex-none items-center justify-center  rounded-b-md w-full overflow-x-hidden ${
        props.navIsOpen ? "flex-col flex-1" : "flex-row"
      }`}
    >
      <div className="flex w-full items-center justify-center md:justify-normal relative">
        <Link
          to="/"
          className="font-playfair text-2xl md:ml-0"
          onClick={toggleNav}
        >
          <Logo size={48} />
        </Link>

        <div
          onClick={() => props.setNavIsOpen((prev: boolean) => !prev)}
          className="flex flex-col cursor-pointer space-y-2 md:hidden absolute right-0 items-end"
          aria-label="Nav Menu"
          tabIndex={0}
          role="navigation"
        >
          <span
            className={`h-0.5 bg-slate-500 dark:bg-white transition-all ease-in-out duration-300 ${
              props.navIsOpen ? "w-8 -rotate-45 translate-y-3" : "w-4"
            }`}
          ></span>
          <span
            className={`h-0.5 w-8 bg-slate-500 dark:bg-white transition-all ease-in-out duration-300 ${
              props.navIsOpen ? "w-0 opacity-0" : "w-8 opacity-1"
            }`}
          ></span>
          <span
            className={`h-0.5 bg-slate-500 dark:bg-white transition-all ease-in-out duration-300 ${
              props.navIsOpen ? "w-8 rotate-45 -translate-y-2" : "w-4"
            }`}
          ></span>
        </div>
      </div>
      <ul
        className={`flex-col py-8 md:flex md:flex-row md:p-0 items-center gap-6 ${
          props.navIsOpen ? "flex flex-1 justify-center w-full" : "hidden"
        }`}
      >
        <li>
          <CustomNavLink to="/about" innerText="About" toggleNav={toggleNav} />
        </li>
        <li>
          <CustomNavLink
            to="/projects"
            innerText="Projects"
            toggleNav={toggleNav}
          />
        </li>
        <li>
          <CustomNavLink
            to="/contact"
            innerText="Contact"
            toggleNav={toggleNav}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
