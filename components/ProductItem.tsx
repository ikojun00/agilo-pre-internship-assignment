"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Previous from "@/components/icons/Previous";
import Next from "@/components/icons/Next";

type handleItem = {
  id: number;
  name: string;
  price: number;
  colorVariants: string[];
  shortDescription: string;
  image: string[];
};

export default function ProductItem(item: handleItem) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <>
      <div
        className="flex py-8 flex-col gap-4 bg-slate-100"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div
          className={`${
            isHovered === false ? "px-12" : "flex justify-between w-full"
          }`}
        >
          <div
            className={`${isHovered === true ? "relative top-1/2" : "hidden"}`}
          >
            <button
              onClick={() =>
                setCurrentSlide(
                  (currentSlide + item.image.length - 1) % item.image.length
                )
              }
              className="p-4"
            >
              <Previous />
            </button>
          </div>
          {item.image.map((item, index) => (
            <div
              key={index}
              className={`${index === currentSlide ? "flex" : "hidden"}`}
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
          <div
            className={`${isHovered === true ? "relative top-1/2" : "hidden"}`}
          >
            <button
              onClick={() =>
                setCurrentSlide((currentSlide + 1) % item.image.length)
              }
              className="p-4"
            >
              <Next />
            </button>
          </div>
        </div>
        {/*<div
          className={`${isHovered === true ? "relative flex gap-4" : "hidden"}`}
        >
          {item.image.map((_, index) => (
            <div key={index}>
              <button
                className={`w-2 h-2 rounded-full ${
                  index === currentSlide ? "bg-black" : "bg-slate-500"
                }`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            </div>
          ))}
        </div>*/}
      </div>
      <Link href={`${item.id}`}>
        <h3>{item.name}</h3>
        <h2>{item.price}€</h2>
      </Link>
    </>
  );
}
