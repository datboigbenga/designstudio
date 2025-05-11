import { useLocation } from "react-router-dom";
import { navItems } from "../../data-helpers/dashboard";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

export const Navbar = () => {
  const { pathname } = useLocation();
  let navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const MobileNavMenu = ({ menu, idx }: any) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, idx * 100);

      return () => clearTimeout(timer);
    }, [idx]);

    return (
      <li
        onClick={() => {
          setMenuOpen(false);
          navigate(menu.route);
        }}
        className={`nav__link ${isVisible ? "fade-in" : ""} ${
          pathname === menu.route
        ? "active" : ""}`}
      >
        {menu.label}
      </li>
    );
  };

  return (
    <nav className="nav">
      <div className="logo__container">
        <img src="" alt="" />
        <p>UNILAG DESIGN STUDIO</p>
      </div>
      <ul className="nav__items">
        {navItems.map((item, indx) => (
          <li
            key={indx}
            id={pathname === item.route ? "active" : ""}
            onClick={() => navigate(item.route)}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <div onClick={() => setMenuOpen((prev) => !prev)} className="mobile__nav">
        <div id="icon" className={`icon ${menuOpen ? "icon-close" : "icon-menu"}`} />
        <div
          className={`mobile__nav__items ${menuOpen ? "menuopen" : "menuclosed"}`}
        >
          <ul>
            {navItems.map((item, indx) => (
              <MobileNavMenu key={indx} menu={item} idx={indx} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
