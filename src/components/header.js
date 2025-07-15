import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      {/* Left: Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Replace with actual Socious logo if you have it */}
        <div style={{ fontWeight: "bold", fontSize: "20px", color: "#065f46" }}>
          ✺ Socious Fund
        </div>
      </div>

      {/* Middle: Navigation */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Link to="/" style={navLinkStyle}>Home</Link>
        <Link to="/benefits" style={navLinkStyle}>Benefits</Link>
        <Link to="/how-it-works" style={navLinkStyle}>How it Works</Link>
        <Link to="/faq" style={navLinkStyle}>FAQ</Link>
        <Link to="/thank" style={navLinkStyle}>THANK</Link>
      </nav>

      {/* Right: Language + Button */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button
          style={{
            backgroundColor: "#F3F4F6",
            border: "1px solid #D1D5DB",
            padding: "8px 12px",
            borderRadius: "8px",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          English
        </button>
        <Link
          to="/get-funded"
          style={{
            backgroundColor: "#065f46",
            color: "white",
            padding: "10px 18px",
            borderRadius: "8px",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          Get Funded
        </Link>
      </div>
    </header>
  )

const navLinkStyle = {
  textDecoration: "none",
  color: "#111827",
  fontWeight: "500",
  fontSize: "14px",
}

export default Header
