import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineNightlight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header({cart}) {

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
        <button className="bg-black dark:bg-black w-4 h-6 mt-2 text-white">
          <MdOutlineNightlight />
        </button>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <Link to="/cart">
          <div className="flex-none">
            <button className="btn btn-ghost w-10 sm:w-12 ml-1">
              <span className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-gray-700 dark:stroke-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  ></path>
                </svg>
                <span className="inline-flex items-center justify-center absolute top-0 right-0 px-2 py-1 rounded-full bg-red-500 text-xs font-bold leading-none text-gray-200 transform translate-x-1/2 -translate-y-1/2">
                  {cart.length >= 1 ? (
                    <div className="rounded-full bg-red-200">
                      <p>{cart.length}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </span>
              </span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

