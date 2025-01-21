import React, { useState } from 'react';
import { Code, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-50">
      <div className="flex justify-between items-center py-6 sm:py-8">
        <div className="flex items-center">
          <div className="bg-rose-500/10 p-2 rounded-lg backdrop-blur-sm">
            <Code className="w-6 sm:w-8 h-6 sm:h-8 text-rose-500" />
          </div>
          <span className="ml-3 text-xl sm:text-2xl font-bold">Livekone</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <button className="px-6 py-3 text-sm hover:text-rose-400 transition-colors">
            お問い合わせ
          </button>
          <button className="px-6 py-3 bg-white text-black rounded-md text-sm font-bold hover:bg-rose-50 transition-colors">
            無料相談
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10 p-4 md:hidden animate-fade-in">
          <div className="flex flex-col gap-2">
            <button className="px-4 py-3 text-sm hover:text-rose-400 transition-colors text-left">
              お問い合わせ
            </button>
            <button className="px-4 py-3 bg-white text-black rounded-md text-sm font-bold hover:bg-rose-50 transition-colors">
              無料相談
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}