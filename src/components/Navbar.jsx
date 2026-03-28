import { useState } from "react";
import logo from "../assets/logom.png";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="w-full pt-6 px-4 md:px-12">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            alt="Action Code Logo"
            className="h-[115px] md:h-[75px] object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:block bg-[#EDEFF4] rounded-full px-10 py-3 shadow-sm">
          <ul className="flex gap-12 text-[15px] font-medium text-gray-600">
            <li><Link to="/">{t.home}</Link></li>
            <li><Link to="/about">{t.about}</Link></li>
            <li><Link to="/services">{t.services}</Link></li>
            <li><Link to="/portfolio">{t.portfolio}</Link></li>
            <li><Link to="/contact">{t.contact}</Link></li>
          </ul>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 shadow-sm outline-none"
          >
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>

          <button className="bg-[#1E3A8A] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
            {t.schedule}
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Content */}
      {open && (
        <div className="md:hidden mt-4 bg-white rounded-2xl shadow-lg p-6 space-y-4 text-gray-700 font-medium flex flex-col">
          <Link to="/" onClick={() => setOpen(false)} className="block py-1">{t.home}</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block py-1">{t.about}</Link>
          <Link to="/services" onClick={() => setOpen(false)} className="block py-1">{t.services}</Link>
          <Link to="/portfolio" onClick={() => setOpen(false)} className="block py-1">{t.portfolio}</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block py-1">{t.contact}</Link>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 shadow-sm outline-none"
          >
            <option value="en">English - EN</option>
            <option value="ar">العربية - AR</option>
          </select>

          <div className="pt-4 border-t">
            <button className="w-full bg-[#1E3A8A] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
              {t.schedule}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}