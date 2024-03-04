import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Input.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Point from "../img/input_point.png";
import axios from "axios";

function Input() {
    const navigate = useNavigate(); // useHistory 대신 useNavigate를 사용합니다.

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");

    const handleClick = () => {
        if (!name.trim() && !number.trim() && !email.trim()) {
            window.alert("이름, 휴대폰 번호, 이메일을 입력해주세요.");
            return;
        } else if (!name.trim() && !number.trim() && email.trim()) {
            window.alert("이름, 휴대폰 번호를 입력해주세요.");
            return;
        } else if (!name.trim() && number.trim() && !email.trim()) {
            window.alert("이름, 이메일을 입력해주세요.");
            return;
        } else if (!name.trim() && number.trim() && email.trim()) {
            window.alert("이름을 입력해주세요.");
            return;
        } else if (name.trim() && !number.trim() && !email.trim()) {
            window.alert("휴대폰 번호, 이메일을 입력해주세요.");
            return;
        } else if (name.trim() && !number.trim() && email.trim()) {
            window.alert("휴대폰 번호를 입력해주세요.");
            return;
        } else if (name.trim() && number.trim() && !email.trim()) {
            window.alert("이메일을 입력해주세요.");
            return;
        }

        // 데이터베이스에서 정보 가져오기

        axios
            .post("https://13.124.148.244/api/babylion/check", {
                name: name,
                phone: number,
                email: email,
            })
            .then((response) => {
                // POST 요청을 성공적으로 보냈다면 다음 작업을 수행할 수 있습니다.
                // 이 예제에서는 단순히 다음 페이지로 이동하는 코드를 포함하였습니다.
                const passInfo = response.data.pass;
                navigate("/result", { state: { pass: passInfo, name: name } });

                // 결과 페이지로 이동하는 코드
            })
            .catch((error) => {
                // POST 요청에 실패했을 때 실행되는 코드
                console.error("POST 요청 실패:", error);
                window.alert(
                    "정보를 전송하는 동안 오류가 발생했습니다. 다시 시도해주세요."
                );
            });
    };
    return (
        <div className="page">
            <div className="page-bg">
                <div className="page-space">
                    <Header />
                    <div className="center">
                        <div className="content">
                            <div className="nameAndnextpage">
                                <div className="name">
                                    <div className="inboxmargin">
                                        <div>이름</div>
                                        <div>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => {
                                                    setName(e.target.value);
                                                }}
                                                placeholder="김덕성"
                                                style={{
                                                    width: "104px",
                                                    color: "#A5A2A2",
                                                    border: "none",
                                                    backgroundColor:
                                                        " transparent",
                                                }}
                                            ></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="nextpage">
                                    <div
                                        className="inboxmargintonextpage"
                                        onClick={handleClick}
                                    >
                                        <div>
                                            <div>합격자</div>
                                            <div>조회</div>
                                            <div>바로 가기</div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <img src={Point}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="phonenumber">
                                <div className="inboxmargin">
                                    <div>휴대폰 번호</div>
                                    <div>
                                        <input
                                            type="text"
                                            value={number}
                                            placeholder="01012341234"
                                            style={{
                                                width: "219px",
                                                color: "#A5A2A2",
                                                border: "none",
                                                backgroundColor: " transparent",
                                            }}
                                            onChange={(e) => {
                                                setNumber(e.target.value);
                                            }}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="email">
                                <div className="inboxmargin">
                                    <div>이메일</div>
                                    <div>
                                        <input
                                            type="text"
                                            value={email}
                                            placeholder="1234@gmail.com"
                                            style={{
                                                width: "196px",
                                                color: "#A5A2A2",
                                                border: "none",
                                                backgroundColor: " transparent",
                                            }}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                        ></input>
                                    </div>
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

export default Input;
