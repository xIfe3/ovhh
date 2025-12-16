import { titleClass, subtitleClass } from "@/utils/stylesContent";

const BuiltForTheElite = () => {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className={subtitleClass}>WHO WE ARE</p>
          <h2 className={titleClass}>
            BUILT FOR <br />
            THE ELITE
          </h2>
          <p className="mb-6 max-w-md">
            OVHH isn't for everyone. We work exclusively with men and women
            athletes from high school phenoms to NFL stars—and business owners
            who understand that wealth isn't just earned, it's strategically
            built.
          </p>
          <p className="mb-10 max-w-md">
            We exist because too many athletes and entrepreneurs lose millions
            to bad advice, poor planning, and predatory partnerships. We change
            that.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative aspect-square md:aspect-auto h-96">
          <img
            src="/builtforelite.png"
            alt="Business meeting in a high-rise office"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BuiltForTheElite;
