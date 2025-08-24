import Link from 'next/link';
import { 
  Code, 
  Database, 
  Network, 
  Brain, 
  Users, 
  FileText,
  ChevronRight,
  Target
} from 'lucide-react';

const categories = [
  {
    name: 'Data Structures',
    articles: '0 articles',
    description: 'Fundamental data structures and their implementations',
    path: '/data-structures',
    color: 'bg-blue-50',
    textColor: 'text-blue-700',
    iconColor: 'text-blue-600',
    icon: <Database className="w-6 h-6" />
  },
  {
    name: 'Algorithms',
    articles: '1 article',
    description: 'Algorithmic concepts and problem-solving techniques',
    path: '/algorithms',
    color: 'bg-green-50',
    textColor: 'text-green-700',
    iconColor: 'text-green-600',
    icon: <Code className="w-6 h-6" />
  },
  {
    name: 'Problems',
    articles: '0 articles',
    description: 'Practice problems and coding challenges',
    path: '/problems',
    color: 'bg-purple-50',
    textColor: 'text-purple-700',
    iconColor: 'text-purple-600',
    icon: <Target className="w-6 h-6" />
  },
  {
    name: 'System Design',
    articles: '0 articles',
    description: 'Scalable architecture and design patterns',
    path: '/system-design',
    color: 'bg-teal-50',
    textColor: 'text-teal-700',
    iconColor: 'text-teal-600',
    icon: <Network className="w-6 h-6" />
  },
  {
    name: 'Databases',
    articles: '0 articles',
    description: 'SQL, NoSQL and optimization techniques',
    path: '/databases',
    color: 'bg-indigo-50',
    textColor: 'text-indigo-700',
    iconColor: 'text-indigo-600',
    icon: <Database className="w-6 h-6" />
  },
  {
    name: 'Computer Science',
    articles: '0 articles',
    description: 'Operating systems and distributed systems',
    path: '/computer-science',
    color: 'bg-pink-50',
    textColor: 'text-pink-700',
    iconColor: 'text-pink-600',
    icon: <Brain className="w-6 h-6" />
  },
  {
    name: 'Behavioral Preparation',
    articles: '0 articles',
    description: 'Behavioral questions and interview preparation',
    path: '/behavioral-preparation',
    color: 'bg-orange-50',
    textColor: 'text-orange-700',
    iconColor: 'text-orange-600',
    icon: <Users className="w-6 h-6" />
  },
  {
    name: 'Quick Notes',
    articles: '0 articles',
    description: 'Java tips, Git commands and references',
    path: '/quick-notes',
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
        {/* Introduction */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-lavender-50 to-pink-50 rounded-2xl p-8 border border-lavender-200">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-lavender-400 to-pink-400 rounded-xl flex items-center justify-center text-white shadow-cozy">
                <span className="text-lg font-semibold">A</span>
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900 mb-3">
                  Welcome to My Study Room
                </h1>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Hi viewer, I'm Ari and welcome to my study room. Here you'll find notes from my technical interview preparation journey and tips and tricks that I discovered along the way. Feel free to grab a cozy cup of coffee and have a look around. Happy studying! ☕️🍀
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Categories
          </h2>
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

      </div>
    </div>
  );
}
