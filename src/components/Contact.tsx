"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_cvzkl2g",
        "template_lyu8rgf",
        form.current,
        "Mt5lo7DqsN60hQbEA"
      )
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        form.current?.reset();
      })
      .catch(() => alert("Erro ao enviar. Tente novamente."));
  };

  return (
    <section
      id="contact"
      className="my-8 md:my-0 md:min-h-screen flex flex-col items-center justify-center gap-10 p-6"
    >
      <h2 className="text-3xl font-semibold text-gray-100">Entre em Contato</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Seu nome"
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Seu email"
          className="w-full p-3 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Sua mensagem"
          className="w-full p-3 border rounded"
          rows={5}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>
      <div className="flex gap-6">
        <a
          href="https://wa.me/5519982467708"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white text-xl hover:scale-110 transition"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://instagram.com/vinicius_edias/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-800 text-white text-xl hover:scale-110 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/vinicius-ed-dias/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full text-white text-xl bg-blue-600 hover:bg-blue-800 hover:scale-110 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
