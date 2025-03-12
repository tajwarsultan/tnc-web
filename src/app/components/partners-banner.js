import Image from "next/image"

export default function PartnersBanner() {
  const partners = [
    { name: "Google", logo: "/google-logo.png" },
    { name: "Etisalat", logo: "/etisalat-logo.png" },
    { name: "Business Insider", logo: "/business-insider-logo.png" },
    { name: "Toshiba", logo: "/toshiba-logo.png" },
    { name: "Netflix", logo: "/netflix-logo.png" },
    { name: "Oracle", logo: "/oracle-logo.png" },
  ]

  return (
    <div className="bg-teal-500  py-6 px-4 overflow-hidden scale-x-102 md:rotate-5">
    <marquee>
      <div className="max-w-full mx-auto">
        <div className="flex items-center justify-around flex-wrap gap-8 md:gap-12">
          {partners.map((partner) => (
            <div key={partner.name} className="relative h-3 w-12  lg:w-24 md:h-10 md:w-32">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                fill
                className="object-contain font-bold text-black text-xl lg:text-3xl filter brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
      </marquee>
    </div>
  )
}
