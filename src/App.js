// App is using free API: https://fakestoreapi.com/
import './App.css';
import Container from 'react-bootstrap/esm/Container';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import Products from './components/Products';
import Footer from './components/Footer';
function App() {
  return (
    <Container>
      <Header></Header>
      <MainBanner></MainBanner>
      <Products></Products>
      <Footer></Footer>
    </Container>
  );
}

export default App;
