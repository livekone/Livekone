import React from 'react';

export default function Header() {
  return (
    <header className="absolute w-full z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 sm:h-20">
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
      </div>
    </header>
  );
}