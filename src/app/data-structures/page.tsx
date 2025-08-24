import Breadcrumb from '@/components/Breadcrumb';
import { Database } from 'lucide-react';

export default function DataStructuresPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Breadcrumb 
          items={[
            { label: 'Data Structures' }
          ]} 
        />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-cozy">
              <Database className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Data Structures</h1>
              <p className="text-gray-600 mt-1">Fundamental data structures and their implementations</p>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Database className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Data structure content will be added here as I create articles. This section will cover fundamental data structures like arrays, linked lists, trees, graphs, and more.
          </p>
        </div>
      </div>
    </div>
  );
}
