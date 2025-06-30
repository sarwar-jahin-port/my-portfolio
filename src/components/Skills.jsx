import React, { useState } from 'react';
import { Code, Database, Wrench, Server, Zap, Star } from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={24} />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30',
      skills: [
        { name: 'React.js', level: 'Expert', years: '3+' },
        { name: 'Next.js', level: 'Advanced', years: '2+' },
        { name: 'HTML', level: 'Expert', years: '4+' },
        { name: 'CSS', level: 'Expert', years: '4+' },
        { name: 'Tailwind CSS', level: 'Advanced', years: '2+' },
        { name: 'Material-UI', level: 'Intermediate', years: '1+' },
        { name: 'DaisyUI', level: 'Intermediate', years: '1+' },
        { name: 'Ant Design', level: 'Intermediate', years: '1+' }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server size={24} />,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30',
      skills: [
        { name: 'Django', level: 'Advanced', years: '2+' },
        { name: 'Node.js', level: 'Advanced', years: '2+' },
        { name: 'Python', level: 'Advanced', years: '3+' },
        { name: 'C++', level: 'Intermediate', years: '2+' },
        { name: 'C', level: 'Intermediate', years: '2+' }
      ]
    },
    {
      title: 'Database',
      icon: <Database size={24} />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30',
      skills: [
        { name: 'PostgreSQL', level: 'Advanced', years: '2+' },
        { name: 'MySQL', level: 'Advanced', years: '2+' },
        { name: 'MongoDB', level: 'Intermediate', years: '1+' }
      ]
    },
    {
      title: 'Tools & Others',
      icon: <Wrench size={24} />,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-500/30',
      skills: [
        { name: 'Postman API', level: 'Advanced', years: '2+' },
        { name: 'Git', level: 'Expert', years: '3+' },
        { name: 'REST APIs', level: 'Advanced', years: '2+' }
      ]
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'text-emerald-400';
      case 'Advanced':
        return 'text-blue-400';
      case 'Intermediate':
        return 'text-yellow-400';
      default:
        return 'text-slate-400';
    }
  };

  const getLevelStars = (level) => {
    switch (level) {
      case 'Expert':
        return 5;
      case 'Advanced':
        return 4;
      case 'Intermediate':
        return 3;
      default:
        return 2;
    }
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full mb-6">
            <Zap className="text-blue-400" size={20} />
            <span className="text-slate-300 text-sm font-medium">TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative bg-slate-800/50 backdrop-blur-sm border ${category.borderColor} rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl`}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Category Header */}
              <div className="relative z-10 flex items-center gap-4 mb-8">
                <div className={`p-3 ${category.bgColor} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{category.skills.length} Technologies</p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="relative z-10 space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group/skill relative"
                    onMouseEnter={() => setHoveredSkill(`${index}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-200 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <span className="text-slate-200 font-medium group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, starIndex) => (
                            <Star
                              key={starIndex}
                              size={12}
                              className={`${
                                starIndex < getLevelStars(skill.level)
                                  ? getLevelColor(skill.level)
                                  : 'text-slate-600'
                              } ${starIndex < getLevelStars(skill.level) ? 'fill-current' : ''}`}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-medium ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                        <span className="text-xs text-slate-400">
                          {skill.years}
                        </span>
                      </div>
                    </div>

                    {/* Skill Detail Tooltip */}
                    {hoveredSkill === `${index}-${skillIndex}` && (
                      <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-slate-800 border border-slate-600 rounded-lg shadow-xl z-20 transform opacity-0 animate-in slide-in-from-top-2 duration-200">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium">{skill.name}</span>
                          <div className="flex items-center gap-2">
                            <span className={`text-sm ${getLevelColor(skill.level)}`}>
                              {skill.level}
                            </span>
                            <span className="text-slate-400 text-sm">
                              • {skill.years} experience
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-slate-800/50 backdrop-blur-sm px-8 py-4 rounded-2xl border border-slate-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">25+</div>
              <div className="text-slate-400 text-sm">Technologies</div>
            </div>
            <div className="w-px h-8 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">4+</div>
              <div className="text-slate-400 text-sm">Years Experience</div>
            </div>
            <div className="w-px h-8 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">10+</div>
              <div className="text-slate-400 text-sm">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;