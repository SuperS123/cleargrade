import PricingCard from '../components/PricingCard';

export default function Pricing() {
  const plans = [
    {
      title: 'Free',
      price: '0',
      features: [
        '3 essay evaluations/month',
        'Basic feedback',
        'Standard response time',
        'Email support'
      ]
    },
    {
      title: 'Pay as you go',
      price: '0',
      setupFee: '9.99',
      features: [
        'Unlimited evaluations',
        'Detailed feedback',
        'Fast response time',
        'Priority email support',
        'Custom rubrics'
      ],
      highlighted: true
    },
    {
      title: 'Enterprise',
      price: '39.99',
      features: [
        'Unlimited evaluations',
        'Advanced analytics',
        'Instant response time',
        '24/7 priority support',
        'Custom rubrics',
        'API access'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-400">Choose the plan that works best for you</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}