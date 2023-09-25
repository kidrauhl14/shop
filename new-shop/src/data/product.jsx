import React from 'react';
import { Link } from 'react-router-dom';

// {
//     id:1,
//     title:'...',
//     price:'...',
//     category:'...',
//     description:'...',
//     image:'...'
// }
        
export default function Product({product, showDescription = true}) {
  return (
    <Link
      to={`/product/${product.id}`}
      key={product.id}
      className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
    >
      <img src={product.image} alt={product.title} />
      <div className="card-body">
        <h2>{product.title}</h2>
        {showDescription && <p>{product.description}</p>}
        <p className="mt-2 mb-4 text-3xl">${product.price}</p>
      </div>
    </Link>
  );
}
