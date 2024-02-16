import Header_Home from "../components/Header_Home";
import Footer from "../components/Footer";
import "../styles/Home.css";

function Home() {
  return (
    <div className="page">
      <div className="page-bg">
        <div className="page-space">
          <Header_Home />
          <div className="center">
            <div className="content">여기에 작업하시면 됩니다.</div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
