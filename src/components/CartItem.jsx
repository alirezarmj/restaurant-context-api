const CartItem = (props) => {

  return (
    <div className="sm:flex sm:justify-between mx-auto sm:items-center sm:w-[80%] w-[80%]  border-b-2 border-slate-300 border-spacing-y-32 gap-4 pb-2">
      <div className="flex flex-col sm:w-[40%] ">
        <p className="font-bold sm:text-left text-center">{props.name}</p>
        <div className="flex justify-between">
          <p>${props.price}</p>
          <p>x {props.amount}</p>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <button onClick={props.onRemove} className="rounded-md hover:bg-red-500 hover:text-white px-4 py-1 text-red-300 border border-red-200">-</button>
        <button onClick={props.onAdd} className="rounded-md hover:bg-red-500 hover:text-white px-4 py-1 text-red-300 border border-red-200">+</button>
      </div>
    </div>
  );
};

export default CartItem;
