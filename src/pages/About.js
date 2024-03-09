import { Link } from "react-router-dom";
import Header_About from "../components/Header_About";
import Footer from "../components/Footer";
import "../styles/About.css";

import LikeLion from "../img/likelion.png";
import LikeLionDS from "../img/likelion_DS.png";

function About() {
  return (
    <div className="page">
      <div className="page-bg">
        <div className="page-space">
          <Header_About />
          <div className="center">
            <div className="content">
              <div className="lion_about">
                <div className="lion_intro">
                  <img className="lion_img" src={LikeLion} alt="멋쟁이사자처럼"></img>
                  <div className="lion_title">멋쟁이사자처럼이란?</div>
                  <div className="lion_text">
                    <p>멋쟁이사자처럼은 테크 기반의 아이디어 실현을 위해</p>
                    <p>국내 61개 대학이 모여 이루어진 국내최대 규모 IT 창업</p>
                    <p> 동아리입니다.</p>
                  </div>
                </div>
                <div className="lion_intro">
                  <img className="lion_img" src={LikeLionDS} alt="덕성 멋쟁이사자처럼"></img>
                  <div className="lion_title">DS-LIKELION UNIV.</div>
                  <div className="lion_text">
                    <Link to="https://www.instagram.com/likelion_ds">
                      <p>@likelion_ds</p>
                    </Link>
                    <p>덕성여자대학교 멋쟁이사자처럼 대학과 함께하세요.</p>
                    <p>매주 2회 세션/팀별 스터디를 통해</p>
                    <p>서로 상호교류하며 프로그래밍을 함께 공부합니다.</p>
                  </div>
                </div>
              </div>
              <div className="part_about">
                <div className="des_intro">
                  <div className="des_title">
                    Planning<br></br>&<br></br>Design
                  </div>
                  <div className="des_text">
                    <p>HTML/CSS, Figma 등을 기초로 하여</p>
                    <p>사용자 중심 디자인에 대해 이해하고</p>
                    <p>올바른 UI/UX 분석 및 개발 과정을 통해</p>
                    <p>높은 품질의 사용자 인터페이스를 설계할 수 있도록</p>
                    <p>학습합니다.</p>
                  </div>
                </div>
                <div className="front_intro">
                  <div className="front_title">Front-end</div>
                  <div className="front_text">
                    <p>설계된 사용자 인터페이스를 기반으로</p>
                    <p>HTML, CSS, JS 및 React 등을 사용한</p>
                    <p>웹사이트의 그래픽 사용자 인터페이스를 개발하여</p>
                    <p>사용자가 해당 웹 사이트를 보고 상호작용 할 수 있도록 학습합니다.</p>
                  </div>
                </div>
                <div className="back_intro">
                  <div className="back_title">Back-end</div>
                  <div className="back_text">
                    <p>웹 애플리케이션의 사용자가 보지 못하는 영역인 서버나</p>
                    <p>데이터베이스를 관리하는 기술인 Django를 배웁니다.</p>
                    <p>이를 토대로 실질적으로 사용자들이 원하는 정보를</p>
                    <p>제공할 수 있도록 데이터를 관리하고 서버 운영 할 수</p>
                    <p>있도록 학습합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="About_Footer" style={{ marginTop: "-40px" }}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
