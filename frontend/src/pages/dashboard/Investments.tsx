import { Link } from 'react-router-dom';
import PageHeader from '../../ui/PageHeader';

const packages = [
    {
      name: 'Standard Plan',
      price: '$1,000',
      profit: '10%',
      duration: '14 Days',
      features: ['Account Manager', 'Quick Support'],
      bg: '',
      buttonBg: 'bg-black',
      buttonHover: 'hover:bg-green-500',
    },
    {
      name: 'Advanced Plan',
      price: '$2,000',
      profit: '12%',
      duration: '20 Days',
      features: ['Priority Withdrawal', 'Referral Earnings'],
      bg: '',
      buttonBg: 'bg-black',
      buttonHover: 'hover:bg-green-500',
    },
    {
      name: 'Premium Plan',
      price: '$5,000',
      profit: '15%',
      duration: '30 Days',
      features: ['VIP Support', 'Bonus Offers'],
      bg: '',
      buttonBg: 'bg-black',
      buttonHover: 'hover:bg-green-500',
    },
    {
      name: 'Elite Plan',
      price: '$10,000',
      profit: '18%',
      duration: '40 Days',
      features: ['Dedicated Advisor', 'Premium Returns'],
      bg: '',
      buttonBg: 'bg-black',
      buttonHover: 'hover:bg-green-500',
    },
    
  ];

const Investments = () => {
  return (
    <div>
      <PageHeader title="" subtitle="Investment Overview" />

      <div className="py-20 px-6 md:px-20  mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-md transition-transform transform hover:scale-105 ${pkg.bg}`}
            >
              <h3 className="text-xl font-bold">{pkg.name}</h3>
              <p className="text-2xl font-semibold mt-2">{pkg.price}</p>
              <p className="text-lg mt-1">Profit: {pkg.profit}</p>
              <p className="text-sm text-gray-600 mb-4">
                Duration: {pkg.duration}
              </p>
              <ul className="mb-4 space-y-1 text-sm text-gray-700">
                {pkg.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <button className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700">
                <Link to="../transfer">Get Started</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Investments;
