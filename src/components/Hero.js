import React from "react"
import { useTranslation } from "react-i18next"
import heroImage from "../images/hero.jpg"
import leafBackground from "../images/leaf-background.jpg"
import impactImage from "../images/funding-model.avif"

export default function Hero() {
  const { t } = useTranslation("hero")

  return (
    <>
      <section id="intro" className="pt-36 pb-24 bg-white">
        <div className="max-w-[75%] mx-auto flex flex-col-reverse lg:flex-row items-center px-8 gap-16">
          <div className="text-left max-w-xl">
            <h1 className="text-6xl font-extrabold leading-tight mb-6">
              {t("headline")}
            </h1>
            <p className="text-lg text-black mb-8">
              {t("subtext")}
            </p>
            <a
            href="https://fund.socious.org/home"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#004C45] hover:bg-[#003832] text-white text-lg font-semibold px-8 py-4 rounded-xl shadow no-underline"
          >
            {t("cta")}
          </a>

          </div>
          <div className="flex-1 flex justify-end">
            <div className="w-[400px] h-[400px] rounded-3xl overflow-hidden">
              <img
                src={heroImage}
                alt={t("heroAlt")}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="home"
        className="relative w-full h-[600px] flex items-center justify-center bg-cover bg-center px-4"
        style={{ backgroundImage: `url(${leafBackground})` }}
      >
        <div className="absolute inset-0 bg-black/30 z-0"></div>

        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center text-white">
          <h2 className="text-4xl md:text-5xl font-semibold leading-snug mb-4">
            {t("roundHeadline")}
          </h2>
          <p className="text-lg md:text-xl mb-2">{t("roundDates")}</p>
          <p className="text-lg md:text-xl mb-2">{t("matchingPool")}</p>
          <p className="text-lg md:text-xl mb-6">{t("total2025")}</p>
          <div className="flex justify-center">
            <a
              href="https://fund.socious.org/home"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FAD15C] hover:bg-yellow-400 text-black text-lg font-semibold px-6 py-3 rounded-xl shadow no-underline"
            >
              {t("roundCta")}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6 flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
        <div className="w-[500px] h-[500px] rounded-3xl overflow-hidden flex-shrink-0">
          <img
            src={impactImage}
            alt={t("impactAlt")}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="max-w-xl text-left">
          <h2 className="text-5xl font-semibold leading-tight tracking-tight text-[#0F172A] mb-6">
            {t("impactHeadline")}
          </h2>
          <p className="text-gray-600 mb-6">{t("impactIntro")}</p>
          <ul className="space-y-4 text-gray-800">
            <li className="flex items-start">
              <span className="mt-1 mr-3 text-blue-600">✔️</span>
              <span>{t("point1")}</span>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-3 text-blue-600">✔️</span>
              <span>{t("point2")}</span>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-3 text-blue-600">✔️</span>
              <span>{t("point3")}</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

