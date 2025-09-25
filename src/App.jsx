import React, { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink, Github, Linkedin, Mail, Star, GitFork, Calendar } from 'lucide-react';

const App = () => {
  const [githubProjects, setGithubProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Fetch GitHub projects
  useEffect(() => {
    const fetchGithubProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/MOHITGODARA1/repos?sort=updated&per_page=6');
        const data = await response.json();
        setGithubProjects(data);
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubProjects();
  }, []);

  // Mock LinkedIn posts data
  const linkedinPosts = [
    {
      title: "Building Scalable React Applications",
      snippet: "Just completed a comprehensive project showcasing advanced React patterns and state management...",
      link: "#",
      date: "2 days ago"
    },
    {
      title: "Full Stack Development Journey",
      snippet: "Reflecting on my journey from frontend to full stack development and the key lessons learned...",
      link: "#",
      date: "1 week ago"
    },
    {
      title: "Modern JavaScript Best Practices",
      snippet: "Sharing some essential JavaScript best practices that every developer should know in 2024...",
      link: "#",
      date: "2 weeks ago"
    }
  ];

  // Mock blog posts data
  const blogPosts = [
    {
      title: "Getting Started with React Hooks",
      date: "March 15, 2024",
      description: "A comprehensive guide to understanding and implementing React Hooks in your applications.",
      link: "#"
    },
    {
      title: "Node.js Performance Optimization",
      date: "March 10, 2024",
      description: "Learn how to optimize your Node.js applications for better performance and scalability.",
      link: "#"
    },
    {
      title: "MongoDB Best Practices",
      date: "March 5, 2024",
      description: "Essential MongoDB practices every developer should follow for efficient database operations.",
      link: "#"
    },
    {
      title: "Tailwind CSS Tips & Tricks",
      date: "February 28, 2024",
      description: "Advanced Tailwind CSS techniques to create beautiful and responsive user interfaces.",
      link: "#"
    }
  ];

  // Skills data
  const skills = [
    { name: "React", color: "bg-blue-500" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "Express", color: "bg-yellow-500" },
    { name: "MongoDB", color: "bg-green-600" },
    { name: "Tailwind", color: "bg-cyan-500" },
    { name: "DSA", color: "bg-purple-500" },
    { name: "C++", color: "bg-blue-600" },
    { name: "JavaScript", color: "bg-yellow-400" },
    { name: "TypeScript", color: "bg-blue-400" },
    { name: "Git", color: "bg-red-500" }
  ];

  // Certifications data
  const certifications = [
    {
      name: "React - The Complete Guide",
      provider: "Udemy",
      date: "March 2024"
    },
    {
      name: "Node.js Developer Certification",
      provider: "MongoDB University",
      date: "February 2024"
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      provider: "freeCodeCamp",
      date: "January 2024"
    },
    {
      name: "Full Stack Web Development",
      provider: "Coursera",
      date: "December 2023"
    }
  ];

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle form submission
  const handleFormSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="bg-slate-900 text-gray-300 min-h-screen font-sans">
      {/* Landing Page Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="text-center z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Hi, I'm Mohit Godara
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer | Passionate about React, Node.js, and modern web technologies
          </p>
          <button 
            onClick={() => scrollToSection('projects')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center mx-auto space-x-2"
          >
            <span>View My Work</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with a strong foundation in modern web technologies. 
                I love creating efficient, scalable applications and solving complex problems through code. 
                My journey in software development has led me to specialize in React, Node.js, and database design.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through blog posts and community engagement.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className={`px-4 py-2 rounded-full text-white text-sm font-medium ${skill.color} hover:scale-105 transition-transform duration-200`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-sm text-gray-400">{cert.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-400">{cert.provider}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">GitHub Projects</h2>
          {loading ? (
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-32 w-32 border-b-2 border-blue-400"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {githubProjects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white truncate">{project.name}</h3>
                    <a 
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description || 'No description available.'}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {project.stargazers_count}
                    </span>
                    <span className="flex items-center">
                      <GitFork className="w-4 h-4 mr-1" />
                      {project.forks_count}
                    </span>
                    <span className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-1 ${
                        project.language === 'JavaScript' ? 'bg-yellow-400' :
                        project.language === 'TypeScript' ? 'bg-blue-400' :
                        project.language === 'Python' ? 'bg-green-400' :
                        project.language === 'HTML' ? 'bg-orange-400' :
                        'bg-gray-400'
                      }`}></div>
                      {project.language || 'Unknown'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* LinkedIn Posts Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Latest LinkedIn Posts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {linkedinPosts.map((post, index) => (
              <div 
                key={index}
                className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <Linkedin className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{post.snippet}</p>
                <a 
                  href={post.link}
                  className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
                >
                  Read More <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Latest Blog Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post, index) => (
              <div 
                key={index}
                className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{post.description}</p>
                <a 
                  href={post.link}
                  className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
                >
                  Read More <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Get In Touch</h2>
          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-400 text-white resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  onClick={handleFormSubmit}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a 
              href="https://github.com/MOHITGODARA1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/mohitgodara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-500">
            © {new Date().getFullYear()} Mohit Godara. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;