import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const onAdd = (product, quantity) => {
    //check if the product is already in cart
    const checkProductInCart = cartItems.find(
      (item) => item._id === product.id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    // If the product I add is equal to one of my items already present in my cart (panier) then I update it in price and quantity.
    if (checkProductInCart) {
      const updateCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updateCartItems);

      // else i just update my cart
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} ajouté au panier.`);
  };

  // increase the quantity
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  // decrease the quantity
  const decQty = () => {
    setQty((prevQty) => {
      // if the quantity is less than 1 then I return 1 because I can't have 0 in quantity
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        setShowCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
