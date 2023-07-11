// import React from 'react';
// import shopdata from './data';
// import "./Style.css"

// const Product = () => {
//   const handleAddToCart = (id) => {
//     alert(`Product ID: ${id} added to cart`);
//   };
//   return (
//     <section className="product-list">
//       {shopdata.map((product) => (
//         <div key={product.id} className="product">
//           <div className="product-image">
//             <img src={product.imgurl} alt="Product Image" width="300" />
//           </div>
//           <h2 className="product-name">{product.name}</h2>
//           <p className="product-description">Product Description</p>
//           <p className="product-price">{product.price}</p>
//           <button className="cta-button" onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Product;

// import React from 'react';

// const Product = ({ products }) => {
//   return (
//     <section className="product-list">
//       {products.map((product) => (
//         <div key={product.id} className="product">
//           <div className="product-image">
//             <img src={product.imgurl} alt="Product Image" width="300" />
//           </div>
//           <h2 className="product-name">{product.name}</h2>
//           <p className="product-description">Product Description</p>
//           <p className="product-price">{product.price}</p>
//           <button className="cta-button">Add to Cart</button>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Product;


import React from 'react';

const Product = ({ products, onAddToCart }) => {
  const handleAddToCart = (product) => {
    onAddToCart(product);
  };

  return (
    <section className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <div className="product-image">
            <img src={product.imgurl} alt="Product Image" width="300" />
          </div>
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">Product Description</p>
          <p className="product-price">{product.price}</p>
          <button className="cta-button" onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </section>
  );
};

export default Product;
