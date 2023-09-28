import React, { useEffect } from "react";
import Product from "../data/product";
import Header from "../components/header";
import Footer from "../components/footer";

import axios from "axios";

export default function ElectronicsPage({ category, products, setProducts }) {
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      setProducts(data.data);
    });
  }, [setProducts]);

  return (
    <div>
      <section className="dark:bg-slate-500">
        <div className="w-48 p-4 my-4 shadow-lg">
          <h1 className="font-extrabold text-4xl text-orange-500">Electronics</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
          {products
            .filter((product) => product.category.includes("electronics"))
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
    </div>
  );
}
