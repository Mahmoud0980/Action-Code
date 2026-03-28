import titleImage from "../assets/title-image.png";
import { useLanguage } from "../context/LanguageContext";

export default function SectionTitle() {
  const { t } = useLanguage();

  return (
    <section className="section-title py-12 px-4 md:px-0">
      <div className="container mx-auto text-center md:text-start">
        <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
          {t.empoweringVision} <br />
          {t.compTechSolutions}
        </h2>
        <img
          src={titleImage}
          alt=""
          className="title-image mx-auto md:mx-0 my-6"
        />
        <p className="text-muted text-lg max-w-2xl mx-auto md:mx-0">
          {t.techSolutionsDesc}
        </p>
      </div>
    </section>
  );
}