import React from 'react';

export default function CartList({cart, handleQuantity, handleRemove}) {
  console.log(cart);

  return (
    <div className="pb-4 lg:flex lg:items-center mt-4 px-2 lg:px-0">
      <div className="ml-2 mr-4">
        <button
          className="btn btn-circle"
          onClick={() => handleRemove(cart.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <figure>
        <img
          className="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white"
          src={cart.image}
          alt="상품 이미지"
        />
      </figure>
      <div className="card-body px-1 lg:px-12">
        <h2 className="card-title">{cart.title}</h2>
        <p>${cart.price * cart.quantity}</p>
        <div className="ml-24 card-actions">
          <div className="btn-group">
            <button
              className="btn btn-primary"
              onClick={() =>
                handleQuantity("minus", cart.id, cart.quantity - 1)
              }
            >
              -
            </button>
            <button className="btn btn-ghost no-animation">
              {cart.quantity}
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleQuantity("plus", cart.id, cart.quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
