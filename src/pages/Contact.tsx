const Contact = () => {
  return (
    <section className="flex flex-1 flex-col mt-8 font-playfair ">
      <h1 className="text-4xl mb-4 border-b border-b-gray-500/25 dark:border-b-sky-500/25">
        Contact me
      </h1>
      <form
        id="fs-frm"
        name="simple-contact-form"
        accept-charset="utf-8"
        // TODO: SIGN UP FOR FORMSPREE FREE SERVICE
        // TODO: CHANGE form_id variable
        action="https://formspree.io/f/{form_id}"
        method="post"
      >
        <fieldset id="fs-frm-inputs">
          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="First and Last"
            required
          />
          <label htmlFor="email-address">Email Address</label>
          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="email@domain.tld"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows={5}
            name="message"
            id="message"
            placeholder="I love the blue. You're hired."
            required
          ></textarea>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Contact Form Submission"
          />
        </fieldset>
        <input
          type="submit"
          value="Submit"
          className="min-w-full 
          dark:hover:!bg-sky-600 
          text-sky-50 !bg-sky-700 hover:!bg-sky-600 
          transition-colors"
        />
      </form>{" "}
    </section>
  );
};

export default Contact;
