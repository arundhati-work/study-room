'use client';

import { BookOpen, Search, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-50">
              <BookOpen className="w-7 h-7 text-gray-600" />
            </div>
            <div>
              <h1 className="text-2xl font-light text-gray-900">
                Ari's Study Room
              </h1>
              <p className="text-sm text-gray-500 font-light">
                CS Notes & Meta Prep
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search notes..."
                className="pl-12 pr-6 py-3 w-80 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-200"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden pb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search notes..."
                className="pl-12 pr-6 py-3 w-full bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-200"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
