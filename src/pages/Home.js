// App is using free API: https://fakestoreapi.com/
import '../App.css';
import Container from 'react-bootstrap/esm/Container';
import Header from '../components/Header';
import MainBanner from '../components/MainBanner';
import Products from '../components/Products';
import Footer from '../components/Footer';
import Cart from '../pages/Cart'
import { useEffect, useState } from 'react';
import { CartContext, IsOpenContext } from '../context/ShoppingCartContext'
import { Outlet } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
function Home() {
  const cartProductsFromLocalStorage = JSON.parse(localStorage.getItem('cartProducts') || '[]');
  const [newProducts, setNewProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState(cartProductsFromLocalStorage);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filterByCategory, setFilterByCategory] = useState("");
  const [isWhatsNewActive, setItWhatsNewActive] = useState(false);
  const [isLoginActive, setIsLoginActive] = useState(false);

  // Local memory save
  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
  }, [cartProducts])

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
              setNewProducts(data);
          })
           .catch(err => console.log(err))
  }, [])
  return (
    <IsOpenContext.Provider value={{isOpen, setIsOpen}}>
      <CartContext.Provider value={{cartProducts, setCartProducts}}>
          <Container>
            <Header newProducts={newProducts} setNewProducts={setNewProducts} setSearch={setSearch} search={search} filterByCategory={filterByCategory} setFilterByCategory={setFilterByCategory} setItWhatsNewActive={setItWhatsNewActive}  setIsLoginActive={setIsLoginActive} isLoginActive={isLoginActive}></Header>
            {isLoginActive ? (<LoginForm></LoginForm>) : null}
            {isWhatsNewActive ? (<Outlet></Outlet>) : (<MainBanner></MainBanner>)}
            <Products newProducts={newProducts} search={search} filterByCategory={filterByCategory} setFilterByCategory={setFilterByCategory}></Products>
            <Footer></Footer>
            <Cart></Cart>
          </Container>
      </CartContext.Provider>
    </IsOpenContext.Provider>
  );
}

export default Home;
