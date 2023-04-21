import { useContext, useEffect, useState } from "react";

import CartContext from "../context/cart-context";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";

const Navbar = () => {
  const cartCtx = useContext(CartContext);
  const{items}=cartCtx;
  const [btnIsHighlited, setBtnIsHilighted] = useState(false);
  const btnClass = `${btnIsHighlited ? "animate-bump" : ""}`;

  useEffect(() => {
if(items.length===0){
  return
}
setBtnIsHilighted(true);
const timer=setTimeout(()=>{
  setBtnIsHilighted(false);
},300);
return ()=>{
  clearTimeout(timer)
}

  }, [items]);

  const numberofCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <nav className="w-full h-[80px] mx-auto text-center  bg-red-800 text-white px-4">
      <div className="max-w-[1000px]  h-full mx-auto inline-block  sm:flex sm:justify-between sm:items-center">
        <h1 className="text-2xl font-bold ">ReactMeals</h1>
        <Link to={"/cart"} className={btnClass}>
          <CartButton numberofCartItems={numberofCartItems} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
