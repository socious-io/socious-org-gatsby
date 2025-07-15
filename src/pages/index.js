import * as React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Benefits from "../components/Benefits"
import HowItWorks from "../components/HowItWorks"
import FAQ from "../components/FAQ"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="font-sans text-gray-900 bg-white">
      <Navbar/>
      <Hero/>
      <Benefits/>
      <HowItWorks/>
      <FAQ/>
      <Footer/>
    </main>
  )
}

