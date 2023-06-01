import React from "react";
import { BsFillChatRightDotsFill } from "react-icons/bs";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section className="flex flex-col gap-y-10 sm:gap-y-14 justify-between items-center p-4  pt-8 pb-20 text-[#101820] bg-[#FDFD96]">
      <div className="flex flex-col gap-y-2 items-center">
        <BsFillChatRightDotsFill className="text-3xl" />
        <h3 className="text-2xl sm:text-3xl">Let's chat</h3>
      </div>
      <form
        className="flex flex-col gap-y-4 w-[350px]"
        action="https://formsubmit.co/saravind436@gmail.com"
        method="POST"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://portfolio-one-pi-35.vercel.app/" />
        <input
          className="pl-4 py-2"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="pl-4 py-2"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          placeholder="Your Message"
          class="pl-4 pt-2"
          name="message"
          rows="5"
          className="w-full"
          required
        ></textarea>
        <button
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
