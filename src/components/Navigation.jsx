import React from "react";
import { NavLink } from "react-router-dom";
import {
  bookLogo,
  cartLogo,
  historyLogo,
  listLogo,
  starLogo,
  worldLogo,
} from "../helpers/navLogos";

function Navigation() {
  const navPages = [
    { name: "Now Reading", link: "reading", logo: bookLogo },
    { name: "Browse", link: "browse", logo: worldLogo },
    { name: "Buy Books", link: "shop", logo: cartLogo },
    { name: "Favourite Books", link: "favourite", logo: starLogo },
    { name: "WishList", link: "wishlist", logo: listLogo },
    { name: "History", link: "history", logo: historyLogo },
  ];
  return (
    <nav className="categories-navigation">
      <ul className="categories-navigation-list">
        {navPages.map((item, idx) => (
          <li key={idx} className="categories-navigation-item">
            <NavLink
              to={item.link}
              className={({ isActive }) => {
                return isActive ? "nav-link nav-link-active" : "nav-link";
              }}
            >
              {item.logo}
              <span className="categories-nav-text">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
