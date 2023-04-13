// App is using free API: https://fakestoreapi.com/
import './App.css';
import Container from 'react-bootstrap/esm/Container';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';
import Summary from './pages/Summary';
import Help from './pages/Help';
import WhatsNew from './pages/WhatsNew';
import NotFound from './pages/NotFound';
import Thanks from './pages/Thanks';
import AboutProject from './pages/AboutProject';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="whats-new" element={<WhatsNew/>}></Route>
        </Route>
        <Route path="/summary" element={<Summary/>}></Route>
        <Route path="/support" element={<Help/>}></Route>
        <Route path="/other-projects" element={<Cart/>}></Route>
        <Route path="/thanks" element={<Thanks/>}></Route>
        <Route path="/about-project" element={<AboutProject/>}></Route>
        <Route path="*" element={<NotFound/>}></Route> 
      </Routes>
    </Container>
  );
}

export default App;
