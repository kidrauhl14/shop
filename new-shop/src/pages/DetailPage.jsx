import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export default function DetailPage() {

  const {id} = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      setProduct(data.data.find((product) => product.id === parseInt(id)));
    })
  }, [id])
  console.log(product);
  
  return (
    <div>
      <Header />
      <div className="text-left">상품정보</div>

      <div className="card bg-slate-200 lg:card-side shadow-xl">
        <figure>
          <img src={product.image} alt={product.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p className="text-left">{product.description}</p>
          <p className="mt-2 mb-4 text-3xl text-left">${product.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">장바구니에 담기</button>
            <button className="btn btn-primary">장바구니로~</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
