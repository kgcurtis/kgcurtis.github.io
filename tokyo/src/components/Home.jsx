import React, {useState} from "react";
import Social from "./Social";
import {isMobile} from 'react-device-detect';


const Home = () => {
  const [selected, setSelected] = useState(true);
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              onMouseEnter={() => {
                if(!isMobile) { setSelected(!selected); }
               }
             }
              onMouseLeave={() => {
                if(!isMobile) { setSelected(!selected); }
               }
             }
              onClick={() => {
                 if(isMobile) { setSelected(!selected); }
                }
              }
              style={{
                backgroundImage: selected ? "url(assets/img/mayv.png)" : "url(assets/img/sound2.png)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">MAYV</h3>
            <p className="job">
              sick beats
              <br/>
              <img width={200} src="assets/img/loading4.png" alt="about" />
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
