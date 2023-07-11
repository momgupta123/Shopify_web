// import React, { useState } from 'react';
// import './Style.css'
// const Header = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (e) => {
//     e.preventDefault();
//     onSearch(searchTerm);
//   };

//   return (
//     <header>
//       <h1>Welcome to OtakuPrint!</h1>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Search products"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from 'react';
import { FaShoppingCart, FaSearch, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ onSearch, cartItems }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header>
      <Link to="/" className="home-icon">
        <FaHome />
      </Link>
      <h1 className="welcome">Welcome to OtakuPrint!</h1>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-button">
          <FaSearch />
        </button>
      </form>
      <Link to="/cart" className="cart-icon">
        <FaShoppingCart />
        <span className="cart-item-count">{cartItems.length}</span>
      </Link>
    </header>
  );
};

export default Header;




