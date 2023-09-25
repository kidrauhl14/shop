import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import Product from "../data/product";
import Header from '../components/header';
import Footer from '../components/footer';

export default function MainPage({products, setProducts}) {

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      setProducts(data.data);
    });
  }, [setProducts]);

  const categories = ["clothing", "jewelery", "electronics"];

  return (
    <div>
      <Header />
      <div>
        {categories.map((category) => (
          <section key={category}>
            <div>{<h1>{category}</h1>}</div>

            {products.filter(product => product.category.includes(category)).map((product) => {
                return <Product key={product.id} product={product} showDescription={false} />;
            })}
          </section>
        ))}
      </div>
      <Footer />
    </div>
  );
}
