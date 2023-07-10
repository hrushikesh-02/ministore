import React, { useEffect, useState } from "react";
import CheckoutProd from "@/components/CheckoutProd";
import Navbar from "@/components/Navbar";
import { useSelector } from "react-redux";

const index = () => {
  const [productArr, setproductArr] = useState([]);

  let cart = useSelector((state) => state.items);

  useEffect(() => {
    setproductArr(JSON.parse(localStorage.getItem("productArr") || "[]"));
  }, []);

  return (
    <div className="flex flex-col gap-1 h-screen w-screen bg-slate-200 overflow-y-scroll">
      <Navbar productArr={productArr} cart={cart} />
      <div className="text-[5rem] border-b-2 border-black">CheckOut</div>

      {cart.map((cartItem, ind) => {
        if (cartItem == 0) return;
        return (
          <CheckoutProd
            name={productArr[ind - 1]?.title}
            quantity={cartItem}
            price={productArr[ind - 1]?.price}
            key={ind}
          />
        );
      })}
    </div>
  );
};

export default index;
