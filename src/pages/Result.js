import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Result.css";
import { useLocation } from "react-router-dom";

// 합격 컴포넌트
function PassComponent({ name }) {
  return (
    <div className="text-center pt-5 text-black text-[30px] font-bold font-['Inter'] leading-10">
      {name}님 <br />
      축하합니다 !
      <div className="text-[16px] mt-6">
        <div className="text-[#FF7710] mb-5 text-base font-bold font-['Inter'] leading-tight">
          덕성여자대학교 멋쟁이사자처럼 12기에
          <br />
          최종 합격되신 것을
          <br />
          축하드립니다.
        </div>
        <div className="text-[#000000] mb-5 text-base font-bold font-['Inter'] leading-tight">
          지원자분께 좋은 소식을
          <br />
          알려드리게 되어 기쁘네요.
        </div>
        <div className="text-[#000000] text-base font-bold font-['Inter'] leading-tight">
          아래 노션 및 디스코드 링크에
          <br />
          접속하셔서
          <br />
          최종 합격자로서의 기쁨을 누리세요!
        </div>
        <div className="text-[#000000] mt-12 mb-5 text-base font-bold font-['Inter'] leading-tight">
          노션
          <br />
          <a href="https://jiinkyung.notion.site/12-89a8d4c50681479ea1fb70438471dd0d?pvs=74" target="_blank" rel="noopener noreferrer">
            https://jiinkyung.notion.site/12-89a8d4c50681479ea1fb70438471dd0d?pvs=74
          </a>
        </div>
        <div className="text-[#000000] text-base font-bold font-['Inter'] leading-tight">
          디스코드
          <br />
          <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
            https://discord.com/
          </a>
        </div>
      </div>
    </div>
  );
}

// 불합격 컴포넌트
function FailComponent({ name }) {
  return (
    <div className="py-4 text-center text-black text-[20px] font-bold font-['Inter'] leading-tight">
      <p className="text-[20px] font-bold">{name}님</p>
      덕성여자대학교
      <br />
      멋쟁이사자처럼 12기에
      <br />
      지원해주셔서 감사합니다.
      <div className="text-[16px] mt-8">
        <div className="text-[#FF7710] mb-5 text-base font-bold font-['Inter'] leading-tight">
          <span className="text-[#000000]">예상보다 많은 지원자들로 인해 </span>
          <br />
          <span className="text-[#FF7710]">
            최종 면접 결과 <br />
            합격하지 못하였음을 전달 드립니다.{" "}
          </span>
        </div>
        <div className="text-[#000000] mb-5 text-base font-bold font-['Inter'] leading-tight">
          더 많은 인재들을 모시지 못하여
          <br />
          죄송한 마음을 전합니다.
        </div>
        <div className="text-[#000000] mb-5 text-base font-bold font-['Inter'] leading-tight">
          모쪼록 이번 지원 과정이
          <br />
          여러분의 발전에 큰 도움되었기를
          <br />
          간절히 바랍니다.
        </div>
        <div className="text-[#000000] mb-8 text-base font-bold font-['Inter'] leading-tight">
          아울러 지원 과정에서 작성해주신
          <br />
          개인정보는 모두 폐기할 것을 약속드리며,
          <br />
          추후 재지원에 대한 불이익은 없을 것 입니다.
        </div>
        <div className="text-[#000000] text-base font-bold font-['Inter'] leading-tight">감사합니다.</div>
      </div>
    </div>
  );
}

function Result() {
  const [isPassed, setIsPassed] = useState(null);
  const [name, setName] = useState("");

  const location = useLocation();
  const passInfo = location.state.pass;
  console.log(passInfo);
  useEffect(() => {
    // 가상의 백엔드 요청 시뮬레이션

    setName(location.state.name);
    // pass가 "true"일 때 합격 페이지를 보여주고, 그 외에는 불합격 페이지를 보여줌
    if (passInfo == true) {
      setIsPassed(true);
    } else if (passInfo == false) {
      setIsPassed(false);
    }
  }, [passInfo, location.state.name]);

  return (
    <div className="page">
      <div className="page-bg">
        <div className="page-space">
          <Header />
          <div className="center">
            <div className="flex flex-col items-center">
              <div className="w-72 h-16 mt-4 text-center text-white text-[50px] font-bold font-['Inter'] leading-10">합격자 조회</div>

              <div className="w-[350px] h-[540px] bg-white rounded-[20px] mt-4">
                {/* 합격/불합격 정보에 따라 다른 컴포넌트를 렌더링 */}
                {isPassed !== null && <div className="text-center text-[20px] font-bold mt-4">{isPassed ? <PassComponent name={name} /> : <FailComponent name={name} />}</div>}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Result;
