import { useRef, useState } from "react";

const CartForm = (props) => {
  const amountRef=useRef();
const[isvalidInput,setIsvalidInput]=useState(true)
  const amountHandler=(e)=>{
    e.preventDefault();
    const enteredAmountRef=amountRef.current.value;
    const enteredAmountNumber=+enteredAmountRef;
    if(enteredAmountRef.trim().length===0 || enteredAmountNumber<1 || enteredAmountNumber>5){
      setIsvalidInput(false)
      return
    }
  props.onAddCart(enteredAmountNumber);
  }

  return (
    <form className=" flex max-w-lg flex-col items-center">
      <div className="flex gap-3 font-bold  px-4 py-1 ">
        <label htmlFor="amount">Amount</label>
        <input ref={amountRef}  type="number" defaultValue="1" step="1" min="1" max="5" className="max-w-[30px]" id="amount" />
      </div>
      <button onClick={amountHandler} className=" bg-red-800 px-6 py-0 rounded-md text-white">+ Add</button>
    {!isvalidInput && <p>please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default CartForm;
