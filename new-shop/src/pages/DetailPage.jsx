import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
import {useParams} from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import CartPage from './CartPage';

export default function DetailPage({cart, setCart}) {

  const {id} = useParams();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      setProduct(data.data.find((product) => product.id === parseInt(id)));
    })
  }, [id])
  console.log(product);

  const handleQuantity = (type) => {
    if(type === "plus"){
      setCount(count+1);
    } else {
      if (count === 1) return;
      setCount(count - 1);
    }
  };

  // 장바구니에 담긴 물건 (중복된 물건)
  const setQuantity = (id, quantity) => {
    const found = cart.filter((el) => el.id === id)[0];
    const idx = cart.indexOf(found);
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      quantity: quantity,
    };
    setCart([...cart.slice(0,idx), cartItem, ...cart.slice(idx + 1)]);
  };

  // 장바구니에 담긴 물건 (중복되지 x)
  const handleCart = () => {
    const cartItem = {
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      quantity: count,
    };

    const found = cart.find((el) => el.id === cartItem.id);
    if (found) setQuantity(cartItem.id, found.quantity + count);
    else {
      setCart([...cart, cartItem]);
    }
  };

  console.log(cart);
  
  return (
    <div>
      <div className="text-left p-6 font-extrabold text-xl">상품정보</div>

      <div className="card bg-slate-200 lg:card-side shadow-xl">
        <figure>
          <img src={product.image} alt={product.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p className="text-left w-7/12 h-1/6">{product.description}</p>
          <p className="mt-2 mb-4 text-3xl text-left">${product.price}</p>
          <div className="ml-24 card-actions">
            <div className="btn-group">
              <button
                className="btn btn-primary"
                onClick={() => handleQuantity("minus")}
              >
                -
              </button>
              <button className="btn btn-ghost no-animation">{count}</button>
              <button
                className="btn btn-primary"
                onClick={() => handleQuantity("plus")}
              >
                +
              </button>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleCart}>
              장바구니에 담기
            </button>
            <Link to="/cart">
              <button className="btn btn-primary">장바구니로~</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
