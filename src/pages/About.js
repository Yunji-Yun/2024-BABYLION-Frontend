import Header_About from "../components/Header_About";
import Footer from "../components/Footer";
import "../styles/About.css";

function About() {
  return (
    <div className="page">
      <div className="page-bg">
        <div className="page-space">
          <Header_About />
          <div className="center">
            <div className="content">여기에 작업하시면 됩니다.</div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default About;
