/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import emailjs from "emailjs-com";

import { ScrollRevel } from "./ScrollRevel";
import { useState } from "react";

const SERVICE_ID = process.env.SERVICE_ID!;
const TEMPLATE_ID = process.env.TEMPLATE_ID!;
const API_KEY = process.env.API_KEY_EMAILJS;

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      e.target,
      API_KEY
    );
    if (res) {
      console.log("success");
    }
  };
  return (
    <ScrollRevel>
      <section className="min-h-screen m-0 flex items-center justify-center py-20">
        <div className="px-4 w-screen flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-300 to-red-300 via-purple-300  bg-clip-text text-transparent text-center ">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name..."
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className=" w-[450px] bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className=" w-[450px] bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className=" w-[450px] bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px06 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_0_5px_rgba(59,130,246,0.2)] hover:bg-violet-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </ScrollRevel>
  );
};
