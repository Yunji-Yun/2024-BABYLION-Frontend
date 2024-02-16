import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Input from "./pages/Input";
import Result from "./pages/Result";
import About from "./pages/About";

import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 홈, 정보 입력, 결과 확인, 소개 */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/input" element={<Input />} />
          <Route exact path="/result" element={<Result />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
