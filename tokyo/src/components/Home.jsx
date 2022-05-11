import React, {useState, useEffect} from "react";
import Social from "./Social";
import {isMobile} from 'react-device-detect';


const Home = () => {
  const [selected, setSelected] = useState(true);
  const [goingUp, setGoingUp] = useState(false);
  let prevScrollY = 0;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (prevScrollY < currentScrollY) {
      setGoingUp(false);
    }
    if (prevScrollY > currentScrollY) {
        setGoingUp(true);
    }
    prevScrollY = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              onMouseEnter={() => setSelected(!selected)}
              onMouseLeave={() => setSelected(!selected)}
              style={{
                userSelect: "none",
                backgroundImage: (!goingUp && isMobile) || (selected && !isMobile) ? "url(assets/img/mayv.png)" : "url(assets/img/sound2.png)",
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
