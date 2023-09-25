import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./pages/MainPage";
import FashionPage from "./pages/FashionPage";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";

function App() {


  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  
  const convertPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
  }

  return (
    <BrowserRouter>
      <Header cart={cart}/>
      <Routes>
        <Route path={"/"} element={<MainPage products={products} setProducts={setProducts}/>} />
        <Route path={"/fashion"} element={<FashionPage />} />
        <Route path={"/product/:id"} element={<DetailPage cart={cart} setCart={setCart}/>} />
        <Route path={"/cart"} element={<CartPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
