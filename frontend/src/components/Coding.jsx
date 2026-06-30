// import { motion } from "framer-motion";
// import { FiGithub, FiCode } from "react-icons/fi";
// import { SiLeetcode, SiHackerrank } from "react-icons/si";
// import siteConfig from "../config/siteConfig";

// const { githubUsername, leetcodeUsername, hackerrankUsername } = siteConfig.coding;

// export default function Coding() {
//   return (
//     <section id="coding" className="py-20 px-4 md:px-8">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="section-title">
//             Coding <span className="gradient-text">Profiles</span>
//           </h2>
//           <p className="section-subtitle text-slate-400">Where I practice and compete</p>
//         </motion.div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//           {/* GitHub */}
//           <motion.a
//             href={`https://github.com/${githubUsername}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             whileHover={{ y: -6 }}
//             className="glass p-6 rounded-2xl hover:border-gray-400/30 transition-all duration-300 group"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-12 h-12 rounded-xl bg-gray-800/80 flex items-center justify-center text-white text-2xl">
//                 <FiGithub />
//               </div>
//               <div>
//                 <h3 className="font-bold text-slate-100 group-hover:text-white transition-colors">GitHub</h3>
//                 <p className="text-slate-400 text-sm">@{githubUsername}</p>
//               </div>
//             </div>
//             <p className="text-slate-400 text-sm mb-4">Open source contributions, personal projects and MERN stack work.</p>
//             <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">View Profile →</span>
//           </motion.a>

//           {/* LeetCode */}
//           <motion.a
//             href={`https://leetcode.com/${leetcodeUsername}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             whileHover={{ y: -6 }}
//             className="glass p-6 rounded-2xl hover:border-orange-400/30 transition-all duration-300 group"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-12 h-12 rounded-xl bg-orange-900/40 flex items-center justify-center text-orange-400 text-2xl">
//                 <SiLeetcode />
//               </div>
//               <div>
//                 <h3 className="font-bold text-slate-100 group-hover:text-orange-400 transition-colors">LeetCode</h3>
//                 <p className="text-slate-400 text-sm">@{leetcodeUsername}</p>
//               </div>
//             </div>
//             <p className="text-slate-400 text-sm mb-4">150+ DSA problems solved across Arrays, Trees, Graphs, DP and more.</p>
//             <span className="text-xs text-orange-400 font-semibold uppercase tracking-wider">View Profile →</span>
//           </motion.a>

//           {/* HackerRank */}
//           <motion.a
//             href={`https://hackerrank.com/${hackerrankUsername}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             whileHover={{ y: -6 }}
//             className="glass p-6 rounded-2xl hover:border-green-400/30 transition-all duration-300 group"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-12 h-12 rounded-xl bg-green-900/40 flex items-center justify-center text-green-400 text-2xl">
//                 <SiHackerrank />
//               </div>
//               <div>
//                 <h3 className="font-bold text-slate-100 group-hover:text-green-400 transition-colors">HackerRank</h3>
//                 <p className="text-slate-400 text-sm">@{hackerrankUsername}</p>
//               </div>
//             </div>
//             <p className="text-slate-400 text-sm mb-4">Problem solving and certificate challenges across multiple domains.</p>
//             <span className="text-xs text-green-400 font-semibold uppercase tracking-wider">View Profile →</span>
//           </motion.a>
//         </div>

//         {/* GitHub contribution graph */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="glass rounded-2xl p-6"
//         >
//           <h3 className="font-bold text-slate-200 mb-4 flex items-center gap-2">
//             <FiGithub className="text-blue-400" /> GitHub Contribution Graph
//           </h3>
//           <div className="rounded-xl overflow-hidden">
//             <img
//               src={`https://ghchart.rshah.org/3b82f6/${githubUsername}`}
//               alt="GitHub Contribution Chart"
//               className="w-full"
//               onError={(e) => {
//                 e.target.style.display = "none";
//                 e.target.nextSibling.style.display = "flex";
//               }}
//             />
//             {/* Fallback */}
//             <div
//               style={{ display: "none" }}
//               className="h-32 items-center justify-center text-slate-500 text-sm"
//             >
//               {/* PUT GITHUB USERNAME IN siteConfig.js to see the chart */}
//               Update githubUsername in siteConfig.js to see your contribution graph
//             </div>
//           </div>
//         </motion.div>

//         {/* GitHub stats cards */}
//         <div className="grid sm:grid-cols-2 gap-4 mt-6">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="rounded-xl overflow-hidden"
//           >
//             <img
//               src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=3b82f6&icon_color=3b82f6&text_color=94a3b8&bg_color=00000000`}
//               alt="GitHub Stats"
//               className="w-full"
//             />
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="rounded-xl overflow-hidden"
//           >
//             <img
//               src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=transparent&hide_border=true&ring=3b82f6&fire=3b82f6&currStreakLabel=3b82f6`}
//               alt="GitHub Streak"
//               className="w-full"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import siteConfig from "../config/siteConfig";

const { githubUsername, leetcodeUsername, hackerrankUsername } =
  siteConfig.coding;

export default function Coding() {
  return (
    <section id="coding" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Coding <span className="gradient-text">Profiles</span>
          </h2>

          <p className="section-subtitle text-slate-400">
            Where I practice coding, solve DSA problems, and build projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* GitHub */}
          <motion.a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="glass p-6 rounded-2xl hover:border-gray-400/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gray-800/80 flex items-center justify-center text-white text-2xl">
                <FiGithub />
              </div>

              <div>
                <h3 className="font-bold text-slate-100 group-hover:text-white transition-colors">
                  GitHub
                </h3>

                <p className="text-slate-400 text-sm">
                  @{githubUsername}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm mb-4">
              Explore my MERN Stack projects, open-source work, and source code.
            </p>

            <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
              View Profile →
            </span>
          </motion.a>

          {/* LeetCode */}
          <motion.a
            href={`https://leetcode.com/${leetcodeUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="glass p-6 rounded-2xl hover:border-orange-400/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-orange-900/40 flex items-center justify-center text-orange-400 text-2xl">
                <SiLeetcode />
              </div>

              <div>
                <h3 className="font-bold text-slate-100 group-hover:text-orange-400 transition-colors">
                  LeetCode
                </h3>

                <p className="text-slate-400 text-sm">
                  @{leetcodeUsername}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm mb-4">
              Solved 150+ DSA problems covering Arrays, Trees, Graphs,
              Dynamic Programming, and more.
            </p>

            <span className="text-xs text-orange-400 font-semibold uppercase tracking-wider">
              View Profile →
            </span>
          </motion.a>

          {/* HackerRank */}
          <motion.a
            href={`https://hackerrank.com/${hackerrankUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="glass p-6 rounded-2xl hover:border-green-400/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-green-900/40 flex items-center justify-center text-green-400 text-2xl">
                <SiHackerrank />
              </div>

              <div>
                <h3 className="font-bold text-slate-100 group-hover:text-green-400 transition-colors">
                  HackerRank
                </h3>

                <p className="text-slate-400 text-sm">
                  @{hackerrankUsername}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm mb-4">
              Earned certifications and solved programming challenges in
              multiple domains.
            </p>

            <span className="text-xs text-green-400 font-semibold uppercase tracking-wider">
              View Profile →
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}