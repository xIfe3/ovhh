import { titleClass, subtitleClass } from "@/utils/stylesContent";

const ProcessStep = ({ number, title, description }: any) => (
  <div className="text-center p-4">
    <div className="bg-black text-white w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
      {number}
    </div>
    <h3 className="text-lg font-bold mb-3 uppercase tracking-wider">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const TheProcess = () => {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className={subtitleClass}>HOW IT WORKS</p>
        <h2 className={`${titleClass} mb-3`}>THE OVHH PROCESS</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          A proven system that transforms your financial future in four
          strategic steps
        </p>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          <ProcessStep
            number="01"
            title="DISCOVERY CALL"
            description="We analyze your current situation, goals, and opportunities in a no-pressure strategy session."
          />
          <ProcessStep
            number="02"
            title="CUSTOM STRATEGY"
            description="Receive a tailored wealth plan designed specifically for your unique position and objectives."
          />
          <ProcessStep
            number="03"
            title="IMPLEMENTATION"
            description="We execute the strategy with precision, handling negotiations, structures, and partnerships."
          />
          <ProcessStep
            number="04"
            title="ONGOING OPTIMIZATION"
            description="Continuous monitoring and adjustments ensure your wealth grows and stays protected."
          />
        </div>
      </div>
    </section>
  );
};

export default TheProcess;
