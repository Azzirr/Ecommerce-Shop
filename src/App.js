// App is using free API: https://fakestoreapi.com/
import './App.css';
import Container from 'react-bootstrap/esm/Container';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import Products from './components/Products';
import Footer from './components/Footer';
import { useEffect, useState } from 'react'

function App() {
  const [products, setProducts] = useState(null)
  // Getting all products from API
  useEffect(() => {
      fetch(`https://fakestoreapi.com/products/`)
           .then(response => {
              if(response.ok){
                  return response.json()
              } else {
                  return Promise.reject(response)
              }
           })
           .then(data => {
              console.log(data)
              setProducts(data)
          })
           .catch(err => console.log(err))
  }, []) 
  return (
    <Container>
      <Header products={products}></Header>
      <MainBanner></MainBanner>
      <Products products={products}></Products>
      <Footer></Footer>
    </Container>
  );
}

export default App;
