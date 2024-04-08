// import React from 'react'
import style from '../styles/ServicePro.module.css';
// import style from '../src/styles/services.module.css';
// import style from '../src/styles/services.module.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
// import {GlobalContext } from '../context/Provider'; 


const ServicePro = (props) => {
  // const { name1 , pure} = GlobalContext();
  // console.log(name1)
    const { img , name ,des , git , live} = props.data; 
  return (
        //  pure.map((data , index)=>{
        // const { img , name ,des , git , live} = data;

     <div className={style.card}>
     <div className={style.innerCard} style={{width:"70%", color:"white",padding:"30px 0"}}>
      <img src={img} alt="" />
      {/* <i className="fa-solid fa-palette"></i>s */}
      {/* fontSize: '1.4rem' */}
       <h2 style={{textAlign:"left",width:"100%",paddingTop:"10px ",color:"aqua"}} >{name}</h2>
      <p style={{textAlign:"left",width:"100%",paddingTop:"10px",fontSize:"1rem"}}>{des}</p>
      {!(git && live)? <hr/>:null}
      {/* <hr/> */}
      {(git && live)? <div className={style.visite}>
      <h2 style={{color:"aqua"}}>Visit :</h2>
        <div className="link" style={{fontSize:"2rem" }}>
        <Link to={git} target="_blank" style={{padding:"0 1rem",color:"aqua"}}><i className="fa-brands fa-gitlab"></i></Link>
        <Link to={live} target="_blank" style={{padding:"0 1rem",color:"aqua"}}><i className="fa-solid fa-globe"></i></Link>
       </div></div>:null}
    </div>
    </div>

        
      )
    
    
     
    
  
}
ServicePro.propTypes = {
    data: PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        des: PropTypes.string.isRequired,
        git: PropTypes.string.isRequired,
        live: PropTypes.string.isRequired
    }).isRequired
};

export default ServicePro
