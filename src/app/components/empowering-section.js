import Image from "next/image"
import animation from '../../../public/animation.jpg'

export default function EmpoweringSection() {
  return (
    <section className="py-2 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Empowering Your Cryptocurrency
          <br />
          Journey
        </h2>
        <div className="flex justify-center">
          <div className="relative h-[300px] md:h-[400px] w-full max-w-2xl rounded-lg overflow-hidden">
            <Image src={animation} alt="Cryptocurrency Journey" fill className="object-cover" />
            
                  {/* comment */}
          </div>
        </div>
      </div>
    </section>
  )
}

