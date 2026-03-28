import { useLanguage } from "../context/LanguageContext";

export default function SectionCards() {
  const { t } = useLanguage();

  return (
    <section className="section-cards py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="card p-6 shadow rounded text-center md:text-start">
          <h3 className="text-[20px] font-bold text-[#223B72] mb-2">{t.innovationDriven}</h3>
          <p className="text-gray-500">{t.innovationDesc}</p>
        </div>

        <div className="card p-6 shadow rounded text-center md:text-start">
          <h3 className="text-[20px] font-bold text-[#223B72] mb-2">{t.strategicPlanning}</h3>
          <p className="text-gray-500">{t.strategicDesc}</p>
        </div>

        <div className="card p-6 shadow rounded text-center md:text-start">
          <h3 className="text-[20px] font-bold text-[#223B72] mb-2">{t.seamlessExecution}</h3>
          <p className="text-gray-500">{t.seamlessDesc}</p>
        </div>

      </div>
    </section>
  );
}