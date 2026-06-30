import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import siteConfig from "../config/siteConfig";

const statusColors = {
  "coming-soon": "bg-orange-500/20 text-orange-400 border border-orange-500/30",
  deployed: "bg-green-500/20 text-green-400 border border-green-500/30",
};

function ProjectModal({ project, onClose }) {
  const [imgIdx, setImgIdx] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="glass rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors"
        >
          <FiX />
        </button>

        {/* Image gallery */}
        <div className="w-full h-52 rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-blue-900/50 to-violet-900/50 flex items-center justify-center relative">
          {project.images && project.images.length > 0 ? (
            <>
              <img
                src={project.images[imgIdx]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={() => setImgIdx((i) => (i - 1 + project.images.length) % project.images.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 glass rounded-lg flex items-center justify-center"
                  >
                    <FiChevronLeft />
                  </button>
                  <button
                    onClick={() => setImgIdx((i) => (i + 1) % project.images.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 glass rounded-lg flex items-center justify-center"
                  >
                    <FiChevronRight />
                  </button>
                </>
              )}
            </>
          ) : (
            <div className="text-4xl font-black gradient-text">{project.title[0]}</div>
          )}
        </div>

        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <span className={`text-xs px-2 py-1 rounded-full font-semibold ${statusColors[project.status]}`}>
            {project.badge}
          </span>
        </div>

        <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">Features</h4>
          <div className="flex flex-wrap gap-2">
            {project.features.map((f) => (
              <span key={f} className="text-xs px-2 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20">
                {f}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="skill-badge text-xs">{t}</span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm py-2 px-4">
              <FiGithub /> GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-4">
              <FiExternalLink /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle text-slate-400">Things I've built</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl overflow-hidden group cursor-pointer hover:border-blue-400/30 transition-all duration-300"
              onClick={() => setSelected(project)}
            >
              {/* Project image */}
              <div className="w-full h-44 bg-gradient-to-br from-blue-900/60 to-violet-900/60 flex items-center justify-center overflow-hidden relative">
                {project.images && project.images[0] ? (
                  <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <span className="text-5xl font-black gradient-text opacity-50 group-hover:opacity-70 transition-opacity">
                    {project.title[0]}
                  </span>
                )}
                <div className="absolute top-3 right-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${statusColors[project.status]}`}>
                    {project.badge}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-3 border-t border-white/5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      <FiGithub /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-green-400 transition-colors"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                  <span className="ml-auto text-xs text-slate-500 hover:text-blue-400 transition-colors">View Details →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
