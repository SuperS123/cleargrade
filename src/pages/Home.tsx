import { useState } from 'react';
import LoadingSkeleton from '../components/LoadingSkeleton';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [essay, setEssay] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<null | any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulated API call - replace with actual API
    setTimeout(() => {
      setFeedback({
        content: 85,
        structure: 90,
        grammar: 95,
        overall: 90,
        feedback: "Excellent work! The essay demonstrates strong understanding..."
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Essay Evaluation
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1 text-sm">Prompt</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white text-sm min-h-[60px] max-h-[120px] transition-all duration-200"
              placeholder="Enter the essay prompt..."
              style={{ resize: 'vertical' }}
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-1 text-sm">Essay</label>
            <textarea
              value={essay}
              onChange={(e) => setEssay(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white text-sm min-h-[200px] max-h-[400px] transition-all duration-200"
              placeholder="Paste your essay here..."
              style={{ resize: 'vertical' }}
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 text-sm"
          >
            Evaluate Essay
          </button>
        </form>

        <div className="mt-6">
          {loading ? (
            <LoadingSkeleton />
          ) : feedback ? (
            <div className="bg-gray-900 rounded-lg p-5 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <div className="text-gray-400 text-sm">Content</div>
                  <div className="text-xl font-bold">{feedback.content}%</div>
                </div>
                <div className="p-3 bg-gray-800 rounded-lg">
                  <div className="text-gray-400 text-sm">Structure</div>
                  <div className="text-xl font-bold">{feedback.structure}%</div>
                </div>
                <div className="p-3 bg-gray-800 rounded-lg">
                  <div className="text-gray-400 text-sm">Grammar</div>
                  <div className="text-xl font-bold">{feedback.grammar}%</div>
                </div>
                <div className="p-3 bg-gray-800 rounded-lg">
                  <div className="text-gray-400 text-sm">Overall</div>
                  <div className="text-xl font-bold">{feedback.overall}%</div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Detailed Feedback</h3>
                <p className="text-gray-300 text-sm">{feedback.feedback}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}