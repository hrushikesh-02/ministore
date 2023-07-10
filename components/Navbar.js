import React from "react";
import { useEffect, useState } from "react";
import CartComponent from "./CartComponent";
import Link from "next/link";

const navbar = (props) => {
  const total = props.cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-3">
        <Link href="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MyShop
          </span>
        </Link>

        {/* <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-18" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {props.cart.map((cartItem, ind) => {
                  if (cartItem == 0) return;

                  return (
                    <CartComponent
                      name={props.productArr[ind - 1]?.title}
                      quantity={cartItem}
                      key={ind}
                    />
                  );
                })}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="border-1 p-2 rounded-xl"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div> */}

        <div className="w-full  md:w-auto" id="navbar-default">
          <Link
            href="/checkout"
            className="block py-2 pl-3 pr-4 text-black border-1 p-3 rounded-xl bg-blue-500 "
          >
            Cart &nbsp;
            <span className="text-white">{total}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
