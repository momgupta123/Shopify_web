// import React from 'react';
// import Header from './Header';
// import Product from './Product';
// import Footer from './Footer';

// import './Style.css';

// const Shopify = () => {
//   return (
//     <div>
//       <Header />
//       <Product />
//       <Footer />
//     </div>
//   );
// };

// export default Shopify;
// import React, { useState } from 'react';
// import Header from './Header';
// import Product from './Product';
// import Footer from './Footer';
// import shopdata from './data';

// import './Style.css';

// const Shopify = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState(shopdata);

//   const handleSearch = (searchTerm) => {
//     setSearchTerm(searchTerm);
//     const filtered = shopdata.filter((product) =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   };

//   return (
//     <div>
//       <Header onSearch={handleSearch} />
//       <Product products={filteredProducts} />
//       <Footer />
//     </div>
//   );
// };

// export default Shopify;



// import React, { useState } from 'react';
// import Header from './Header';
// import Product from './Product';
// import Footer from './Footer';
// import shopdata from './data';
// import Cart from './Cart';
// import './Style.css';

// const Shopify = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState(shopdata);
//   const [cartItems, setCartItems] = useState([]);

//   const handleSearch = (searchTerm) => {
//     setSearchTerm(searchTerm);
//     const filtered = shopdata.filter((product) =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   };

//   const handleAddToCart = (product) => {
//     setCartItems((prevCartItems) => [...prevCartItems, product]);
//   };

//   return (
//     <div>
//       <Header onSearch={handleSearch} cartItems={cartItems} />
// <Product products={filteredProducts} onAddToCart={handleAddToCart} />

//       <Product products={filteredProducts} onAddToCart={handleAddToCart} />
//       <Cart items={cartItems} />
//       <Footer />
//     </div>
//   );
// };

// export default Shopify;

// import React, { useState } from 'react';
// import Header from './Header';
// import Product from './Product';
// import Footer from './Footer';
// import shopdata from './data';
// import Cart from './Cart';



// 

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Product from './Product';
import Footer from './Footer';
import shopdata from './data';
import Cart from './Cart';
import './Style.css';

const Shopify = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(shopdata);
  const [cartItems, setCartItems] = useState([]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filtered = shopdata.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <Router>
      <div>
        <Header onSearch={handleSearch} cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Product products={filteredProducts} onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart items={cartItems} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Shopify;




