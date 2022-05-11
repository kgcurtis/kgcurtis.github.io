import React from "react";

const SocialShare = [
  {
    iconName: "soundcloud",
    link: "https://soundcloud.com/mayv_music",
  },
  {
    iconName: "instagram",
    link: "https://www.instagram.com/mayv.music/",
  },
  {
    iconName: "twitter",
    link: "https://twitter.com/mayv_music"
  },
  {
    iconName: "email",
    link: "mailto:mayv@mayvmusic.com"
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
