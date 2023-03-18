"use client";

import { sendContactEmail } from "@/service/contact";
import { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};

function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);

  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sendContactEmail(form)
      .then(() => {
        setBanner({
          message: "메일을 성공적으로 보냈습니다",
          state: "success",
        });
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setBanner({
          message: "메일전송에 실패했습니다. 다시 시도해 주세요",
          state: "error",
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };
  return (
    <>
      <section className="w-full max-w-md">
        {banner && <Banner banner={banner} />}
        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col gap-2 mt-4 p-4 bg-slate-500 rounded-xl text-white"
        >
          <label className="font-semibold">Your Email</label>
          <input
            className="text-black"
            type="email"
            id="from"
            name="from"
            required
            autoFocus
            value={form.from}
            onChange={onChange}
          />

          <label className="font-semibold">Subject</label>
          <input
            className="text-black"
            type="text"
            id="subject"
            name="subject"
            required
            value={form.subject}
            onChange={onChange}
          />

          <label className="font-semibold">Message</label>
          <textarea
            className="text-black"
            rows={10}
            id="message"
            name="message"
            required
            value={form.message}
            onChange={onChange}
          />
          <button className="bg-white text-black rounded-2xl font-bold hover:bg-black hover:text-white">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export default ContactForm;
