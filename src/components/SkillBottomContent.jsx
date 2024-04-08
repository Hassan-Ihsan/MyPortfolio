// import React from 'react'
import PropTypes from 'prop-types';
import {  Circle } from 'rc-progress';


const SkillBottomContent = (props) => {
  const { name , percent } = props.data;
  // console.log(props.data)
  return (
    // border:"2px solid red"   position: 'relative',
    // height: '15rem'
    // 
    <div style={{width: '13rem', position: 'relative',display:"flex",flexDirection:'column'}}>
    <div style={{ position: 'absolute', top: '35%', left: '38%', textAlign: 'center' }}>
    {/*  */}
      <span style={{ fontSize: '1.5rem', color: 'white' }}>{percent}%</span>
    </div>
    {/* height:"100%", */}
   <Circle percent={percent} strokeWidth="5" strokeColor="aqua"  trailWidth="5" trailColor="black" />
   <p style={{fontSize:"1.5rem", color: 'white', textAlign:"center",marginTop:"1rem"}}>{name}</p>
   </div>
  )
}

SkillBottomContent.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,
};

export default SkillBottomContent
