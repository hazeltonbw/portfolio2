import EmailForm from '../components/EmailForm';

const Contact = () => {
  return (
    <section className="mt-8 flex flex-1 flex-col items-center font-playfair ">
      <div className="w-full p-4 md:w-3/4">
        <h1 className="mb-4 border-b border-b-gray-500/25 text-4xl dark:border-b-sky-500/25">
          Contact me
        </h1>
        <EmailForm />
      </div>
    </section>
  );
};

export default Contact;
