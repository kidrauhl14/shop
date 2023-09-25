import React from 'react';

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
    <div
      key={product.id}
      className="w-40 h-80 bg-white p-4 rounded-lg shadow-lg"
    >
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      {showDescription && <p>{product.description}</p>}
      <p>${product.price}</p>
    </div>
  );
}
