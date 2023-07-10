import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import Product from "@/components/Product";
import { useSelector } from "react-redux";

export default function Home() {
  const [productArr, setProductArr] = useState([]);

  let cart = useSelector((state) => state.items);

  useEffect(() => {
    localStorage.setItem("productArr", JSON.stringify(productArr));
  }, [productArr]);

  useEffect(() => {
    const url = "https://fakestoreapi.com/products/";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProductArr(json);
      } catch (error) {
        console.log("error fetching files from free store service", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-xl flex flex-col w-full  ">
      <Navbar productArr={productArr} cart={cart} />
      <div className="bg-slate-200 h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 p-4">
        {productArr.map((item, ind) => {
          return (
            <Product
              key={item.id}
              name={item.title}
              id={item.id}
              imgURL={item.image}
              price={item.price}
              desc={item.description}
              cart={cart}
            />
          );
        })}
      </div>
    </div>
  );
}
