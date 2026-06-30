import zoomImage from '../assets/projects/zoom/Zoom_Clone.png';
import taskflowImage from '../assets/projects/taskflow/Task_Manager.png';
import krishiSetuImage from '../assets/projects/krishisetu/KrishiSetu_Overview.png';
import profileImage from '../assets/profile/profile.jpg';
import resumePdf from '../assets/resume/resume.pdf';

import nptelDbms from '../assets/certificates/nptel-dbms.pdf';
import javaInfosys from '../assets/certificates/java-infosys.pdf';
import bgiHackathon from '../assets/certificates/bgi-hackathon.pdf';
import sihInternal from '../assets/certificates/sih-internal.jpg';
const siteConfig = {
  // ──────────────────────────────────────────────────
  // PERSONAL INFO
  // ──────────────────────────────────────────────────
  name: 'Rammilan Lodhi',
  roles: ['Full Stack Developer', 'MERN Stack Developer', 'Problem Solver'],
  objective:
    'MERN Stack Developer with hands-on experience building full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Strong foundation in Data Structures & Algorithms and REST API development.',
  location: 'Bhopal, India',

  email: 'rammilanlodhi822@email.com',

  phone: '+91-7723929323',

  profileImage: profileImage,

  resumePath: resumePdf,

  social: {
    github: 'https://github.com/Rammilan-Lodhi?tab=repositories',

    linkedin: 'https://www.linkedin.com/in/rammilanlodhi/',

    leetcode: 'https://leetcode.com/u/Rammilan_Lodhi/',

    hackerrank: 'https://www.hackerrank.com/profile/lodhirammilan99',

    instagram: 'https://www.instagram.com/rammilan_rajpoot8610/?hl=en',
  },

  // ──────────────────────────────────────────────────
  // STATS / COUNTERS (About section)
  // ──────────────────────────────────────────────────
  stats: [
    { label: 'MERN Projects', value: 10, suffix: '+' },
    { label: 'DSA Problems', value: 150, suffix: '+' },
    { label: 'Hackathons', value: 3, suffix: '+' },
    { label: 'Certificates', value: 5, suffix: '+' },
  ],

  // ──────────────────────────────────────────────────
  // EDUCATION
  // ──────────────────────────────────────────────────
  education: [
    {
      degree: 'B.Tech CSE',
      institution: 'Bansal Institute of Research and Technology Bhopal',
      year: '2023 – 2027',
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

  // ──────────────────────────────────────────────────
  // SKILLS
  // ──────────────────────────────────────────────────
  skills: {
    Languages: ['JavaScript', 'C++ (DSA)', 'Java', 'C'],
    Frontend: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Bootstrap',
      'Tailwind CSS',
      'Responsive Design',
    ],
    Backend: ['Node.js', 'Express.js', 'EJS', 'REST APIs'],
    Database: ['MongoDB', 'MySQL'],
    Tools: ['Git', 'GitHub', 'Postman', 'VS Code'],
    Concepts: ['REST APIs', 'CRUD', 'JWT', 'API Integration', 'OOP'],
    Deployment: ['Vercel', 'Render', 'AWS'],
  },

  //Projects
  projects: [
    {
      id: 1,
      title: 'KrishiSetu',
      slug: 'krishisetu',

      status: 'development',
      badge: 'Hackathon Project',

      description:
        'A Direct Farmer-to-Consumer Digital Marketplace that eliminates middlemen by enabling farmers to sell directly to consumers. The platform provides  smart price recommendations,  voice-enabled product listing, secure online payments, and real-time order tracking to ensure fair pricing, higher farmer income, and a seamless buying experience.',

      tech: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT',
        'Razorpay',
        'Google Maps API',
        'Web Speech API',
        'i18next',
      ],

      features: [
        'Direct Farmer-to-Consumer Marketplace',
        'Middleman-Free Trading',
        'Smart Price Recommendation',
        'Voice Product Listing',
        'JWT Authentication',
        'Farmer Dashboard',
        'Consumer Dashboard',
        'Admin Dashboard',
        'Delivery Partner Dashboard',
        'Real-time Order Tracking',
        'Secure Razorpay Payments',
        'Location-based Product Discovery',
        'Inventory Management',
      ],

      github:
        'https://github.com/Rammilan-Lodhi/krishisetu-f2c-platform-Farmer-to-Consumer-',

      live: null,

      images: [krishiSetuImage],
    },

    {
      id: 2,
      title: 'Zoom Clone',
      slug: 'zoom',

      status: 'Live',
      badge: 'Live Demo',

      description:
        'A modern full-stack video conferencing platform built with WebRTC and Socket.IO that enables secure one-to-one and group meetings with HD video, crystal-clear audio, screen sharing, live chat, authentication, and real-time communication.',

      tech: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Socket.IO',
        'WebRTC',
        'JWT',
      ],

      features: [
        'HD Video Meetings',
        'Audio Calls',
        'Real-time Chat',
        'Screen Sharing',
        'JWT Authentication',
        'WebRTC Communication',
        'Socket.IO Real-time Signaling',
        'Participant Management',
        'Responsive User Interface',
      ],

      github:
        'https://github.com/Rammilan-Lodhi/Zoom-Clone-Real-Time-Video-Conferencing-Platform',

      live: ' https://zoom-clone-real-time-video-conferen-weld.vercel.app',

      images: [zoomImage],
    },

    {
      id: 3,
      title: 'TaskFlow',
      slug: 'taskflow',

      status: 'live',
      badge: 'Live Demo',

      description:
        'A scalable MERN Stack task management platform that helps teams organize work efficiently through secure authentication, role-based access control, task assignment, progress tracking, analytics, and an intuitive admin dashboard.',

      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],

      features: [
        'Task CRUD Operations',
        'Role-Based Access Control',
        'JWT Authentication',
        'Admin Dashboard',
        'Task Assignment',
        'Progress Tracking',
        'Analytics Dashboard',
        'User Management',
        'Responsive Design',
        'RESTful APIs',
      ],

      github: 'https://github.com/Rammilan-Lodhi/scalable-task-manager',

      live: 'https://scalable-task-manager-amber.vercel.app',

      images: [taskflowImage],
    },
  ],

  // ──────────────────────────────────────────────────
  // EXPERIENCE
  // ──────────────────────────────────────────────────
  experience: [
    {
      role: 'MERN Stack Developer Intern',
      company: 'Xyzon Innovations Private Limited',
      type: 'Internship',
      duration: 'May 2026 – Present',
      description:
        'Working on MERN Stack development using MongoDB, Express.js, React.js, and Node.js. Developing frontend and backend features, integrating REST APIs, fixing bugs, and building responsive user interfaces.',
    },
    {
      role: 'React.js Developer Intern',
      company: 'Saarthilms',
      type: 'Internship',
      duration: 'Dec 2025 – Jan 2026',
      description:
        'Developed reusable React.js components, integrated REST APIs, collaborated using Git and GitHub, and worked on assigned frontend development tasks.',
    },
  ],

  // ──────────────────────────────────────────────────
  // ACHIEVEMENTS
  // ──────────────────────────────────────────────────
  achievements: [
    {
      title: '150+ DSA Problems',
      desc: 'Solved on LeetCode and HackerRank',
    },
    {
      title: 'Elite NPTEL DBMS',
      desc: 'Earned Elite certification in Database Management Systems.',
    },
    {
      title: 'Programming using Java',
      desc: 'Completed the Infosys Springboard Java programming course.',
    },
    {
      title: 'BGI Hackathon 2026',
      desc: 'Participated in the national-level BGI Hackathon focused on innovation.',
    },
    {
      title: 'Smart India Hackathon 2025',
      desc: 'Participated in the internal Smart India Hackathon conducted at BIRT Bhopal.',
    },
  ],

  // ──────────────────────────────────────────────────
  // CERTIFICATES
  // PUT CERTIFICATE FILES IN: frontend/src/assets/certificates/
  // ──────────────────────────────────────────────────
  certificates: [
    {
      title: 'Elite NPTEL DBMS',
      issuer: 'NPTEL',
      year: '2025',
      file: nptelDbms,
    },
    {
      title: 'Programming using Java',
      issuer: 'Infosys Springboard',
      year: '2025',
      file: javaInfosys,
    },
    {
      title: 'BGI Hackathon 2026',
      issuer: 'Bansal Group of Institutes',
      year: '2026',
      file: bgiHackathon,
    },
    {
      title: 'Smart India Hackathon 2025 (Internal)',
      issuer: 'Bansal Institute of Research & Technology',
      year: '2025',
      file: sihInternal,
    },
  ],

  // ──────────────────────────────────────────────────
  // CODING PROFILES
  // PUT USERNAMES BELOW
  // ──────────────────────────────────────────────────
  coding: {
    // PUT GITHUB USERNAME HERE
    githubUsername: 'Rammilan-Lodhi',

    // PUT LEETCODE USERNAME HERE
    leetcodeUsername: 'Rammilan_Lodhi',

    // PUT HACKERRANK USERNAME HERE
    hackerrankUsername: 'lodhirammilan99',
  },
};

export default siteConfig;
