// import React from 'react'
import style from '../src/styles/skills.module.css';
import SkillBottomContent from './components/SkillBottomContent.jsx';
import SkillTopContent from './components/SkillTopContent.jsx';
// import {  Line } from 'rc-progress';

import technicalSkill  from './DATA/db.jsx';
import {professionalSkill}  from './DATA/db.jsx';



const Skills = () => {
  // console.log(technicalSkill2)
  return (
    <div className={style.skill}>
    <div className={style.heading}><h1>My <span style={{color:"aqua"}}>Skills</span></h1></div>

    <div className={style.main-top}>
    <h2 style={{textAlign:"center", textDecoration:  'underline 3px',fontSize:"20px", margin:"30px 0" ,color:'white'}}>Technical Skills</h2>
      <div className={style.top}>
      {
        technicalSkill.map((data,index)=>{
          return(
            <SkillTopContent data={data}  key={index}/>

          )
        })
      }
      
      </div>
        {/* ************* bottom div *************** */}
        <div className='main-bottom' style={{marginTop:"5rem"}}>
        <h2 style={{textAlign:"center", textDecoration:  'underline 3px',fontSize:"20px", margin:"30px 0" ,color:'white'}}>Professional Skills</h2>
        <div className={style.bottom} >
        {
        professionalSkill.map((data,index)=>{
          return(
            <SkillBottomContent data={data}  key={index}/>

          )
        })
      }
       
        
        </div>
     </div>
    </div>
 </div>
  )
}

export default Skills
