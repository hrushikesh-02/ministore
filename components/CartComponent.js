import React from "react";

const CartComponent = (props) => {
  return (
    <div className="flex justify-between items-center ">
      <span>{props.name}</span>
      <span>{props.quantity}</span>
    </div>
  );
};

export default CartComponent;
