import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Code, Briefcase, GraduationCap, Award, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "AI Resume Builder",
      tech: "React.js, Node.js, REST APIs",
      description: "AI-powered tool enabling real-time editable resume templates for improved customization",
      highlights: [
        "Implemented PDF export functionality for professional document output",
        "Designed streamlined UI to reduce rendering delays and provide smooth preview experience"
      ]
    },
    {
      title: "Spark Digital Platform",
      tech: "MERN Stack",
      description: "Developed secure login with protected routing ensuring safe access control",
      highlights: [
        "Designed reusable UI components reducing development redundancy and efforts",
        "Optimized bundle to speed up loading and improve user engagement"
      ]
    },
    {
      title: "Real Estate Landing Page",
      tech: "React.js",
      description: "Built dynamic, responsive layouts enhancing accessibility across devices",
      highlights: [
        "Used lazy loading and asset optimization to improve speed by ~40%",
        "Delivered clean UI and intuitive navigation improving retention"
      ]
    }
  ];

  const experience = [
    {
      role: "Frontend Developer Intern",
      company: "AN30 Technologies",
      period: "2024",
      location: "Remote",
      achievements: [
        "Developed reusable and optimized React components improving rendering performance by 30%",
        "Improved mobile responsiveness and cross-browser layout compatibility",
        "Collaborated closely with backend and QA teams under Agile workflow"
      ]
    },
    {
      role: "Python Developer Intern",
      company: "Techno World",
      period: "2023",
      location: "Remote",
      achievements: [
        "Automated recurring operational workflows using Python scripts resulting in 70% faster execution",
        "Designed KPI dashboards for performance visualization",
        "Improved internal tools through efficient data handling and validation"
      ]
    }
  ];

  const skills = {
    "Frontend": ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI"],
    "Backend": ["Node.js", "Express.js"],
    "Database": ["MongoDB"],
    "Languages": ["JavaScript", "Python"],
    "Tools": ["Git", "GitHub", "VS Code", "Vercel"]
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              SK
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-slate-700/50 rounded transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
              Sakshi Kalyan Kamble
            </h1>
            <p className="text-2xl sm:text-3xl text-purple-400 mb-6">Full Stack Developer</p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Specializing in MERN stack development with hands-on experience building fast, scalable and user-friendly web applications. Passionate about turning ideas into real products through clean, maintainable code.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-purple-400" />
                <span>Pune, Maharashtra</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-purple-400" />
                <span>+91 8830122837</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-purple-400" />
                <span>sakshiselukar16@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/sakshi-kamble-a7160225a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="https://github.com/Sakshi916-gif"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
            <Code className="text-purple-400" />
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-900/50 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-900/30 text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
            <Briefcase className="text-purple-400" />
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-[1.02]">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                    <p className="text-purple-400 text-lg">{exp.company}</p>
                  </div>
                  <div className="text-gray-400 mt-2 sm:mt-0 sm:text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 flex gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
            <ExternalLink className="text-purple-400" />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-900/50 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-[1.02] flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-purple-400 mb-4">{project.tech}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <ul className="space-y-2 mt-auto">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-400 text-sm flex gap-2">
                      <span className="text-purple-400">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
            <GraduationCap className="text-purple-400" />
            Education & Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-2xl font-semibold text-white mb-2">Bachelor of Technology</h3>
              <p className="text-purple-400 mb-2">IIT Madras</p>
              <p className="text-gray-300 mb-1">Metallurgical & Materials Engineering</p>
              <p className="text-gray-400">2021 – 2025</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <Award className="text-purple-400" size={24} />
                Achievements
              </h3>
              <ul className="space-y-3">
                <li className="text-gray-300 flex gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Secured AIR 2394 in JEE Advanced (Top 1.5% in India)</span>
                </li>
                <li className="text-gray-300 flex gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Recognized for strong academic excellence in Junior Science College</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to discussing new projects, opportunities, or partnerships.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:sakshiselukar16@gmail.com"
              className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-lg"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/sakshi-kamble-a7160225a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-lg"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400 border-t border-purple-500/20">
        <p>© 2025 Sakshi Kamble. Built with React and Tailwind CSS.</p>
      </footer>
    </div>
  );
}