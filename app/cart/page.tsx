"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CartItem from "../types/interfaces/CartItem";
import Minus from "@/components/icons/Minus";
import Plus from "@/components/icons/Plus";

export default function Cart() {
  const [data, setData] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);

  const changeQuantity = (id: number, num: number, size: string) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    let index = existingCart.findIndex((item: CartItem) => item.id === id);

    if (index !== -1 && existingCart[index].quantity > 0) {
      existingCart[index].quantity += num;
      if (existingCart[index].quantity === 0) {
        existingCart.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(existingCart));
      window.dispatchEvent(new Event("cart"));
    }

    const newData = [...data];
    index = newData.findIndex(
      (item: CartItem) => item.id === id && item.size === size
    );

    if (index !== -1 && newData[index].quantity > 0) {
      newData[index].quantity += num;
      if (newData[index].quantity === 0) {
        newData.splice(index, 1);
      }
    }

    setData(newData);
  };

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setData(existingCart);
  }, []);

  useEffect(() => {
    const calculateTotal = () => {
      const totalPrice = data.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      setTotal(Math.round(totalPrice * 100) / 100);
    };

    calculateTotal();
  }, [data]);

  return (
    <div className="px-10 my-10 flex flex-col gap-16 w-full">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      <div className="flex flex-col gap-4">
        <div className="flex w-full font-semibold border-b-2 pb-2">
          <div className="w-1/6">Image</div>
          <div className="w-1/6">Item</div>
          <div className="w-1/6">Price</div>
          <div className="w-1/6">Size</div>
          <div className="w-1/6">Quantity</div>
          <div className="w-1/6">Total</div>
        </div>

        {data.map((item, index) => (
          <div key={index} className="flex w-full py-2 border-b items-center">
            <div className="w-1/6">
              <Image
                src={item.image}
                alt="Product Image"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "40%", height: "auto" }}
              />
            </div>
            <div className="w-1/6">{item.name}</div>
            <div className="w-1/6">{item.price.toFixed(2)}€</div>
            <div className="w-1/6 capitalize">{item.size}</div>
            <div className="w-1/6 flex gap-6">
              <button onClick={() => changeQuantity(item.id, -1, item.size)}>
                <Minus />
              </button>
              {item.quantity}
              <button onClick={() => changeQuantity(item.id, +1, item.size)}>
                <Plus />
              </button>
            </div>
            <div className="w-1/6">
              {(Math.round(item.quantity * item.price * 100) / 100).toFixed(2)}€
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <h2 className="text-2xl font-bold">Total: {total.toFixed(2)}€</h2>
      </div>
    </div>
  );
}
