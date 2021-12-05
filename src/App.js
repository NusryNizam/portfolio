import ProjectCard from "./ProjectCard";
import img from "./assets/img.jpg";
import dribbble from "./assets/dribbble.svg";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";

// Project Thumbnails
import ep from "./assets/projectThumb/ep.png";
import bf from "./assets/projectThumb/bf.png";
import qr from "./assets/projectThumb/qr.png";
import ytl from "./assets/projectThumb/ytl.png";

let projectDetails = [
  {
    name: "ePocket",
    description: "Personal finance management web application.",
    link: "https://epocketweb.000webhostapp.com",
    img: ep,
  },
  {
    name: "Body Fantasy",
    description: "Sri Lanka's premium cosmetic store.",
    link: "http://bodyfantasy.infinityfreeapp.com",
    img: bf,
  },
  {
    name: "QRGEN",
    description: "Simple QR code generator",
    link: "https://nusrynizam.github.io/qrgen/",
    img: qr,
  },
  {
    name: "Youtube-light",
    description: "Watch YouTube without distraction",
    link: "https://ytlight.netlify.app",
    img: ytl,
  },
];

function App() {
  return (
    <>
      <div className="section section1">
        <div>
          <img src={img} height="200px" />
        </div>
        <div>
          <h1 id="name">Nusry Nizam.</h1>
          <h4 id="title">Creative Designer and Web Developer</h4>
          <div id="socials">
            <a href="https://github.com/nusrynizam" target="_blank">
              <img src={github} width="40px" />
            </a>
            <a href="https://dribbble.com/nusry" target="_blank">
              <img src={dribbble} width="37px" />
            </a>
            <a href="https://linkedin.com/in/nusrynizam" target="_blank">
              <img src={linkedin} width="40px" />
            </a>
          </div>
        </div>
      </div>
      <div className="section section2">
        <h2>Development Projects</h2>
        <div className="cardContainer">
          {projectDetails.map((project) => {
            return <ProjectCard {...project} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
