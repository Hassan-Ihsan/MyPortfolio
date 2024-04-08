import {NavLink } from 'react-router-dom'
import style from '../src/styles/header.module.css';
import  { useState } from 'react';
// import Navi from "./components/Navi";

const Header = () => {
  const[show,setShow ]=useState(false)
  // console.log(show)
  function showMenu (){
    // alert('helo')
    setShow(true)
    }
    function hideMenu (){
      // alert('helo')
      setShow(false)
      }
    // ,${style.navbar}
    // const mainClass = show ? `${style.navbaraa} `  : style.navbar;
  return (
    
    <div className={style.header}>
    {/* <Navi showing={show}  unShowing={setShow} /> */}
     <div className={style.logo}> 
     <h1>Hassan.</h1>
     </div> 
     {/* className={`${style.navbar} , ${style.navbaraa}`} */}
     {/* {`${show}? ${style.navbar}: ${style.navbaraa}`} */}

    
     {/* ${${show} ? style.navbara : ''} */}
     {/* {`${style.navbar}  ${show ? style.navbaraa : ''}`} */}
     {/* , ${style.navbaraa} */}
     
     
     
     <div className={`${style.ul} , ${show ? style.ul_show : ''}`} >
     {/* onClick={hideMenu} */}
     {/* {show ? <div className={style.cross}  onClick={hideMenu}><i className="fa-solid fa-xmark"></i></div>: null} */}
     <div className={style.cross}  onClick={hideMenu}><i className="fa-solid fa-xmark"></i></div>
    
     {/* {`${style.navbar} , ${show ? style.navbar1 : ''}`} */}
    <ul className={style.navbar}> 
      <li><NavLink to="/" className={style.nav_link}>Home</NavLink></li>
      <li><NavLink to="/about" className={style.nav_link}>About</NavLink></li>
      <li><NavLink to="/service"   className={style.nav_link}>Services</NavLink></li>
      <li><NavLink to="/skill"   className={style.nav_link}>Skills</NavLink></li>
      <li><NavLink to="/project"   className={style.nav_link}>Projects</NavLink></li>
      <li className={style.navbar_li}><NavLink to="/contact"   className={style.nav_link}>Contact </NavLink></li>
    </ul>
    </div>
    {/* onClick={showMenu} */}
    <div className={style.menu} onClick={showMenu} >
    <i className="fa-solid fa-bars"></i>
    </div>
    </div>
    
  )
}

export default Header
