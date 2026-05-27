import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  const isPrivacyPolicy =
    window.location.pathname.replace(/\/+$/, "") === "/privacy-policy";

  if (isPrivacyPolicy) {
    return (
      <div className="App">
        <Navbar />
        <PrivacyPolicy />
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Contact />
    </div>
  );
}

export default App;
