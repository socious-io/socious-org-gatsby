import React from "react"
import { useTranslation } from "react-i18next"
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import logo from "../images/socious-logo.avif";

export default function Footer() {
  const { t } = useTranslation("footer")

  return (
    <footer className="bg-white border-t pt-8 md:pt-12 pb-6 md:pb-8 px-4 md:px-6 max-w-full md:max-w-[75%] mx-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 justify-items-center md:justify-items-start">
        
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-6 text-center md:text-left">
          <div className="flex h-10 translate-y-[5px] md:translate-y-[10px] items-center">
            <img
              src={logo}
              alt="Socious Fund Logo"
              className="h-10 translate-y-[5px] md:translate-y-[10px]"
            />
            <span className="px-3 md:px-4 text-xl md:text-2xl leading-tight font-semibold text-[#004C45]">Socious Fund</span>
          </div>
          <a
            href="https://fund.socious.org/home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#004C45] hover:bg-[#003832] text-white font-semibold px-5 md:px-6 py-2.5 md:py-3 rounded-lg shadow text-center w-max no-underline"
          >
            {t("getFunding")}
          </a>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end md:text-right w-full space-y-3 md:space-y-4">
          <h4 className="text-base md:text-lg text-center md:text-right font-medium text-[#0F172A] tracking-wide">{t("quickLinks")}</h4>
          <ul className="space-y-3 md:space-y-4 w-full text-left md:text-right md:w-auto">
            <li><a href="/#intro" className="text-gray-700 hover:text-[#004C45] no-underline">{t("links.home")}</a></li>
            <li><a href="/#benefits" className="text-gray-700 hover:text-[#004C45] no-underline">{t("links.benefits")}</a></li>
            <li><a href="/#howitworks" className="text-gray-700 hover:text-[#004C45] no-underline">{t("links.howItWorks")}</a></li>
            <li><a href="https://socious.gitbook.io/fund" className="text-gray-700 hover:text-[#004C45] no-underline">{t("links.learnMore")}</a></li>
            <li><a href="https://socious.io" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#004C45] no-underline">{t("links.socious")}</a></li>
            <li><a href="https://tech4impactsummit.com/" className="text-gray-700 hover:text-[#004C45] no-underline">{t("links.events")}</a></li>
            <li><a href="https://discord.com/invite/tHVyn4Uj6N" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#004C45] no-underline">{t("links.joinDiscord")}</a></li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-10 md:mt-12 flex justify-center space-x-5 md:space-x-6 text-black">
        <a href="https://www.facebook.com/profile.php?id=61575086411865" target="_blank" rel="noopener noreferrer"><FaFacebookF color="black" /></a>
        <a href="https://www.instagram.com/socious_fund/" target="_blank" rel="noopener noreferrer"><FaInstagram color="black" /></a>
        <a href="https://x.com/socious_fund" target="_blank" rel="noopener noreferrer"><FaTwitter color="black" /></a>
        <a href="https://www.linkedin.com/company/socious-fund" target="_blank" rel="noopener noreferrer"><FaLinkedinIn color="black" /></a>
      </div>
    </footer>
  )
}
