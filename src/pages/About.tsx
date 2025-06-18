import { User, Code, BookOpen, Briefcase } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Web3 & Blockchain', items: ['Solidity', 'Web3.js', 'Ethers.js', 'Hardhat', 'MetaMask', 'IPFS'] },
    { category: 'Frontend Development', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'HTML/CSS'] },
    { category: 'Backend & Tools', items: ['Node.js', 'Express', 'MongoDB', 'Git', 'Docker', 'AWS'] },
    { category: 'Technical Writing', items: ['Documentation', 'API Guides', 'Tutorials', 'Blog Posts', 'Markdown', 'SEO'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about building the future of the web through innovative Web3 solutions and compelling technical content.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Profile */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-cyan-500/20">
            <div className="flex items-center mb-6">
              <User className="w-8 h-8 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">My Journey</h2>
            </div>
            <p className="text-gray-300 mb-4">
              As a passionate Web3 developer and technical writer, I bridge the gap between complex blockchain 
              technologies and accessible user experiences. My journey began in traditional web development, 
              but I quickly became fascinated by the potential of decentralized technologies.
            </p>
            <p className="text-gray-300 mb-4">
              I specialize in creating intuitive frontend interfaces for DApps, writing smart contracts, 
              and producing comprehensive technical documentation that helps others navigate the Web3 ecosystem.
            </p>
            <p className="text-gray-300">
              When I'm not coding or writing, you'll find me exploring the latest blockchain innovations, 
              contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">5+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <Code className="w-8 h-8 text-purple-400" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-blue-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">50+</h3>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <Briefcase className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-cyan-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">100+</h3>
                  <p className="text-gray-400">Articles Written</p>
                </div>
                <BookOpen className="w-8 h-8 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div 
                key={skillGroup.category}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 rounded-xl border border-cyan-500/20">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">My Philosophy</h2>
          <p className="text-gray-300 text-center max-w-4xl mx-auto text-lg">
            "Technology should empower people, not complicate their lives. I believe in building 
            Web3 solutions that are not only technically sound but also intuitive and accessible. 
            Through clear documentation and thoughtful design, we can make the decentralized future 
            a reality for everyone."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
