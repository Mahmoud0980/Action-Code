import { useLanguage } from "../context/LanguageContext";

export default function ProjectCard({ image, title, category }) {
  const { t } = useLanguage();

  return (
    <div className="relative w-[317px] h-[220px]">
      {/* Image */}
      <div className="w-[317px] h-[148px] rounded-[8px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover block"
        />
      </div>

      {/* Floating info card */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[114px] w-[255px] bg-[#F5F7FA] rounded-[8px] px-4 py-4 text-center shadow-[0_8px_16px_rgba(171,190,209,0.40)]">
        <h4 className="text-[#34B6F3] text-[14px] font-semibold mb-1">
          {title}
        </h4>

        <p className="text-[#666666] text-[14px] mb-3">
          {category}
        </p>

        <span className="inline-flex items-center gap-2 text-[#223B72] text-[14px] font-medium cursor-pointer hover:opacity-80 transition">
          {t.readMore} <span className="rtl:rotate-180">→</span>
        </span>
      </div>
    </div>
  );
}