import React, { useEffect } from 'react'

export default function TotalCart({total, setTotal, cart}) {

  const itemTotal = cart.reduce((accumulator, item) => {
    return accumulator + (item.price * item.quantity);
  }, 0);

  console.log(itemTotal); // 합계 출력


  return (
    <div className="flex w-2/6 h-40">
      <div className="w-3/6 h-14 pt-4  ml-4 mt-10 font-extrabold text-2xl">
        총 : ${itemTotal}
      </div>
      <button className="btn btn-secondary w-1.5/6 h-14  ml-4 mt-12 font-extrabold text-2xl">
        구매하기
      </button>
    </div>
  );
}
