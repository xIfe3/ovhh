import { titleClass, subtitleClass } from "@/utils/stylesContent";

const TestimonialCard = ({ quote, name, title, avatar }: any) => (
  <div className="p-4 flex flex-col border-l-6 border-black">
    <blockquote className="text-lg italic leading-relaxed mb-6">
      &quot;{quote}&quot;
    </blockquote>
    <div className="flex items-center mt-auto">
      <img
        src={avatar}
        alt={name}
        className="w-12 h-12 object-cover rounded-xs mr-4"
      />
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className={subtitleClass}>TESTIMONIALS</p>
        <h2 className={`${titleClass} mb-16`}>WHAT CLIENTS SAY</h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          <TestimonialCard
            quote="OVHH didn't just help me sign deals—they taught me how to think like a business owner. My NIL income tripled in six months."
            name="MARCUS J."
            title="D1 RUNNING BACK"
            avatar="/testimonial.jpg"
          />
          <TestimonialCard
            quote="I've worked with multiple advisors. OVHH is the only firm that actually understands high-performance wealth strategy."
            name="DAVID R."
            title="CEO, TECH STARTUP"
            avatar="/testimonial.jpg"
          />
          <TestimonialCard
            quote="They saved me over $800K in taxes last year alone. That's more than I paid in fees over five years. Best investment I ever made."
            name="JAMES T."
            title="REAL ESTATE INVESTOR"
            avatar="/testimonial.jpg"
          />
          <TestimonialCard
            quote="OVHH helped me transition from the NFL to business ownership. Now I'm building generational wealth, not just spending it."
            name="ANDRE M."
            title="FORMER NFL LINEBACKER"
            avatar="/testimonial.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
