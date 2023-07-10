import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Product = (props) => {
  const dispatch = useDispatch();

  let cart = useSelector((state) => state.items);

  const handleAdd = () => {
    let tempArr = [...cart];
    tempArr[props.id] += 1;
    dispatch({ type: "SET_CART", payload: tempArr });
  };

  return (
    <div
      className="bg-slate-100 w-full h-[850px] rounded-xl flex flex-col shadow-xl"
      key={props.id}
    >
      <div className="p-3 border-b-2 h-[60px] truncate">{props.name}</div>
      <div className="m-3 border-b-2 relative min-h-[400px]">
        <Image src={props.imgURL} fill alt="img" />
      </div>
      <div className="p-3 h-[130px] line-clamp-4">{props.desc}</div>
      <div className="p-3 m-3 bg-white rounded-xl mt-auto flex items-center justify-center">
        {props.price}$
      </div>
      <button
        onClick={handleAdd}
        className="p-3 m-3 bg-orange-400 rounded-xl flex items-center justify-center"
      >
        add {!cart[props.id] ? "" : `x${cart[props.id]}`}
      </button>
    </div>
  );
};

export default Product;
