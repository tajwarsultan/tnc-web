import Image from "next/image"
import Link from "next/link"
import blog from '../../../public/blogbg.png'

export default function HeroSection() {
  return (
    <section id="Home" className="relative py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Experience the Future
            <br />
            of Cryptocurrency
            <br />
            Trading
          </h1>
          <p className="text-gray-300 mb-8 max-w-lg">
            Dive into a seamless and secure platform designed for both beginners and seasoned traders. Navigate the
            dynamic world of cryptocurrencies with TNC Crypto.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pricing"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md transition-colors font-medium"
            >
              Pricing Table
            </Link>
            <Link
              href="/download"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-md transition-colors font-medium"
            >
              Download App
            </Link>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
          <Image src={blog} alt="Blockchain Cubes" fill className="object-contain" />
        </div>
      </div>
    </section>
  )
}

