import React, { useRef, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

export const ContactUs: React.FC = () => {
  const [isEmailSent, setIsEmailSent] = useState<boolean | null>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, sendMessage] = useState("");


  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bgvainb",
        "template_egz5ysv",
        form.current as HTMLFormElement,
        "2y8pr3IRAycps27bO"
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          setIsEmailSent(true);
        },
        (error: EmailJSResponseStatus) => {
          console.log(error.text);
          setIsEmailSent(false);
        }
      );
  };

  return (
    <section>
      <div></div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col project-card px-6 py-6 form-card mt-12 shadow-md"
      >
        <div className="flex justify-center flex-col">
        <span className="text-white font-bold uppercase text-3xl">
          let's get in</span><span className="font-bold uppercase text-main-cyan text-3xl inline-block"> touch!</span>
        </div>

        <p className="text-gray-400 text-center leading-loose pt-4 inline-block">
        Are you looking for a skilled and passionate professional to join your team or help bring your project to life? Look no further! I'd love to hear from you and discuss how I can contribute to your success.
        </p>
        <label className="text-left font-medium text-white mt-4">Name</label>
        <input
          type="text"
          name="user_name"
          className="flex justify-start my-4 bg-main-dark-blue px-2 py-2 rounded-xl shadow-md text-silver placeholder:text-gray-700 placeholder:font-medium border-b-gray-400 border-solid"
          placeholder="Your name here" required
        />

        <label className="text-left font-medium text-white">Email</label>
        <input
          type="email"
          name="user_email"
          className="flex justify-start my-4 bg-main-dark-blue px-2 py-2 rounded-xl shadow-md text-silver placeholder:text-gray-700 placeholder:font-medium border-b-gray-400 border-solid"
          placeholder="Your email here" required
        />
        <label className="text-left font-medium text-white">Message</label>
        <textarea
          name="message"
          className="flex justify-start my-4 bg-main-dark-blue px-2 py-2 rounded-xl shadow-md text-silver placeholder:text-gray-700 placeholder:font-medium border-b-gray-400 border-solid h-32"
          placeholder="Your message here" required
        />
        <input
          className="bg-transparent hover:bg-main-cyan flex justify-items-start justify-center items-center duration-300 ease-in h-14 text-silver font-regular hover:text-main-extra-dark-blue w-full cursor-pointer border border-main-cyan hover:border-transparent rounded glow-secondary"
          type="submit"
          value="Send Email"
        />
        {isEmailSent === null && (
          <p className="text-gray-400 pt-6">
            Please enter an email address and click send!
          </p>
        )}
        {isEmailSent === true && (
          <p className="text-green-400 font-semibold ease-in duration-150 pt-6">Email sent!</p>
        )}
        {isEmailSent === false && (
          <p className="text-red-400 font-semibold pt-6">Email couldn't be sent.</p>
        )}
      </form>
    </section>
  );
};

export default ContactUs;
