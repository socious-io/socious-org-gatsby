import React from "react"
import { useTranslation } from "react-i18next"
import iconFunding from "../images/icon-funding.svg"
import iconDual from "../images/icon-dual.svg"
import iconTax from "../images/icon-tax.svg"

export default function Benefits() {
  const { t } = useTranslation("benefits") // namespace: benefits.json

  return (
    <section id="benefits" className="bg-[#004C45] text-white py-16 md:py-28 px-4 md:px-6">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h3 className="text-sm md:text-lg text-gray-300 font-medium -mt-6 md:-mt-8 mb-2">
            {t("sectionLabel")}
          </h3>
          <h2 className="text-3xl md:text-5xl font-semibold leading-snug">
            {t("heading")}
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center md:text-left">
          {/* Feature 1 */}
          <div>
            <img src={iconFunding} alt={t("feature1.alt")} className="h-10 mx-auto md:mx-0 mb-6" />
            <h3 className="text-lg font-semibold mb-4">{t("feature1.title")}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t("feature1.description")}
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <img src={iconDual} alt={t("feature2.alt")} className="h-10 mx-auto md:mx-0 mb-6" />
            <h3 className="text-lg font-semibold mb-4">{t("feature2.title")}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t("feature2.description")}
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <img src={iconTax} alt={t("feature3.alt")} className="h-10 mx-auto md:mx-0 mb-6" />
            <h3 className="text-lg font-semibold mb-4">{t("feature3.title")}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t("feature3.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
