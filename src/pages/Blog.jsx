import React, { useState, useMemo } from 'react';
import { Calendar, Clock, ArrowRight, Search, Filter, Tag, Eye } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable Web Applications with React and Django',
      excerpt: 'Learn how to create robust full-stack applications using React for the frontend and Django for the backend. This comprehensive guide covers best practices, architecture patterns, and performance optimization.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Development',
      date: '2024-03-15',
      readTime: '8 min read',
      featured: true,
      views: 1240,
      tags: ['React', 'Django', 'Full-Stack', 'Architecture']
    },
    {
      id: 2,
      title: 'The Power of Modern CSS: Grid, Flexbox, and Beyond',
      excerpt: 'Explore the latest CSS features that make creating responsive and beautiful layouts easier than ever. Discover how to leverage CSS Grid, Flexbox, and custom properties in your projects.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Frontend',
      date: '2024-03-10',
      readTime: '6 min read',
      featured: false,
      views: 890,
      tags: ['CSS', 'Grid', 'Flexbox', 'Responsive']
    },
    {
      id: 3,
      title: 'Database Design Principles for Web Developers',
      excerpt: 'Understanding database design is crucial for building efficient web applications. This article covers normalization, indexing, and optimization techniques for better performance.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Backend',
      date: '2024-03-05',
      readTime: '10 min read',
      featured: false,
      views: 756,
      tags: ['Database', 'SQL', 'Optimization', 'Design']
    },
    {
      id: 4,
      title: 'Mastering API Development with Node.js',
      excerpt: 'Learn how to build robust and secure APIs using Node.js and Express. This guide covers authentication, validation, error handling, and testing strategies.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Backend',
      date: '2024-02-28',
      readTime: '12 min read',
      featured: false,
      views: 1050,
      tags: ['Node.js', 'API', 'Express', 'Authentication']
    },
    {
      id: 5,
      title: 'React Hooks: A Complete Guide',
      excerpt: 'Dive deep into React Hooks and learn how to use them effectively in your applications. From basic hooks to creating custom hooks for better code organization.',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'React',
      date: '2024-02-20',
      readTime: '9 min read',
      featured: true,
      views: 1680,
      tags: ['React', 'Hooks', 'useState', 'useEffect']
    },
    {
      id: 6,
      title: 'Deployment Strategies for Modern Web Applications',
      excerpt: 'Learn about different deployment strategies and tools for modern web applications. From traditional hosting to containerization and cloud platforms.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'DevOps',
      date: '2024-02-15',
      readTime: '7 min read',
      featured: false,
      views: 632,
      tags: ['DevOps', 'Docker', 'AWS', 'CI/CD']
    }
  ];

  const categories = ['All', 'Web Development', 'Frontend', 'Backend', 'React', 'DevOps'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [showFilters, setShowFilters] = useState(false);

  // Memoized filtered and sorted posts
  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date) - new Date(a.date);
        case 'views':
          return b.views - a.views;
        case 'readTime':
          return parseInt(a.readTime) - parseInt(b.readTime);
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, sortBy]);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredAndSortedPosts.filter(post => 
    !post.featured || selectedCategory !== 'All' || searchTerm
  );

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatViews = (views) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6 border border-blue-500/20">
              <Tag size={16} className="mr-2" />
              Blog & Insights
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mb-6">
              Knowledge Hub
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Sharing insights about web development, technology trends, and programming best practices.
              Join me on this journey of continuous learning and growth.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8 text-slate-400">
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {blogPosts.length} Articles
              </span>
              <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
              <span className="flex items-center gap-2">
                <Eye size={18} />
                {blogPosts.reduce((total, post) => total + post.views, 0).toLocaleString()} Views
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
                  placeholder="Search articles, tags..."
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
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            selectedCategory === category
                              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                              : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 border border-slate-600'
                          }`}
                        >
                          {category}
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
                      <option value="date">Latest First</option>
                      <option value="views">Most Popular</option>
                      <option value="readTime">Quick Reads</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Featured Post */}
          {selectedCategory === 'All' && !searchTerm && featuredPost && (
            <div className="mb-16">
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="lg:order-2 relative overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        ⭐ Featured
                      </span>
                      <span className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-slate-400 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{formatDate(featuredPost.date)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye size={16} />
                        <span>{formatViews(featuredPost.views)} views</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-blue-400 text-sm">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 w-fit group shadow-lg shadow-blue-500/25">
                      Read Article
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article 
                key={post.id} 
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-slate-800/80 backdrop-blur-sm text-slate-200 px-3 py-1 rounded-full text-xs font-medium border border-slate-600">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye size={14} />
                        <span>{formatViews(post.views)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-blue-400 text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 group transition-colors duration-200">
                    Read More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredAndSortedPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-12 max-w-md mx-auto">
                <Search className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No Articles Found</h3>
                <p className="text-slate-400 mb-6">
                  No blog posts match your current filters. Try adjusting your search or category selection.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
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

export default Blog;