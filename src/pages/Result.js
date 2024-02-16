import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Result.css";

function Result() {
  return (
    <div className="page">
      <div className="page-bg">
        <div className="page-space">
          <Header />
          <div className="center">
            <div className="content">여기에 작업하시면 됩니다.</div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Result;
