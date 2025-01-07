"use client"
import React from "react";
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
interface Props {
  quantity: number;
  maxQuantity : number ; 
}
export const QuantitySelector = ({ quantity ,maxQuantity}: Props) => {
    const [count , setCount] = useState(quantity)
  return (
    <div className="flex items-center  ">
      <button>
        <IoRemoveCircleOutline onClick={()=>count > 1 && setCount(count-1)} size={30}></IoRemoveCircleOutline>
      </button>
      <span className="w-20 mx-3 px-3 bg-gray-200 text-center rounded">{count}</span>
      <button>
        <IoAddCircleOutline onClick={()=>count < maxQuantity && setCount(count+ 1)} size={30}></IoAddCircleOutline>
      </button>
    </div>
  );
};
