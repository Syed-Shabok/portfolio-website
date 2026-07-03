"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validations
    if (!name.trim()) {
      toast.error("Please enter your name.");
      return;
    }
    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!subject.trim()) {
      toast.error("Please enter a subject.");
      return;
    }
    if (!message.trim()) {
      toast.error("Please enter your message.");
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Sending message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!", { id: toastId });
        // Clear fields
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        toast.error(data.error || "Something went wrong. Please try again.", { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-8 pb-section-gap">
      <div className="glass-panel p-12 rounded-2xl glow-accent border-dashed border-2 border-primary/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <h2 className="font-h2 text-3xl md:text-5xl text-white mb-6">
              Let’s build something <span className="text-primary">impactful</span>.
            </h2>

            <p className="text-on-surface-variant text-md md:text-lg mb-8">
              I’m currently open to opportunities in <span className="text-white">full-stack web development</span>.
              I enjoy building scalable, high-performance applications and modern user experiences using React, Node.js, and related technologies.
            </p>

            <div className="space-y-4 text-sm md:text-base">
              <div className="flex items-center gap-4 text-white">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span>syed.shabok@gmail.com</span>
              </div>

              <div className="flex items-center gap-4 text-white">
                <span className="material-symbols-outlined text-primary">call</span>
                <span>+880 1751 505247</span>
              </div>

              <div className="flex items-center gap-4 text-white">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSubmitting}
                className="bg-surface-container border border-outline-variant p-4 rounded-xl text-white focus:outline-none focus:border-primary transition-colors text-xs md:text-base"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="bg-surface-container border border-outline-variant p-4 rounded-xl text-white focus:outline-none focus:border-primary transition-colors text-xs md:text-base"
              />
            </div>

            <input
              type="text"
              placeholder="Project Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              disabled={isSubmitting}
              className="w-full bg-surface-container border border-outline-variant p-4 rounded-xl text-white focus:outline-none focus:border-primary transition-colors text-xs md:text-base"
            />

            <textarea
              placeholder="Tell me about your project, idea, or opportunity..."
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSubmitting}
              className="w-full bg-surface-container border border-outline-variant p-4 rounded-xl text-white focus:outline-none focus:border-primary transition-colors text-xs md:text-base"
            ></textarea>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-container text-on-primary-container py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 cursor-pointer text-sm md:text-lg"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}