import { BsCartCheckFill } from "react-icons/bs";

const CartButton = (props) => {


    
  return (
    <div className="flex items-center justify-between gap-4 px-10 py-2 bg-gray-700 rounded-xl">
      <BsCartCheckFill className="text-white" size={25} />
      <p className="rounded-full w-6 h-6 bg-red-600 flex justify-center items-center">
        {props.numberofCartItems}
      </p>
    </div>
  );
};

export default CartButton;
