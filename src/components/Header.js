import React from "react";
import { NavLink } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
const Header = ({ size }) => {
  //console.log("hee", size);
  return (
        <>   
    <nav className="px-3 py-2 navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          <NavLink to="/" className="nav-item nav-link ">
            Trang Chủ
          </NavLink>
          <NavLink to="/about" className="nav-item nav-link">
            Về Chúng Tôi
          </NavLink>
          <NavLink to="/contact" className="nav-item nav-link">
            Liên Lạc
          </NavLink>
        </div>

        <NavLink className="navbar-brand ms-auto" to="/cart">
          <span className="relative w-8">
            <svg
              width="44"
              height="41"
              viewBox="0 0 44 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-full"
            >
              <ellipse
                cx="20.9584"
                cy="37.7083"
                rx="3.125"
                ry="3.125"
                fill="#292D32"
              />
              <circle cx="33.4584" cy="37.7083" r="3.125" fill="#292D32" />
              <path
                d="M5.33333 13.75L3.25 13.75"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M7.41671 26.25L5.33337 26.25"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M7.41669 20H1.16669"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M11.0873 8.54167L15.7094 29.2435C15.8625 29.9291 16.4709 30.4167 17.1734 30.4167H36.7473C37.4498 30.4167 38.0582 29.9291 38.2113 29.2435L42.4255 10.3685C42.6347 9.43136 41.9218 8.54167 40.9615 8.54167H11.0873ZM11.0873 8.54167L9.40419 2.35616C9.2265 1.70315 8.63356 1.25 7.95682 1.25H1.16669"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs text-white bg-pink-600 rounded-full translate-x-2/4 ">
              {size.length}
            </span>
          </span>
        </NavLink>
        <NavLink className="w-[60px] h-[60px]  navbar-brand" to="/res">
          <BiUserCircle className="w-full h-full"></BiUserCircle>
        </NavLink>
      </div>
    </nav>
    </>
  );
};

export default Header;
