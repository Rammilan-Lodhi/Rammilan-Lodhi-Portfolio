import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiX, FiAward } from "react-icons/fi";
import siteConfig from "../config/siteConfig";

export default function Certificates() {
  const [preview, setPreview] = useState(null);

  return (
    <section id="certificates" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Certificates</span>
          </h2>
          <p className="section-subtitle text-slate-400">
            Certifications and credentials
            {/* PUT CERTIFICATE FILES IN: frontend/src/assets/certificates/ */}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass p-6 rounded-2xl flex flex-col gap-3 hover:border-blue-400/30 transition-all duration-300 cursor-pointer group"
              onClick={() => cert.file && setPreview(cert)}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center text-blue-400 text-xl">
                <FiAward />
              </div>
              <div>
                <h3 className="font-bold text-slate-100 group-hover:text-blue-400 transition-colors">{cert.title}</h3>
                <p className="text-slate-400 text-sm">{cert.issuer}</p>
                <p className="text-slate-500 text-xs mt-1">{cert.year}</p>
              </div>
              {cert.file ? (
                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={(e) => { e.stopPropagation(); setPreview(cert); }}
                    className="flex-1 text-xs py-2 px-3 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors font-medium"
                  >
                    Preview
                  </button>
                  <a
                    href={cert.file}
                    download
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-xs py-2 px-3 rounded-lg bg-white/5 text-slate-400 hover:text-blue-400 transition-colors font-medium"
                  >
                    <FiDownload />
                  </a>
                </div>
              ) : (
                <p className="text-xs text-slate-600 mt-auto italic">
                  {/* PUT CERTIFICATE FILE AT: frontend/src/assets/certificates/ */}
                  Place file in assets/certificates/
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)" }}
            onClick={() => setPreview(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="glass rounded-2xl p-4 max-w-3xl w-full max-h-[90vh] overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">{preview.title}</h3>
                <button
                  onClick={() => setPreview(null)}
                  className="w-8 h-8 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-white"
                >
                  <FiX />
                </button>
              </div>
              {preview.file && preview.file.endsWith(".pdf") ? (
                <iframe src={preview.file} className="w-full h-[70vh] rounded-xl" title={preview.title} />
              ) : preview.file ? (
                <img src={preview.file} alt={preview.title} className="w-full max-h-[70vh] object-contain rounded-xl" />
              ) : null}
              <div className="mt-4 flex justify-end">
                <a href={preview.file} download className="btn-primary text-sm py-2">
                  <FiDownload /> Download
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
