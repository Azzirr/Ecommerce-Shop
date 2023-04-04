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
  let [products, setProducts] = useState(null)
  const [newProducts, setNewProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filterByCategory, setFilterByCategory] = useState("");
  const [isWhatsNewActive, setItWhatsNewActive] = useState(false);
  const [isLoginActive, setIsLoginActive] = useState(false);
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
              setNewProducts(data);
          })
           .catch(err => console.log(err))
  }, [])
  return (
    <IsOpenContext.Provider value={{isOpen, setIsOpen}}>
      <CartContext.Provider value={{cartProducts, setCartProducts}}>
          <Container>
            <Header products={products} newProducts={newProducts} setNewProducts={setNewProducts} setSearch={setSearch} search={search} filterByCategory={filterByCategory} setFilterByCategory={setFilterByCategory} setItWhatsNewActive={setItWhatsNewActive}  setIsLoginActive={setIsLoginActive} isLoginActive={isLoginActive}></Header>
            {isLoginActive ? (<LoginForm></LoginForm>) : null}
            {isWhatsNewActive ? (<Outlet></Outlet>) : (<MainBanner></MainBanner>)}
            <Products products={products} newProducts={newProducts} search={search} filterByCategory={filterByCategory} setFilterByCategory={setFilterByCategory}></Products>
            <Footer></Footer>
            <Cart></Cart>
          </Container>
      </CartContext.Provider>
    </IsOpenContext.Provider>
  );
}

export default Home;
