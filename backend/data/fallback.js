const profile = {
  name: 'Rammilan Lodhi',
  role: 'Full Stack Developer | MERN Stack Developer',
  roles: ['Full Stack Developer', 'MERN Stack Developer'],
  objective:
    'Aspiring Software Engineer with strong foundation in Full Stack Development and DSA focused on scalable applications.',
  location: 'Bhopal, India',
  email: 'rammilanLodhi@email.com',
  phone: '+91-7723929323',
  education: [
    {
      degree: 'B.Tech CSE',
      institution: 'Bansal Institute of Research and Technology',
      year: '2022 – 2026',
      score: 'CGPA: 8.41',
    },
    {
      degree: 'Class XII',
      institution: 'Govt. Model H.S. School, Chanderi',
      year: '2022',
      score: '87.20%',
    },
    {
      degree: 'Class X',
      institution: 'Govt. Model H.S. School, Chanderi',
      year: '2020',
      score: '96%',
    },
  ],
  stats: [
    { label: 'MERN Projects', value: '10+' },
    { label: 'DSA Problems', value: '150+' },
    { label: 'Hackathons', value: '3+' },
    { label: 'Certificates', value: '5+' },
  ],
  social: {
    github: 'https://github.com/Rammilan-Lodhi?tab=repositories',
    linkedin: 'https://www.linkedin.com/in/rammilanlodhi/',
    leetcode: 'https://leetcode.com/u/Rammilan_Lodhi/',
    hackerrank: 'https://www.hackerrank.com/profile/lodhirammilan99',
    instagram: 'https://www.instagram.com/rammilan_rajpoot8610/?hl=en',
  },
};

const projects = [
  {
    id: 1,
    title: 'KrishiSetu',
    slug: 'krishisetu',
    status: 'coming-soon',
    badge: 'Coming Soon',
    description:
      'Direct Farmer-to-Consumer Marketplace connecting farmers directly with consumers, eliminating middlemen.',
    longDescription:
      'KrishiSetu is a full-stack marketplace that empowers farmers to list produce directly. Built with MERN stack, it features JWT authentication, order management, voice-based listing, and Razorpay payment gateway integration.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Razorpay'],
    features: ['JWT Auth', 'Order Management', 'Voice Listing', 'Razorpay'],
    github: 'https://github.com/YOUR_GITHUB_USERNAME/krishisetu',
    live: null,
    images: [],
  },
  {
    id: 2,
    title: 'Zoom Clone',
    slug: 'zoom',
    status: 'coming-soon',
    badge: 'Coming Soon',
    description:
      'Full-featured video conferencing application with real-time video, audio, chat and screen sharing.',
    longDescription:
      'A production-grade Zoom clone built with WebRTC and Socket.io. Supports multi-participant video/audio calls, in-call text chat, and screen sharing — all in the browser with no plugin required.',
    tech: ['React', 'Node.js', 'Socket.io', 'WebRTC', 'Express'],
    features: ['Video Calls', 'Audio Calls', 'Live Chat', 'Screen Share'],
    github: 'https://github.com/YOUR_GITHUB_USERNAME/zoom-clone',
    live: null,
    images: [],
  },
  {
    id: 3,
    title: 'TaskFlow',
    slug: 'taskflow',
    status: 'deployed',
    badge: 'Live',
    description:
      'Full-stack task management system with CRUD operations, admin panel, and real-time tracking.',
    longDescription:
      'TaskFlow is a productivity-focused task manager with role-based access control (admin/user), complete CRUD for tasks, real-time status tracking, and an analytics dashboard.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    features: ['Task CRUD', 'Admin Panel', 'Tracking', 'Analytics'],
    github: 'https://github.com/YOUR_GITHUB_USERNAME/taskflow',
    live: 'https://taskflow.vercel.app',
    images: [],
  },
];

const skills = {
  languages: ['JavaScript', 'C++ (DSA)', 'Java', 'C'],
  frontend: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Bootstrap',
    'Tailwind CSS',
    'Responsive Design',
  ],
  backend: ['Node.js', 'Express.js', 'EJS', 'REST APIs'],
  database: ['MongoDB', 'MySQL'],
  tools: ['Git', 'GitHub', 'Postman', 'VS Code'],
  concepts: ['REST APIs', 'CRUD', 'JWT', 'API Integration', 'OOP'],
  deployment: ['Vercel', 'Render', 'AWS'],
};

const experience = [
  {
    id: 1,
    role: 'React.js Developer Intern',
    company: 'Saarthilms',
    type: 'Intern',
    duration: '2024',
    description:
      "Developed and maintained React.js components for the company's learning management system. Collaborated with the backend team on API integration.",
  },
  {
    id: 2,
    role: 'Full Stack Developer Intern',
    company: 'InternPe',
    type: 'Intern',
    duration: '2023',
    description:
      'Built full-stack features using MERN stack. Gained hands-on experience with production-grade code, version control, and agile workflows.',
  },
];

const achievements = [
  {
    id: 1,
    title: '150+ DSA Problems',
    desc: 'Solved on LeetCode, GeeksForGeeks and HackerRank',
    icon: 'code',
  },
  {
    id: 2,
    title: 'NPTEL DBMS',
    desc: 'Completed NPTEL course on Database Management Systems',
    icon: 'certificate',
  },
  {
    id: 3,
    title: 'Adobe Hackathon',
    desc: "Participated in Adobe's national hackathon",
    icon: 'trophy',
  },
  {
    id: 4,
    title: 'BGI Hackathon',
    desc: 'Competed in BGI national-level hackathon',
    icon: 'trophy',
  },
  {
    id: 5,
    title: 'SIH Internal Hackathon',
    desc: 'Qualified in Smart India Hackathon internal round',
    icon: 'trophy',
  },
];

module.exports = { profile, projects, skills, experience, achievements };
