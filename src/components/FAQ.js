import React, { useState } from "react"
import { useTranslation } from "react-i18next"

const faqKeys = [
  "q1", "q2", "q3", "q4", "q5",
  "q6", "q7", "q8", "q9", "q10"
]

export default function FAQ() {
  const { t } = useTranslation("faq")
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" className="bg-white py-12 md:py-28 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section heading*/}
        <div className="text-center">
          <h3 className="text-sm md:text-lg text-gray-500 font-medium -mt-4 md:-mt-8 mb-2">
            {t("faqLabel")}
          </h3>
          <h2 className="text-2xl md:text-5xl font-semibold leading-snug text-[#0F172A] mb-12 md:mb-20">
            {t("faqheading")}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6 md:space-y-8">
          {faqKeys.map((key, i) => (
            <div key={key} className="border-b pb-4">
              <button
                className="w-full text-left flex justify-between items-center text-base md:text-lg font-medium"
                onClick={() => toggle(i)}
              >
                {t(`${key}.question`)}
                <span className="text-xl md:text-2xl text-[#004C45]">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="mt-3 md:mt-4 text-gray-700 text-sm md:text-base space-y-2">
                  {Array.isArray(t(`${key}.answer`, { returnObjects: true }))
                    ? t(`${key}.answer`, { returnObjects: true }).map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))
                    : <p>{t(`${key}.answer`)}</p>
                  }
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <a
            href="https://fund.socious.org/home"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#004C45] hover:bg-[#003832] text-white text-base md:text-lg font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl shadow no-underline"
          >
            {t("matched")}
          </a>
        </div>
      </div>
    </section>
  )
}
