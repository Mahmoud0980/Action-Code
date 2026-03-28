
import ProjectCard from "../components/ProjectCard";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import icon from "../assets/title-image.png";
import deco from "../assets/Vector 3.png";
import { useLanguage } from "../context/LanguageContext";

export default function SectionPortfolio() {
  const { t } = useLanguage();

  const projects = [
    { title: "Project Alpha", category: t.businessWebsite, image: img1 },
    { title: "Project Alpha", category: t.businessWebsite, image: img2 },
    { title: "Project Alpha", category: t.businessWebsite, image: img3 },
  ];

  return (
    <section className="bg-white pt-[40px] pb-[120px] relative overflow-hidden">
      <img
        src={deco}
        alt=""
        className="absolute right-[170px] rtl:left-[170px] rtl:right-auto top-[120px] w-[120px] hidden md:block"
      />

      <div className="max-w-[1440px] mx-auto px-4 md:px-[48px] relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <img src={icon} alt="" className="w-[42px] h-[42px] object-contain" />
          <h2 className="text-[48px] md:text-[64px] leading-none font-medium text-[#2E2E2E]">
            {t.ourWork}
          </h2>
        </div>

        <div className="flex flex-wrap gap-10 justify-center md:justify-start">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}