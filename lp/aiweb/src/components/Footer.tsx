import React from 'react';
import { Bot } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-6">
            {/* Logo */}
            <a 
              href="https://livekone.com/"
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-2"
            >
              <img 
                src="/logo.svg" 
                alt="Livekone" 
                className="h-8 sm:h-10"
              />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © Livekone Inc. All Rights Reserved 2025
          </div>
        </div>
      </div>
    </footer>
  );
}