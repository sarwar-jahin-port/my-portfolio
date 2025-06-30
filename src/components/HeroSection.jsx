import { Download, Github, Linkedin, Mail, Twitter, ExternalLink } from 'lucide-react';
import profile from "../assets/profile.jpg"
function HeroSection() {
  const handleResumeDownload = () => {
    // Create a dummy resume download - replace with your actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Replace with your actual resume path
    link.download = 'Your_Name_Resume.pdf';
    link.click();
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/yourprofile',
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/yourusername',
      color: 'hover:text-gray-300'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/yourusername',
      color: 'hover:text-sky-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:your.email@example.com',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(59,130,246,0.1)_0%,_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(139,92,246,0.1)_0%,_transparent_50%)]"></div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-blue-400 font-medium text-lg tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Sarwar Jahin
              </h1>
              <h2 className="text-2xl lg:text-3xl text-slate-300 font-light">
                Full Stack Developer
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-slate-300 leading-relaxed">
                I am a full‑stack developer truly passionate about my work, eager to tackle any coding challenge that solves real‑world problems. I thrive on pushing boundaries and will always be there as long as there’s something new to learn.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I specialize in the MERN stack (React.js, Node.js, Express, MongoDB) and also work with Python/Django, Tailwind CSS, MUI, DaisyUI, Ant Design, shadcn/ui, SQL databases, Postman, and RESTful APIs.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={handleResumeDownload}
                className="group inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </button>
              
              <button className="group inline-flex items-center justify-center gap-3 border-2 border-slate-600 hover:border-blue-400 text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-slate-800/50">
                <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                View My Work
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-8">
              <p className="text-slate-400 text-sm font-medium">Connect with me:</p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 transition-all duration-300 hover:scale-110 hover:bg-slate-700/50 hover:border-slate-600 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up animation-delay-200">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-20 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur opacity-30"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl group">
                {/* Placeholder for profile image */}
                {/* <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">YN</span>
                    </div>
                    <p className="text-slate-400 text-lg">Your Photo Here</p>
                    <p className="text-slate-500 text-sm mt-2">Replace with your image</p>
                  </div>
                </div> */}
                
                {/* Uncomment and replace with your actual image */}
                <img 
                  src={profile} 
                  alt="Your Name" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-float-delayed"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;