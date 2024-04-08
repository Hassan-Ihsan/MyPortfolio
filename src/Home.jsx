import Contact from "./Contact"
import About from "./About";
import Services from "./Services";
import Skills from './Skills';
import Project from './Project';
import HomeSection from "./components/HomeSection";



const Home = () => {
  return (
   <>
   
    <HomeSection/>
    <About/>
    <Services/>
    <Skills/>
    <Project/>
    <Contact/> 

   </>
  )
}

export default Home
