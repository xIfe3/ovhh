import { titleClass, subtitleClass } from "@/utils/stylesContent";

const ServiceCard = ({ icon, title, description }: any) => (
  <div className="p-8 bg-[#1a1a1a] text-center h-full flex flex-col items-center">
    <div className="text-4xl mb-4 text-white">{icon}</div>{" "}
    {/* Icon placeholder */}
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-sm text-gray-400 mb-6">{description}</p>
    <a
      href="#"
      className="mt-auto text-xs uppercase tracking-widest font-semibold hover:text-gray-300"
    >
      LEARN MORE —
    </a>
  </div>
);

const OurServices = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className={subtitleClass}>WHAT WE DO</p>
        <h2 className={`${titleClass} mb-12`}>OUR SERVICES</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">
          Comprehensive wealth strategy tailored for athletes and high-net-worth
          individuals
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon="💰" // Placeholder for $ bag icon
            title="NIL MONETIZATION"
            description="Maximize your Name, Image, and Likeness value with strategic partnerships, brand deals, and revenue optimization."
          />
          <ServiceCard
            icon="🏛️" // Placeholder for building icon
            title="WEALTH PROTECTION"
            description="Shield your assets with tax optimization, trust structures, and legal frameworks designed for high earners."
          />
          <ServiceCard
            icon="🚀" // Placeholder for rocket icon
            title="GROWTH STRATEGY"
            description="Build generational wealth through strategic investments, business ventures, and long-term financial planning."
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
