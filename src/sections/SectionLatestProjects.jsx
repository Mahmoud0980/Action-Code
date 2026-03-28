import "./SectionLatestProjects.css";

import deco from "../assets/vectors/vector5.png"; 
import logo1 from "../assets/Icons/microsoft.png";
import logo2 from "../assets/Icons/google.png";
import logo3 from "../assets/Icons/slack.png";
import logo4 from "../assets/Icons/lg.svg";
import { useLanguage } from "../context/LanguageContext";

export default function SectionLatestProjects() {
  const { t } = useLanguage();

  return (
    <section className="projects-section">
      <div className="projects-card">
        <img className="projects-deco hidden md:block" src={deco} alt="" />

        <h2 className="projects-title text-center text-2xl md:text-4xl">{t.latestProjects}</h2>

       <div className="projects-logos flex flex-wrap justify-center gap-6 mt-8">
         <div className="logo-box bg-white shadow rounded-xl p-4 w-32 md:w-48 flex justify-center items-center"><img src={logo1} alt="Microsoft" className="max-w-full h-auto" /></div>
         <div className="logo-box bg-white shadow rounded-xl p-4 w-32 md:w-48 flex justify-center items-center"><img src={logo2} alt="Google" className="max-w-full h-auto" /></div>
         <div className="logo-box bg-white shadow rounded-xl p-4 w-32 md:w-48 flex justify-center items-center"><img src={logo3} alt="Slack" className="max-w-full h-auto" /></div>
         <div className="logo-box lg bg-white shadow rounded-xl p-4 w-32 md:w-48 flex justify-center items-center">
           <img src={logo4} alt="LG" className="max-w-full h-auto" />
         </div>
       </div>

        <div className="flex justify-center mt-10">
          <button className="projects-btn bg-[#223B72] text-white px-8 py-3 rounded-full hover:opacity-90">{t.viewWork || "Our full Projects"}</button>
        </div>
      </div>
    </section>
  );
}