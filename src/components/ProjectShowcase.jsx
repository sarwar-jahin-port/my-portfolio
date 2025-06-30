import { Code2, Sparkles } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import {projects} from '../data/projects';

export const ProjectShowcase= ({ onViewProject }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(59,130,246,0.1)_0%,_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(139,92,246,0.1)_0%,_transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Featured Projects
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My Recent Work
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of my favorite projects that showcase my skills in full-stack development, 
            UI/UX design, and problem-solving. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProjectCard 
                project={project} 
                onViewDetails={onViewProject}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-slate-300 backdrop-blur-sm">
            <Code2 className="w-5 h-5 text-blue-400" />
            <span className="font-medium">Want to see more projects?</span>
            <button className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-2 transition-colors">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};