import { useContext } from "react";
import CartForm from "./CartForm";
import CartContext from "../context/cart-context";

const MealItem = ({ meal }) => {
  const { name, description, price, id } = meal;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      price,
      description,
      amount,
    });
  };

  return (
    <div className="sm:flex sm:justify-between sm:items-center  border-b-2 border-slate-100 px-4 py-2">
      <div className="text-center ">
        <p className="font-bold">{name}</p>
        <p>{description}</p>
        <p className="text-red-800">${price}</p>
      </div>
      <div>
        <CartForm onAddCart={addToCartHandler} />
      </div>
    </div>
  );
};

export default MealItem;
