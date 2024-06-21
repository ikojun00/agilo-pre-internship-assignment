"use client";
import React, { useEffect, useState } from "react";
import CartItem from "../types/interfaces/CartItem";

export default function Cart() {
  const [data, setData] = useState<CartItem[]>([]);

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setData(existingCart);
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
}
