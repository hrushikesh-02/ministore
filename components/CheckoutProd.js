import React from "react";

const CheckoutProd = (props) => {
  return (
    <div className="bg-slate-50 m-1 rounded-xl p-3 flex justify-between items-center">
      <span>
        {props.name}
        &nbsp;&nbsp;&nbsp;x{props.quantity}
      </span>
      <div>{props.price * props.quantity}</div>
    </div>
  );
};

export default CheckoutProd;
