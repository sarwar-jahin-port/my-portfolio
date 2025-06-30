import React from 'react';
import { Github, Linkedin, Mail, Heart, Code, Coffee, ExternalLink, ArrowUp, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: <Github size={20} />,
      color: 'hover:text-white hover:bg-gray-700'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: <Linkedin size={20} />,
      color: 'hover:text-blue-400 hover:bg-blue-500/20'
    },
    {
      name: 'Email',
      href: 'mailto:contact@example.com',
      icon: <Mail size={20} />,
      color: 'hover:text-emerald-400 hover:bg-emerald-500/20'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent)] opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent)] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Portfolio
                </h3>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
                Full Stack Developer passionate about creating innovative solutions that make people's lives easier. 
                Let's build something amazing together.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin size={16} />
                  <span className="text-sm">Chittagong, Bangladesh</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <Mail size={16} />
                  <span className="text-sm">contact@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <Phone size={16} />
                  <span className="text-sm">Available for freelance work</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 bg-slate-800/50 rounded-xl border border-slate-700 transition-all duration-300 ${social.color} hover:transform hover:-translate-y-1 hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Let's Work Together</h4>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                Ready to start your next project? I'm available for freelance work and full-time opportunities.
              </p>
              
              <div className="space-y-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Get In Touch
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Available for projects
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800"></div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-slate-400">
              <span>© {currentYear} Portfolio. Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and</span>
              <Coffee size={16} className="text-amber-500" />
              <span>by Full Stack Developer</span>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="group self-start md:self-auto flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors duration-200"
            >
              <span className="text-sm">Back to top</span>
              <div className="p-2 bg-slate-800/50 rounded-lg border border-slate-700 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300">
                <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>

        {/* Tech Stack Badge */}
        <div className="absolute bottom-4 right-4 opacity-50">
          <div className="bg-slate-800/50 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-700">
            <span className="text-xs text-slate-400">Built with React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;