// App is using free API: https://fakestoreapi.com/
import './App.css';
import Container from 'react-bootstrap/esm/Container';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';
import Summary from './pages/Summary';
import Help from './pages/Help';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/summary" element={<Summary/>}></Route>
        <Route path="/support" element={<Help/>}></Route>
        <Route path="/about-project" element={<Cart/>}></Route>
        <Route path="/other-projects" element={<Cart/>}></Route>
      </Routes>
    </Container>
  );
}

export default App;
