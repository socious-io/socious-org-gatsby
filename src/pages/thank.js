import * as React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/Navbar"
import ThankPage from "../components/ThankPage"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="font-sans text-gray-900 bg-white">
      <Navbar/>
      <ThankPage/>
      <Footer/>
    </main>
  )
}

