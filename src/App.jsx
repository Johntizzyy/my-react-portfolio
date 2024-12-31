import "./App.css";
import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Portfolio from "./Components/Portfolio/Portfolio";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Contact/Footer";

function App() {

  const [activeTab,setActiveTab] = useState('home')

  function handleActiveTab(tab) {
    setActiveTab(tab)
  }
  return (
    <>
      <div className="container">
        <Navbar activeTab = {activeTab} handleActiveTab={handleActiveTab}/>
        <Hero />
      </div>
      <Portfolio />
      <About />
      <div id="contact">
        <Contact />

        <Footer activeTab = {activeTab} handleActiveTab={handleActiveTab}/>
      </div>
    </>
  );
}

export default App;
