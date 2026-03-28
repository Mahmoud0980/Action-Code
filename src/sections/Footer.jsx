import "./Footer.css";
import logo from "../assets/logo.png";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-cols">
          <div className="footer-col">
            <h4>{t.product}</h4>
            <a href="#">{t.employeeDB}</a>
            <a href="#">{t.payroll}</a>
            <a href="#">{t.absences}</a>
            <a href="#">{t.timeTracking}</a>
            <a href="#">{t.shiftPlanner}</a>
            <a href="#">{t.recruiting}</a>
          </div>

          <div className="footer-col">
            <h4>{t.information}</h4>
            <a href="#">{t.faq}</a>
            <a href="#">{t.blog}</a>
            <a href="#">{t.support}</a>
          </div>

          <div className="footer-col">
            <h4>{t.company}</h4>
            <a href="#">{t.about}</a>
            <a href="#">{t.careers}</a>
            <a href="#">{t.contact}</a>
            <a href="#">{t.liftMedia}</a>
          </div>

          <div className="footer-subscribe">
            <h4>{t.subscribeTitle}</h4>

            <div className="footer-input">
              <input type="email" placeholder={language === "ar" ? "البريد الإلكتروني" : "Email address"} />
              <button aria-label="send">
                {document.documentElement.dir === "rtl" ? "←" : "→"}
              </button>
            </div>

            <p>
              {t.subscribeDesc}
            </p>
          </div>
        </div>

        <div className="footer-line" />

        <div className="footer-bottom">
          <img className="footer-logo" src={logo} alt="Action Code" />

          <div className="footer-links">
            <a href="#">{t.terms}</a>
            <a href="#">{t.privacy}</a>
            <a href="#">{t.cookies}</a>
          </div>

          <div className="footer-social">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Twitter">x</a>
          </div>
        </div>
      </div>
    </footer>
  );
}