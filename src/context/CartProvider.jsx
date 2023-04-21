import React, { useReducer } from "react";
import CartContext from "./cart-context";
import Cookies from "js-cookie";

const defaultCartState = {
  items: Cookies.get("items") ? JSON.parse(Cookies.get("items")) : [],
  totalAmount: Cookies.get("totalAmount")
    ? JSON.parse(Cookies.get("totalAmount")) : 0,

  // items: localStorage.getItem("items")
  //   ? JSON.parse(localStorage.getItem("items"))
  //   : [],
  // totalAmount: localStorage.getItem("totalAmount")
  // ? JSON.parse(localStorage.getItem("totalAmount"))
  // : 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updateItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
   
    // SET LOCAL STORAGE
    Cookies.set("items", JSON.stringify(updatedItems))
    Cookies.set("totalAmount", JSON.stringify(updatedTotalAmount))
    // localStorage.setItem("items", JSON.stringify(updatedItems));
    // localStorage.setItem("totalAmount", JSON.stringify(updatedTotalAmount));

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const exisitingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - exisitingCartItem.price;
    let updatedItems;
    if (exisitingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...exisitingCartItem,
        amount: exisitingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

     // SET LOCAL STORAGE
     Cookies.set("items", JSON.stringify(updatedItems))
     Cookies.set("totalAmount", JSON.stringify(updatedTotalAmount))

    //  localStorage.setItem("items", JSON.stringify(updatedItems));
    //  localStorage.setItem("totalAmount", JSON.stringify(updatedTotalAmount));
 
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };
  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
