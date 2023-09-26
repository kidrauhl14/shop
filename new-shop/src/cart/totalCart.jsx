import React from 'react'

export default function TotalCart() {
  return (
    <div className="flex w-2/6 h-40">
      <div className="w-1/6 h-14 pt-4  ml-4 mt-10 font-extrabold text-2xl">
        총 : $300{" "}
      </div>
      <button className="btn btn-secondary w-1.5/6 h-14  ml-4 mt-12 font-extrabold text-2xl">
        구매하기
      </button>
    </div>
  );
}
