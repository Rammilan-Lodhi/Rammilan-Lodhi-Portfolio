import { motion } from "framer-motion";
import { FiStar, FiCode, FiAward } from "react-icons/fi";
import siteConfig from "../config/siteConfig";

const icons = { code: <FiCode />, certificate: <FiAward />, trophy: <FiStar /> };
const colors = [
  "from-blue-500/20 to-cyan-500/20 text-blue-400",
  "from-violet-500/20 to-pink-500/20 text-violet-400",
  "from-orange-500/20 to-yellow-500/20 text-orange-400",
  "from-green-500/20 to-teal-500/20 text-green-400",
  "from-pink-500/20 to-rose-500/20 text-pink-400",
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle text-slate-400">Milestones and recognitions</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.achievements.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass p-6 rounded-2xl hover:border-blue-400/20 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[i % colors.length]} flex items-center justify-center text-xl mb-4`}>
                {icons[ach.icon] || <FiStar />}
              </div>
              <h3 className="font-bold text-slate-100 mb-1">{ach.title}</h3>
              <p className="text-slate-400 text-sm">{ach.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
