import "./SectionWhyChoose.css";
import heroImage from "../assets/why-image.png"; 
import icon1 from "../assets/Icons/fast.png";
import icon2 from "../assets/Icons/client.png";
import icon3 from "../assets/Icons/support.png";
import { useLanguage } from "../context/LanguageContext";

export default function SectionWhyChoose() {
  const { t } = useLanguage();

  return (
    <section className="why-section">
      <div className="why-container">

        {/* LEFT IMAGE */}
        <div className="why-left">
          <div className="image-wrapper">
            <img src={heroImage} alt="Why Choose Us" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="why-right">
          <h2>{t.whyChooseUs}</h2>
          <p className="why-description">
            {t.whyDesc}
          </p>

          <div className="why-items">

            <div className="why-item">
              <img src={icon1} alt="" />
              <div>
                <h4>{t.fastDelivery}</h4>
                <p>{t.fastDeliveryDesc}</p>
              </div>
            </div>

            <div className="why-item active">
              <img src={icon2} alt="" />
              <div>
                <h4>{t.clientFocused}</h4>
                <p>{t.clientFocusedDesc}</p>
              </div>
            </div>

            <div className="why-item">
              <img src={icon3} alt="" />
              <div>
                <h4>{t.ongoingSupport}</h4>
                <p>{t.ongoingSupportDesc}</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}