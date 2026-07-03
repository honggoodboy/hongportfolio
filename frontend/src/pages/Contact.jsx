import { useState } from "react";
import api from "../services/api";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/messages", form);

      setSuccess("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#FAFAF8]">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-4">
          Contact Me
        </h1>

        <div className="w-24 h-1 bg-[#E6A100] mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div>
  <h2 className="text-2xl font-bold mb-6">
    My Contact Information
  </h2>

  <p className="mb-4">
    Email:
    <br />
    <a
      href="mailto:your@email.com"
      className="text-[#E6A100] hover:underline"
    >
      menghongsoeuung87@gmail.com
    </a>
  </p>


  <p className="mb-4">
    Telegram:
    <br />
    <a
      href="https://t.me/zamuyboutique"
      target="_blank"
      rel="noreferrer"
      className="text-[#E6A100] hover:underline"
    >
      @menghongsoeung
    </a>
  </p>

  <p className="mb-4">
    Phone:
    <br />
    <a
      href="tel:+85587696996"
      className="text-[#E6A100] hover:underline"
    >
      +855 87 696 996
    </a>
  </p>
</div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg mb-4"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg mb-4"
            />

            <button
              type="submit"
              className="bg-[#E6A100] text-white px-6 py-3 rounded-lg"
            >
              Send Message
            </button>

            {success && (
              <p className="text-green-600 mt-4">
                {success}
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}