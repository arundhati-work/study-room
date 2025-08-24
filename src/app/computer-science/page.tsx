import Breadcrumb from '@/components/Breadcrumb';
import { Brain } from 'lucide-react';

export default function ComputerSciencePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Breadcrumb 
          items={[
            { label: 'Computer Science' }
          ]} 
        />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-cozy">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Computer Science</h1>
              <p className="text-gray-600 mt-1">Operating systems and distributed systems</p>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Brain className="w-12 h-12 text-pink-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Computer science content will be added here. This section will cover operating systems, distributed systems, computer architecture, and fundamental CS concepts.
          </p>
        </div>
      </div>
    </div>
  );
}
