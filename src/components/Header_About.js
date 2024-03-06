import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
import back from "../img/back.png";

function Header_About() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="Header-header">
      <div className="Header-back">
        <img src={back} alt="뒤로가기" onClick={handleBack} />
      </div>
      <div className="Header-center">
        <div className="Header_About">
          <p>GROWL -</p>
          <div className="Header-about-low">
            <p>TO</p>
            <p className="Header-arrow">➞</p>
            <p>WORLD</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header_About;
