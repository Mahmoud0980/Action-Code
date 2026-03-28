import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)




<nav>
    import { useState } from "react";
import logo from "../assets/logom.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full pt-6 px-6 md:px-12">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Action Code Logo"
            className="h-[115px] md:h-[75px] object-contain"
          />
        </Link>

        {/* Desktop Capsule */}
        <div className="hidden md:block bg-[#EDEFF4] rounded-full px-10 py-3 shadow-sm">
          <ul className="flex gap-12 text-[15px] font-medium text-gray-600">
            <li>
              <Link className="text-[#2563EB] font-semibold" to="/">
                Home
              </Link>
            </li>

            <li>
              <Link className="hover:text-[#2563EB] transition" to="/about">
                About us
              </Link>
            </li>

            <li>
              <Link className="hover:text-[#2563EB] transition" to="/services">
                Services
              </Link>
            </li>

            <li>
              <Link className="hover:text-[#2563EB] transition" to="/portfolio">
                Portfolio
              </Link>
            </li>

            <li>
             <Link className="hover:text-[#2563EB] transition" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-6">
          <div className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 shadow-sm">
            EN ▾
          </div>

          <button className="bg-[#1E3A8A] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
            Schedule a Call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-4 bg-white rounded-2xl shadow-lg p-6 space-y-4 text-gray-700 font-medium">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setOpen(false)}>
            About us
          </Link>

          <Link to="/services" onClick={() => setOpen(false)}>
            Services
          </Link>

          <Link to="/portfolio" onClick={() => setOpen(false)}>
            Portfolio
          </Link>

          <Link to="/contact"onClick={() => setOpen(false)}>
          Contact Us
          </Link>

          <div className="pt-4 border-t">
            <button className="bg-[#1E3A8A] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
              Schedule a Call
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
</nav>
import icon from "../assets/title-image.png";
import deco1 from "../assets/Vector 3.png";
import deco2 from "../assets/Vector 2.png";

export default function SectionContact() {
  return (
    <section className="bg-white pt-[60px] pb-[120px] relative overflow-hidden">

      {/* decorative shapes */}
      <img
        src={deco1}
        className="absolute right-[140px] top-[220px] w-[140px] opacity-90"
      />

      <img
        src={deco2}
        className="absolute right-[80px] bottom-[120px] w-[90px] opacity-90"
      />

      <div className="max-w-[1440px] mx-auto px-[48px]">

        {/* Title */}
        <div className="flex items-center gap-4 mb-4">
          <img src={icon} className="w-[42px]" />
          <h1 className="text-[64px] font-medium text-[#223B72]">
            Contact Us
          </h1>
        </div>

        <p className="text-[#555] text-[18px] mb-[70px] max-w-[650px]">
          Have a project in mind? Tell us about it – we'd love to help you bring it to life
        </p>

        {/* layout */}
        <div className="grid md:grid-cols-2 gap-[100px] items-start">

          {/* LEFT */}
          <div>

            <h3 className="text-[30px] font-semibold text-[#223B72] mb-6">
              Let's talk with us
            </h3>

            <p className="text-[#444] mb-10 leading-[28px] max-w-[420px]">
              Questions, comments, or suggestions? Simply fill in the form and we'll be in touch shortly.
            </p>

            {/* contact items */}

            <div className="space-y-6">

              <div className="flex gap-4 items-start">
                <span className="text-[#34B6F3] text-xl">📍</span>
                <p className="text-[#333]">
                  1055 Arthur ave Elk Groot, 67. <br />
                  New Palmas South Carolina.
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <span className="text-[#34B6F3] text-xl">📞</span>
                <p className="text-[#333]">
                  +961 234 678 9108 99
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <span className="text-[#34B6F3] text-xl">✉️</span>
                <p className="text-[#333]">
                  Contact@action.com
                </p>
              </div>

            </div>
          </div>


          {/* RIGHT FORM */}
          <div className="bg-white rounded-[14px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100">

            <form className="space-y-4">

              <div className="grid grid-cols-2 gap-4">

                <input
                  type="text"
                  placeholder="John"
                  className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#34B6F3]"
                />

                <input
                  type="text"
                  placeholder="Last Name*"
                  className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#34B6F3]"
                />

              </div>


              <input
                type="email"
                placeholder="Email*"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#34B6F3]"
              />

              <input
                type="text"
                placeholder="Phone Number*"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#34B6F3]"
              />

              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#34B6F3]"
              />

              {/* button */}

              <button
                type="submit"
                className="w-full mt-4 py-3 rounded-full text-white font-medium
                bg-gradient-to-r from-[#4CC3F7] to-[#4B68F4] hover:opacity-90 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
