import logo from './logo.svg';
import './App.css';
import"./Assets/Css/Portfolio/portfolio.css"
import Header from './Components/Header';
import Hero from './Components/hero';
import StackIcons from './Components/StackIcons';
import About from './Components/About';
import Projects from './Components/Projects';
import ContactForm from './Components/contactMe ';
import Footer from './Components/footer';

function App() {
  return (
    <div className="portfolio">
       <Header/>
       <Hero/>
       <StackIcons/>
       <About/>
       <Projects/>
       <ContactForm/>
       <Footer/>
    </div>
  
  );
}

export default App;
