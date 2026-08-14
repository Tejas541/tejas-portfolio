import React, { useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Brain, Code, Lightbulb, ExternalLink, Sparkles, Terminal, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import profileImage from '../imports/WhatsApp_Image_2026-07-23_at_12.49.44_PM.jpeg';

const LINKEDIN_URL = "https://www.linkedin.com/in/tejas-abhang-e5d41a/";
const GITHUB_URL = "https://github.com/Tejas541";
const RESUME_URL = "#";

export default function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-foreground font-[family-name:var(--font-sans)] selection:bg-white/20 selection:text-white relative overflow-hidden">
      {/* Controlled, Elegant Gradient Blobs for Glassmorphism */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="absolute top-[20%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-pink-600/10 blur-[130px]" />
        <div className="absolute bottom-[20%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-mint-500/10 blur-[100px]" style={{ backgroundColor: 'rgba(52, 211, 153, 0.08)' }} />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[50vw] h-[20vw] rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedProjects />
        <ExploringSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl px-6 py-4 flex justify-between items-center shadow-2xl">
        <a href="#hero" className="text-sm font-bold tracking-widest font-[family-name:var(--font-display)] relative z-50">
          TEJAS ABHANG
        </a>
        <nav className="hidden lg:flex gap-6 text-sm font-medium items-center">
          <a href="#hero" className="text-white/70 hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-white/70 hover:text-white transition-colors">Projects</a>
          <a href="#exploring" className="text-white/70 hover:text-white transition-colors">Exploring</a>
          <a href="#experience" className="text-white/70 hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
          <div className="w-px h-4 bg-white/20 mx-2"></div>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-1">LinkedIn ↗</a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-1">GitHub ↗</a>
        </nav>
        <a href="#contact" className="hidden lg:inline-flex items-center justify-center text-xs font-semibold bg-white text-black px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors">
          Let's Connect &rarr;
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden relative z-50 p-1 -mr-1 text-white/70 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#030303]/95 backdrop-blur-2xl lg:hidden flex flex-col pt-32 px-8 pb-8 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 text-xl font-[family-name:var(--font-display)] font-semibold">
              <a href="#hero" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">Home</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">Projects</a>
              <a href="#exploring" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">Exploring</a>
              <a href="#experience" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">Experience</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">Contact</a>

              <div className="w-full h-px bg-white/10 my-2"></div>

              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition-colors flex items-center justify-between">LinkedIn <span>↗</span></a>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition-colors flex items-center justify-between">GitHub <span>↗</span></a>

              <a href="#contact" onClick={() => setIsOpen(false)} className="mt-6 inline-flex items-center justify-center text-sm font-semibold bg-white text-black px-6 py-4 rounded-xl hover:bg-white/90 transition-colors w-full">
                Let's Connect &rarr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 pt-32 pb-20 relative z-10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

        {/* Text Content */}
        <div className="flex flex-col items-start text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md text-xs font-medium text-white/80 uppercase tracking-widest"
          >
            <Terminal className="w-4 h-4 text-violet-400" /> AI & Data Science Student
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-[family-name:var(--font-display)] font-bold tracking-tight mb-6"
          >
            Hey, I'm Tejas.<br />
            I explore AI by building <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400">real-world solutions</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-white/60 leading-relaxed max-w-xl mb-6"
          >
            AI & Data Science engineering student exploring Artificial Intelligence, Generative AI, programming and data-driven technologies through hands-on learning and projects.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-sm font-medium text-white/50 mb-10"
          >
            Currently exploring: AI • Generative AI • Programming • Data • Problem Solving
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold bg-white text-black px-8 py-4 rounded-full hover:bg-white/90 transition-colors"
            >
              View My Projects &rarr;
            </a>
            <button
              disabled
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold bg-white/[0.05] border border-white/10 text-white/50 px-8 py-4 rounded-full cursor-not-allowed backdrop-blur-sm"
            >
              Resume Coming Soon
            </button>
          </motion.div>
        </div>

        {/* Visual Content - Photo & Floating Cards */}
        <div className="relative order-1 lg:order-2 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-md aspect-square"
          >
            {/* Center Photo Container */}
            <div className="absolute inset-8 rounded-full bg-white/[0.02] border border-white/10 backdrop-blur-2xl p-3 overflow-hidden flex items-center justify-center z-10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/30 to-orange-500/30 rounded-full animate-pulse opacity-50" style={{ animationDuration: '4s' }} />
              <img
                src={profileImage}
                alt="Tejas Abhang"
                className="w-full h-full object-cover rounded-full relative z-10 border border-white/10"
              />
            </div>

            {/* Floating Card 1: AI/ML */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-[0%] -left-[5%] lg:top-[10%] lg:left-0 z-20 bg-white/[0.05] border border-white/15 backdrop-blur-xl px-3 py-2 lg:px-4 lg:py-3 rounded-2xl flex items-center gap-2 lg:gap-3 shadow-lg"
            >
              <div className="p-1.5 lg:p-2 rounded-full bg-violet-500/20 text-violet-300"><Brain className="w-4 h-4 lg:w-5 lg:h-5" /></div>
              <span className="text-xs lg:text-sm font-semibold text-white/90">AI / ML</span>
            </motion.div>

            {/* Floating Card 2: Generative AI */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[5%] -right-[5%] lg:bottom-[20%] lg:right-[-5%] z-20 bg-white/[0.05] border border-white/15 backdrop-blur-xl px-3 py-2 lg:px-4 lg:py-3 rounded-2xl flex items-center gap-2 lg:gap-3 shadow-lg"
            >
              <div className="p-1.5 lg:p-2 rounded-full bg-blue-500/20 text-blue-300"><Sparkles className="w-4 h-4 lg:w-5 lg:h-5" /></div>
              <span className="text-xs lg:text-sm font-semibold text-white/90">Generative AI</span>
            </motion.div>

            {/* Floating Card 3: Python */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[0%] -left-[5%] lg:bottom-[10%] lg:left-[5%] z-20 bg-white/[0.05] border border-white/15 backdrop-blur-xl px-3 py-2 lg:px-4 lg:py-3 rounded-2xl flex items-center gap-2 lg:gap-3 shadow-lg"
            >
              <div className="p-1.5 lg:p-2 rounded-full bg-orange-500/20 text-orange-300"><Code className="w-4 h-4 lg:w-5 lg:h-5" /></div>
              <span className="text-xs lg:text-sm font-semibold text-white/90">Python</span>
            </motion.div>

            {/* Floating Card 4: Learning by Building */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }}
              className="absolute top-[5%] -right-[10%] lg:top-[20%] lg:right-[-10%] z-20 bg-white/[0.05] border border-white/15 backdrop-blur-xl px-3 py-2 lg:px-4 lg:py-3 rounded-2xl flex items-center gap-2 lg:gap-3 shadow-lg"
            >
              <div className="p-1.5 lg:p-2 rounded-full bg-pink-500/20 text-pink-300"><Lightbulb className="w-4 h-4 lg:w-5 lg:h-5" /></div>
              <span className="text-xs lg:text-sm font-semibold text-white/90">Learning by Building</span>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 relative z-10 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-display)] font-bold mb-6 tracking-tight">
              More than just code.
            </h2>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                I'm an AI & Data Science engineering student interested in understanding how technology can be used to solve practical problems. I'm currently exploring AI, Generative AI, programming and data-driven technologies while developing my technical and problem-solving abilities through projects, experiments and continuous learning.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl max-w-sm w-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-violet-500/10 blur-[60px] rounded-full pointer-events-none" />
              <h3 className="text-lg font-bold text-white/90 mb-6 font-[family-name:var(--font-display)]">My approach</h3>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center text-sm font-bold">1</div>
                  <span className="text-white/80 font-medium">Learn</span>
                </div>
                <div className="w-px h-6 bg-white/10 ml-4"></div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-violet-500/20 text-violet-300 flex items-center justify-center text-sm font-bold">2</div>
                  <span className="text-white/80 font-medium">Experiment</span>
                </div>
                <div className="w-px h-6 bg-white/10 ml-4"></div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-300 flex items-center justify-center text-sm font-bold">3</div>
                  <span className="text-white/80 font-medium">Build</span>
                </div>
                <div className="w-px h-6 bg-white/10 ml-4"></div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-300 flex items-center justify-center text-sm font-bold">4</div>
                  <span className="text-white/80 font-medium">Improve</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    id: 1,
    title: 'DriveGuard AI',
    subtitle: 'Predictive Risk-Aware Route Advisory',
    description: 'A college team project exploring an AI-based safety-intelligence layer for route planning in ADAS and autonomous driving. The concept evaluates route-level risk and provides risk-aware route recommendations rather than optimizing only for distance and travel time.',
    labels: ['Team Project', 'College Project', 'AI', 'Road Safety', 'Smart Mobility'],
    contribution: 'Documentation, research and project presentation.',
    link: 'DRIVEGUARD_PROJECT_URL',
    color: 'from-violet-500/20',
    placeholderImg: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop&auto=format'
  },
  {
    id: 2,
    title: 'Hand Gesture Analyzer',
    subtitle: 'Computer Vision & Recognition',
    description: 'A college team project focused on analyzing and recognizing hand gestures using a dataset sourced from Kaggle.',
    labels: ['Team Project', 'College Project', 'Computer Vision', 'AI/ML'],
    contribution: null,
    link: 'HAND_GESTURE_PROJECT_URL',
    color: 'from-blue-500/20',
    placeholderImg: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop&auto=format'
  }
];

function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-display)] font-bold mb-4 tracking-tight">Projects & Experiments</h2>
        </div>

        <div className="space-y-12">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className="group relative flex flex-col md:flex-row bg-white/[0.02] border border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/[0.04] transition-all duration-500 backdrop-blur-xl p-6 md:p-10 gap-8">

              {/* Project Visual Placeholder */}
              <div className="md:w-[45%] relative aspect-video md:aspect-auto rounded-xl overflow-hidden bg-black border border-white/10">
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} to-transparent opacity-60 z-10 pointer-events-none group-hover:opacity-80 transition-opacity duration-500`} />
                <img
                  src={project.placeholderImg}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2 block">Project 0{index + 1}</span>
                  <h3 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white/90">{project.title}</h3>
                  <p className="text-lg font-medium text-white/60 mt-1">{project.subtitle}</p>
                </div>

                <p className="text-white/60 text-base leading-relaxed mb-6">{project.description}</p>

                {project.contribution && (
                  <div className="mb-6 bg-white/[0.02] rounded-xl p-4 border border-white/5">
                    <span className="text-xs font-medium text-white/40 uppercase tracking-widest block mb-1">My Contribution</span>
                    <p className="text-white/80 text-sm">{project.contribution}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.labels.map(label => (
                    <span key={label} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/70">
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExploringSection() {
  const exploring = [
    {
      title: "Artificial Intelligence",
      desc: "Exploring AI concepts and practical applications."
    },
    {
      title: "Generative AI",
      desc: "Exploring generative AI, prompting and modern AI tools."
    },
    {
      title: "Programming",
      desc: "Building my programming foundation with Python, C and C++."
    },
    {
      title: "Data & Analytics",
      desc: "Exploring data-driven thinking and analysis."
    },
    {
      title: "Problem Solving",
      desc: "Developing the ability to turn ideas and problems into practical solutions."
    },
    {
      title: "Entrepreneurship",
      desc: "Exploring business, product thinking and entrepreneurship."
    }
  ];

  return (
    <section id="exploring" className="py-24 px-6 md:px-12 relative z-10 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-display)] font-bold mb-12 tracking-tight">
          Currently Exploring
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exploring.map(item => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md hover:bg-white/[0.05] transition-all cursor-default"
            >
              <h3 className="text-lg font-bold text-white/90 mb-2 font-[family-name:var(--font-display)]">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      role: "Business Associate",
      org: "WellWith Official",
      date: "June 2025 – May 2026",
      bullets: [
        "Planned and structured presentations.",
        "Generated leads through direct messaging.",
        "Developed communication skills through interactions with prospects and team members.",
        "Built and maintained professional relationships."
      ],
      skills: "Presentation Planning · Lead Generation · Direct Messaging · Communication · Relationship Building"
    }
  ];

  const education = [
    {
      role: "B.Tech — Artificial Intelligence & Data Science",
      org: "Marathwada Mitra Mandal's College of Engineering, Pune",
      date: "Current",
      description: "My current academic journey exploring the foundational and advanced concepts of AI, programming, and data-driven systems."
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Education Timeline */}
        <div>
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold mb-10 tracking-tight">Education</h2>
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="relative bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/[0.04] transition-colors">
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white/90 mb-1">{edu.role}</h3>
                <h4 className="text-white/60 font-medium mb-4">{edu.org}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold mb-10 tracking-tight">My Journey</h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/[0.04] transition-colors">
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white/90 mb-1">{exp.role}</h3>
                <h4 className="text-white/60 font-medium mb-1">{exp.org}</h4>
                <p className="text-white/40 text-sm mb-4">{exp.date}</p>
                <div className="text-white/50 text-sm leading-relaxed">
                  <p className="mb-2 font-medium text-white/60">What I Worked On:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <p className="text-white/40 text-xs leading-relaxed">{exp.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function CertificationsSection() {
  const certs = [
    {
      name: "Prompt Design in Vertex AI Skill Badge",
      org: "Google",
      year: "Issued August 2026",
      url: "https://www.credly.com/badges/a2681c9a-f59a-4590-9686-5303502ba600/linked_in_profile"
    },
    {
      name: "Certificate of Participation in CampusCrew: 100K Special Certificate Distribution of Google Gemini QuizOff 2026",
      org: "Unstop",
      year: "Issued June 2026",
      url: "https://unstop.com/certificate-preview/2e555dea-2aee-46de-b9df-07eb344cab0c?utm_campaign=site-emails"
    },
    {
      name: "Google Analytics Certification",
      org: "Skillshop",
      year: "Issued April 2026 · Expires April 2027",
      url: "https://skillshop.credential.net/9e52ed3e-4be1-49db-b32b-0c090a177821#acc.w4QziVTc"
    },
    {
      name: "Google Ads Search Certification",
      org: "Skillshop",
      year: "Issued August 2026 · Expires April 2027",
      url: "https://skillshop.credential.net/29953bad-82ca-492a-b38b-c5380ef43362#acc.3SdpmsLR"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 relative z-10 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold mb-8 tracking-tight">Certifications & Learning</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certs.map((cert, idx) => (
            <div key={idx} className="bg-white/[0.02] border border-white/10 rounded-xl p-5 flex justify-between items-center hover:bg-white/[0.04] transition-colors">
              <div>
                <h3 className="font-bold text-white/90 text-base">{cert.name}</h3>
                <p className="text-white/50 text-sm mt-1">{cert.org} &middot; {cert.year}</p>
              </div>
              <a
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white inline-flex items-center gap-1"
              >
                View ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Unable to send the message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-5xl mx-auto bg-white/[0.02] border border-white/10 backdrop-blur-2xl rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-display)] font-bold mb-6 tracking-tight">
              Let's build something useful.
            </h2>

            <p className="text-white/60 text-lg mb-10 max-w-sm">
              Have an idea, project or opportunity? I'd be happy to connect.
            </p>

            <div className="space-y-6 mb-12">
              <a
                href="mailto:tejabhang2006@gmail.com"
                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:bg-white/[0.1] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-xs font-medium text-white/40 uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <p className="text-sm font-medium">
                    tejabhang2006@gmail.com
                  </p>
                </div>
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:bg-white/[0.1] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-xs font-medium text-white/40 uppercase tracking-wider mb-1">
                    LinkedIn
                  </p>
                  <p className="text-sm font-medium">
                    Connect on LinkedIn ↗
                  </p>
                </div>
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:bg-white/[0.1] transition-colors">
                  <Github className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-xs font-medium text-white/40 uppercase tracking-wider mb-1">
                    GitHub
                  </p>
                  <p className="text-sm font-medium">
                    View GitHub Profile ↗
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="h-full flex flex-col justify-center items-start text-left bg-white/[0.02] border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-[family-name:var(--font-display)] font-semibold mb-3">
                  Message sent!
                </h3>

                <p className="text-white/50 mb-8">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/mgawyqaw"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5 bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8"
              >
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all text-white placeholder-white/30 text-sm"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all text-white placeholder-white/30 text-sm"
                    placeholder="Email Address"
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all text-white placeholder-white/30 resize-none text-sm"
                    placeholder="How can I help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex justify-center items-center gap-2 bg-white text-black font-semibold rounded-xl px-6 py-4 hover:bg-white/90 transition-colors disabled:opacity-50 text-sm"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-sm border-t border-white/10 relative z-10 text-white/40">
      <p>
        &copy; {new Date().getFullYear()} Tejas Abhang. All rights reserved.
      </p>

      <div className="mt-4 md:mt-0 flex gap-6">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          GitHub ↗
        </a>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          LinkedIn ↗
        </a>
      </div>
    </footer>
  );
}