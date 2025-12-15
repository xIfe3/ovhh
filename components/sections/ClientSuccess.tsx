import { titleClass, subtitleClass } from "@/utils/stylesContent";
const CaseStudyCard = ({ image, category, title, description }: any) => (
  <div className="bg-white text-black p-6 flex flex-col h-full">
    <img src={image} alt={category} className="w-full h-48 object-cover mb-4" />
    <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
      {category}
    </p>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-sm text-gray-600 mb-6 flex-grow">{description}</p>
    <a
      href="#"
      className="mt-auto text-xs uppercase tracking-widest font-semibold hover:text-gray-700"
    >
      VIEW CASE STUDY —
    </a>
  </div>
);

const ClientSuccess = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className={subtitleClass}>CLIENT SUCCESS</p>
        <h2 className={`${titleClass} mb-3`}>REAL RESULTS</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">
          Our clients don&apos;t just protect wealth—they multiply it
        </p>

        {/* Results Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <CaseStudyCard
            image="/result1.png" // Note: You'd need to crop the original image into three parts
            category="COLLEGE ATHLETE"
            title="$2.4M NIL DEAL"
            description="Helped a D1 quarterback secure multi-year endorsement deals with three major brands while maintaining NCAA compliance."
          />
          <CaseStudyCard
            image="/result2.png"
            category="BUSINESS OWNER"
            title="$890K TAX SAVINGS"
            description="Restructured a tech founder's portfolio, reducing annual tax liability by 43% through strategic planning."
          />
          <CaseStudyCard
            image="/result3.png"
            category="NFL VETERAN"
            title="$12M PROTECTED"
            description="Safeguarded a retiring player's assets through trust structures and diversified investments for post-career income."
          />
        </div>
      </div>
    </section>
  );
};

export default ClientSuccess;
