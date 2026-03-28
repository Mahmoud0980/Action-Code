import "./CTASection.css";
import teamImg from "../assets/team.png"; 
import vector6 from "../assets/vectors/Vector6.png";
import { useLanguage } from "../context/LanguageContext";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="cta-wrap">
      <div className="cta-container">
        <div className="cta-card">
          <img src={vector6} alt="" className="cta-vector6" />
          <h2 className="cta-title">
            {t.ctaTitle}
          </h2>

          <button className="cta-btn">{t.ctaBtn}</button>

          <div className="cta-photo">
            <img src={teamImg} alt="Team" />
          </div>
        </div>
      </div>
    </section>
  );
}