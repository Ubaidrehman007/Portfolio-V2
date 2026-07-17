import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${name}`;

    const body = `
Name: ${name}

Email: ${email}

Phone: ${phone}

Message:

${message}
`;

    window.location.href = `mailto:urkhan556@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
      "
    >
      <h3 className="text-3xl font-bold text-white">Send a Message</h3>

      <p className="mt-3 text-slate-400">I'd love to hear about your project or opportunity.</p>

      <div className="mt-8 space-y-5">
        <input
          required
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-[#0f172a]
            px-5
            py-4
            text-white
            outline-none
            focus:border-blue-500
          "
        />

        <input
          required
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-[#0f172a]
            px-5
            py-4
            text-white
            outline-none
            focus:border-blue-500
          "
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-[#0f172a]
            px-5
            py-4
            text-white
            outline-none
            focus:border-blue-500
          "
        />

        <textarea
          required
          rows={6}
          placeholder="Tell me about your project..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="
            w-full
            resize-none
            rounded-xl
            border
            border-white/10
            bg-[#0f172a]
            px-5
            py-4
            text-white
            outline-none
            focus:border-blue-500
          "
        />
      </div>

      <button
        type="submit"
        className="
          mt-8
          w-full
          rounded-xl
          bg-blue-600
          px-6
          py-4
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-blue-700
        "
      >
        Send Message
      </button>
    </form>
  );
}
