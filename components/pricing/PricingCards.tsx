import React from 'react';
import { Check, X } from 'lucide-react';
import Link from 'next/link';

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  buttonLink: string;
  highlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonLink,
  highlighted = false,
}) => {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${
        highlighted
          ? 'border-2 border-blue-600 shadow-2xl bg-gradient-to-b from-white to-blue-50'
          : 'border border-gray-200 shadow-lg bg-white'
      } transform transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
    >
      {highlighted && (
        <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center py-2 font-semibold text-sm tracking-wide">
          Most Popular
        </div>
      )}
      <div className="p-8 pt-10">
        <h3 className="text-2xl font-semibold mb-3 text-gray-900 tracking-tight">{title}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-500 ml-2 text-lg font-medium">/{period}</span>
        </div>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">{description}</p>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              {feature.included ? (
                <Check size={18} className="text-green-500 flex-shrink-0 mr-3" />
              ) : (
                <X size={18} className="text-gray-300 flex-shrink-0 mr-3" />
              )}
              <span
                className={`${
                  feature.included ? 'text-gray-800' : 'text-gray-400'
                } text-sm font-medium`}
              >
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
        <Link href={buttonLink}>
          <button
            className={`w-full py-3 px-6 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 ${
              highlighted
                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600'
                : 'bg-white border-2 border-gray-200 text-gray-800 hover:border-blue-600 hover:text-blue-600'
            }`}
          >
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;