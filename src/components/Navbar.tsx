import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/50 backdrop-blur-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white font-bold text-xl">EssayGrade</Link>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm">
                Home
              </Link>
              <Link to="/pricing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm">
                Pricing
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/pricing"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}