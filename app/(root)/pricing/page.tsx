import PricingCard from '@/components/pricing/PricingCards';
import FaqSection from '@/components/shared/faq';
import { plans } from '@/constants/constants';
import React from 'react';



const PricingSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Choose Your Perfect Plan
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Unlock the power of professional logo design with plans tailored to your needs. From startups to enterprises, we have you covered.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={`$${plan.price}`}
            period={plan.period}
            description={plan.description}
            features={plan.features}
            buttonText={plan.buttonText}
            buttonLink={plan.buttonLink}
            highlighted={plan.highlighted}
          />
        ))}
      </div>

      <FaqSection />
    </div>
  );
};

export default PricingSection;