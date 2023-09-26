import React from 'react';

export default function CartList({cart}) {
  console.log(cart);

  return (
    <div className="w-4/6 h-1/6 m-16 card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img className="h-3/5" src={cart.image} alt="상품 이미지" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cart.title}</h2>
        <p>${cart.price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">구매하기</button>
        </div>
      </div>
    </div>
  );
}
