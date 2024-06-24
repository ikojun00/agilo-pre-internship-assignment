"use client";
import React, { useState } from "react";
import Previous from "./icons/Previous";
import Link from "next/link";
import Image from "next/image";
import Next from "@/components/icons/Next";
import ProductInterface from "@/app/types/interfaces/ProductInterface";

export default function Carousel(item: ProductInterface) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
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
            ? "absolute top-1/2 transform -translate-y-1/2 left-0 bg-white rounded-r-3xl p-3 md:p-4"
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
              alt="Product Image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </Link>
      <button
        onClick={() => setCurrentSlide((currentSlide + 1) % item.image.length)}
        className={`${
          isHovered === true && currentSlide !== item.image.length - 1
            ? "absolute top-1/2 transform -translate-y-1/2 right-0 bg-white rounded-l-3xl p-3 md:p-4"
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
                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                  index === currentSlide ? "bg-black" : "bg-slate-400"
                }`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            </div>
          ))}
      </div>
    </div>
  );
}
