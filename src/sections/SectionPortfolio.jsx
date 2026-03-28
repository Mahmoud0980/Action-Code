
import ProjectCard from "../components/ProjectCard";

import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import icon from "../assets/title-image.png";

import deco from "../assets/Vector 3.png"; // الشكل الأزرق بالخلف إن وجد

const projects = [
  { title: "Project Alpha", category: "Business Website", image: img1 },
  { title: "Project Alpha", category: "Business Website", image: img2 },
  { title: "Project Alpha", category: "Business Website", image: img3 },
];

export default function SectionPortfolio() {
  return (
    <section className="bg-white pt-[40px] pb-[120px] relative overflow-hidden">
      <img
        src={deco}
        alt=""
        className="absolute right-[170px] top-[120px] w-[120px] hidden md:block"
      />

      <div className="max-w-[1440px] mx-auto px-[48px] relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <img src={icon} alt="" className="w-[42px] h-[42px] object-contain" />
          <h2 className="text-[64px] leading-none font-medium text-[#2E2E2E]">
            Our Work
          </h2>
        </div>

        <div className="flex flex-wrap gap-10">
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