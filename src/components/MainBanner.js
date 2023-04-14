import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import platformgameprototype from "../assets/PlatformGamePrototype.png";
import photoOne from "../assets/pexels-karolina-grabowska-4464822.jpg";
import photoTwo from "../assets/pexels-karolina-grabowska-5632360.jpg";
import photoThree from "../assets/pexels-karolina-grabowska-5632371.jpg";
export default function MainBanner() {
  return (
    <Container>
      <Row>
        <Carousel variant="dark">
            <Carousel.Item className="text-center">
                <a href="https://azzirr.github.io/PlatformGamePrototype/" target="blank"><img width={600} height={350} alt="Platform game project" src={platformgameprototype}/></a>
            </Carousel.Item>
            <Carousel.Item className="text-center">
                <img width={600} height={350} alt="box" src={photoOne}/>
            </Carousel.Item>
            <Carousel.Item className="text-center">
                <img width={600} height={350} alt="cyber monday" src={photoTwo}/>
            </Carousel.Item>
            <Carousel.Item className="text-center">
                <img width={600} height={350} alt="cart" src={photoThree}/>
            </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}
