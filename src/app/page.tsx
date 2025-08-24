import Link from 'next/link';
import { 
  Code, 
  Database, 
  Network, 
  Brain, 
  Users, 
  FileText,
  ChevronRight
} from 'lucide-react';

const categories = [
  {
    name: 'Algorithms',
    articles: '12 articles',
    description: 'Data structures and algorithmic concepts',
    path: '/algorithms/arrays',
    color: 'bg-green-50',
    textColor: 'text-green-700',
    iconColor: 'text-green-600',
    icon: <Code className="w-6 h-6" />
  },
  {
    name: 'System Design',
    articles: '8 articles',
    description: 'Scalable architecture and design patterns',
    path: '/system-design/scalability',
    color: 'bg-gray-50',
    textColor: 'text-gray-700',
    iconColor: 'text-gray-600',
    icon: <Network className="w-6 h-6" />
  },
  {
    name: 'Databases',
    articles: '6 articles',
    description: 'SQL, NoSQL and optimization techniques',
    path: '/databases/sql',
    color: 'bg-blue-50',
    textColor: 'text-blue-700',
    iconColor: 'text-blue-600',
    icon: <Database className="w-6 h-6" />
  },
  {
    name: 'Computer Science',
    articles: '10 articles',
    description: 'Operating systems and distributed systems',
    path: '/computer-science/operating-systems',
    color: 'bg-purple-50',
    textColor: 'text-purple-700',
    iconColor: 'text-purple-600',
    icon: <Brain className="w-6 h-6" />
  },
  {
    name: 'Meta Interview',
    articles: '15 articles',
    description: 'Behavioral questions and coding challenges',
    path: '/meta-interview/behavioral',
    color: 'bg-pink-50',
    textColor: 'text-pink-700',
    iconColor: 'text-pink-600',
    icon: <Users className="w-6 h-6" />
  },
  {
    name: 'Quick Notes',
    articles: '20 articles',
    description: 'Java tips, Git commands and references',
    path: '/quick-notes/java-tips',
    color: 'bg-yellow-50',
    textColor: 'text-yellow-700',
    iconColor: 'text-yellow-600',
    icon: <FileText className="w-6 h-6" />
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Category
          </h1>
          <p className="text-gray-600">
            Explore our comprehensive study materials organized by topic
          </p>
        </div>
        
        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.name}
              href={category.path}
              className={`group block ${category.color} p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100`}
            >
              <div className="flex items-start justify-between h-full">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`${category.iconColor}`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className={`font-semibold text-lg ${category.textColor}`}>
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {category.articles}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <ChevronRight className={`w-5 h-5 ${category.iconColor} opacity-60 group-hover:opacity-100 transition-opacity`} />
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Getting Started
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Choose a category above to begin exploring our study materials. Each section contains carefully curated content designed to help you master key concepts in software engineering and computer science.
          </p>
        </div>
      </div>
    </div>
  );
}
