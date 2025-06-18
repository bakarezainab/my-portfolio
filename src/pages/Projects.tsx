import { useState } from 'react';
import { Briefcase, ArrowUp, Code } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'DeFi Trading Platform',
      description: 'A decentralized trading platform built with React and Web3.js, featuring real-time price feeds and smart contract integration.',
      category: 'web3',
      technologies: ['React', 'Web3.js', 'Solidity', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
      demo: '#',
      github: '#',
      featured: true
    },
    {
      id: 2,
      title: 'NFT Marketplace',
      description: 'Full-stack NFT marketplace with minting capabilities, built using Next.js and Ethereum smart contracts.',
      category: 'web3',
      technologies: ['Next.js', 'Solidity', 'IPFS', 'Ethers.js'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      demo: '#',
      github: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Crypto Portfolio Tracker',
      description: 'Real-time cryptocurrency portfolio tracking application with advanced analytics and price alerts.',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Chart.js', 'REST APIs'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      demo: '#',
      github: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Web3 Documentation Site',
      description: 'Comprehensive documentation platform for Web3 developers with interactive code examples and tutorials.',
      category: 'writing',
      technologies: ['Docusaurus', 'Markdown', 'React', 'MDX'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      demo: '#',
      github: '#',
      featured: false
    },
    {
      id: 5,
      title: 'DAO Governance Platform',
      description: 'Decentralized autonomous organization platform for community governance and proposal voting.',
      category: 'web3',
      technologies: ['React', 'Solidity', 'Web3.js', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      demo: '#',
      github: '#',
      featured: true
    },
    {
      id: 6,
      title: 'Smart Contract Auditor Tool',
      description: 'Automated tool for basic smart contract security analysis and vulnerability detection.',
      category: 'web3',
      technologies: ['Python', 'Solidity', 'React', 'Flask'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      demo: '#',
      github: '#',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web3', label: 'Web3 & Blockchain' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'writing', label: 'Technical Writing' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my work in Web3 development, frontend applications, and technical documentation.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Briefcase className="w-6 h-6 mr-3 text-cyan-400" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-gray-700/50 text-cyan-300 text-xs rounded border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.demo}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    >
                      <ArrowUp className="w-4 h-4 mr-1 rotate-45" />
                      Demo
                    </a>
                    <a 
                      href={project.github}
                      className="flex items-center text-gray-400 hover:text-gray-300 font-medium transition-colors"
                    >
                      <Code className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700 hover:text-cyan-400'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-gray-700/50 text-cyan-300 text-xs rounded border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.demo}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    <ArrowUp className="w-4 h-4 mr-1 rotate-45" />
                    Demo
                  </a>
                  <a 
                    href={project.github}
                    className="flex items-center text-gray-400 hover:text-gray-300 font-medium transition-colors"
                  >
                    <Code className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 rounded-xl border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Interested in Collaborating?</h2>
            <p className="text-gray-300 mb-6">
              I'm always excited to work on innovative Web3 projects and share knowledge through technical writing.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
