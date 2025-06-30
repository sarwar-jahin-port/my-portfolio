import React from 'react';
import { Briefcase, Clock, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Freelance Developer',
      company: 'GrowNext (SaaS Product)',
      period: 'Last 3 months - Present',
      duration: '3+ months',
      location: 'Remote',
      description: 'Currently working on a freelancing SaaS product, developing and maintaining various features to enhance user experience and platform functionality. Contributing to both frontend and backend development using modern technologies.',
      type: 'current',
      technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB']
    },
    {
      title: 'Volunteer Software Developer',
      company: 'Bangladesh 2024 (National Archive)',
      period: '2024',
      duration: '3 months',
      location: 'Bangladesh',
      description: 'Worked with industry professionals and leaders on a national archive project. Gained valuable experience collaborating with experienced developers and contributing to important national initiatives.',
      type: 'past',
      technologies: ['JavaScript', 'React', 'Database Management', 'Archive Systems']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Professional experience working on real-world projects and collaborating with industry experts
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-transparent hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-800 hidden md:block"></div>
                
                {/* Experience Card */}
                <div className="md:ml-20 group">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`p-3 rounded-lg ${
                            exp.type === 'current' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-blue-500/20 text-blue-400'
                          }`}>
                            <Briefcase size={24} />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                              {exp.title}
                            </h3>
                            <p className="text-blue-400 font-semibold text-lg">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Status Badge */}
                      {exp.type === 'current' && (
                        <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-4 lg:mb-0">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          Currently Working
                        </div>
                      )}
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-6 mb-6 text-slate-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-slate-400 bg-slate-800/50 px-6 py-3 rounded-full border border-slate-700">
            <Briefcase size={20} />
            <span>Open to new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;