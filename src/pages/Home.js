import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header_Home from "../components/Header_Home";
import Footer from "../components/Footer";
import "../styles/Home.css";
import Point from "../img/home_point.png";
import InstaImg from "../img/instagram.png";
import Cursor from "../img/home_cursor.png";

function Home() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) {
      // 터치 디바이스에서는 :hover 스타일을 제거하기 위해 hover 클래스 추가
      const elements = document.querySelectorAll(".hover");
      elements.forEach((element) => {
        element.classList.remove("hover");
      });
    }
  }, []);

  return (
    <div className="page">
      <div className="page-bg">
        <div className="page-space">
          <Header_Home />
          <div className="center">
            <div className="home-content">
              <div className="home-com1">
                <Link to="/about" className="homeToAbout">
                  <div>LIKELION</div>
                  <div>UNIV</div>
                  <div>12TH</div>
                  <img src={Cursor} className="CursorImg"></img>
                </Link>
                <div className="grayBox"></div>
              </div>
              <div className="home-com2">
                <Link to="/input" className="homeToInput">
                  <div>합격자</div>
                  <div>조회</div>
                </Link>
              </div>
              <div className="home-com3">
                <Link to="/input" className="pointBox">
                  <img src={Point} className="PointImg"></img>
                </Link>
                <Link to="https://www.instagram.com/likelion_ds?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="homeToInsta">
                  <img src={InstaImg} className="InstaImg"></img>
                </Link>
                <div className="blackBox">
                  <div>GROWL</div>
                  <div>TO</div>
                  <div>WORLD !</div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
