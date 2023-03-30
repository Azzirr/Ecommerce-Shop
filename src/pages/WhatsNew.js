import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import BannerPhoto from '../assets/pexels-nataliya-vaitkevich-freetousephoto.jpg'
export default function WhatsNew(){
    return(
        <Container>
            <Row>
                <Col>
                    <h1 className="text-center mt-3 mb-3">Few newses, that makes you happy!</h1>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={12} lg={4} className="mb-2">
                    <span> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id libero bibendum, ornare mauris suscipit, porta enim. Vivamus consequat nisl tortor, sed malesuada urna viverra interdum. Proin ultrices mi id nulla commodo viverra. Curabitur nec urna pharetra, hendrerit justo sed, eleifend lorem. Vestibulum dapibus dui vel diam maximus, vitae congue justo auctor. Maecenas nec lobortis ex. Quisque ac velit imperdiet, fringilla leo vel, vehicula enim. Nulla facilisi.
                    </span>
                </Col>
                <Col md={12} lg={4} className="mb-2">
                    <span> 
                        Aenean ornare imperdiet nibh, at fringilla eros tincidunt a. Sed congue euismod ante. Aenean blandit gravida malesuada. Aliquam feugiat maximus nunc, in tincidunt felis facilisis sit amet. Nunc tristique magna varius, suscipit purus vel, finibus lectus. Sed fringilla dui in odio faucibus auctor. Vivamus rutrum tincidunt mi, ac lobortis massa tristique non. Integer ultrices vitae neque vitae placerat. Sed lobortis scelerisque leo, a feugiat nibh placerat sed. Donec ut lacus diam. Proin nec fermentum leo, ut mollis metus. Nunc euismod ipsum magna, at aliquam diam congue at.
                    </span>
                </Col>
                <Col md={12} lg={4} className="mb-2">
                    <span> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id libero bibendum, ornare mauris suscipit, porta enim. Vivamus consequat nisl tortor, sed malesuada urna viverra interdum. Proin ultrices mi id nulla commodo viverra. Curabitur nec urna pharetra, hendrerit justo sed, eleifend lorem. Vestibulum dapibus dui vel diam maximus, vitae congue justo auctor. Maecenas nec lobortis ex. Quisque ac velit imperdiet, fringilla leo vel, vehicula enim. Nulla facilisi.
                    </span>
                </Col>
            </Row>
            <Row className="mb-4">
                <img src={BannerPhoto} alt="Online shopping" className="img-fluid mh-70"></img>
            </Row>
            <Row>
                <Col>
                    <span>
                        Sed non viverra magna. Aenean sollicitudin eros nec semper pharetra. Quisque vitae ipsum gravida, iaculis sem in, tempor ligula. Vivamus posuere, est in sagittis sodales, quam leo consequat nulla, sed ornare arcu odio quis mauris. Vivamus orci erat, vehicula finibus facilisis in, pulvinar at neque. Quisque varius arcu suscipit, luctus arcu nec, euismod neque. Aliquam scelerisque molestie justo, vel vulputate est imperdiet nec. Etiam tortor ipsum, condimentum in viverra at, condimentum et est. Vestibulum non posuere arcu, et laoreet mi. Vestibulum finibus tincidunt venenatis. Proin blandit risus eu nisi feugiat porttitor id vitae leo. Nam molestie magna id dolor porta, eu fringilla nisl consectetur
                    </span>
                </Col>
            </Row>
        </Container>
    )
}