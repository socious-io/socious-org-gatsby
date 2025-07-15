import React from "react"
import { useTranslation } from "react-i18next"
import step1Image from "../images/how-it-works-step-1.avif"
import step2Image from "../images/how-it-works-step-2.avif"
import step3Image from "../images/how-it-works-step-3.avif"
import step4Image from "../images/how-it-works-step-4.avif"
import lightbulbIcon from "../images/icon-lightbulb.svg"
import pencilIcon from "../images/icon-pencil.svg"
import megaphoneIcon from "../images/icon-megaphone.svg"

export default function HowItWorks() {
  const { t } = useTranslation("howitworks")

  const tipIcons = [lightbulbIcon, pencilIcon, megaphoneIcon]
  const tips = ["tip1", "tip2", "tip3"]

  return (
    <section id="howitworks" className="pt-24 bg-[#EDF2F3]">
      <div className="max-w-[75%] mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <p className="text-base md:text-lg text-gray-500 font-medium -mt-8 mb-2">
            {t("sectionLabel")}
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-snug">
            {t("sectionHeading")}
          </h2>
        </div>

        {/* Step 1 */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mb-24">
          <div className="w-full max-w-md">
            <img src={step1Image} alt={t("step1.alt")} className="w-full h-auto object-contain" />
          </div>
          <div className="flex-1 text-left max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#004C45] text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">01</div>
              <h3 className="text-2xl font-semibold">{t("step1.title")}</h3>
            </div>
            <p className="text-lg text-gray-700 mb-4">{t("step1.description1")}</p>
            <p className="text-lg text-gray-700">
            {t("step1.description2")}{" "}
            <a
              href="https://socious.gitbook.io/fund/how-to-receive-funding/kyb-verification"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline font-medium"
            >
              {t("step1.link")}
            </a>.
          </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-16 mb-24">
          <div className="flex-1 text-left max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#004C45] text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">02</div>
              <h3 className="text-2xl font-semibold">{t("step2.title")}</h3>
            </div>
            <p className="text-lg text-gray-700 mb-4">{t("step2.description1")}</p>
            <p className="text-lg text-gray-700">
            {t("step2.description2")}{" "}
            <a
              href="https://socious.gitbook.io/fund/impact-score"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline font-medium"
            >
              {t("step2.link1")}
            </a>.<br />
            {t("step2.description3")}{" "}
            <a
              href="https://socious.io/newsroom/socious-fund-pilot-round-results"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline font-medium"
            >
              {t("step2.link2")}
            </a>.
          </p>
          </div>
          <div className="w-full max-w-md justify-end">
            <img src={step2Image} alt={t("step2.alt")} className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mb-24">
          <div className="w-full max-w-md">
            <img src={step3Image} alt={t("step3.alt")} className="w-full h-auto object-contain" />
          </div>
          <div className="flex-1 text-left max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#004C45] text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">03</div>
              <h3 className="text-2xl font-semibold">{t("step3.title")}</h3>
            </div>
            <p className="text-lg text-gray-700 mb-4">{t("step3.description1")}</p>
            <p className="text-lg text-gray-700">
              {t("step3.description2")}{" "}
              <a
                href="https://socious.gitbook.io/fund/extended-quadratic-funding"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline font-medium"
              >
                {t("step3.link")}
              </a>.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-16">
          <div className="flex-1 text-left max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#004C45] text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">04</div>
              <h3 className="text-2xl font-semibold">{t("step4.title")}</h3>
            </div>
            <p className="text-lg text-gray-700">{t("step4.description")}</p>
          </div>
          <div className="w-full max-w-md">
            <img src={step4Image} alt={t("step4.alt")} className="w-full h-auto object-contain rounded-2xl" />
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-[#e9d3c9] py-24 px-6">
        <div className="max-w-[75%] mx-auto">
          <h3 className="text-center md:text-lg font-medium text-[#004C45] mb-20">
            {t("tips.heading")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {tips.map((tipKey, idx) => {
              const points = t(`${tipKey}.points`, { returnObjects: true })
              const pointItems = Array.isArray(points) ? points : []
              return (
                <div key={tipKey} className="text-[#004C45]">
                  <img src={tipIcons[idx]} alt="" className="h-8 w-8 mb-6" />
                  <h4 className="text-lg font-semibold mb-4">{t(`${tipKey}.title`)}</h4>
                  <ul className="list-disc pl-5 text-sm leading-relaxed">
                    {pointItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Final Section */}
      <div className="bg-[#004C45] text-white py-20 px-4">
        <div className="max-w-[75%] mx-auto">
          <h3 className="text-gray-300 font-medium md:text-lg text-center mb-12">{t("final.subheading")}</h3>
          <h3 className="mx-auto max-w-4xl text-2xl md:text-3xl font-semibold leading-snug mb-2">
            {t("final.heading")}
          </h3>
          <p className="mx-auto max-w-4xl text-base">
          {t("final.linkText")}{" "}
          <a
            href="https://socious.gitbook.io/fund"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-2"
          >
            {t("final.link")}
          </a>.
        </p>
        </div>
      </div>
    </section>
  )
}