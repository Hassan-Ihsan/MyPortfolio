// import './App.css'
import { Routes , Route } from 'react-router-dom'
import Header from './Header';
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import Skills from './Skills';
import Project from './Project';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './NotFound';


function App() {
 
  return (
    <>
    {/* <Navi/>s */}
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/service" element={<Services/>} />
    <Route path="/skill" element={<Skills/>} />
    <Route path="/project" element={<Project/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="*" element={<NotFound/>} />
    </Routes> 
    <ToastContainer />
    <Footer/>

    </>
  )
}

export default App
