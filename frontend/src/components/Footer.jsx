import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import siteConfig from "../config/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 px-4 md:px-8 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-xl font-bold gradient-text">RL.</span>
          <p className="text-slate-500 text-sm mt-1">Full Stack Developer · Bhopal, India</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-slate-500 text-sm"
        >
          Made with <FiHeart className="text-red-400" /> by {siteConfig.name} &copy; {year}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-3"
        >
          {[
            { icon: <FiGithub />, href: siteConfig.social.github, label: "GitHub" },
            { icon: <FiLinkedin />, href: siteConfig.social.linkedin, label: "LinkedIn" },
            { icon: <FiMail />, href: `mailto:${siteConfig.email}`, label: "Email" },
          ].map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="social-icon"
              aria-label={label}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
