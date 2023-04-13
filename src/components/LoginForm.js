import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useRef, useState, useEffect, useContext } from "react";
import AuthenticationContext from "../context/AuthenticationContext";
import axios from '../login api/axios';
const LOGIN_URL = '/users';

export default function LoginForm() {
  const { setAuthentication } = useContext(AuthenticationContext);
  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false); //in future this will change something in main page

    useEffect(() => {
      userRef.current.focus();
    }, [])
    useEffect(() => {
      setErrorMessage('')
    }, [user, password])

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await axios.post(LOGIN_URL, 
            JSON.stringify({username: user, password: password}), {
                headers: { 'Content-Type': 'application/json', },
                withCredentials: false
            }
        );
        console.log(response);
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        setAuthentication({user, password, roles, accessToken})
        setSuccess(true);
    } catch (error) {
        if(!error?.response){
            setErrorMessage('No server response')
        } else if (error.response?.status === 400) {
            setErrorMessage('Missing username or password')
        } else if (error.response?.status === 401) {
            setErrorMessage('Unauthorized')
        } else {
            setErrorMessage('Login Failed')
        }
        errorRef.current.focus();
    }


  };
  return (
    <Container style={{ float: "right" }}>
      <Row>
        <Col
          xs={12}
          sm={8}
          md={3}
          className="border border-success rounded loginFormStyle"
        >
          <>
            {success ? (
              <Row>
                <h1>You are logged in {user}!</h1>
              </Row>
            ) : (
              <Form onSubmit={handleSubmit}>
                <Row>
                  <p
                    ref={errorRef}
                    aria-live="assertive"
                    className="text-danger"
                  >{errorMessage}</p>
                </Row>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(event) => setUser(event.target.value)}
                    value={user}
                    required
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="mb-1">
                  Login
                </Button>
              </Form>
            )}
          </>
        </Col>
      </Row>
    </Container>
  );
}
