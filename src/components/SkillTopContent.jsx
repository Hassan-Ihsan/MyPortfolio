// import React from 'react'
import {  Line } from 'rc-progress';
import PropTypes from 'prop-types';
const SkillTopContent = (props) => {
  const {image , name , percent } = props.data;
    //  console.log(props.data)
  return (
    // ,border:"2px solid green"
    <div style={{width:"35rem",margin:'2rem 0rem'}}>
        <img src={image}  alt="" style={{width:"30px"}} />
        <div style={{display:'flex',justifyContent: 'space-between'}}>
        <p style={{fontSize:"1.5rem"}}>{name}</p>
        <p style={{fontSize:"1.5rem"}}>{percent}% </p>
        </div>
        <Line percent={percent} strokeWidth='2' strokeColor="aqua" trailWidth="2" trailColor="black"  />
     </div>
     
     
  )
}

SkillTopContent.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,
};

export default SkillTopContent ;
