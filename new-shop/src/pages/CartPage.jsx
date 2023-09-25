import React from 'react';
import cartList from '../cart/cartList';
import totalCart from '../cart/totalCart';

export default function CartPage() {
  return (
    <div>
      <header className="bg-green-200 py-4">
        <h1 className="text-left p-6 font-extrabold text-xl">장바구니</h1>
      </header>
      <cartList />
      <totalCart />
    </div>
  );
}
