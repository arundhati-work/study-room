import Breadcrumb from '@/components/Breadcrumb';
import { Network } from 'lucide-react';

export default function SystemDesignPage() {
  return (
    <div className="min-h-screen bg-white p-6 lg:p-8">
      <div className="max-w-4xl mx-auto py-12">
        <Breadcrumb 
          items={[
            { label: 'System Design' }
          ]} 
        />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-cozy">
              <Network className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">System Design</h1>
              <p className="text-gray-600 mt-1">Scalable architecture and design patterns</p>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Network className="w-12 h-12 text-teal-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            System design content will be added here. This section will cover scalable architecture, design patterns, and how to build large-scale distributed systems.
          </p>
        </div>
      </div>
    </div>
  );
}
