import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import CartContext from "../context/cart-context";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className="flex flex-col gap-4">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <div className="mx-4">
      <div className="max-w-[500px] mx-auto  bg-white rounded-md px-2 py-4 relative top-28  ">
        {cartItems}
        <div className="flex items-center justify-between p-3">
          <span className="font-bold md:text-xl">Total Amount</span>
          <span className="font-bold md:text-xl">{totalAmount}</span>
        </div>
        <div className="flex justify-between items-center">
          <Link
            className=" rounded-md text-red-800 px-3 py-1 border border-red-400"
            to={"/"}
          >
            Back To Home
          </Link>
          <button className="bg-red-800 px-3 text-white py-1 rounded-md">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
