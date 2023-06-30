import ecommerce_img from "../assets/ecommerce-fs.png";
const Projects = () => {
  return (
    <section className="flex-1 justify-center flex-col">
      <header className="">
        <h1 className="font-playfair text-4xl mt-8 mb-8 text-center">
          Projects
        </h1>
      </header>
      <article className="flex">
        <div className="flex-1">
          <h2>eCommerce Shopping App</h2>
          <img
            src={ecommerce_img}
            alt="Screenshot of eCommerce Shopping App"
            className=""
          />
        </div>
        <aside className="flex-1">
          <h2>Tech used</h2>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>React Router</li>
          </ul>
        </aside>
      </article>
      <article></article>
      <article></article>
    </section>
  );
};

export default Projects;
