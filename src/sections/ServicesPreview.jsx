import { useLanguage } from "../context/LanguageContext";

export default function ServicesPreview() {
  const { t } = useLanguage();

  return (
    <section className="mt-[60px] md:mt-[120px] mb-[100px] md:mb-[160px]">
      
      {/* Title */}
      <h2 className="text-center text-[28px] md:text-[36px] font-semibold text-[#1E3A8A] mb-[40px] md:mb-[60px]">
        {t.servicesPreviewTitle}
      </h2>

      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="
          bg-[#ffffff]
          rounded-[30px] md:rounded-[40px]
          shadow-[0px_20px_60px_rgba(0,0,0,0.08)]
          px-6 md:px-[80px]
          py-10 md:py-[60px]
          grid
          grid-cols-1
          md:grid-cols-3
          gap-10 md:gap-[80px]
          items-start
        ">
          
          {/* Item 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start">
            <div className="text-[#4F46E5] mb-6">
              <svg width="42" height="42" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="6" y="10" width="30" height="20" rx="4"/>
                <line x1="14" y1="34" x2="28" y2="34"/>
              </svg>
            </div>

            <h3 className="text-[20px] md:text-[22px] font-semibold text-[#333333] mb-3">
              {t.webDesignTitle}
            </h3>

            <p className="text-[14px] md:text-[16px] text-[#666666]">
              {t.modernCleanDesc}
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start">
            <div className="text-[#4F46E5] mb-6">
              <svg width="42" height="42" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="10" y="6" width="22" height="22" rx="6"/>
                <polyline points="16 18 20 22 26 16"/>
              </svg>
            </div>

            <h3 className="text-[20px] md:text-[22px] font-semibold text-[#333333] mb-3">
              {t.webDevTitle}
            </h3>

            <p className="text-[14px] md:text-[16px] text-[#666666]">
              {t.webDevDesc}
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start">
            <div className="text-[#4F46E5] mb-6">
              <svg width="42" height="42" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="8" y="8" width="26" height="10" rx="3"/>
                <rect x="8" y="22" width="26" height="10" rx="3"/>
              </svg>
            </div>

            <h3 className="text-[20px] md:text-[22px] font-semibold text-[#333333] mb-3">
              {t.ecommerceTitle}
            </h3>

            <p className="text-[14px] md:text-[16px] text-[#666666]">
              {t.ecommerceDesc}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}