import React from "react";
import Header from "./Header";
import Hero from "./hero";
import StackIcons from "./StackIcons";
import About from "./About";
import Projects from "./Projects";
import ContactForm from "./contactMe ";
import Footer from "./footer";

const PortFolio=()=>{
    return(
        <div className="portfolio">
        <Header/>
        <Hero/>
        <StackIcons/>
        <About/>
        <Projects/>
        <ContactForm/>
        <Footer/>
     </div>
   
    )
}
export default PortFolio