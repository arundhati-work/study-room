'use client';

import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

interface MathBlockProps {
  children: string;
  display?: boolean;
  title?: string;
}

export default function MathBlock({ children, display = true, title }: MathBlockProps) {
  const MathComponent = display ? BlockMath : InlineMath;
  
  if (display) {
    return (
      <div className="my-6">
        {title && (
          <div className="text-sm font-medium text-warmGray-700 mb-2">
            {title}
          </div>
        )}
        <div className="bg-gradient-to-r from-lavender-50 to-pink-50 border border-lavender-200 rounded-xl p-4 flex justify-center">
          <MathComponent
            math={children}
            errorColor="#ef4444"
            renderError={(error) => (
              <div className="text-red-500 text-sm">
                Math rendering error: {error.message}
              </div>
            )}
          />
        </div>
      </div>
    );
  }
  
  return (
    <span className="inline-block">
      <MathComponent
        math={children}
        errorColor="#ef4444"
        renderError={(error) => (
          <span className="text-red-500 text-sm">
            Math error: {error.message}
          </span>
        )}
      />
    </span>
  );
}
