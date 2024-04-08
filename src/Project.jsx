import style from '../src/styles/Services&Project.module.css';
import { projects } from './DATA/db';
import ServicePro from './components/ServicePro';




const Project = () => {
  return (
    <div className={style.outerContainer}>
    <div style={{textAlign:"center",paddingBottom:"5rem "}}><h1>My <span style={{color:"aqua"}}>Projects</span></h1></div>
    
    <div className={style.container}> 
    {
      
      projects.map((data,index)=>{
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

export default Project

