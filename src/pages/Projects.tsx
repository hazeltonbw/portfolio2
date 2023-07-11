import ecommerce_img from "../assets/ecommerce-fs.png";
import { FaReact } from "react-icons/fa";
import {
  SiReactrouter,
  SiRedux,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";
import Tech from "../components/Tech";
import { IconContext } from "react-icons";
import TechUsed from "../components/TechUsed";

const Projects = () => {
  return (
    <section className="font-playfair flex-1 justify-center flex-col mb-4">
      <header className="">
        <h1 className="text-4xl mt-8 mb-8 text-center">Projects</h1>
      </header>
      <article className="flex flex-col flex-1 ">
        <div className="flex-1">
          <h2 className="mb-4">eCommerce Shopping App</h2>
          <img
            src={ecommerce_img}
            alt="Screenshot of eCommerce Shopping App"
            className=""
          />
        </div>
        <aside className="flex-1">
          <p className="m-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
            voluptate non tempora ipsa at quia et odit nihil voluptas eaque
            excepturi, sunt ex nulla libero aspernatur dolor sequi eveniet?
            Quam.
          </p>
        </aside>
        <h2 className="underline underline-offset-4">Tech used</h2>
        <TechUsed />
      </article>
    </section>
  );
};

export default Projects;
