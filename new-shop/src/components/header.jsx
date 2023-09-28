import React,{useEffect} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {MdLightMode} from "react-icons/md";
import {MdNightlight} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header({cart, dark, setDark}) {

  const navigate = useNavigate(); //navigate함수 가져오기

  const handleLogoClick = () => {
    navigate("/");
  };

  const toggleDarkMode = () => {
    if (localStorage.getItem("theme") === "dark") {
      // 다크모드 -> 기본모드 
      localStorage.removeItem("theme"); // 다크모드 삭제
      document.documentElement.classList.remove("dark");  // html class에서 dark클래스 삭제 !  
      setDark("light");
    } else {
      // 기본모드 -> 다크모드
      document.documentElement.classList.add("dark"); // html의 class에 dark 클래스 추가 ! 
      localStorage.setItem("theme", "dark");  // localstorage에 dark를 추가해서 ! useEffect에서 처음에 검사해서 다크모드인지 판단해주려고 ! 
      setDark("dark");
    }
  };

  useEffect(() => {
    // 처음에 다크모드인지 판단해서 뿌려주기 !! ( 나중에는 상태관리를 해도 괜찮습니다 ! )
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  },[]);



  return (
    <div className="navbar bg-gray-400 text-neutral-content dark:bg-slate-500">
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
      <div class="flex-none hidden md:flex md:flex-1 ml-2">
        <a
          class="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
          href="/fashion"
        >
          패션
        </a>
        <a
          class="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
          href="/accessory"
        >
          액세서리
        </a>
        <a
          class="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
          href="/digital"
        >
          디지털
        </a>
      </div>
      <div className="flex-none gap-2">
        <button
          onClick={() => toggleDarkMode("dark")}
          className="bg-slate-500 dark:bg-slate-600 w-8 h-10 p-2"
        >
          {dark === "dark" ? (
            <MdLightMode className="pl-0" />
          ) : (
            <MdNightlight className="pl-0" />
          )}
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
                      <p className="bg-red-200text-white text-lg">
                        {cart.length}
                      </p>
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

