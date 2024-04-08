import { Link } from "react-router-dom";
// import '../styles/button.css';
import style from "./styles/About.module.css";

const HomeSection = () => {
  const circleStyle = {
    width: "40%",
    height: "auto",
    borderRadius: "50%",
    border: " 10px solid aqua",
    outline: "5px solid white",
    margin: " 5rem 0",
    boxShadow: " 0 0 100px #0ef, 0 0 100px #0ef",
  };
  return (
    <div className={style.container} style={{ background:"#081b29" }}>
    <div style={{ textAlign: "center", padding:"3rem 0"}}>
            <h1 style={{ color: "aqua" }}>
              About <span style={{ color: "white" }}>Me</span>
            </h1>
          </div>
    <div className={style.grid_tow_colum}>
      <div className={style.home_img}>
        <div style={circleStyle}>
          <img
            src="Image/hasan.jpeg"
            alt=""
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>

      <div className={style.home_data}>
        <div className={style.home_content}>
          
          {/* <h2 className={style.home_heading}>HASSAN EHSAN</h2> */}
          <h3 className={style.home_top_para}>Frontend Web Devolper ! </h3>
          <p className={style.home_para}>
            I am a skilled web developer with over 1 year of experience 
            who is really good at making websites look great and
            work smoothly.I am working in React js , which are
            tools that help build cool features and make websites load fast.I am
            always learning about the latest tech stuff to stay on top of my
            game.I love working with others to come up with new ideas and solve
            problems together.I am excited to join a team where I can keep
            learning and help create awesome websites that people love to use.
          </p>

          {/* <p className={style.home_para}>
            I am a skilled web developer with over 1 year of experience <br/>who is really good at making websites look great and
            work smoothly.<br/> I am working in React js sand Next.js, which are
            tools that help build cool features <br/>and make websites load fast.<br/>  I am
            always learning about the latest tech stuff to stay on top of my
            game. <br/> I love working with others to come up with new ideas and solve
            problems together.<br/> I am excited to join a team where I can keep
            learning and help create awesome <br/> websites that people love to use.
          </p> */}
          <Link className={style.link} to="/contact">
            HIRE ME
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomeSection;
