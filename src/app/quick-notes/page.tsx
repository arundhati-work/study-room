import Breadcrumb from '@/components/Breadcrumb';
import { FileText } from 'lucide-react';

export default function QuickNotesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Breadcrumb 
          items={[
            { label: 'Quick Notes' }
          ]} 
        />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-cozy">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Quick Notes</h1>
              <p className="text-gray-600 mt-1">Java tips, Git commands and references</p>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-12 h-12 text-yellow-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Quick notes content will be added here. This section will include Java tips, Git commands, useful references, and other helpful snippets for daily development.
          </p>
        </div>
      </div>
    </div>
  );
}
