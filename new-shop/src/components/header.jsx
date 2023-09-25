import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineNightlight } from "react-icons/md";

export default function Header() {
  return (
    <div className="bg-slate-200 flex w-full justify-between h-14">
      <button>
        <GiHamburgerMenu />
      </button>
      <button className="text-black text-2*1 font-bold">은채는 만물상</button>
      <div className="flex space-x-4 mt-4">
        <a href="#" className="text-black hover:underline">
          패션
        </a>
        <a href="#" className="text-black hover:underline">
          액세서리
        </a>
        <a href="#" className="text-black hover:underline">
          디지털
        </a>
      </div>
      <button className="w-4 h-4 mt-4 bg-gray-500 text-white">
        <MdOutlineNightlight />
      </button>
      <div className="relative mt-2">
        <input type="text" placeholder="검색" />
        <button>검색</button>
      </div>
      <button className="bg-white text-blue-500 hover:bg-blue-200">
        장바구니
      </button>
    </div>
  );
}
