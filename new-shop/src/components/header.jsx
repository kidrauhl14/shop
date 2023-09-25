import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineNightlight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate(); //navigate함수 가져오기

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="navbar bg-gray-400 text-neutral-content">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-xl"
          onClick={handleLogoClick}
        >
          은채는 만물상
        </a>
      </div>
      <div className="flex-none gap-2">
        <button className="bg-white dark:bg-black w-4 h-4 mt-4 bg-gray-500 text-white">
          <MdOutlineNightlight />
        </button>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    // <div className="navbar bg-neutral text-neutral-content">
    //   <button>
    //     <GiHamburgerMenu />
    //   </button>
    //   <a className="btn btn-ghost normal-case text-xl">은채는 만물상</a>
    // </div>
  );
}

