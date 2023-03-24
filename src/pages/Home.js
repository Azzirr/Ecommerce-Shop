// App is using free API: https://fakestoreapi.com/
import '../App.css';
import Container from 'react-bootstrap/esm/Container';
import Header from '../components/Header';
import MainBanner from '../components/MainBanner';
import Products from '../components/Products';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { CartContext } from '../context/ShoppingCartContext'
function Home() {
  let [products, setProducts] = useState(null)
  products = [{"id": 1, "title": "Fjallraven", "price": "50"}, {"id": 2, "title": "Laptop", "price": "500"}, {"id": 3, "title": "Smartphone", "price": "200"}, {"id": 4, "title": "Monitor", "price": "150"}, {"id": 5, "title": "Grizzly bear", "price": "1500"}]
  const [newProducts, setNewProducts] = useState([{"id": 1, "title": "Fjallraven", "price": "50"}, {"id": 2, "title": "Laptop", "price": "500"}, {"id": 3, "title": "Smartphone", "price": "200"}, {"id": 4, "title": "Monitor", "price": "150"}, {"id": 5, "title": "Grizzly bear", "price": "1500"}]);

  const [cartProducts, setCartProducts] = useState([]);

  // Getting all products from API
  // useEffect(() => {
  //     fetch(`https://fakestoreapi.com/products/`)
  //          .then(response => {
  //             if(response.ok){
  //                 return response.json()
  //             } else {
  //                 return Promise.reject(response)
  //             }
  //           })
  //          .then(data => {
  //             console.log(data)
  //             setProducts(data)
  //         })
  //          .catch(err => console.log(err))
  // }, [])
  return (
    <CartContext.Provider value={{cartProducts, setCartProducts}}>
      <Container>
        <Header products={products} setNewProducts={setNewProducts}></Header>
        <MainBanner></MainBanner>
        <Products products={products} newProducts={newProducts}></Products>
        <Footer></Footer>
      </Container>
    </CartContext.Provider>

  );
}

export default Home;
