import aboutImg from "../assets/about.png"; 
import aboutIcon from "../assets/title-image.png"; 
import { useLanguage } from "../context/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-[60px] md:py-[90px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[48px]">
        <div className="grid md:grid-cols-2 items-center gap-[40px] md:gap-[70px]">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={aboutIcon} alt="" className="w-[44px] h-[44px]" />
              <h2 className="text-[36px] md:text-[48px] leading-[1.05] font-bold text-primary">
                {t.aboutSectionTitle}
              </h2>
            </div>

            <p className="text-muted text-[16px] leading-[28px] max-w-[520px] mb-8">
              {t.aboutDesc}
            </p>

            <button className="bg-[#3DB4F2] text-white px-6 md:px-10 py-4 w-full md:w-auto rounded-xl md:rounded-full text-[13px] font-semibold shadow-md hover:opacity-90 transition text-start md:text-center block">
              {t.aboutBtn}
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative rounded-[28px] overflow-hidden">
              <img
                src={aboutImg}
                alt="About"
                className="w-full h-[300px] md:h-[520px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-white via-white/70 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}