// import React from 'react';
// import './Style.css'

// const Cart = ({ items }) => {
//   const totalPrice = items.reduce((total, item) => total + item.price, 0);

//   return (
//     <div className="cart">
//       <h2>Cart</h2>
//       {items.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           <ul>
//             {items.map((item) => (
//               <li key={item.id}>
//                 <img src={item.imgurl} alt={item.name} />
//                 <div>
//                   <h3>{item.name}</h3>
//                   <p>{item.price}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <p className="total-price">Total Price: {totalPrice}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
import React, { useState } from 'react';
import './Cart.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Cart = ({ items }) => {
  const [itemQuantities, setItemQuantities] = useState({});

  const handleIncrease = (itemId) => {
    setItemQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      updatedQuantities[itemId] = (updatedQuantities[itemId] || 0) + 1;
      return updatedQuantities;
    });
  };

  const handleDecrease = (itemId) => {
    setItemQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      if (updatedQuantities[itemId] && updatedQuantities[itemId] > 0) {
        updatedQuantities[itemId] -= 1;
      }
      return updatedQuantities;
    });
  };

  const handleAddToCart = (item) => {
    setItemQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      updatedQuantities[item.id] = (updatedQuantities[item.id] || 0) + 1;
      return updatedQuantities;
    });
  };

  const getTotalPrice = (item) => {
    const itemPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
    const quantity = itemQuantities[item.id] || 0;
    return (itemPrice * quantity).toFixed(2);
  };

  const totalPrice = items.reduce(
    (total, item) => total + parseFloat(getTotalPrice(item)),
    0
  );

  return (
    <div className="cart">
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {items.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.imgurl} alt={item.name} className="cart-item-image" />
                <div className="quantity-controls">
                  <button className="quantity-btn plus-icon-button" onClick={() => handleDecrease(item.id)}>
                    <FaMinus />
                  </button>
                  <span className="quantity">{itemQuantities[item.id] || 0}</span>
                  <button className="quantity-btn plus-icon-button" onClick={() => handleIncrease(item.id)}>
                    <FaPlus />
                  </button>
                </div>
                <div>
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">Price: ₹{item.price}</p>
                  <p className="cart-item-total-price">Total Price: ₹{getTotalPrice(item)}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className="add-item-btn" onClick={() => handleAddToCart(items[0])}>
            
          </button>
          <p className="cart-total-price">Total Price: ₹{totalPrice.toFixed(2)}</p>
          <button className="buy-now-button">Buy Now</button>
        </div>
      )}
    </div>
  );
};

export default Cart;




// import React from 'react';
// import { FaPlus, FaMinus } from 'react-icons/fa';

// const Cart = ({ items }) => {
//   const handleIncreaseQuantity = (itemId) => {
//     const updatedItems = items.map((item) => {
//       if (item.id === itemId) {
//         return { ...item, quantity: item.quantity + 1 };
//       }
//       return item;
//     });
//     setCartItems(updatedItems);
//   };

//   const handleDecreaseQuantity = (itemId) => {
//     const updatedItems = items.map((item) => {
//       if (item.id === itemId && item.quantity > 1) {
//         return { ...item, quantity: item.quantity - 1 };
//       }
//       return item;
//     });
//     setCartItems(updatedItems);
//   };

//   const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className="cart">
//       <h2>Cart</h2>
//       {items.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           <ul>
//             {items.map((item) => (
//               <li key={item.id} className="cart-item">
//                 <img src={item.imgurl} alt={item.name} className="cart-item-image" />
//                 <div>
//                   <h3 className="cart-item-name">{item.name}</h3>
//                   <div className="quantity-controls">
//                     <button className="quantity-btn" onClick={() => handleDecreaseQuantity(item.id)}>
//                       <FaMinus />
//                     </button>
//                     <span className="quantity">{item.quantity}</span>
//                     <button className="quantity-btn" onClick={() => handleIncreaseQuantity(item.id)}>
//                       <FaPlus />
//                     </button>
//                   </div>
//                   <p className="cart-item-price">Price: ₹{item.price}</p>
//                   <p className="cart-item-total-price">Total Price: ₹{item.price * item.quantity}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <p className="cart-total-price">Total Price: ₹{totalPrice}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;




// import React from 'react';
// import './Cart.css';
// import { FaPlus, FaMinus } from 'react-icons/fa';

// // import React from 'react';

// const Cart = ({ items }) => {
//     const totalPrice = items.reduce((total, item) => total + parseFloat(item.price.replace(/[^0-9.-]+/g, '')), 0);


//   return (
//     <div className="cart">
//       <h2>Cart</h2>
//       {items.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           <ul>
//             {items.map((item) => (
//               <li key={item.id} className="cart-item">
//                 <img src={item.imgurl} alt={item.name} className="cart-item-image" />
//                 <div>
//                   <h3 className="cart-item-name">{item.name}</h3>

//                   <p className="cart-item-price">{item.price}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <p className="cart-total-price">Total Price: ₹{totalPrice.toFixed(2)}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;








