import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import logo from "../images/socious-logo.avif";
import { useTranslation } from "react-i18next";
import { Link } from "gatsby";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { t, i18n } = useTranslation("navbar");
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [mobileOpen, setMobileOpen] = useState(false);
  const aboutButtonRef = useRef();

  useEffect(() => {
    console.log("🔤 Current language:", i18n.language);
  }, [i18n.language]);

  // Handle showing desktop dropdown
  const handleMouseEnter = () => {
    if (aboutButtonRef.current) {
      const rect = aboutButtonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <nav className="absolute top-0 left-0 w-full bg-white py-4 z-[9999] font-sans">
        <div className="max-w-full md:max-w-[75%] mx-auto flex items-center justify-between px-4 md:px-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt={t("alt")} className="h-10 translate-y-[5px] md:translate-y-[10px]" />
            <span className="text-xl md:text-2xl font-semibold text-[#004C45] leading-tight">
              {t("brand")}
            </span>
          </div>

          {/* Language selector (always visible on mobile) */}
          <div className="flex md:hidden">
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="bg-gray-100 text-black px-3 py-1.5 rounded-xl text-sm font-medium"
            >
              <option value="en">English</option>
              <option value="ja">日本語</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
            </select>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: "home", href: "/" },
              { id: "benefits", href: "/#benefits" },
              { id: "howitworks", href: "/#howitworks" },
              { id: "faq", href: "/#faq" },
              { id: "thanks", href: "/thank" },
            ].map(link => (
              <a
                key={link.id}
                href={link.href}
                className="text-black font-medium no-underline hover:text-[#004C45]"
              >
                {t(link.id)}
              </a>
            ))}

            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                ref={aboutButtonRef}
                className="text-black font-medium hover:text-[#004C45]"
              >
                {t("about", "About Us")}
              </button>
            </div>
          </div>

          {/* Language & CTA - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="bg-gray-100 text-black px-5 py-2 rounded-xl text-sm font-medium"
            >
              <option value="en">English</option>
              <option value="ja">日本語</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
            </select>

            <a
              href="https://fund.socious.org/home"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#004C45] hover:bg-[#003832] text-white px-6 py-2 rounded-xl text-sm font-semibold no-underline"
            >
              {t("cta")}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-[#004C45]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t px-4 pb-4 space-y-3 shadow">
            {[
              { id: "home", href: "/" },
              { id: "benefits", href: "/#benefits" },
              { id: "howitworks", href: "/#howitworks" },
              { id: "faq", href: "/#faq" },
              { id: "thanks", href: "/thank" },
              { id: "newsroom", href: "/newsroom" },
              { id: "blog", href: "/blog" },
              { id: "team", href: "/team" },
            ].map(link => (
              <a
                key={link.id}
                href={link.href}
                className="block text-black font-medium no-underline hover:text-[#004C45]"
                onClick={() => setMobileOpen(false)}
              >
                {t(link.id, link.id.charAt(0).toUpperCase() + link.id.slice(1))}
              </a>
            ))}

            <a
              href="https://fund.socious.org/home"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#004C45] hover:bg-[#003832] text-white px-6 py-2 rounded-xl text-sm font-semibold no-underline text-center"
              onClick={() => setMobileOpen(false)}
            >
              {t("cta")}
            </a>
          </div>
        )}
      </nav>

      {/* Render Dropdown via Portal */}
      {showDropdown &&
        ReactDOM.createPortal(
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute bg-white border border-gray-200 shadow-lg rounded-md py-2 z-[9999]"
            style={{
              position: 'absolute',
              top: `${dropdownPosition.top}px`,
              left: `${dropdownPosition.left}px`,
              minWidth: `${dropdownPosition.width}px`
            }}
          >
            {[
              { label: "Blog", path: "/blog" },
              { label: "Newsroom", path: "/newsroom" },
              { label: "Team", path: "/team" },
            ].map(item => (
              <a
                key={item.label}
                href={item.path}
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
              >
                {t(item.label.toLowerCase(), item.label)}
              </a>
            ))}
          </div>,
          document.body
        )
      }
    </>
  );
}
