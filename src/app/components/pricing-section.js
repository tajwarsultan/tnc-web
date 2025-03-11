  
  function PricingCard({ title, description, price, features, index }) {
    return (
      <div
        className="bg-teal-500 rounded-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/20 hover:scale-105 animate-fade-in"
        style={{ animationDelay: `${index * 150}ms` }}
      >
        <div className="p-6 pb-0">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-teal-100 text-sm mt-2">{description}</p>
        </div>
        <div className="p-6">
          <div className="flex items-baseline mb-6">
            <span className="text-4xl font-bold text-white">${price}</span>
            <span className="text-teal-100 ml-2">/Month</span>
          </div>
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center text-teal-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 pt-0">
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    )
  }
  
  export default function PricingSection() {
    const pricingPlans = [
      {
        title: "Basic",
        description: "Beginner-friendly with standard trading and basic portfolio tools.",
        price: "9.00",
        features: [
          "Real-time market data",
          "Basic portfolio tracking",
          "Limited customer support",
          "24/7 customer support",
          "Access research reports",
        ],
      },
      {
        title: "Standard",
        description: "Enhanced trading tools, analytics, and 24/7 chat support.",
        price: "19.00",
        features: [
          "Real-time market data",
          "Basic portfolio tracking",
          "Limited customer support",
          "24/7 customer support",
          "Access research reports",
        ],
      },
      {
        title: "Premium",
        description: "Top-tier features, advanced analytics, and priority support.",
        price: "29.00",
        features: [
          "Real-time market data",
          "Basic portfolio tracking",
          "Limited customer support",
          "24/7 customer support",
          "Access research reports",
        ],
      },
    ]
  
    return (
      <section id="pricing" className="py-16 ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-4">TNC Crypto Pricing Plan</h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Explore our flexible and transparent TNC Crypto pricing plans designed to cater to your specific needs and
            preferences.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                description={plan.description}
                price={plan.price}
                features={plan.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  