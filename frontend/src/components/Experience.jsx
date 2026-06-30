import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import siteConfig from "../config/siteConfig";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle text-slate-400">My professional journey</p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-violet-500/40 to-transparent" />

          <div className="flex flex-col gap-10">
            {siteConfig.experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-6"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 glass rounded-2xl flex items-center justify-center z-10 shadow-lg shadow-blue-500/10">
                  <FiBriefcase className="text-blue-400 text-xl" />
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex-1 glass p-6 rounded-2xl hover:border-blue-400/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                    <div>
                      <h3 className="font-bold text-lg text-slate-100">{exp.role}</h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 font-semibold">
                        {exp.type}
                      </span>
                      <span className="text-xs text-slate-500">{exp.duration}</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
