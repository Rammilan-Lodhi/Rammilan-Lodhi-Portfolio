import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import siteConfig from "../config/siteConfig";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const FloatingShape = ({ className, delay = 0, size = 120 }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
    style={{ width: size, height: size }}
    animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
    transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = siteConfig.resumePath;
    link.download = "Rammilan_Lodhi_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Floating blobs */}
      <FloatingShape className="bg-blue-600 top-1/4 left-1/4" delay={0} size={300} />
      <FloatingShape className="bg-violet-600 bottom-1/4 right-1/4" delay={3} size={250} />
      <FloatingShape className="bg-cyan-500 top-1/3 right-1/3" delay={6} size={180} />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              delay: Math.random() * 5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div {...fadeUp(0.1)}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-xs font-semibold text-blue-400 uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Opportunities
            </span>
          </motion.div>

          <motion.p {...fadeUp(0.2)} className="text-slate-400 font-mono text-sm mb-2">
            Hi, I'm
          </motion.p>

          <motion.h1
            {...fadeUp(0.3)}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none mb-4"
          >
            <span className="gradient-text">Rammilan</span>
            <br />
            <span style={{ color: "var(--text-primary)" }}>Lodhi</span>
          </motion.h1>

          <motion.div {...fadeUp(0.4)} className="text-xl md:text-2xl font-semibold text-blue-400 mb-6 h-8">
            <TypeAnimation
              sequence={siteConfig.roles.flatMap((role) => [role, 2000])}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p {...fadeUp(0.5)} className="text-slate-400 max-w-xl mb-8 leading-relaxed">
            {siteConfig.objective}
          </motion.p>

          <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-3 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="btn-primary"
            >
              <FiDownload /> Resume
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-outline"
            >
              Projects <FiArrowRight />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-primary"
              style={{ background: "rgba(139,92,246,0.9)" }}
            >
              Hire Me
            </motion.a>
          </motion.div>

          <motion.div {...fadeUp(0.7)} className="flex gap-3 mt-8 justify-center md:justify-start">
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
                whileHover={{ scale: 1.15, y: -3 }}
                className="social-icon"
                aria-label={label}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-shrink-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 p-1">
              <div className="w-full h-full rounded-3xl overflow-hidden bg-slate-900 flex items-center justify-center">
                {/* PUT PROFILE IMAGE AT: frontend/src/assets/profile/profile.jpg */}
                <img
                  src={siteConfig.profileImage}
                  alt="Rammilan Lodhi"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  style={{ display: "none" }}
                  className="w-full h-full items-center justify-center text-6xl font-black gradient-text"
                >
                  RL
                </div>
              </div>
            </div>
            {/* Glow ring */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-cyan-500/20 blur-xl -z-10" />

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-3 -right-3 glass px-3 py-1.5 rounded-xl text-xs font-semibold text-green-400"
            >
              Open to Work
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
              className="absolute -bottom-3 -left-3 glass px-3 py-1.5 rounded-xl text-xs font-semibold text-blue-400"
            >
              MERN Developer
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-500 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center pt-1"
        >
          <div className="w-1 h-2 rounded-full bg-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
