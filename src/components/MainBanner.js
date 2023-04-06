import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import placeholder_photo from "../assets/placeholder1.svg";
import placeholder_photo2 from "../assets/placeholder2.svg";
import platformgameprototype from "../assets/PlatformGamePrototype.png";
export default function MainBanner() {
  return (
    <Container>
      <Row>
        <Carousel variant="dark">
            <Carousel.Item className="text-center">
                <a href="https://azzirr.github.io/PlatformGamePrototype/" target="blank"><img width={600} alt="Platform game project" src={platformgameprototype}/></a>
            </Carousel.Item>
            <Carousel.Item className="text-center">
                <img src={placeholder_photo2}/>
            </Carousel.Item>
            <Carousel.Item className="text-center">
                <img src={placeholder_photo}/>
            </Carousel.Item>
            <Carousel.Item className="text-center">
                <img src={placeholder_photo2}/>
            </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}
