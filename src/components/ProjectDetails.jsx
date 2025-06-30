import React from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar, User, CheckCircle, AlertCircle, Lightbulb } from 'lucide-react';
// import { Project } from '../data/projects';

export const ProjectDetails = ({ project, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-8 left-8 flex items-center gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur-sm text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </button>

        {/* Project Title Overlay */}
        <div className="absolute bottom-8 left-8 right-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
              {project.category}
            </span>
            <div className="flex items-center gap-2 text-slate-300 text-sm">
              <Calendar className="w-4 h-4" />
              {project.timeline}
            </div>
            <div className="flex items-center gap-2 text-slate-300 text-sm">
              <User className="w-4 h-4" />
              {project.role}
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            {project.longDescription}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors"
              >
                <Github className="w-4 h-4" />
                View Source Code
              </a>
            </div>

            {/* Features */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Challenges */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-400" />
                  Challenges
                </h3>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300 text-sm">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-400" />
                  Solutions
                </h3>
                <div className="space-y-4">
                  {project.solutions.map((solution, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300 text-sm">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Project Info</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-slate-400 text-sm">Timeline</span>
                  <p className="text-white font-medium">{project.timeline}</p>
                </div>
                <div>
                  <span className="text-slate-400 text-sm">Role</span>
                  <p className="text-white font-medium">{project.role}</p>
                </div>
                <div>
                  <span className="text-slate-400 text-sm">Category</span>
                  <p className="text-white font-medium">{project.category}</p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6 text-center">
              <h3 className="text-lg font-bold text-white mb-2">Interested in working together?</h3>
              <p className="text-slate-300 text-sm mb-4">Let's discuss your next project</p>
              <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};