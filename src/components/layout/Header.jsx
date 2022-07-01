import React from 'react';
import UserHeader from '../User/UserHeader';

function Header() {
  return (
    <header className="header">
      <div className="header__links">
        <ul className="header__links__list">
          <li className="header__links__list-item">
            <a href="#" className="header-link">
              Help Center
            </a>
          </li>
          <li className="header__links__list-item">
            <a href="#" className="header-link">
              Our Support
            </a>
          </li>
        </ul>
        <UserHeader />
      </div>
    </header>
  );
}

export default Header;
