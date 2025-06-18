import { Download, Mail, User, Briefcase, BookOpen, Code } from 'lucide-react';

const Resume = () => {
  const experience = [
    {
      title: 'Senior Web3 Developer',
      company: 'DecentralizedTech Solutions',
      period: '2022 - Present',
      description: 'Lead development of DeFi protocols and NFT marketplaces. Built smart contracts handling $10M+ in transactions.',
      achievements: [
        'Developed 15+ smart contracts with zero security vulnerabilities',
        'Led team of 5 developers in building multi-chain DeFi platform',
        'Optimized gas costs by 40% through contract optimization'
      ]
    },
    {
      title: 'Frontend Developer & Technical Writer',
      company: 'CryptoStartup Inc.',
      period: '2020 - 2022',
      description: 'Created responsive web applications and comprehensive technical documentation for blockchain products.',
      achievements: [
        'Built React applications serving 100k+ monthly active users',
        'Authored 50+ technical articles with 500k+ total views',
        'Improved user onboarding completion rate by 60%'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'TechCorp',
      period: '2019 - 2020',
      description: 'Developed web applications using modern JavaScript frameworks and contributed to open-source projects.',
      achievements: [
        'Delivered 20+ client projects with 98% satisfaction rate',
        'Mentored 10+ junior developers',
        'Contributed to 5 major open-source projects'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      period: '2015 - 2019',
      details: 'Specialized in Software Engineering and Distributed Systems'
    },
    {
      degree: 'Blockchain Development Certification',
      school: 'ConsenSys Academy',
      period: '2020',
      details: 'Advanced certification in Ethereum development and smart contracts'
    }
  ];

  const certifications = [
    'Certified Ethereum Developer (ConsenSys)',
    'AWS Certified Solutions Architect',
    'Google Technical Writing Certificate',
    'Certified React Developer'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Resume
            </span>
          </h1>
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-cyan-500/20 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <User className="w-6 h-6 mr-3 text-cyan-400" />
                Contact Information
              </h2>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                  your.email@example.com
                </p>
                <p>📍 San Francisco, CA</p>
                <p>🌐 linkedin.com/in/yourprofile</p>
                <p>🐙 github.com/yourusername</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Professional Summary</h3>
              <p className="text-gray-300">
                Experienced Web3 developer and technical writer with 5+ years of expertise in blockchain 
                technologies, smart contracts, and modern frontend development. Passionate about creating 
                accessible Web3 experiences and comprehensive technical documentation.
              </p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Briefcase className="w-6 h-6 mr-3 text-cyan-400" />
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700/50"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{job.title}</h3>
                    <p className="text-cyan-400 font-medium">{job.company}</p>
                  </div>
                  <span className="text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                    {job.period}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{job.description}</p>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-400 flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-cyan-400" />
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700/50"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <span className="text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-cyan-400 font-medium mb-2">{edu.school}</p>
                <p className="text-gray-400">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Code className="w-6 h-6 mr-3 text-cyan-400" />
            Technical Skills
          </h2>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700/50">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Web3 & Blockchain</h3>
                <div className="flex flex-wrap gap-2">
                  {['Solidity', 'Web3.js', 'Ethers.js', 'Hardhat', 'MetaMask', 'IPFS'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Certifications</h2>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700/50">
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <span className="text-cyan-400 mr-2">✓</span>
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
