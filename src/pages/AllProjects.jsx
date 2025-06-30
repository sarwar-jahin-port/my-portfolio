import React, { useState, useMemo } from 'react';
import { ExternalLink, Github, ArrowRight, Filter, Search, Code, Star, GitBranch, Eye, Calendar } from 'lucide-react';

const AllProjects = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [showFilters, setShowFilters] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Django, and PostgreSQL. Features include user authentication, product management, shopping cart, and payment integration with Stripe API.',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Django', 'PostgreSQL', 'Tailwind CSS', 'Stripe'],
      category: 'full-stack',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
      status: 'completed',
      stars: 45,
      forks: 12,
      views: 1850,
      lastUpdated: '2024-03-15',
      difficulty: 'Advanced'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and notification system built using Next.js, Node.js, and MongoDB.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Material-UI', 'Socket.io'],
      category: 'full-stack',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
      status: 'completed',
      stars: 32,
      forks: 8,
      views: 1240,
      lastUpdated: '2024-03-10',
      difficulty: 'Intermediate'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that provides real-time weather data, 7-day forecasts, interactive maps, and weather alerts with beautiful data visualizations using Chart.js.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'API Integration', 'Chart.js', 'CSS', 'OpenWeather API'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
      status: 'completed',
      stars: 28,
      forks: 15,
      views: 950,
      lastUpdated: '2024-03-05',
      difficulty: 'Beginner'
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A modern blog platform with content management system, SEO optimization, comment system, and social sharing features built with Next.js and headless CMS integration.',
      image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Headless CMS', 'TypeScript', 'Tailwind CSS', 'Strapi'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
      status: 'in-progress',
      stars: 19,
      forks: 6,
      views: 720,
      lastUpdated: '2024-02-28',
      difficulty: 'Intermediate'
    },
    {
      id: 5,
      title: 'API Gateway Service',
      description: 'A robust API gateway service built with Node.js and Express, featuring rate limiting, authentication, load balancing, monitoring, and comprehensive logging system.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'Express', 'Redis', 'Docker', 'JWT', 'Winston'],
      category: 'backend',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
      status: 'completed',
      stars: 38,
      forks: 22,
      views: 1680,
      lastUpdated: '2024-02-20',
      difficulty: 'Advanced'
    },
    {
      id: 6,
      title: 'Real-time Chat Application',
      description: 'A real-time chat application with multiple rooms, file sharing, emoji support, voice messages, and end-to-end encryption using Socket.io and modern web technologies.',
      image: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'WebRTC'],
      category: 'full-stack',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
      status: 'in-progress',
      stars: 52,
      forks: 18,
      views: 2100,
      lastUpdated: '2024-02-15',
      difficulty: 'Advanced'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'full-stack', name: 'Full Stack', count: projects.filter(p => p.category === 'full-stack').length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', name: 'Backend', count: projects.filter(p => p.category === 'backend').length }
  ];

  // Memoized filtered and sorted projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects;

    // Filter by category
    if (filter !== 'all') {
      filtered = filtered.filter(project => project.category === filter);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.lastUpdated) - new Date(a.lastUpdated);
        case 'stars':
          return b.stars - a.stars;
        case 'views':
          return b.views - a.views;
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [filter, searchTerm, sortBy]);

  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = filteredAndSortedProjects.filter(project => 
    !project.featured || filter !== 'all' || searchTerm
  );

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatViews = (views) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-500/20 text-green-400';
      case 'Intermediate':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-slate-500/20 text-slate-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6 border border-blue-500/20">
              <Code size={16} className="mr-2" />
              Portfolio Showcase
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mb-6">
              All Projects
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive collection of my development work, showcasing various technologies, 
              innovative solutions, and creative problem-solving approaches.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8 text-slate-400">
              <span className="flex items-center gap-2">
                <Code size={18} />
                {projects.length} Projects
              </span>
              <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
              <span className="flex items-center gap-2">
                <Star size={18} />
                {projects.reduce((total, project) => total + project.stars, 0)} Stars
              </span>
              <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
              <span className="flex items-center gap-2">
                <Eye size={18} />
                {projects.reduce((total, project) => total + project.views, 0).toLocaleString()} Views
              </span>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Search projects, technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                />
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 hover:bg-slate-700/50 transition-all duration-200 backdrop-blur-sm"
              >
                <Filter size={18} />
                Filters
              </button>
            </div>

            {/* Filter Options */}
            {showFilters && (
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Categories */}
                  <div>
                    <h3 className="text-white font-medium mb-4">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setFilter(category.id)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                            filter === category.id
                              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                              : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 border border-slate-600'
                          }`}
                        >
                          {category.name}
                          <span className="bg-slate-600/50 text-xs px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sort Options */}
                  <div>
                    <h3 className="text-white font-medium mb-4">Sort By</h3>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="date">Latest Updated</option>
                      <option value="stars">Most Starred</option>
                      <option value="views">Most Popular</option>
                      <option value="name">Alphabetical</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Featured Projects */}
          {filter === 'all' && !searchTerm && featuredProjects.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <Star className="text-yellow-400" size={24} />
                Featured Projects
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredProjects.slice(0, 2).map((project) => (
                  <div key={project.id} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          ⭐ Featured
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                          {project.status.replace('-', ' ').toUpperCase()}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
                          {project.difficulty}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-3 leading-tight">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-300 mb-4 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech, index) => (
                          <span
                            key={index}
                            className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-lg text-xs font-medium border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-slate-400 text-xs">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Star size={14} />
                            <span>{project.stars}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GitBranch size={14} />
                            <span>{project.forks}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye size={14} />
                            <span>{formatViews(project.views)}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{formatDate(project.lastUpdated)}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex gap-3">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-slate-700/50"
                          >
                            <Github size={20} />
                          </a>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-slate-700/50"
                          >
                            <ExternalLink size={20} />
                          </a>
                        </div>
                        <button
                          onClick={() => window.open(`/project/${project.id}`, '_blank')}
                          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 group shadow-lg shadow-blue-500/25"
                        >
                          View Details
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Regular Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProjects.map((project) => (
              <div key={project.id} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-slate-800/80 backdrop-blur-sm text-slate-200 px-3 py-1 rounded-full text-xs font-medium border border-slate-600 capitalize">
                      {project.category.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
                      {project.difficulty}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-slate-400 text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Star size={14} />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye size={14} />
                        <span>{formatViews(project.views)}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{formatDate(project.lastUpdated)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors duration-200"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors duration-200"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <button
                      onClick={() => window.open(`/project/${project.id}`, '_blank')}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-2 group transition-colors duration-200"
                    >
                      View Details
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredAndSortedProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-12 max-w-md mx-auto">
                <Search className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No Projects Found</h3>
                <p className="text-slate-400 mb-6">
                  No projects match your current filters. Try adjusting your search or category selection.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setFilter('all');
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AllProjects;