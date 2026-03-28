import "../sections/SectionServices.css";

import icon1 from "../assets/Icons/icon1.png";
import icon2 from "../assets/Icons/icon2.png";
import icon3 from "../assets/Icons/icon3.png";
import icon4 from "../assets/Icons/icon4.png";
import icon5 from "../assets/Icons/icon5.png";
import icon6 from "../assets/Icons/icon6.svg";
import titleImage from "../assets/title-image.png";

import vector4 from "../assets/vectors/Vector4.svg";
import vector5 from "../assets/vectors/Vector5.svg";
import { useLanguage } from "../context/LanguageContext";

export default function SectionServices() {
  const { t } = useLanguage();

  return (
    <section className="services-section">
      
      {/* الخلفيات الزرقاء */}
      <img src={vector4} className="vector vector-left hidden md:block" alt="" />
      <img src={vector5} className="vector vector-right hidden md:block" alt="" />

      <div className="container px-4 md:px-0">

        {/* العنوان */}
        <div className="services-title">
          <h2 className="text-2xl md:text-4xl text-[#223B72] font-bold">
            {t.servicesTitle} <br />
            {t.servicesSubtitle}
          </h2>  
          <img
            src={titleImage}
            alt=""
            className="title-image hidden md:block"
          />
        </div>

        {/* الكروت */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="service-card p-6 md:p-8">
            <img src={icon1} alt="" className="mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-[#223B72]">{t.customSoftware}</h3>
            <p className="text-gray-500 text-sm md:text-base">
              {t.customSoftwareDesc}
            </p>
          </div>

          <div className="service-card p-6 md:p-8">
            <img src={icon2} alt="" className="mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-[#223B72]">{t.qaTesting}</h3>
            <p className="text-gray-500 text-sm md:text-base">
              {t.qaTestingDesc}
            </p>
          </div>

          <div className="service-card p-6 md:p-8">
            <img src={icon3} alt="" className="mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-[#223B72]">{t.aiData}</h3>
            <p className="text-gray-500 text-sm md:text-base">
              {t.aiDataDesc}
            </p>
          </div>

          <div className="service-card p-6 md:p-8">
            <img src={icon4} alt="" className="mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-[#223B72]">{t.uxUi}</h3>
            <p className="text-gray-500 text-sm md:text-base">
              {t.uxUiDesc}
            </p>
          </div>

          <div className="service-card p-6 md:p-8">
            <img src={icon5} alt="" className="mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-[#223B72]">{t.mobileApp}</h3>
            <p className="text-gray-500 text-sm md:text-base">
              {t.mobileAppDesc}
            </p>
          </div>

          <div className="service-card p-6 md:p-8">
            <img src={icon6} alt="" className="mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-[#223B72]">{t.platformInfra}</h3>
            <p className="text-gray-500 text-sm md:text-base">
              {t.platformInfraDesc}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}