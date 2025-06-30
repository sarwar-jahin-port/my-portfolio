import React from 'react';
import { GraduationCap, Award, Calendar, TrendingUp, BookOpen, Trophy, Star } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: 'International Islamic University Chittagong',
      degree: 'BSc in Computer Science & Engineering',
      period: '2022 - Present',
      status: '2 Years Completed',
      gpa: '3.69/4.00',
      percentage: '92.25%',
      type: 'ongoing',
      highlights: ['Data Structures & Algorithms', 'Software Engineering', 'Database Systems', 'Web Technologies']
    },
    {
      institution: 'St. Placids School and College',
      degree: 'Higher Secondary Certificate (Science)',
      period: '2020 - 2022',
      status: 'Completed',
      gpa: '4.13/5.00',
      percentage: '82.6%',
      type: 'completed',
      highlights: ['Physics', 'Chemistry', 'Mathematics', 'ICT']
    }
  ];

  const certifications = [
    {
      institution: 'Phitron',
      course: 'CSE Fundamentals',
      grade: '92%',
      type: 'certification',
      skills: ['Problem Solving', 'Data Structures', 'Algorithms', 'C++'],
      year: '2023',
      badge: 'Excellence'
    },
    {
      institution: 'Programming Hero',
      course: 'Web Development Course',
      grade: '85%',
      type: 'certification',
      skills: ['React.js', 'Node.js', 'MongoDB', 'Full Stack'],
      year: '2023',
      badge: 'Certified'
    }
  ];

  const getGpaColor = (gpa, total) => {
    const percentage = (parseFloat(gpa) / parseFloat(total)) * 100;
    if (percentage >= 90) return 'text-emerald-400';
    if (percentage >= 80) return 'text-blue-400';
    if (percentage >= 70) return 'text-yellow-400';
    return 'text-slate-400';
  };

  const getGpaBackground = (gpa, total) => {
    const percentage = (parseFloat(gpa) / parseFloat(total)) * 100;
    if (percentage >= 90) return 'bg-emerald-500/20 border-emerald-500/30';
    if (percentage >= 80) return 'bg-blue-500/20 border-blue-500/30';
    if (percentage >= 70) return 'bg-yellow-500/20 border-yellow-500/30';
    return 'bg-slate-500/20 border-slate-500/30';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full mb-6">
            <BookOpen className="text-blue-400" size={20} />
            <span className="text-slate-300 text-sm font-medium">ACADEMIC JOURNEY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            My academic journey and professional certifications that have shaped my expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <GraduationCap className="text-blue-400" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
                <p className="text-slate-400 text-sm">Academic Background</p>
              </div>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl"
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    {edu.type === 'ongoing' ? (
                      <div className="flex items-center gap-2 bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        In Progress
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-medium">
                        <Trophy size={12} />
                        Completed
                      </div>
                    )}
                  </div>

                  {/* Institution & Degree */}
                  <div className="mb-4 pr-24">
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-400 font-semibold text-lg">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Period & Status */}
                  <div className="flex items-center gap-4 mb-4 text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                    <span className="text-slate-500">•</span>
                    <span className="text-sm">{edu.status}</span>
                  </div>

                  {/* GPA Section */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`px-4 py-2 rounded-lg border ${getGpaBackground(edu.gpa.split('/')[0], edu.gpa.split('/')[1])}`}>
                        <div className="flex items-center gap-2">
                          <TrendingUp size={16} className={getGpaColor(edu.gpa.split('/')[0], edu.gpa.split('/')[1])} />
                          <span className={`font-bold ${getGpaColor(edu.gpa.split('/')[0], edu.gpa.split('/')[1])}`}>
                            GPA: {edu.gpa}
                          </span>
                        </div>
                      </div>
                      <div className="text-slate-400 text-sm">
                        ({edu.percentage})
                      </div>
                    </div>
                  </div>

                  {/* Key Subjects */}
                  <div>
                    <p className="text-slate-400 text-sm mb-2">Key Subjects:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((subject, subIndex) => (
                        <span
                          key={subIndex}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <Award className="text-purple-400" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
                <p className="text-slate-400 text-sm">Professional Development</p>
              </div>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl"
                >
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                      cert.badge === 'Excellence' 
                        ? 'bg-emerald-500/20 text-emerald-400' 
                        : 'bg-purple-500/20 text-purple-400'
                    }`}>
                      <Star size={12} />
                      {cert.badge}
                    </div>
                  </div>

                  {/* Course & Institution */}
                  <div className="mb-4 pr-24">
                    <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors mb-2">
                      {cert.course}
                    </h4>
                    <p className="text-purple-400 font-semibold">
                      {cert.institution}
                    </p>
                  </div>

                  {/* Score & Year */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-3 py-2 rounded-lg border border-emerald-500/30">
                      <Trophy size={16} />
                      <span className="font-bold">Score: {cert.grade}</span>
                    </div>
                    <span className="text-slate-400 text-sm">{cert.year}</span>
                  </div>

                  {/* Skills Learned */}
                  <div>
                    <p className="text-slate-400 text-sm mb-2">Skills Acquired:</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs hover:bg-purple-500/20 hover:text-purple-400 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievement Summary */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Academic Excellence</div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-400">3.69/4.00</div>
                    <div className="text-slate-400 text-sm">Current CGPA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-400">88.5%</div>
                    <div className="text-slate-400 text-sm">Avg. Certification Score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;