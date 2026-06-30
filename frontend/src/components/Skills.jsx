import { motion } from "framer-motion";
import siteConfig from "../config/siteConfig";

const categoryColors = {
  Languages: "text-yellow-400",
  Frontend: "text-blue-400",
  Backend: "text-green-400",
  Database: "text-orange-400",
  Tools: "text-purple-400",
  Concepts: "text-cyan-400",
  Deployment: "text-pink-400",
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="section-subtitle text-slate-400">Technologies I work with</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(siteConfig.skills).map(([category, skills], ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass p-6 rounded-2xl hover:border-blue-400/20 transition-all duration-300"
            >
              <h3 className={`font-bold text-sm uppercase tracking-wider mb-4 ${categoryColors[category] || "text-blue-400"}`}>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.05 + si * 0.03 }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
