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
            <div className="content">
              <div className="text-3xl font-bold underline">
                안녕
              
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
