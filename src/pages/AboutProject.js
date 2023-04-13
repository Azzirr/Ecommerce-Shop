import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

export default function AboutProject(){
    return(
        <Container>
            <Row>
                <Col>
                    <h3>Few informations about this project</h3>
                    <span>
                        This project is my attempt to create functional symulator of e-commerce shop in React.
                    </span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span>Used technologies:</span>
                    <ul>
                        <li>
                            JavaScript/JSX.
                        </li>
                        <li>
                            React.
                        </li>
                        <li>
                            React Bootstrap – because it is the easiest way to make responsive webpage with pretty good visual standards.
                        </li>
                    </ul>
                    <span>For connection with REST API I used:</span>
                    <ul>
                        <li>
                            Fetch – for getting products from API.
                        </li>
                        <li>
                            Axios library – for create login form validation. I didn't connect my application to database, so random login will show "You're logged in!". Anyway it still have some validation for server status code.
                        </li>
                    </ul>
                    <span>For components communication:</span>
                    <ul>
                        <li>
                            React hooks.
                             <ul>
                                <li>
                                    useState, useRef, useEffect, useNavigate.
                                </li>
                                <li>
                                    useContext – beacause I didn't know React Redux yet ;) Next project will be based on React Redux.
                                </li>
                             </ul>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Link to="/"><Button>Back to homepage</Button></Link>
        </Container>
    )
}