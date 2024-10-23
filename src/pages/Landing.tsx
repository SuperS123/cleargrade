import { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import AuthModal from '../components/AuthModal';

export default function Landing() {
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'signin' | 'signup' }>({
    isOpen: false,
    mode: 'signin'
  });

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <GraduationCap className="mx-auto h-20 w-20 text-purple-500" />
          <h1 className="mt-4 text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            ClearGrade
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Advanced essay grading powered by AI
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setAuthModal({ isOpen: true, mode: 'signin' })}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition duration-200"
            >
              Sign In
            </button>
            <button
              onClick={() => setAuthModal({ isOpen: true, mode: 'signup' })}
              className="px-8 py-3 bg-transparent hover:bg-gray-800 border border-purple-500 rounded-lg font-medium transition duration-200"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={authModal.isOpen}
        mode={authModal.mode}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
      />
    </div>
  );
}