import React from 'react';

import userImage from '../../assets/images/img/male-acc.jpg';

function UserHeader() {
  return (
    <div className="header__acc">
      <img src={userImage} alt="male-image" className="header__acc-image" />
      <p className="header__acc-name">John Doe</p>
      <button className="header__acc-btn btn">
        <svg className="svg-logo acc-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48 48 141.13 48 256s93.13 208 208 208zm-96-270.63l96 96 96-96L374.63 216 256 334.63 137.37 216z" />
        </svg>
      </button>
    </div>
  );
}

export default UserHeader;
