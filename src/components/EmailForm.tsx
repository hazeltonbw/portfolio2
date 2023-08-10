// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import { useForm, ValidationError } from '@formspree/react';

function EmailForm() {
  const [state, handleSubmit] = useForm('mpzgqwwy');
  if (state.succeeded) {
    return (
      <p>
        Thanks! Your email has been sent. I will get back to you as soon as
        possible!
      </p>
    );
  }
  return (
    <form id="fs-frm" onSubmit={handleSubmit}>
      <label htmlFor="full-name">Full Name</label>
      <input
        type="text"
        name="name"
        id="full-name"
        placeholder="John Doe"
        required
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="email@domain.tld"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea
        rows={5}
        name="message"
        id="message"
        placeholder="I love the blue. You're hired."
        required
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="min-w-full !bg-sky-700
                  !text-sky-50 transition-colors hover:!bg-sky-600
                  dark:hover:!bg-sky-600"
      >
        Submit
      </button>
    </form>
    // <form
    //   id="fs-frm"
    //   name="simple-contact-form"
    //   accept-charset="utf-8"
    //   action="https://formspree.io/f/mpzgqwwy"
    //   method="post"
    // >
    //   <fieldset id="fs-frm-inputs">
    //     <label htmlFor="full-name">Full Name</label>
    //     <input type="text" name="name" id="full-name" placeholder="First and Last" required />
    //     <label htmlFor="email-address">Email Address</label>
    //     <input
    //       type="email"
    //       name="_replyto"
    //       id="email-address"
    //       placeholder="email@domain.tld"
    //       required
    //     />
    //     <label htmlFor="message">Message</label>
    //     <textarea
    //       rows={5}
    //       name="message"
    //       id="message"
    //       placeholder="I love the blue. You're hired."
    //       required
    //     ></textarea>
    //     <input
    //       type="hidden"
    //       name="_subject"
    //       id="email-subject"
    //       value="Contact Form Submission"
    //     />
    //   </fieldset>
    //   <input
    //     type="submit"
    //     value="Submit"
    //     className="min-w-full
    //   dark:hover:!bg-sky-600
    //   !text-sky-50 !bg-sky-700 hover:!bg-sky-600
    //   transition-colors"
    //   />
    // </form>{" "}
  );
}
export default EmailForm;
