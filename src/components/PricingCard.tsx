import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  setupFee?: string;
}

export default function PricingCard({ title, price, features, highlighted, setupFee }: PricingCardProps) {
  return (
    <div className={`rounded-xl p-6 ${
      highlighted 
        ? 'bg-gradient-to-br from-purple-600 to-blue-700 shadow-xl scale-105' 
        : 'bg-gray-900'
    }`}>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <div className="mb-6">
        {title === "Pay as you go" && <span className='text-gray-400 ml-2'>from</span>}
        <span className="text-4xl font-bold text-white">${price}</span>
        {price !== '0' && <span className="text-gray-400 ml-2">/month</span>}
        {setupFee && (
          <div className="text-sm text-gray-400 mt-2">
            ${setupFee} setup fee
          </div>
        )}
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Check size={16} className="mr-2 text-green-400" />
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full mt-6 px-4 py-2 rounded-lg font-medium ${
        highlighted 
          ? 'bg-white text-purple-600 hover:bg-gray-100' 
          : 'bg-purple-600 text-white hover:bg-purple-700'
      }`}>
        Get Started
      </button>
    </div>
  );
}