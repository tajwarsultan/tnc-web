import Image from "next/image"
import laptop from '../../../public/laptop.webp'

function ServiceCard({ title, description, index }) {
  return (
    <div
    // bg-[#232842]
      className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10 hover:border-teal-500/50 animate-fade-in"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  )
}

export default function ServicesSection() {
  const services = [
    {
      title: "Crypto Trading",
      description: "Seamlessly buy and sell top cryptocurrencies with minimal fees.",
    },
    {
      title: "Portfolio Management",
      description: "Track your investments and optimize your portfolio with our advanced tools.",
    },
    {
      title: "Educational Resources",
      description: "Learn the ins and outs of cryptocurrency with our comprehensive guides and tutorials.",
    },
    {
      title: "Crypto News",
      description: "Stay updated with the latest news and trends from the crypto world.",
    },
  ]

  return (
    <section id="services" className="py-16 md:pt-28 md:left-30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-gray-300 mb-10 max-w-xl">
              Experience unparalleled convenience and efficiency through our exceptional service offerings.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} title={service.title} description={service.description} index={index} />
              ))}
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full h-full">
              <Image
                src={laptop}
                alt="Crypto Illustration"
                width={600}
                height={600}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      {/* <div className="absolute top-20 right-10 animate-float-slow">
        <div className="w-16 h-16 bg-yellow-400 rounded-full opacity-70">Circle</div>
      </div>
      <div className="absolute bottom-20 left-10 animate-float">
        <div className="w-12 h-12 bg-teal-400 rotate-45 opacity-70">square</div>
      </div> */}
    </section>
  )
}

