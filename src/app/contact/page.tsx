"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass = "w-full border border-[#E8E6DC] bg-transparent px-4 py-3 font-sans text-sm text-[#1C1C1A] focus:outline-none focus:border-[#B84318] transition-colors";

  return (
    <div className="max-w-xl">
      <h1 className="font-serif text-4xl font-bold text-[#1C1C1A] mb-5">
        Get in touch.
      </h1>
      <p className="text-lg text-[#1C1C1A] leading-relaxed mb-10">
        Whether you're looking for a writer, want to talk content strategy, or just want to debate Kansas City barbecue — I'd love to hear from you.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-sans text-sm font-medium uppercase tracking-widest text-[#B84318]">Name</label>
            <input name="name" type="text" required className={inputClass} placeholder="Your name" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-sans text-sm font-medium uppercase tracking-widest text-[#B84318]">Email</label>
            <input name="email" type="email" required className={inputClass} placeholder="your@email.com" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-sans text-sm font-medium uppercase tracking-widest text-[#B84318]">Subject</label>
          <input name="subject" type="text" required className={inputClass} placeholder="What's this about?" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-sans text-sm font-medium uppercase tracking-widest text-[#B84318]">Message</label>
          <textarea name="message" required rows={6} className={inputClass} placeholder="Say hello..." />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="font-sans text-sm uppercase tracking-widest text-[#FEFEFB] bg-[#1C1C1A] px-6 py-3 hover:bg-[#B84318] transition-colors disabled:opacity-50 self-start"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>

        {status === "success" && (
          <p className="font-sans text-sm text-[#B84318]">Message sent! I'll be in touch soon.</p>
        )}
        {status === "error" && (
          <p className="font-sans text-sm text-red-500">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
}