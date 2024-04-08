import style from '../src/styles/Services&Project.module.css';
import ServicePro from './components/ServicePro';
import {services}  from './DATA/db.jsx';
// import { useEffect } from 'react';
// import { GlobalContext } from '../context/Provider'; 

const Services = () => {
  // const {dispatch} = GlobalContext();
  // const update =()=>{
  //   dispatch({
  //     type:"PURE-DATA",
  //     payload:services,
  //   })
  // };

  // useEffect(()=> update());
  
  return (
    <div className={style.outerContainer}>
    <div style={{textAlign:"center",paddingBottom:"5rem "}}><h1>My <span style={{color:"aqua"}}>Services</span></h1></div>
    
    <div className={style.container}> 
    {/* <ServicePro/>  */}
    {
      
      services.map((data,index)=>{
        // console.log(data)
          return(
            <ServicePro data={data}  key={index}/>

          )
        })

    }
  
    
     </div>
    </div>
  )
}

export default Services
