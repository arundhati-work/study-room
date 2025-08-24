import Link from 'next/link';
import {
  Code,
  Database,
  Network,
  Brain,
  Users,
  FileText,
  ChevronRight,
  Target,
  BookOpen,
  ChevronDown
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
      {/* Landing Banner */}
      <div className="h-[90vh] bg-gradient-to-br from-pink-50 via-lavender-50 to-orange-50 relative overflow-hidden">

        {/* Decorative Blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-30 blur-xl animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-lavender-200 to-pink-200 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full opacity-25 blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-30 blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between py-8 lg:py-0">
          {/* Content Section - Left Side */}
          <div className="flex-1 lg:pr-12 mb-8 lg:mb-0 text-center lg:text-left">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lg:mb-8">
                Welcome to My Study! 📚
              </h2>
              <p className="text-lg sm:text-xl lg:text-xl text-gray-700 leading-relaxed mb-8 lg:mb-12">
                Hi viewer, I'm Ari and welcome to my study room! Here you'll find notes from my technical interview preparation journey and tips and tricks that I discovered along the way. Feel free to grab a cozy cup of coffee and have a look around. Happy studying! ☕️🍀
              </p>
              
              {/* Floating Cozy Elements */}
              <div className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6 lg:space-x-8 text-2xl sm:text-3xl lg:text-4xl">
                <span className="hover:scale-125 transition-transform duration-300 animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }}>📚</span>
                <span className="hover:scale-125 transition-transform duration-300 animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '2.3s' }}>☕️</span>
                <span className="hover:scale-125 transition-transform duration-300 animate-bounce" style={{ animationDelay: '0.6s', animationDuration: '2.6s' }}>🌱</span>
                <span className="hover:scale-125 transition-transform duration-300 animate-bounce" style={{ animationDelay: '0.9s', animationDuration: '2.9s' }}>🐼</span>
                <span className="hover:scale-125 transition-transform duration-300 animate-bounce" style={{ animationDelay: '1.2s', animationDuration: '2.2s' }}>💻</span>
                <span className="hover:scale-125 transition-transform duration-300 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.5s' }}>✨</span>
              </div>
            </div>
          </div>

          {/* Logo Section - Right Side */}
          <div className="flex-1 flex justify-center items-center">
            <div className="text-center">
              <div className="relative inline-block mb-4 lg:mb-6">
                <div className="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-lavender-400 via-pink-400 to-orange-400 rounded-3xl shadow-cozy hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-6">
                  <BookOpen className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white drop-shadow-lg" />
                </div>
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-white">✨</span>
                </div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}>
                  <span className="text-xs sm:text-sm font-bold text-white">💫</span>
                </div>
                <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-full flex items-center justify-center shadow-md animate-pulse" style={{ animationDelay: '1s' }}>
                  <span className="text-xs font-bold text-white">🌟</span>
                </div>
                <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full flex items-center justify-center shadow-md animate-pulse" style={{ animationDelay: '1.5s' }}>
                  <span className="text-xs font-bold text-white">🎨</span>
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-warmGray-800 via-lavender-600 to-pink-500 bg-clip-text text-transparent mb-2 lg:mb-4">
                Ari's Study Room
              </h1>
              <p className="text-lg sm:text-xl text-warmGray-600 font-medium">
                CS Notes & Interview Prep
              </p>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center space-y-1 sm:space-y-2">
            <span className="text-xs sm:text-sm text-gray-600 font-medium">Scroll to explore</span>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce">
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Categories Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Explore Categories
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Choose from our comprehensive collection of study materials organized by topic
          </p>
        </div>
        
        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link 
              key={category.name}
              href={category.path}
              className={`group block ${category.color} p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100`}
            >
              <div className="flex items-start justify-between h-full">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                    <div className={`${category.iconColor}`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className={`font-semibold text-base sm:text-lg ${category.textColor}`}>
                        {category.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        {category.articles}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <ChevronRight className={`w-4 h-4 sm:w-5 sm:h-5 ${category.iconColor} opacity-60 group-hover:opacity-100 transition-opacity`} />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
