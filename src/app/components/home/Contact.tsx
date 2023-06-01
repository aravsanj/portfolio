"use client";

import React, { useRef, useState } from "react";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";

type Props = {};

const Contact = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const form = useRef<string | HTMLFormElement>();

  function validate(name: string, email: string, message: string): void {
    if (name.length == 0) {
      alert("Name cannot be empty");
      setIsFormValid(false);
    }

    if (email.length == 0) {
      alert("Email field cannot be empty");
      setIsFormValid(false);
    }

    if (!email.includes("@")) {
      alert("Not valid email");
      setIsFormValid(false);
    }

    if (message.length < 100) {
      alert("Message has to be at least 100 characters");
      setIsFormValid(false);
    }
  }

  const sendEmail = (e: any) => {
    e.preventDefault();

    validate(name, email, message);

    if (!isFormValid) {
      setIsFormValid(true);
      return;
    }

    emailjs
      .sendForm(
        "service_x0aptzt",
        "template_gylg2j8",
        // @ts-expect-error

        form.current,
        "qTJskrnpG7Xzl2jQd"
      )
      .then(
        (result: any) => {
          setName("");
          setEmail("");
          setMessage("");
          alert("Thanks for contacting!");
          console.log(result.text);
        },
        (error: any) => {
          alert("OOPS, looks like submission failed");
          console.log(error.text);
        }
      );
  };

  return (
    <section className="flex flex-col gap-y-10 sm:gap-y-14 justify-between items-center p-4  pt-8 pb-20 text-[#101820] bg-[#FDFD96]">
      <div className="flex flex-col gap-y-2 items-center">
        <BsFillChatRightDotsFill className="text-3xl" />
        <h3 className="text-2xl sm:text-3xl">{`Let's chat`}</h3>
      </div>
      <form
        className="flex flex-col gap-y-4 w-[350px]"
        // @ts-ignore
        ref={form}
        id="form"
        onSubmit={sendEmail}
        method="POST"
      >
        <input
          className="pl-4 py-2 rounded-lg"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="pl-4 py-2 rounded-lg"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          name="message"
          rows={5}
          className="w-full pl-4 pt-2 rounded-lg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <input
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer"
          type="submit"
        ></input>
      </form>
    </section>
  );
};

export default Contact;
