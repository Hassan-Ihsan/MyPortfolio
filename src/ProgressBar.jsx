import  { useState, useEffect } from 'react';
import {  Circle } from 'rc-progress';

const ProgressBar = () => {
  const circleee={
    Animation:'show 0.5s 1.5s linear forward' ,
    // opacity:0,


  }
  const [progress, setProgress] = useState(50);
 
  useEffect(() => {
    setProgress(progress) 
  //   const interval = setInterval(() => {
  //     setProgress((prevProgress) => {
  //       const newProgress = prevProgress + 10;
  //       return newProgress <= 80 ? newProgress : 100;
  //     });
  //   }, 1000); 

  //   return () => clearInterval(interval);
   }, []);

  return (
    <div>
      {/* <h2>Progress: {progress}%</h2>
      <div style={{ width: '100%', backgroundColor: '#ddd' }}>
        <div
          style={{
            width: `${progress}%`,
            height: '30px',
            backgroundColor: '#4CAF50',
            textAlign: 'center',
            lineHeight: '30px',
            color: 'white',
           borderRight:'1px solid red',
           borderTopRightRadius:"10px",
           borderBottomRightRadius:"10px",
           transition: 'width 0.3s ease-in-out',
          }}
        >
          {progress}%
        </div>
      </div> */}
      {/* width: '10%',height: '10%', , transform: 'translate(-50%, -50%)'*/ }
      <div style={{  backgroundColor: 'green', position: 'relative', width: '100px', height: '100px'  }}>
      <div style={{ position: 'absolute', top: '40%', textAlign: 'center',
    width: '100%', }}>
        <span style={{ fontSize: '18px', color: 'black' }}>100%</span>
      </div>
     <Circle percent={50} strokeWidth={4} strokeColor="red"  trailWidth="4" trailColor="blue" 
     
     style={circleee}
      />
    
     
     </div>
    </div> 
  );
};

export default ProgressBar;
