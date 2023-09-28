import React, {useState} from 'react';
import CartList from '../cart/CartList';
import TotalCart from '../cart/TotalCart';

export default function CartPage({ cart, setCart }) {

  const [total, setTotal] = useState(0);
  
  const handleQuantity = (type, id, quantity) => {
    const found = cart.filter((el) => el.id === id)[0]; // filter는 배열을 반환
    const idx = cart.indexOf(found);
    const cartItem = {
      id: found.id,
      image: found.image,
      title: found.title,
      price: found.price,
      quantity: quantity,
    };
    if(type==="plus"){
      setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx+1)]);
    } else{
      if(quantity === 0) return; // 최소 1개 이상이어야함
      setCart([...cart.slice(0,idx), cartItem, ...cart.slice(idx + 1)]);
    }
  };

  const handleRemove = (id) => {
    setCart(cart.filter((el) => el.id !== id))
  }

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
              return <CartList cart={cart} handleQuantity={handleQuantity} handleRemove={handleRemove}/>;
            })
          )}
        </div>

        {cart.length === 0 ? "" : <TotalCart cart={cart} total={total} setTotal={setTotal} className="self-start shrink-0 flex items-center mt-10 mb-20" />}
      </div>
    </div>
  );
}
