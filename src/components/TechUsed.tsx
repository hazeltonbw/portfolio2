import { IconContext } from "react-icons";
import { FaReact, FaNodeJs, FaCcStripe, FaHtml5 } from "react-icons/fa";
import {
  SiRedux,
  SiReactrouter,
  SiPostgresql,
  SiExpress,
  SiPassport,
  SiJest,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import Tech from "./Tech";

const TechUsed = () => {
  return (
    <ul className="grid gap-4 m-2 grid-cols-3 content-center ">
      <IconContext.Provider value={{ size: "32" }}>
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
          <SiPostgresql />
          PostgreSQL
        </Tech>
        <Tech>
          <SiExpress />
          Express
        </Tech>
        <Tech>
          <FaNodeJs />
          Node
        </Tech>
        <Tech>
          <SiPassport />
          Passport
        </Tech>
        <Tech>
          <FaCcStripe />
          Stripe
        </Tech>
        <Tech>
          <SiJest />
          Jest
        </Tech>

        <Tech>
          <SiTypescript />
          TypeScript
        </Tech>
        <Tech>
          <FaHtml5 />
          HTML
        </Tech>
        <Tech>
          <SiTailwindcss />
          TailwindCSS
        </Tech>
      </IconContext.Provider>
    </ul>
  );
};

export default TechUsed;
