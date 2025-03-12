import Image from "next/image"
import {  BarChart2, Shield, Headphones } from "lucide-react"
// Award,
import settingIcn from '../../../public/setting-icn.png'

export default function WhyChooseSection() {
  return (
    <section id="whychoose" className="py-16 md:py-24 px-6 md:px-12 bg-amber-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-amber-950 font-chakra-petch">Why Choose TNC Crypto</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto text-gray-500">
          Choose TNC Crypto for a secure, innovative, and community-driven cryptocurrency experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              {/* <Award className="h-12 w-12 text-yellow-400" /> */}
              <Image src={settingIcn} alt="Award Icon" width={48} height={48} className="object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Unmatched Expertise</h3>
            <p className=" text-gray-500">
              Our team of crypto currency experts constantly monitors the market to provide you with the latest insights
              and trends.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Image src="/interface-icon.png" alt="Interface Icon" width={48} height={48} className="object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Intuitive User Interface</h3>
            <p className="text-gray-500">
              Navigate our platform with ease, making your trading experience smooth and efficient.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Image src="/resources-icon.png" alt="Resources Icon" width={48} height={48} className="object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Wide Range of Resources</h3>
            <p className="text-gray-500">
              From Bitcoin to emerging altcoins, access a wide range of digital currencies.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Secure and Reliable</h3>
            <p className="text-gray-500">
              We prioritize your security. Our platform uses advanced encryption to protect your assets and personal
              information.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <BarChart2 className="h-12 w-12 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Real-Time Market Data</h3>
            <p className="text-gray-500">Stay informed with live updates, price charts, and market analytics.</p>
          </div>

          {/* Feature 6 */}
          <div className="p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Headphones className="h-12 w-12 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">24/7 Support</h3>
            <p className="text-gray-500">
              Our dedicated support team is always available to assist you with any questions or issues.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

