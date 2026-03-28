import icon from "../assets/title-image.png";
import deco1 from "../assets/Vector 3.png";
import deco2 from "../assets/Vector 2.png";
import { useLanguage } from "../context/LanguageContext";

export default function SectionContact() {
  const { t, language } = useLanguage();

  return (
    <section className="bg-white pt-[60px] pb-[80px] md:pb-[120px] relative overflow-hidden">
      <img src={deco1} alt="" className="absolute right-[140px] rtl:left-[140px] rtl:right-auto top-[220px] w-[140px] opacity-90 hidden md:block" />
      <img src={deco2} alt="" className="absolute right-[80px] rtl:left-[80px] rtl:right-auto bottom-[120px] w-[90px] opacity-90 hidden md:block" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-[48px]">
        <div className="flex items-center gap-4 mb-4">
          <img src={icon} alt="" className="w-[42px]" />
          <h1 className="text-[36px] md:text-[64px] font-medium text-[#223B72]">
            {t.contactTitle}
          </h1>
        </div>

        <p className="text-[#555] text-[16px] md:text-[18px] mb-[40px] md:mb-[70px] max-w-[650px]">
          {t.contactSubtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-10 md:gap-[100px] items-start">
          <div>
            <h3 className="text-[24px] md:text-[30px] font-semibold text-[#223B72] mb-6">
              {t.letsTalk}
            </h3>

            <p className="text-[#444] mb-10 leading-[28px] max-w-[420px]">
              {t.contactDesc}
            </p>
          </div>

          <div className="bg-white rounded-[14px] p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 relative z-10">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={language === "ar" ? "الاسم الأول" : "First Name*"}
                  className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#34B6F3]"
                />
                <input
                  type="text"
                  placeholder={language === "ar" ? "اسم العائلة" : "Last Name*"}
                  className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#34B6F3]"
                />
              </div>

              <input
                type="email"
                placeholder={language === "ar" ? "البريد الإلكتروني" : "Email*"}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#34B6F3]"
              />

              <input
                type="text"
                placeholder={language === "ar" ? "رقم الهاتف" : "Phone Number*"}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#34B6F3]"
              />

              <textarea
                rows="4"
                placeholder={language === "ar" ? "رسالتك..." : "Your message..."}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#34B6F3]"
              />

              <button
                type="submit"
                className="w-full mt-4 py-3 rounded-full text-white font-medium bg-gradient-to-r from-[#4CC3F7] to-[#4B68F4] hover:opacity-90 transition"
              >
                {t.sendMessage}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}