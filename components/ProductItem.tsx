"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Previous from "@/components/icons/Previous";
import Next from "@/components/icons/Next";
import handleItem from "@/app/types/interfaces/HandleItem";

export default function ProductItem(item: handleItem) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(true);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <>
      <div
        className="relative flex flex-col bg-slate-100"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <button
          onClick={() =>
            setCurrentSlide(
              (currentSlide + item.image.length - 1) % item.image.length
            )
          }
          className={`${
            isHovered === true && currentSlide !== 0
              ? "absolute top-1/2 transform -translate-y-1/2 left-0 bg-white rounded-r-3xl p-4"
              : "hidden"
          }`}
        >
          <Previous />
        </button>
        <Link href={`${item.id}`}>
          {item.image.map((item, index) => (
            <div
              key={index}
              className={`${index === currentSlide ? "flex" : "hidden"}`}
            >
              <Image
                src={item.url}
                alt="bla"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </Link>
        <button
          onClick={() =>
            setCurrentSlide((currentSlide + 1) % item.image.length)
          }
          className={`${
            isHovered === true && currentSlide !== item.image.length - 1
              ? "absolute top-1/2 transform -translate-y-1/2 right-0 bg-white rounded-l-3xl p-4"
              : "hidden"
          }`}
        >
          <Next />
        </button>
        <div
          className={`${
            isHovered === true
              ? "absolute flex gap-4 bottom-1 left-1/2 transform -translate-x-1/2 bg-white px-1 rounded-lg"
              : "hidden"
          }`}
        >
          {item.image.length > 1 &&
            item.image.map((_, index) => (
              <div key={index}>
                <button
                  className={`w-2 h-2 rounded-full ${
                    index === currentSlide ? "bg-black" : "bg-slate-400"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              </div>
            ))}
        </div>
      </div>

      <Link href={`${item.id}`}>
        <div className="pl-1">
          <h3 className="text-xl">{item.name}</h3>
          <div className="flex gap-4 items-center">
            <h2
              className={`text-lg ${
                item.oldPrice ? "text-red-500" : "text-black"
              }`}
            >
              {item.price}€
            </h2>
            {item.oldPrice !== null && (
              <h2 className="line-through">{item.oldPrice}€</h2>
            )}
          </div>
        </div>
      </Link>
    </>
  );
}
