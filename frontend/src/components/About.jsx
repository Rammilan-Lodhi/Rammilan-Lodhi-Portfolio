import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FiMapPin, FiMail } from "react-icons/fi";
import siteConfig from "../config/siteConfig";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(end / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 25);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref} className="text-3xl font-black gradient-text">
      {count}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle text-slate-400">
            A passionate developer building things that matter
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: About text */}
          <motion.div {...fadeUp(0.1)}>
            <div className="glass p-8 rounded-2xl h-full">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Career Objective</h3>
              <p className="text-slate-300 leading-relaxed mb-6">{siteConfig.objective}</p>

              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <FiMapPin className="text-blue-400 flex-shrink-0" />
                  <span>{siteConfig.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <FiMail className="text-blue-400 flex-shrink-0" />
                  <span>{siteConfig.email}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-blue-400">Education</h3>
              <div className="flex flex-col gap-4">
                {siteConfig.education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="timeline-dot mt-1.5" />
                    <div className="flex-1 pb-4 border-b border-white/5 last:border-0">
                      <p className="font-semibold text-slate-200">{edu.degree}</p>
                      <p className="text-slate-400 text-sm">{edu.institution}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-slate-500">{edu.year}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-semibold">
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div {...fadeUp(0.2)} className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              {siteConfig.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ scale: 1.04 }}
                  className="counter-card"
                >
                  <Counter end={parseInt(stat.value)} suffix={stat.suffix} />
                  <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4 text-blue-400">Quick Facts</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { label: "Degree", value: "B.Tech CSE (2026)" },
                  { label: "CGPA", value: "8.41" },
                  { label: "Focus", value: "MERN Stack + DSA" },
                  { label: "Status", value: "Open to Work" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                    <span className="text-slate-400 text-sm">{item.label}</span>
                    <span className="text-slate-200 text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
