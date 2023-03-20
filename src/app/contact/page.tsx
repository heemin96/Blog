import ContactForm from "@/components/ContactForm";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

export const metadata = {
  title: "Contact Me",
  description: "김희민에게 메일 보내기",
};

function page() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact me</h2>
      <p>khk8300@naver.com</p>

      <a
        className="text-5xl hover:text-yellow-600 mt-3"
        href="https://github.com/heemin96"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
      </a>

      <h2 className="text-3xl font-bold my-8">Or Send Me An Email</h2>
      <ContactForm />
    </section>
  );
}

export default page;
