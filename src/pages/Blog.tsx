import { useState } from 'react';
import { BookOpen, User, ArrowUp } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Smart Contract Development',
      excerpt: 'A comprehensive guide to building your first smart contract using Solidity and deploying it to the Ethereum testnet.',
      category: 'tutorial',
      readTime: '8 min read',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop',
      tags: ['Solidity', 'Ethereum', 'Smart Contracts'],
      featured: true
    },
    {
      id: 2,
      title: 'The Future of DeFi: Trends to Watch in 2024',
      excerpt: 'Exploring the latest developments in decentralized finance and what they mean for the broader crypto ecosystem.',
      category: 'analysis',
      readTime: '12 min read',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=300&fit=crop',
      tags: ['DeFi', 'Cryptocurrency', 'Analysis'],
      featured: true
    },
    {
      id: 3,
      title: 'Building Responsive Web3 UIs with React',
      excerpt: 'Best practices for creating user-friendly interfaces for decentralized applications that work across all devices.',
      category: 'tutorial',
      readTime: '10 min read',
      date: 'March 5, 2024',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop',
      tags: ['React', 'Web3', 'UI/UX'],
      featured: false
    },
    {
      id: 4,
      title: 'Understanding Gas Optimization in Ethereum',
      excerpt: 'Learn techniques to reduce gas costs in your smart contracts and improve transaction efficiency.',
      category: 'tutorial',
      readTime: '15 min read',
      date: 'February 28, 2024',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop',
      tags: ['Ethereum', 'Gas Optimization', 'Smart Contracts'],
      featured: false
    },
    {
      id: 5,
      title: 'The Rise of Layer 2 Solutions',
      excerpt: 'Examining how Layer 2 scaling solutions are addressing Ethereum\'s scalability challenges.',
      category: 'analysis',
      readTime: '7 min read',
      date: 'February 20, 2024',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=300&fit=crop',
      tags: ['Layer 2', 'Scaling', 'Ethereum'],
      featured: false
    },
    {
      id: 6,
      title: 'Web3 Developer Tools You Should Know',
      excerpt: 'A curated list of essential tools and frameworks that every Web3 developer should have in their toolkit.',
      category: 'guide',
      readTime: '6 min read',
      date: 'February 15, 2024',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=300&fit=crop',
      tags: ['Tools', 'Development', 'Web3'],
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'tutorial', label: 'Tutorials' },
    { id: 'analysis', label: 'Analysis' },
    { id: 'guide', label: 'Guides' }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technical Blog
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and analysis on Web3 development, blockchain technology, and the future of decentralized applications.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-cyan-400" />
            Featured Posts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">Author</span>
                    <span className="mr-4">{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    <a href={`#post-${post.id}`}>{post.title}</a>
                  </h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-700/50 text-cyan-300 text-xs rounded border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={`#post-${post.id}`}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Read More
                    <ArrowUp className="w-4 h-4 ml-1 rotate-45" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700 hover:text-cyan-400'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* All Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <span className="mr-4">{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                  <a href={`#post-${post.id}`}>{post.title}</a>
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-gray-700/50 text-cyan-300 text-xs rounded border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={`#post-${post.id}`}
                  className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-sm"
                >
                  Read More
                  <ArrowUp className="w-4 h-4 ml-1 rotate-45" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 rounded-xl border border-cyan-500/20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to my newsletter for the latest insights on Web3 development, 
              blockchain technology, and technical tutorials delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 flex-1"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
