'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-warmGray-600 mb-6">
      <Link 
        href="/" 
        className="flex items-center space-x-1 hover:text-lavender-600 transition-colors"
      >
        <Home className="w-4 h-4" />
        <span>Home</span>
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-warmGray-400" />
          {item.href ? (
            <Link 
              href={item.href}
              className="hover:text-lavender-600 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-warmGray-800 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
