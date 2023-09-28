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
  const [dark, setDark] = useState("dark");

  // 숫자로 표현된 가격을 문자열로 받아와서, 천 단위로 쉼표(,)를 추가
  // const convertPrice = (price) => {
  //   return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
  // }

  return (
    <BrowserRouter>
      <Header cart={cart} dark={dark} setDark={setDark}/>
      <Routes>
        <Route
          path={"/"}
          element={<MainPage products={products} setProducts={setProducts} />}
        />
        <Route path={"/fashion"} element={<FashionPage />} />
        <Route
          path={"/product/:id"}
          element={<DetailPage cart={cart} setCart={setCart} />}
        />
        <Route
          path={"/cart"}
          element={
            <CartPage
              cart={cart}
              setCart={setCart}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
