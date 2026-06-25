export const siteConfig = {
  name: "Gaurav Singh",
  title: "Gaurav Singh | Portfolio",
  description:
    "B.Tech Electrical Engineering student at IIT Jodhpur (2024–2028) interested in backend systems, distributed systems, systems programming, and scalable software infrastructure.",
  url: "https://portfolio-lovat-tau-65.vercel.app/",
  email: "b24ee1020@iitj.ac.in",
  resumeUrl: "/resume.pdf",
  ogImage: "/og-image.png",
  education: {
    degree: "B.Tech in Electrical Engineering",
    institution: "IIT Jodhpur",
    batch: "2024–2028",
    year: "3rd Year",
  },
};

export const socialLinks = {
  github: {
    url: "https://github.com/gaurav-singh2525",
    username: "gaurav-singh2525",
    stats: "",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/gaurav-kumar-singh-565abb27b/",
    username: "Gaurav Kumar Singh",
    stats: "",
  },
  leetcode: {
    url: "https://leetcode.com/u/gaurav_singh_iitj",
    username: "gaurav_singh_iitj",
    stats: "",
  },
  instagram: {
    url: "https://www.instagram.com/gaurav_singh.2811/",
    username: "gaurav_singh.2811",
    stats: "",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Profiles", href: "#profiles" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { label: "500+ DSA Problems Solved", icon: "graduation" },
  { label: "LeetCode Rating: 1700+", icon: "code" },
  { label: "Mini Redis · 95K ops/sec", icon: "database" },
];

export const aboutTimeline = [
  {
    year: "2024",
    title: "Started B.Tech at IIT Jodhpur",
    description:
      "Joined Electrical Engineering (Batch 2024–2028). Built foundations in mathematics, algorithms, and introductory programming.",
  },
  {
    year: "2025",
    title: "Competitive Programming & DSA",
    description:
      "Started solving problems on LeetCode, Codeforces, and other platforms. Built a strong understanding of data structures, algorithms, and problem-solving techniques.",
  },
  {
    year: "2026",
    title: "Systems Programming Projects",
    description:
      "Built Mini Redis in C++, AsyncTasker job queue, and a real-time collaborative code platform — exploring sockets, concurrency, and distributed systems firsthand.",
  },
  {
    year: "Now",
    title: "Backend & Systems Engineering",
    description:
      "Currently focused on backend systems, concurrency, networking, distributed systems, and software engineering through project-driven learning and internship preparation.",
  },
];

export const techStack = {
  Languages: ["C++", "C", "JavaScript", "Go"],
  Backend: [
    "Go (Gin)",
    "Node.js",
    "Express.js",
    "REST APIs",
    "WebSockets"
  ],
  Frontend: ["React"],
  Databases: ["PostgreSQL", "Redis"],
  Systems: [
    "TCP/IP",
    "Socket Programming",
    "Concurrency",
    "Multithreading",
    "Synchronization",
  ],
  Tools: [
    "Git",
    "Linux",
    "Docker",
    "Postman"
  ],
};

export const projects = [
  {
    id: "mini-redis",
    title: "Mini Redis",
    featured: true,
    description:
      "Redis-inspired in-memory key-value store built from scratch in C++. Implements TCP networking, a worker thread pool with synchronization primitives, write-ahead logging, LRU eviction, TTL expiry, and persistence — benchmarked at 95K ops/sec.",
    highlights: [
      "TCP sockets",
      "Worker pool",
      "Concurrency",
      "Synchronization",
      "WAL",
      "Persistence",
      "LRU",
      "TTL",
      "Benchmarking",
    ],
    metrics: [
      { label: "Throughput", value: "95K ops/sec" },
      { label: "Recovery", value: "100K keys in 170ms" },
    ],
    tech: ["C++", "TCP/IP", "Multithreading", "WAL", "LRU"],
    github: "https://github.com/gaurav-singh2525/redis-inspired-db",
    gradient: "from-accent-cyan/20 to-accent-purple/20",
    accentColor: "accent-cyan",
    icon: "database",
  },
  {
    id: "async-tasker",
    title: "AsyncTasker",
    featured: false,
    description:
      "Fault-tolerant distributed background job processing engine. Uses Redis-backed queues, worker pools, retry logic, delayed job scheduling, and crash recovery for reliable background processing.",
    highlights: [
      "Redis queues",
      "Worker pools",
      "Retry logic",
      "Delayed jobs",
      "Crash recovery",
      "Background processing",
    ],
    metrics: [],
    tech: ["Node.js", "Redis", "Docker", "Express"],
    github: "https://github.com/gaurav-singh2525/AsyncTasker",
    gradient: "from-accent-purple/20 to-accent-green/20",
    accentColor: "accent-purple",
    icon: "layers",
  },
  {
    id: "collab-ide",
    title: "Real-Time Collaborative Code Platform",
    featured: false,
    description:
      "Collaborative IDE with live code synchronization and Docker-based sandboxed execution. Built with a Go/Gin backend, WebSocket real-time layer, PostgreSQL persistence, JWT auth, and Monaco Editor.",
    highlights: [
      "Go & Gin",
      "WebSockets",
      "PostgreSQL",
      "JWT",
      "Docker sandboxing",
      "Monaco Editor",
      "Real-time sync",
    ],
    metrics: [],
    tech: ["Go", "Gin", "PostgreSQL", "Docker", "WebSockets", "JWT"],
    github: "https://github.com/gaurav-singh2525/collab_platfrom",
    gradient: "from-accent-green/20 to-accent-cyan/20",
    accentColor: "accent-green",
    icon: "terminal",
  },
];

export const achievements = [
  {
    value: 500,
    suffix: "+",
    label: "DSA Problems Solved",
    description: "Across LeetCode, Codeforces, and other platforms",
  },
  {
    value: 1700,
    suffix: "+",
    label: "LeetCode Rating",
    description: "Contest rating through regular practice",
  },
  {
    value: null,
    display: "∞",
    subDisplay: "Songs",
    label: "Addicted",
    description: "One playlist away from forgetting every problem",
  },
  {
    value: 3,
    suffix: "+",
    label: "Systems Projects",
    description: "Mini Redis, AsyncTasker, Collab IDE",
  },
];
