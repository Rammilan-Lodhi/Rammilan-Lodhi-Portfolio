import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiMapPin, FiLinkedin } from "react-icons/fi";
import toast from "react-hot-toast";
import siteConfig from "../config/siteConfig";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email.");
      return;
    }
    if (form.message.length < 10) {
      toast.error("Message must be at least 10 characters.");
      return;
    }

    setLoading(true);
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || "";
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message || "Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error(data.message || "Failed to send. Try again.");
      }
    } catch {
      toast.error("Server unavailable. Please email directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle text-slate-400">Let's work together on something great</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6">Let's connect</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                I'm currently looking for new opportunities. Whether you have a project in mind,
                want to collaborate, or just want to say hi — my inbox is always open!
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: <FiMail className="text-blue-400" />, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                  { icon: <FiLinkedin className="text-blue-400" />, label: "LinkedIn", value: "Connect on LinkedIn", href: siteConfig.social.linkedin },
                  { icon: <FiMapPin className="text-blue-400" />, label: "Location", value: siteConfig.location, href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 glass rounded-xl flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-300 text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="glass p-6 rounded-2xl">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Find me on</h4>
              <div className="flex gap-3 flex-wrap">
                {Object.entries(siteConfig.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 glass rounded-xl text-sm text-slate-400 hover:text-blue-400 hover:border-blue-400/30 transition-all duration-200 capitalize"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl flex flex-col gap-5">
              <div>
                <label className="block text-sm text-slate-400 mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Rammilan Lodhi"
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="input-field resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="btn-primary w-full justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                ) : (
                  <><FiSend /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
