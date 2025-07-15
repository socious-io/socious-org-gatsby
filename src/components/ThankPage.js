import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import thankHero from "../images/thank-hero.avif"
import sociousSpin from "../images/socious-logo-spin.mp4"
import iconFunding from "../images/icon-funding.svg"
import iconDual from "../images/icon-dual.svg"
import iconTax from "../images/icon-tax.svg"
import thank1image from "../images/thank1image.avif"
import thank2image from "../images/thank2image.avif"
import thank3image from "../images/thank3image.avif"

const faqItems = [
  "faq1",
  "faq2",
  "faq3",
  "faq4",
]

export default function ThankPage() {
  const { t } = useTranslation("thank")
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  const resources = [
    { key: "1", url: "https://socious.io/" },
    { key: "2", url: "https://tech4impactsummit.com/" },
    { key: "3", url: "https://socious.io/blog/how-to-claim-socio-tokens" },
    { key: "4", url: "https://socious.gitbook.io/fund/kyc-verification" },
  ];

  return (
    <div className="pt-20 md:pt-36 pb-12 md:pb-24 bg-white">
      {/* Hero */}
      <section className="max-w-full md:max-w-[75%] mx-auto flex flex-col-reverse lg:flex-row items-center px-4 md:px-8 gap-10 md:gap-16">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mb-3 md:mb-6">{t("hero.heading")}</h1>
          <p className="text-xl md:text-4xl font-semibold mb-3 md:mb-4">{t("hero.subheading")}</p>
          <p className="mb-4">{t("hero.description")}</p>
          <a
            href="https://socious.io/newsroom/socious-thank-stake-pool-ispo"
            className="text-black underline text-primary"
          >
            {t("hero.link")}
          </a>
          <br /><br />
          <a
            href="https://tech4impactsummit.com/tickets"
            className="bg-[#004C45] hover:bg-[#003832] text-white text-base md:text-lg font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl shadow inline-block no-underline"
          >
            {t("hero.button")}
          </a>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-3xl overflow-hidden">
            <img
              src={thankHero}
              alt={t("Hero placeholder")}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* What is THANK */}
      <section className="max-w-full md:max-w-[75%] pb-12 md:pb-24 pt-20 md:pt-36 mx-auto flex flex-col-reverse lg:flex-row items-center px-4 md:px-8 gap-10 md:gap-16">
        <div className="flex-1 flex justify-center lg:justify-start">
          <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-3xl overflow-hidden">
            <video
              src={sociousSpin}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3 md:mb-4">{t("what.title")}</h2>
          <p>{t("what.description")}</p>
          <p className="mt-4 font-medium">{t("what.flow")}</p>
        </div>
      </section>

      {/* Why THANK Matters */}
      <section className="bg-[#004C45] text-white py-16 md:py-28 px-4 md:px-6">
        <div className="max-w-full md:max-w-[75%] mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <h3 className="text-sm md:text-lg text-gray-300 font-medium -mt-4 md:-mt-8 mb-2">{t("why.label")}</h3>
          <h2 className="text-3xl md:text-5xl font-semibold leading-snug">{t("why.title")}</h2>
          <h4 className="mt-4 md:mt-6">{t("why.description")}</h4>
          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center md:text-left">
            {/* Feature 1 */}
            <div>
              <img src={iconFunding} className="h-10 mx-auto md:mx-0 mb-6" />
              <h2 className="text-xl md:text-2xl">
                {t(`why.benefit1`)}
              </h2>
            </div>
            {/* Feature 2 */}
            <div>
              <img src={iconDual} className="h-10 mx-auto md:mx-0 mb-6" />
              <h2 className="text-xl md:text-2xl">
                {t(`why.benefit2`)}
              </h2>
            </div>
            {/* Feature 3 */}
            <div>
              <img src={iconTax} className="h-10 mx-auto md:mx-0 mb-6" />
              <h2 className="text-xl md:text-2xl">
                {t(`why.benefit3`)}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <div className="bg-[#EEF3F3]">
        <section className="py-12 md:py-24 max-w-full md:max-w-[75%] mx-auto px-4 md:px-6">
          <h5 className="text-sm md:text-lg text-gray-500 font-medium text-center -mt-4 md:-mt-8 mb-2">
            {t("sectionLabel")}
          </h5>
          <h2 className="text-3xl md:text-5xl font-semibold leading-snug text-center mb-12 md:mb-20">{t("how.title")}</h2>
          
          {[1, 2, 3].map((step, idx) => {
            const isImageLeft = step !== 2;
            const img = [thank1image, thank2image, thank3image][idx];
            return (
              <div key={step} className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center justify-center mb-16 md:mb-24`}>
                <div className="w-[250px] h-[250px] md:w-[600px] md:h-[600px] overflow-hidden rounded-3xl">
                  <img src={img} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-center md:text-left md:w-1/2">
                  <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="bg-[#004C45] text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                      0{step}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold">
                      {step === 1 && t("how.earn.title")}
                      {step === 2 && t("how.do.title")}
                      {step === 3 && t("resources.title")}
                    </h2>
                  </div>
                  {step === 1 && (
                    <>
                      <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-4">{t("how.earn.description")}</p>
                      <p className="text-base md:text-lg text-gray-700">
                        {t("how.earn.sub")} <a href="#"/>
                      </p>
                      <a
                        href="https://socious.io/blog/how-to-claim-socio-tokens"
                        className="text-base md:text-lg text-gray-700 underline"
                      >
                        {t("how.earn.link")}
                      </a>
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-4">{t("how.do.description1")}</p>
                      <p className="text-base md:text-lg text-gray-700">
                        {t("how.do.description2")} <a href="#"/>
                      </p>
                      <p className="text-base md:text-lg text-gray-700">{t("how.do.description3")}</p>
                    </>
                  )}
                  {step === 3 && (
                    resources.map((r) => (
                      <a
                        key={r.key}
                        href={r.url}
                        className="text-base md:text-lg text-gray-700 underline mb-2 block"
                      >
                        {t(`resources.link${r.key}`)}
                      </a>
                    ))
                  )}
                </div>
              </div>
            )
          })}
        </section>
      </div>

      {/* FAQ */}
      <section className="bg-white py-12 md:py-20 px-4 md:px-6 max-w-full md:max-w-4xl mx-auto">
        <h3 className="text-sm md:text-lg text-center text-gray-500 font-medium -mt-4 md:-mt-8 mb-2">
          {t("faqLabel")}
        </h3>
        <h2 className="text-center text-3xl md:text-5xl font-semibold leading-snug text-[#0F172A] mb-12 md:mb-20">{t("faq.title")}</h2>
        <div className="space-y-6 md:space-y-8">
          {faqItems.map((key, i) => (
            <div key={i} className="border-b pb-4">
              <button
                className="w-full text-left flex justify-between items-center text-base md:text-lg font-medium"
                onClick={() => toggle(i)}
              >
                {t(`faq.${key}.q`)}
                <span className="text-xl md:text-2xl text-[#004C45]">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="mt-3 md:mt-4 text-gray-700 text-sm md:text-base space-y-2">
                  {Array.isArray(t(`faq.${key}.a`, { returnObjects: true }))
                    ? t(`faq.${key}.a`, { returnObjects: true }).map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))
                    : <p>{t(`faq.${key}.a`)}</p>
                  }
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#004C45] text-white text-center py-8 md:py-12">
        <h2 className="text-3xl md:text-5xl font-semibold leading-snug">{t("final.title")}</h2>
        <h4 className="text-lg md:text-xl mt-2">{t("final.description")}</h4>
      </section>
    </div>
  )
}
