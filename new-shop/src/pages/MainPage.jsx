import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';

import Product from "../data/product";
import Header from '../components/header';
import Footer from '../components/footer';
import BagImg from '../assets/goods.jpg';
import FoodImg from '../assets/foods.jpg';
import DeliveryImg from '../assets/delivery.jpg';
import AsImg from '../assets/as.jpg';

import DetailPage from "./DetailPage";

export default function MainPage({products, setProducts}) {


  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      setProducts(data.data);
    });
  }, [setProducts]);

  const categories = ["clothing", "jewelery", "electronics"];

  return (
    <div>
      <div className=" pt-10 carousel rounded-3xl shadow-xl">
        <div className="w-96 carousel-item">
          <img src={FoodImg} alt="음식 이미지" />
          <p className="font-extrabold text-4xl absolute text-orange-500 p-2 hover:opacity-100 transition-opacity duration-300">
            신선한 식품
          </p>
        </div>
        <div className="w-96 carousel-item">
          <img src={BagImg} alt="가방 이미지" />
          <p className="font-extrabold text-4xl absolute text-orange-500 p-2 hover:opacity-100 transition-opacity duration-300">
            패션의 성지
          </p>
        </div>
        <div className="w-96 carousel-item">
          <img src={AsImg} alt="AS 이미지" />
          <p className="font-extrabold text-4xl absolute text-orange-500 p-2 hover:opacity-100 transition-opacity duration-300">
            쉬운 교환/환불
          </p>
        </div>
        <div className="w-96 carousel-item">
          <img src={DeliveryImg} alt="배송 이미지" />
          <p className="font-extrabold text-4xl absolute text-orange-500 p-2 hover:opacity-100 transition-opacity duration-300">
            빠른 배송!
          </p>
        </div>
      </div>

      <div>
        {categories.map((category) => (
          <section key={category} className='dark:bg-slate-500'>
            <div className="w-48 p-4 my-4 shadow-lg">
              <h1 className="font-extrabold text-4xl text-orange-500">
                {category}
              </h1>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
              {products
                .filter((product) => product.category.includes(category))
                .map((product, index) => {
                  return (
                    <Product
                      key={product.id}
                      product={product}
                      showDescription={false}
                    />
                  );
                })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
