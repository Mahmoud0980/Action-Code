import heroImage from "../assets/hero.png";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="pt-[140px] bg-lightBg overflow-hidden">
      <div className="max-w-[1300px] ms-4 md:ms-[80px] lg:ms-[140px] pe-4 md:pe-6 grid md:grid-cols-2 items-center gap-10 md:gap-16">
        {/* Left */}
        <div>
          <p className="text-accent text-[14px] tracking-[3px] font-semibold mb-6">
            {t.techServices}
          </p>

          <h1 className="text-[36px] md:text-[48px] leading-[46px] md:leading-[60px] font-bold text-primary mb-6">
            {t.heroTitle}
          </h1>

          <p className="text-muted text-[16px] leading-[28px] mb-10 max-w-[520px]">
            {t.heroDesc}
          </p>

          <div className="flex flex-wrap gap-4 md:gap-5">
            <button className="bg-[#223B72] text-white px-6 md:px-7 py-3 rounded-full text-sm font-medium shadow-md hover:opacity-90 transition">
              {t.startProject}
            </button>

            <button className="bg-white border border-gray-200 text-primary px-6 md:px-7 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition">
              {t.viewWork}
            </button>
          </div>
        </div>

        {/* Right Image + Decorative Glow */}
        <div className="relative flex justify-center mt-10 md:mt-0">
          {/* Glow circle behind */}
          <div className="absolute w-[300px] md:w-[420px] h-[300px] md:h-[420px] bg-cyan-400/20 rounded-full blur-3xl bottom-0"></div>

          <img
            src={heroImage}
            alt="App preview"
            className="relative w-full max-w-[430px] shadow-hero"
          />
        </div>
      </div>
    </section>
  );
}
