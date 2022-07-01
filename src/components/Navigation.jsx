import React from 'react';

function Navigation() {
  const navPages = [
    { name: 'New Reading', link: '#', logo: '' },
    { name: 'Browse', link: '#', logo: '' },
    { name: 'Buy Books', link: '#', logo: '' },
    { name: 'Favourite Books', link: '#', logo: '' },
    { name: 'WishList', link: '#', logo: '' },
    { name: 'History', link: '#', logo: '' },
  ];
  const navLogos = [];
  return (
    <nav className="aside__categories-navigation categories-navigation">
      <ul className="categories-navigation-list">
        <li className="categories-navigation-item">
          <button className="categories-navigation-btn btn-reading">
            <svg
              className="svg-logo"
              height="48px"
              version="1.1"
              viewBox="0 0 48 48"
              width="48px"
              xmlns="http://www.w3.org/2000/svg">
              <g id="Expanded">
                <g>
                  <g>
                    <path d="M23,48.049c-0.147,0-0.294-0.032-0.43-0.097l-21-10C1.222,37.786,1,37.435,1,37.049v-31c0-0.343,0.176-0.662,0.466-0.846     C1.755,5.02,2.12,4.999,2.43,5.146L23,14.941l20.57-9.796c0.31-0.146,0.673-0.126,0.963,0.058C44.824,5.387,45,5.706,45,6.049v31     c0,0.386-0.222,0.737-0.57,0.903l-21,10C23.294,48.017,23.147,48.049,23,48.049z M3,36.417l20,9.524l20-9.524V7.633l-19.57,9.319     c-0.271,0.129-0.588,0.129-0.859,0L3,7.633V36.417z" />
                  </g>
                  <g>
                    <path d="M23,12.204L5.567,3.903C5.068,3.665,4.857,3.068,5.094,2.57c0.238-0.499,0.834-0.708,1.333-0.474L23,9.989l16.573-7.893     c0.5-0.234,1.095-0.025,1.333,0.474c0.237,0.498,0.026,1.095-0.473,1.333L23,12.204z" />
                  </g>
                  <g>
                    <rect height="31" width="2" x="22" y="16.049" />
                  </g>
                </g>
              </g>
            </svg>
            <span className="categories-nav-text">Now Reading</span>
          </button>
        </li>
        <li className="categories-navigation-item">
          <button className="categories-navigation-btn categories-active-btn btn-browse">
            <svg id="browse-logo" className="svg-logo">
              <use href="#world"></use>
            </svg>
            <span className="categories-nav-text">Browse</span>
          </button>
        </li>
        <li className="categories-navigation-item">
          <button className="categories-navigation-btn btn-buy">
            <svg className="svg-logo" id="cart-logo">
              <use href="#cart"></use>
            </svg>
            <span className="categories-nav-text">Buy Books</span>
          </button>
        </li>
        <li className="categories-navigation-item">
          <button className="categories-navigation-btn btn-favourite">
            <svg className="svg-logo" id="star-logo">
              <use href="#star"></use>
            </svg>
            <span className="categories-nav-text">Favourite Books</span>
          </button>
        </li>
        <li className="categories-navigation-item">
          <button className="categories-navigation-btn btn-wishlist">
            <svg className="svg-logo" id="list-logo">
              <use href="#list"></use>
            </svg>
            <span className="categories-nav-text">Wishlist</span>
          </button>
        </li>
        <li className="categories-navigation-item">
          <button className="categories-navigation-btn btn-history">
            <svg className="svg-logo" id="history-logo">
              <use href="#history"></use>
            </svg>
            <span className="categories-nav-text">History</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
