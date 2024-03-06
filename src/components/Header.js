import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
import back from "../img/back.png";

function Header() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="Header-header">
      <div className="Header-back">
        <img src={back} alt="뒤로가기" onClick={handleBack} />
      </div>
      <div className="Header">
        <p>LIKELION.</p>
        <p className="Header-ds">DS</p>
      </div>
    </div>
  );
}

export default Header;
