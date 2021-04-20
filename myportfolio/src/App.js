import React from "react";
import './App.css';
import MyNavbar from "./components/Navbar/navbar"
import MyCarousel from "./components/Carousel/carousel" 
import Title from "./components/Title/title"
import About from "./pages/About/about";
import Container from "react-bootstrap/Container";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Skills from "./pages/Skills/skills";
import TimeLine from "./components/Projects/projects";

const App=() => {
  return (
    <div className="App" style={{ position: "relative" }}>
     <MyNavbar/>
     <Title/>
     <MyCarousel/>
     <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./images/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
            <Fade duration={500}>
                <About />
                </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
    </div>
  );
}

export default App;
