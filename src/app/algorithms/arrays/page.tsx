import Link from 'next/link';
import { ArrowRight, Code, Clock, BookOpen } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

const arrayNotes = [
  {
    id: 'two-sum',
    title: 'Two Sum Problem',
    description: 'Find two numbers in an array that add up to a target value',
    difficulty: 'Easy',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    tags: ['hashmap', 'arrays', 'java'],
    path: '/algorithms/arrays/two-sum',
    lastUpdated: '2024-01-15'
  },
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    description: 'Check if a string of parentheses is valid using a stack',
    difficulty: 'Easy',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    tags: ['stack', 'strings', 'java'],
    path: '/algorithms/arrays/valid-parentheses',
    lastUpdated: '2024-01-14'
  },
  {
    id: 'max-subarray',
    title: 'Maximum Subarray (Kadane\'s Algorithm)',
    description: 'Find the contiguous subarray with the largest sum',
    difficulty: 'Medium',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    tags: ['dynamic-programming', 'arrays', 'java'],
    path: '/algorithms/arrays/max-subarray',
    lastUpdated: '2024-01-13'
  },
  {
    id: 'merge-sorted',
    title: 'Merge Sorted Arrays',
    description: 'Merge two sorted arrays into a single sorted array',
    difficulty: 'Easy',
    timeComplexity: 'O(m + n)',
    spaceComplexity: 'O(m + n)',
    tags: ['two-pointers', 'arrays', 'java'],
    path: '/algorithms/arrays/merge-sorted',
    lastUpdated: '2024-01-12'
  },
  {
    id: 'remove-duplicates',
    title: 'Remove Duplicates from Sorted Array',
    description: 'Remove duplicates in-place from a sorted array',
    difficulty: 'Easy',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    tags: ['two-pointers', 'arrays', 'java'],
    path: '/algorithms/arrays/remove-duplicates',
    lastUpdated: '2024-01-11'
  }
];

export default function ArraysPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Breadcrumb 
          items={[
            { label: 'Algorithms', href: '/algorithms/arrays' },
            { label: 'Arrays & Strings' }
          ]} 
        />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-healthcare-100 rounded-2xl flex items-center justify-center shadow-soft">
              <Code className="w-8 h-8 text-healthcare-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Arrays & Strings</h1>
              <p className="text-gray-600 mt-1">Essential array and string manipulation algorithms</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-green-50 rounded-2xl p-6 text-center shadow-md">
            <div className="text-2xl font-bold text-green-600">{arrayNotes.length}</div>
            <div className="text-sm text-gray-600 mt-1">Problems</div>
          </div>
          <div className="bg-green-50 rounded-2xl p-6 text-center shadow-md">
            <div className="text-2xl font-bold text-green-600">3</div>
            <div className="text-sm text-gray-600 mt-1">Easy</div>
          </div>
          <div className="bg-yellow-50 rounded-2xl p-6 text-center shadow-md">
            <div className="text-2xl font-bold text-yellow-600">2</div>
            <div className="text-sm text-gray-600 mt-1">Medium</div>
          </div>
          <div className="bg-red-50 rounded-2xl p-6 text-center shadow-md">
            <div className="text-2xl font-bold text-red-600">0</div>
            <div className="text-sm text-gray-600 mt-1">Hard</div>
          </div>
        </div>

        {/* Problems Grid */}
        <div className="space-y-6">
          {arrayNotes.map((note) => (
            <Link 
              key={note.id}
              href={note.path}
              className="group block bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-healthcare-700 transition-colors">
                      {note.title}
                    </h3>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      note.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                      note.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {note.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {note.description}
                  </p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>O({note.timeComplexity})</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4" />
                      <span>O({note.spaceComplexity})</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {note.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs bg-healthcare-100 text-healthcare-700 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-healthcare-600 transition-colors" />
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Tips */}
        <div className="mt-16 bg-healthcare-50 rounded-2xl p-8 border border-healthcare-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Tips for Array Problems</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-3">
              <span className="text-healthcare-600 mt-1">•</span>
              <span>Consider using a HashMap for O(1) lookups when you need to find elements</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-healthcare-600 mt-1">•</span>
              <span>Two pointers technique is often useful for sorted arrays</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-healthcare-600 mt-1">•</span>
              <span>Sliding window is great for subarray problems</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-healthcare-600 mt-1">•</span>
              <span>Don't forget edge cases: empty arrays, single elements, duplicates</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-healthcare-600 mt-1">•</span>
              <span>Consider in-place operations to optimize space complexity</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
