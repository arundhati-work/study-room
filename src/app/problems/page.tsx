import Breadcrumb from '@/components/Breadcrumb';
import { Target } from 'lucide-react';

export default function ProblemsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Breadcrumb 
          items={[
            { label: 'Problems' }
          ]} 
        />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-cozy">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Problems</h1>
              <p className="text-gray-600 mt-1">Practice problems and coding challenges</p>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="w-12 h-12 text-purple-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Practice problems and coding challenges will be added here. This section will include various difficulty levels and problem types to help you prepare for technical interviews.
          </p>
        </div>
      </div>
    </div>
  );
}
