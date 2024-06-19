"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Plus from "@/components/icons/Plus";
import Minus from "@/components/icons/Minus";
import Previous from "@/components/icons/Previous";
import Next from "@/components/icons/Next";
import ContentfulService from "../services/ContentfulService";
import { usePathname } from "next/navigation";
import NotFound from "../not-found";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  desc: string;
  image: { url: string }[];
};

type Color = {
  id: number;
  color: string;
};

const colorMap: { [key: string]: string } = {
  white: "bg-white",
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
};

export default function Product() {
  const [data, setData] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [product, setProduct] = useState<Product | null>();
  const [colors, setColors] = useState<Color[]>([]);
  const pathname = usePathname().replace("/", "");

  useEffect(() => {
    (async () => {
      const newProduct = await ContentfulService.getProductById(
        parseInt(pathname)
      );
      if (!newProduct) {
        setProduct(null);
      } else {
        const newColors = await ContentfulService.getAllColorVariants(
          newProduct.name
        );
        setProduct(newProduct);
        setColors(newColors);
      }
    })();
  }, [pathname]);

  if (product === null) {
    return <NotFound />;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-full">
      <div className="flex flex-col gap-8 w-1/2 h-[calc(100vh-5rem)] justify-center items-center bg-slate-100">
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <button
              onClick={() =>
                setCurrentSlide(
                  (currentSlide + product.image.length - 1) %
                    product.image.length
                )
              }
              className="p-4"
            >
              <Previous />
            </button>
          </div>
          {product.image.map((item, index) => (
            <div
              key={index}
              className={`${index === currentSlide ? "flex w-80" : "hidden"}`}
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
          <div className="flex items-center">
            <button
              onClick={() =>
                setCurrentSlide((currentSlide + 1) % product.image.length)
              }
              className="p-4"
            >
              <Next />
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          {product.image.map((_, index) => (
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
              <h1 className="text-4xl">{product.name}</h1>
              <h3 className="text-xl">{product.price}€</h3>
            </div>
            <p>{product.desc}</p>
          </div>
          <div className="flex gap-4">
            {colors.map((item, index) => (
              <div key={index}>
                <Link href={`${item.id}`}>
                  <button
                    className={`w-8 h-8 rounded-full border-solid border-2 ${
                      colorMap[item.color]
                    }`}
                  ></button>
                </Link>
              </div>
            ))}
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
