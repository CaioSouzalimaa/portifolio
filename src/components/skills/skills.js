import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import colorSharp from "../../assets/img/color-sharp.png";

import './style.css';

export const Skills = () => {
  const reposnsive = {
    superLargeDesktop: {
      breakpoint: {max: 4000, min: 3000},
      items: 5
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 3
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 2
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1
    }
  };

  return (
    <section className={"skill"} id={"skills"}>
      <Container>
        <Row>
          <Col xs={12}>
            <div className={"skill-bx"}>
              <h2>My Skills</h2>
              <p>Lorem Ipsum is simply...</p> <br></br>
              <Carousel responsive={reposnsive} infinite className={"skill-slider"}>
                <div className={"skill-item"}>
                  <img src={meter1} alt={"skill"}/>
                  <h5>Web Development</h5>
                </div>
                <div className={"skill-item"}>
                  <img src={meter2} alt={"skill"}/>
                  <h5>Brand Identity</h5>
                </div>
                <div className={"skill-item"}>
                  <img src={meter3} alt={"skill"}/>
                  <h5>Logo Design</h5>
                </div>
                <div className={"skill-item"}>
                  <img src={meter1} alt={"skill"}/>
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className={"background-image-left"} src={colorSharp}/>
    </section>
  );
}
