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
  { key: "4", url: "https://socious.gitbook.io/fund/kyc-verification" },];

  return (
    <div className="pt-36 pb-24 bg-white">
      {/* Hero */}
      <section className="max-w-[75%] mx-auto flex flex-col-reverse lg:flex-row items-center px-8 gap-16">
        <div className="lg:w-1/2">
          <h1 className="text-6xl font-extrabold leading-tight">{t("hero.heading")}</h1>
          <p className="text-4xl font-semibold mb-4">{t("hero.subheading")}</p>
          <p className="mb-4">{t("hero.description")}</p>
          <a
            href="https://socious.io/newsroom/socious-thank-stake-pool-ispo"
            className="text-black underline text-primary"
          >
            {t("hero.link")}
          </a>
          <br/>
          <br/>
          <a
            href="https://tech4impactsummit.com/tickets"
            className="bg-[#004C45] hover:bg-[#003832] text-white text-lg font-semibold px-8 py-4 rounded-xl shadow inline-block no-underline"
          >
            {t("hero.button")}
          </a>

        </div>
        <div className="flex-1 flex justify-end">
            <div className="w-[400px] h-[400px] rounded-3xl overflow-hidden">
              <img
                src={thankHero}
                alt={t("Hero placeholder")}
                className="w-full h-full object-cover"
              />
            </div>
        </div>
      </section>

      {/* What is THANK */}
      <section className="max-w-[75%] pb-24 pt-36 mx-auto flex flex-col-reverse lg:flex-row items-center px-8 gap-16">
        <div className="flex-1 flex">
            <div className="w-[400px] h-[400px] rounded-3xl overflow-hidden">
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
        <div className="md:w-1/2">
          <h2 className="text-4xl font-extrabold leading-tight mb-4">{t("what.title")}</h2>
          <p>{t("what.description")}</p>
          <p className="mt-4 font-medium">{t("what.flow")}</p>
        </div>
      </section>

      {/* Why THANK Matters */}
      <section className="bg-[#004C45] text-white py-28 px-6">
        <div className="max-w-[75%] mx-auto max-w-3xl mx-auto text-center mb-20">
          <h3 className="text-base md:text-lg text-gray-300 font-medium -mt-8 mb-2">{t("why.label")}</h3>
          <h2 className="text-4xl md:text-5xl font-semibold leading-snug">{t("why.title")}</h2>
          <h4 className="mt-6">{t("why.description")}</h4>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
                    {/* Feature 1 */}
                    <div>
                      <img src={iconFunding} className="h-10 mx-auto md:mx-0 mb-6" />
                      <h2 className="text-2xl">
                        {t(`why.benefit1`)}
                      </h2>
                    </div>
                    {/* Feature 2 */}
                    <div>
                      <img src={iconDual} className="h-10 mx-auto md:mx-0 mb-6" />
                      <h2 className="text-2xl">
                        {t(`why.benefit2`)}
                      </h2>
                    </div>
                    {/* Feature 3 */}
                    <div>
                      <img src={iconTax} className="h-10 mx-auto md:mx-0 mb-6" />
                      <h2 className="text-2xl">
                        {t(`why.benefit3`)}
                      </h2>
                    </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <div className="bg-[#EEF3F3]">
      <section className="py-24 max-w-[75%] mx-auto">
        <h5 className="text-base md:text-lg text-gray-500 font-medium text-center -mt-8 mb-2">
            {t("sectionLabel")}
          </h5>
        <h2 className="text-4xl md:text-5xl font-semibold leading-snug text-center mb-20">{t("how.title")}</h2> 
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center mb-24">
          <div className="md:w-1/2 overflow-hidden rounded-3xl h-[600px]">
            <img src={thank1image} className="w-full h-full" />
          </div>
          <div className="flex-1 text-left md:w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#004C45] text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">01</div>
              <h2 className="text-3xl font-semibold">{t("how.earn.title")}</h2>
            </div>
            <p className="text-lg text-gray-700 mb-4">{t("how.earn.description")}</p>
            <p className="text-lg text-gray-700">
              {t("how.earn.sub")} <a href="#"/>
            </p>
            <a
              href="https://socious.io/blog/how-to-claim-socio-tokens"
              className="text-lg text-gray-700 underline"
            >
              {t("how.earn.link")}
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center justify-center mb-24">
          <div className="flex-1 text-left md:w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#004C45] text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">02</div>
              <h2 className="text-3xl font-semibold">{t("how.do.title")}</h2>
            </div>
            <p className="text-lg text-gray-700 mb-4">{t("how.do.description1")}</p>
            <p className="text-lg text-gray-700">
              {t("how.do.description2")} <a href="#"/>
            </p>
            <p className="text-lg text-gray-700">{t("how.do.description3")}</p>
          </div>
          <div className="md:w-1/2 overflow-hidden rounded-3xl h-[600px]">
            <img src={thank2image} className="w-full h-full" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center justify-center mb-24">
          <div className="md:w-1/2 overflow-hidden rounded-3xl h-[600px]">
            <img
              src={thank3image}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex-1 text-left md:w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#004C45] text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">03</div>
              <h2 className="text-3xl font-semibold">{t("resources.title")}</h2>
            </div>
          {resources.map((r) => (
            <a
              key={r.key}
              href={r.url}
              className="text-lg text-gray-700 underline mb-2 block"
            >
              {t(`resources.link${r.key}`)}
            </a>
          ))}
          </div>
        </div>
      </section>
      </div>

      {/* FAQ */}
    <section className="bg-white py-20 px-6 max-w-4xl mx-auto">
      <h3 className="text-6xl text-sm md:text-lg text-center text-gray-500 font-medium -mt-8 mb-2">
            {t("faqLabel")}
          </h3>
      <h2 className="text-center text-3xl md:text-5xl font-semibold leading-snug text-[#0F172A] mb-20">{t("faq.title")}</h2>
      <div className="space-y-8">
        {faqItems.map((key, i) => (
          <div key={i} className="border-b pb-4">
            <button
              className="w-full text-left flex justify-between items-center text-lg font-medium"
              onClick={() => toggle(i)}
            >
              {t(`faq.${key}.q`)}
              <span className="text-2xl text-[#004C45]">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>
            {openIndex === i && (
              <div className="mt-4 text-gray-700 text-base space-y-2">
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
      <section className="bg-[#004C45] text-white text-center py-12">
        <h2 className="text-4xl md:text-5xl font-semibold leading-snug">{t("final.title")}</h2>
        <h4 className="text-xl mt-2">{t("final.description")}</h4>
      </section>
    </div>
  )
}
