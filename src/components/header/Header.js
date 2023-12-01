import { useNavigate } from "react-router-dom";

import "./Header.css";
import SocialMediaIcons from "./../parts/social-media-icons";

const Header = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="header-main-container">
      {/* <div className="header-container"> */}
      <div className="logo">
        <a href="/">
          <img
            src={require("../../assets/images/polovni-automobili-logo.png")}
            alt="logo"
          />
        </a>
      </div>
      <div className="social-media">
        <SocialMediaIcons />
      </div>
      <div className="buttons">
        <button className="button1">
          PRIJAVI SE <br />
          <span>Moj profil</span>
        </button>
        <i className="caret"></i>
        <button onClick={handleRegisterClick} className="button2">
          REGISTRUJ SE
        </button>
        <button className="button3">POSTAVI OGLAS</button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Header;
