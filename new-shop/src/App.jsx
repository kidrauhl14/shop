import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MainPage from "./pages/MainPage";
import FashionPage from "./pages/FashionPage";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";

function App() {

  const [products, setProducts] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage products={products} setProducts={setProducts}/>} />
        <Route path={"/fashion"} element={<FashionPage />} />
        <Route path={"/detail/:id"} element={<DetailPage />} />
        <Route path={"/cart"} element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
