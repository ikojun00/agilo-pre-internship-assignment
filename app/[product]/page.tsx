"use client";

import React, { useState } from "react";
import Image from "next/image";
import Plus from "@/components/icons/Plus";
import Minus from "@/components/icons/Minus";
import Previous from "@/components/icons/Previous";
import Next from "@/components/icons/Next";

const object = {
  id: 8,
  name: "Graphic Tee",
  price: 24.99,
  colorVariants: ["Black", "White", "Red"],
  shortDescription: "A fun and stylish graphic tee for everyday wear.",
  image: [
    "/shorts.jpg",
    "/nonfiction.webp",
    "/romance.webp",
    "/nonfiction.webp",
  ],
};

export default function Product() {
  const [data, setData] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="flex w-full">
      <div className="flex flex-col gap-8 w-1/2 h-[calc(100vh-5rem)] justify-center items-center bg-slate-100">
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <button
              onClick={() =>
                setCurrentSlide(
                  (currentSlide + object.image.length - 1) % object.image.length
                )
              }
              className="p-4"
            >
              <Previous />
            </button>
          </div>
          {object.image.map((item, index) => (
            <div
              key={index}
              className={`${index === currentSlide ? "flex w-80" : "hidden"}`}
            >
              <Image
                src={item}
                alt="bla"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
          <div className="flex items-center">
            <button
              onClick={() =>
                setCurrentSlide((currentSlide + 1) % object.image.length)
              }
              className="p-4"
            >
              <Next />
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          {object.image.map((_, index) => (
            <div key={index}>
              <button
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-black" : "bg-slate-500"
                }`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-1/2 justify-center items-center">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl">{object.name}</h1>
              <h3 className="text-xl">{object.price}€</h3>
            </div>
            <p>{object.shortDescription}</p>
          </div>
          <div className="flex gap-4 justify-between">
            <div className="flex gap-2 items-center">
              <button onClick={() => data - 1 > 0 && setData(data - 1)}>
                <Minus />
              </button>
              <div className="flex justify-center w-10 h-10 bg-slate-100 items-center">
                {data}
              </div>
              <button onClick={() => setData(data + 1)}>
                <Plus />
              </button>
            </div>
            <button className="p-4 bg-black text-white">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
