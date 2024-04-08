import {Link } from 'react-router-dom'
// import '../styles/button.css';
import style from '../styles/HomeSection.module.css';
import { Typewriter } from 'react-simple-typewriter'


const HomeSection = () => {
  
  return (
   
     <div className={ style.grid_tow_colum}>
      <div className={style.home_data}>
      <div className={style.home_content}>
        <h3 className={style.home_top_para}>Hello, it<span>&#39;</span>s Me</h3>
        <h1 className={style.home_heading}>HASSAN EHSAN</h1>
        <h3 className={style.home_top_para}>I<span>&#39;</span>m a <span style={{ color: 'aqua',  }}>
          <Typewriter
            words={['Frontend Web Devolper in React js ']}
            loop={0}
            cursor
            // cursorStyle='|'
            typeSpeed={20}
            deleteSpeed={30}
            // delaySpeed={2000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span></h3>
        
        <p className={style.home_para}>I<span>&#39;</span>m HASSAN EHSAN and i<span>&#39;</span>m a frontend web developer in React js. <br />
        i<span>&#39;</span>ve some experties to create frontend of wibsite in React js.  
         </p>
         <div className={style.email}><i className="fa-solid fa-envelope"></i> : <span>HassanIhsan349@gmail.com</span></div>
         <div className={style.whatsapp}><i className="fa-brands fa-square-whatsapp"></i> : <span>+923005076705</span></div>
         <Link className={style.link}to="/contact">HIRE ME</Link>
        {/* <button className={style.btn}>
        <Link to="/contact">HIRE ME</Link>
        </button> */}
        
      </div>
      </div>
      
    <div className={style.home_img} >
    <div className={style.circle}>
    <img src="Image/hasan.jpeg" alt="" style={{width:"100%", display:"flex",alignItems:"center",justifyContent:"center" ,borderRadius: '50%'}}/>
    </div>
    </div>
      </div>
      
  )
}

export default HomeSection
