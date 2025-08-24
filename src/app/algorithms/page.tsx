import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { 
  Code, 
  Database, 
  Network, 
  Brain, 
  Users, 
  FileText,
  ChevronRight,
  Clock,
  BookOpen,
  Target
} from 'lucide-react';

const algorithmCategories = [
  {
    name: 'Arrays & Strings',
    articles: '1 article',
    description: 'Essential array and string manipulation algorithms',
    path: '/algorithms/arrays',
    color: 'bg-green-50',
    textColor: 'text-green-700',
    iconColor: 'text-green-600',
    icon: <Code className="w-6 h-6" />,
    difficulty: 'Easy-Medium',
    lastUpdated: '2024-01-15'
  }
];

export default function AlgorithmsPage() {
  return (
    <div className="min-h-screen bg-white p-6 lg:p-8">
      <div className="max-w-6xl mx-auto py-12">
        <Breadcrumb 
          items={[
            { label: 'Algorithms' }
          ]} 
        />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-lavender-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-cozy">
              <Code className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Algorithms</h1>
              <p className="text-gray-600 mt-1">Master fundamental algorithmic concepts and problem-solving techniques</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-lavender-50 rounded-2xl p-6 text-center shadow-soft">
            <div className="text-2xl font-bold text-lavender-600">1</div>
            <div className="text-sm text-gray-600 mt-1">Total Problems</div>
          </div>
          <div className="bg-green-50 rounded-2xl p-6 text-center shadow-soft">
            <div className="text-2xl font-bold text-green-600">1</div>
            <div className="text-sm text-gray-600 mt-1">Easy</div>
          </div>
          <div className="bg-yellow-50 rounded-2xl p-6 text-center shadow-soft">
            <div className="text-2xl font-bold text-yellow-600">0</div>
            <div className="text-sm text-gray-600 mt-1">Medium</div>
          </div>
          <div className="bg-red-50 rounded-2xl p-6 text-center shadow-soft">
            <div className="text-2xl font-bold text-red-600">0</div>
            <div className="text-sm text-gray-600 mt-1">Hard</div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {algorithmCategories.map((category) => (
            <Link 
              key={category.name}
              href={category.path}
              className={`group block ${category.color} p-6 rounded-2xl shadow-soft hover:shadow-cozy transition-all duration-300 hover:-translate-y-1 border border-gray-100`}
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
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      category.difficulty.includes('Easy') ? 'bg-green-100 text-green-700' :
                      category.difficulty.includes('Medium') && !category.difficulty.includes('Hard') ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {category.difficulty}
                    </span>
                    <ChevronRight className={`w-5 h-5 ${category.iconColor} opacity-60 group-hover:opacity-100 transition-opacity`} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
