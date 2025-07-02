import React, { useState, useEffect } from 'react';
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Clock, CheckCircle, Star, Code, Zap } from 'lucide-react';
import {projects} from '../data/projects';
import projectImage1 from "../assets/event_management.png"
import projectImage2 from "../assets/pixello_frontend.png"
import projectImage3 from "../assets/pixello_backend.png"
import { useParams } from 'react-router-dom';
const ProjectDetail = () => {
  const { projectId } = useParams();
  console.log(projectId)
  const id = projectId || "1";
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  
  // Enhanced project data with more details
  // const projects = {
  //   1: {
  //     title: 'E-commerce Platform',
  //     subtitle: 'Full-Stack Shopping Experience',
  //     description: 'A comprehensive full-stack e-commerce platform designed to provide seamless shopping experiences for users and efficient management tools for administrators.',
  //     longDescription: `This e-commerce platform represents a complete solution for online retail businesses. Built with modern web technologies, it offers a responsive and intuitive user interface that works perfectly across all devices.

  //     The platform includes advanced features such as product search and filtering, shopping cart management, secure payment processing, order tracking, and user account management. For administrators, it provides comprehensive dashboards for inventory management, order processing, customer management, and sales analytics.

  //     The backend is built with Django REST Framework, ensuring robust API endpoints and secure data handling. The frontend utilizes React with modern hooks and context API for state management, providing a smooth and interactive user experience.`,
  //     image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=1200',
  //     technologies: ['React', 'Django', 'PostgreSQL', 'Tailwind CSS', 'REST API', 'JWT Authentication'],
  //     features: [
  //       'User authentication and authorization',
  //       'Product catalog with search and filtering',
  //       'Shopping cart and wishlist functionality',
  //       'Secure payment processing',
  //       'Order management and tracking',
  //       'Admin dashboard for inventory management',
  //       'Responsive design for all devices',
  //       'Email notifications'
  //     ],
  //     challenges: [
  //       'Implementing secure payment processing with multiple payment gateways',
  //       'Building real-time inventory management system',
  //       'Optimizing database queries for large product catalogs',
  //       'Creating responsive admin dashboard with complex data visualizations'
  //     ],
  //     learnings: [
  //       'Advanced React patterns and state management',
  //       'Django REST Framework best practices',
  //       'Database optimization techniques',
  //       'Payment gateway integration security'
  //     ],
  //     github: 'https://github.com',
  //     live: 'https://example.com',
  //     duration: '3 months',
  //     team: 'Solo Project',
  //     completed: 'March 2024',
  //     status: 'Completed',
  //     rating: 4.8
  //   },
  //   2: {
  //     title: 'Task Management App',
  //     subtitle: 'Real-time Team Collaboration',
  //     description: 'A collaborative task management application with real-time updates and team collaboration features.',
  //     longDescription: `This task management application was designed to streamline team collaboration and project tracking. The application provides real-time updates using WebSocket connections, allowing team members to see changes instantly without page refreshes.

  //     The application features a modern and intuitive interface built with Next.js and Material-UI components. Users can create projects, assign tasks, set deadlines, track progress, and communicate through integrated commenting systems.

  //     The backend utilizes Node.js with Express framework and MongoDB for flexible data storage. Real-time functionality is implemented using Socket.io, ensuring seamless collaboration between team members.`,
  //     image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200',
  //     technologies: ['Next.js', 'Node.js', 'MongoDB', 'Material-UI', 'Socket.io', 'JWT Authentication'],
  //     features: [
  //       'Real-time task updates',
  //       'Team collaboration tools',
  //       'Project timeline visualization',
  //       'Task assignment and tracking',
  //       'File attachment support',
  //       'Comment and discussion threads',
  //       'Progress reporting and analytics',
  //       'Mobile-responsive interface'
  //     ],
  //     challenges: [
  //       'Implementing real-time synchronization across multiple clients',
  //       'Managing complex state updates with Socket.io',
  //       'Building intuitive drag-and-drop task management',
  //       'Optimizing performance with large datasets'
  //     ],
  //     learnings: [
  //       'WebSocket implementation and management',
  //       'Advanced MongoDB aggregation pipelines',
  //       'Real-time application architecture patterns',
  //       'Performance optimization techniques'
  //     ],
  //     github: 'https://github.com',
  //     live: 'https://example.com',
  //     duration: '4 months',
  //     team: '2 Developers',
  //     completed: 'February 2024',
  //     status: 'Completed',
  //     rating: 4.6
  //   },
  //   3: {
  //     title: 'Weather Dashboard',
  //     subtitle: 'Interactive Weather Analytics',
  //     description: 'A responsive weather dashboard providing real-time weather data and forecasts.',
  //     longDescription: `This weather dashboard application provides comprehensive weather information with an elegant and user-friendly interface. The application integrates with multiple weather APIs to ensure accurate and up-to-date weather data.

  //     Users can search for weather information by city name or use geolocation for current location weather. The dashboard displays current conditions, hourly forecasts, and extended 7-day forecasts with detailed meteorological data.

  //     The application features interactive charts and visualizations using Chart.js, making weather data easy to understand at a glance. The responsive design ensures optimal viewing experience across all devices.`,
  //     image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200',
  //     technologies: ['React', 'Chart.js', 'Weather API', 'CSS Modules', 'Geolocation API', 'Local Storage'],
  //     features: [
  //       'Current weather conditions',
  //       'Hourly and daily forecasts',
  //       'Interactive weather charts',
  //       'Location-based weather data',
  //       'Search functionality',
  //       'Weather alerts and notifications',
  //       'Favorite locations management',
  //       'Responsive design'
  //     ],
  //     challenges: [
  //       'Integrating multiple weather APIs for data redundancy',
  //       'Creating responsive data visualizations',
  //       'Handling geolocation permissions and errors',
  //       'Implementing efficient data caching strategies'
  //     ],
  //     learnings: [
  //       'API integration and error handling',
  //       'Data visualization best practices',
  //       'Browser geolocation API usage',
  //       'Local storage optimization techniques'
  //     ],
  //     github: 'https://github.com',
  //     live: 'https://example.com',
  //     duration: '2 months',
  //     team: 'Solo Project',
  //     completed: 'January 2024',
  //     status: 'Completed',
  //     rating: 4.7
  //   }
  // };

  const project = projects[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <ExternalLink className="w-8 h-8 text-red-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-slate-300 mb-6">The project you're looking for doesn't exist or has been moved.</p>
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Star },
    { id: 'features', label: 'Features', icon: CheckCircle },
    { id: 'tech', label: 'Technology', icon: Code },
    { id: 'challenges', label: 'Challenges', icon: Zap }
  ];

  const projectImages = {
    1: projectImage1,
    2: projectImage2,
    3: projectImage3
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Projects</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  {project.status}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`${i < Math.floor(project.rating) ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} 
                    />
                  ))}
                  <span className="text-slate-400 text-sm ml-2">{project.rating}</span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {project.title}
              </h1>
              
              <p className="text-xl text-blue-400 mb-6 font-medium">
                {project.subtitle}
              </p>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <ExternalLink size={20} />
                  View Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  <Github size={20} />
                  View Source
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 overflow-hidden">
                  <img
                    src={projectImages[projectId]}
                    alt={project.title}
                    className={`w-full h-64 lg:h-80 object-cover rounded-xl transition-all duration-700 ${
                      imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                  />
                  {!imageLoaded && (
                    <div className="absolute inset-4 bg-slate-800 rounded-xl animate-pulse"></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Duration</h3>
            </div>
            <p className="text-2xl font-bold text-blue-400">{project.duration}</p>
            <p className="text-slate-400 text-sm">Development time</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-green-400" />
              <h3 className="text-lg font-semibold text-white">Team</h3>
            </div>
            <p className="text-2xl font-bold text-green-400">{project.team}</p>
            <p className="text-slate-400 text-sm">Project team size</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-6 h-6 text-purple-400" />
              <h3 className="text-lg font-semibold text-white">Completed</h3>
            </div>
            <p className="text-2xl font-bold text-purple-400">{project.completed}</p>
            <p className="text-slate-400 text-sm">Completion date</p>
          </div>
        </div>

        {/* Tabbed Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-white/10">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'text-blue-400 bg-blue-500/10 border-b-2 border-blue-400'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
                <div className="prose prose-invert prose-lg max-w-none">
                  {project.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-slate-300 leading-relaxed mb-4">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'tech' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Technologies Used</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg p-4 text-center hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300">
                      <span className="text-white font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'challenges' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Challenges & Solutions</h2>
                  <div className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Zap className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300">{challenge}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Key Learnings</h3>
                  <div className="space-y-3">
                    {project.learnings.map((learning, index) => (
                      <div key={index} className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300">{learning}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in Similar Projects?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new challenges and create innovative solutions. 
              Let's discuss your next project!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => alert('Contact form would open here')}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                View More Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;