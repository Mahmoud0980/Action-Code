
import ValuesIllustration from "../components/ValuesIllustration";
import { useLanguage } from "../context/LanguageContext";

export default function SectionValues() {
  const { t } = useLanguage();

  const values = [
    {
      title: t.innovationTitle,
      desc: t.innovationValDesc,
      active: true,
    },
    {
      title: t.transparencyTitle,
      desc: t.transparencyValDesc,
      active: false,
    },
    {
      title: t.qualityTitle,
      desc: t.qualityValDesc,
      active: false,
    },
  ];

  return (
    <section className="bg-white py-[60px] md:py-[90px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[48px]">
        <div className="grid md:grid-cols-2 items-center gap-10 md:gap-[80px]">
          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <ValuesIllustration />
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-1 md:order-2">
            <h2 className="text-primary text-[28px] md:text-[36px] font-bold mb-6 md:mb-10 text-center md:text-start">
              {t.ourValuesTitle}
            </h2>

            <div className="space-y-7">
              {values.map((v, idx) => (
                <div
                  key={idx}
                  className={
                    v.active
                      ? "bg-white rounded-xl ps-7 pe-4 py-6 shadow-[0_12px_30px_rgba(0,0,0,0.10)] border border-gray-100"
                      : "ps-1"
                  }
                >
                  <h4 className="text-[15px] font-bold text-[#1F2A44] mb-1">
                    {v.title}
                  </h4>
                  <p className="text-[13px] text-muted leading-[22px]">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}