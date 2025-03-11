import Image from "next/image"
import chipic from '../../../public/chipicbg.png'

export default function DiscoverSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[300px] md:h-[400px] w-full">
          <Image src={chipic} alt="Cryptocurrency Coins" fill className="object-contain" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Discover the Future of
            <br />
            Finance with TNC Crypto
          </h2>
          <p className="text-gray-300 mb-4">
            Welcome to TNC Crypto, your trusted partner in the digital currency realm. Whether you're just starting out
            or are an experienced trader, our platform offers a comprehensive suite of tools to help you make informed
            decisions and maximize your investments.
          </p>
          <p className="text-gray-300">
            Our intuitive interface and real-time analytics provide you with the insights you need to navigate the
            cryptocurrency market with confidence.
          </p>
        </div>
      </div>
    </section>
  )
}

