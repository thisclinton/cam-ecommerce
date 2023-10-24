import { useState } from "react";
import { TfiHeart } from "react-icons/tfi";
import { SlUser } from "react-icons/sl";
import {
  IoBagHandleOutline,
  IoMenuOutline,
  IoHeartOutline,
  IoPersonOutline,
} from "react-icons/io5";
import "./Nav.css";
import Search from "../Search/Search";

function Nav() {
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <div className="nav__toggle">
            <IoMenuOutline />
            <IoHeartOutline />
          </div>

          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Men
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  Women
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  Kids
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  Sports
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  Brands
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  New
                </a>
              </li>
            </ul>
          </div>

          <a href="#" className="nav__logo">
            Azubuike
          </a>

          <div className="nav__btns">
            <IoPersonOutline />
            <IoBagHandleOutline />
          </div>
        </nav>
        <Search />
      </header>
    </>
  );
}

export default Nav;
