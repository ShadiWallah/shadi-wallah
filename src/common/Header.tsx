// import React from "react";
import { Link } from "react-router-dom";
import brandLogo from "./../assets/new-logo.png";
import leftCertain from "./../assets/leftu-certain.png";
import rightCertain from "./../assets/right-certain.png";
function Header() {
  return (
    <div className="flex w-full justify-between items-center bg-white py-0 shadow-md fixed top-0 z-5">
      <img src={leftCertain} alt="left-certain" width={70} height={50} className="sm:flex hidden"/>
      <div className="flex w-6xl justify-between items-center">
        <header className="flex items-center">
          <img src={brandLogo} alt="brand logo" width={100} height={100} />
          <span className="sm:flex hidden">
            <Link to="/" className="font-bold flex items-end space-x-2">
              <span className="text-grape text-5xl">Shadi</span>{" "}
              <span className="text-2xl">Wallah</span>
            </Link>
          </span>
        </header>
        <nav>
          <ul className="flex gap-4  text-grape font-semibold p-5">
            <li className="group transition sm:flex flex-col hidden duration-300 cursor-pointer">
              <Link to="/">Venders</Link>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-grape"></span>
            </li>
            <li className="group transition md:flex flex-col hidden duration-300 cursor-pointer">
              <Link to="/about">Blog</Link>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </li>
            <li className="group transition md:flex flex-col hidden duration-300 cursor-pointer">
              <Link to="/about">Search</Link>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-grape"></span>
            </li>
            <li className="group transition duration-300 cursor-pointer">
              <Link to="/about">Login</Link>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-grape"></span>
            </li>
            <li className="group transition md:flex flex-col hidden duration-300 cursor-pointer">
              <Link to="/about">Are you a vender ?</Link>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-grape"></span>
            </li>
          </ul>
        </nav>
      </div>
      <img src={rightCertain} alt="right-certain" width={70} height={50} className="sm:flex hidden"/>
    </div>
  );
}

export default Header;
