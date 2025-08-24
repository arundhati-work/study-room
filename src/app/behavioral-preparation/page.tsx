import Breadcrumb from '@/components/Breadcrumb';
import { Users } from 'lucide-react';

export default function BehavioralPreparationPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Breadcrumb 
          items={[
            { label: 'Behavioral Preparation' }
          ]} 
        />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-cozy">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Behavioral Preparation</h1>
              <p className="text-gray-600 mt-1">Behavioral questions and interview preparation</p>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-12 h-12 text-orange-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Behavioral preparation content will be added here. This section will cover common behavioral questions, STAR method responses, and interview preparation strategies.
          </p>
        </div>
      </div>
    </div>
  );
}
