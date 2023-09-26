import React from 'react';
import CartList from '../cart/CartList';
import TotalCart from '../cart/TotalCart';

export default function CartPage({ cart }) {
  return (
    <div>
      <header className="py-4">
        <h1 className="text-left p-6 ml-16 font-extrabold text-xl">장바구니</h1>
      </header>

      <div className="bg-slate-200 lg:flex justify-between mb-20 rounded-xl shadow-xl">
        <div>
          {cart.length === 0 ? (
            <div>
              <h2>장바구니에 담긴 상품이 없습니다.</h2>
              <p>원하는 상품을 장바구니에 담아보세요!</p>
            </div>
          ) : (
            cart.map((cart) => {
              return <CartList cart={cart} />;
            })
          )}
        </div>

        <TotalCart className="self-start shrink-0 flex items-center mt-10 mb-20" />
      </div>
    </div>
  );
}
