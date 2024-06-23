"use client";
import React, { useEffect, useState } from "react";
import Plus from "@/components/icons/Plus";
import Minus from "@/components/icons/Minus";
import ContentfulService from "../services/ContentfulService";
import { usePathname } from "next/navigation";
import NotFound from "../not-found";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import CartItem from "../types/interfaces/CartItem";

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  desc: string;
  category: string;
  image: { url: string }[];
};

type Color = {
  id: number;
  color: string;
};

const colorMap: { [key: string]: string } = {
  black: "bg-black",
  white: "bg-white",
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
};

export default function Product() {
  const [data, setData] = useState(1);
  const [product, setProduct] = useState<Product | null>();
  const [colors, setColors] = useState<Color[]>([]);
  const pathname = usePathname().replace("/", "");
  const [selectedSize, setSelectedSize] = useState<string>("");

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

  const handleAddToCart = () => {
    if (product) {
      if (selectedSize === "" && product.category !== "accessories") {
        alert("You need to select size!");
        return;
      }
      const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: data,
        size: selectedSize,
        image: product.image[0]?.url || "",
      };

      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
      const index = existingCart.findIndex(
        (item: CartItem) =>
          item.id === cartItem.id && item.size === cartItem.size
      );

      if (index !== -1) {
        existingCart[index].quantity += cartItem.quantity;
      } else {
        existingCart.push(cartItem);
      }

      localStorage.setItem("cart", JSON.stringify(existingCart));
      window.dispatchEvent(new Event("cart"));
    }
  };

  if (product === null) {
    return <NotFound />;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-10 flex flex-col gap-20 lg:justify-between py-10 lg:items-center lg:flex-row lg:h-[calc(100vh-7rem)]">
      <div className="lg:w-1/2 xl:w-1/3">
        <Carousel {...product} />
      </div>
      <div className="lg:w-1/2 xl:w-2/3">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl md:text-2xl">{product.name}</h1>
              <div className="flex gap-4 items-end">
                <h2
                  className={`text-base md:text-lg ${
                    product.oldPrice ? "text-red-500" : "text-black"
                  }`}
                >
                  {product.price}€
                </h2>
                {product.oldPrice !== null && (
                  <h2 className="text-sm md:text-base line-through text-slate-600">
                    {product.oldPrice}€
                  </h2>
                )}
              </div>
            </div>
            <h3 className="text-sm md:text-base">{product.desc}</h3>
          </div>
          <div className="flex flex-col md:flex-row gap-14 md:gap-28">
            <div className="flex flex-col gap-4">
              <h2 className="text-xs md:text-sm">Color variants</h2>
              <div className="flex gap-4">
                {colors.map((item, index) => (
                  <div key={index}>
                    <Link href={`${item.id}`}>
                      <button
                        className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-solid border-2 ${
                          colorMap[item.color]
                        }`}
                      ></button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {product.category !== "accessories" && (
              <div className="flex flex-col gap-4">
                <h2 className="text-xs md:text-sm">Size</h2>
                {product.category === "shoes" ? (
                  <select
                    className="p-2 border border-slate-400 rounded-md"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    <option value="" disabled>
                      Select size
                    </option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                  </select>
                ) : (
                  <select
                    className="text-xs md:text-sm p-2 border border-slate-400 rounded-md"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    <option value="" disabled>
                      Select size
                    </option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                )}
              </div>
            )}

            <div className="flex flex-col gap-4">
              <h2 className="text-xs md:text-sm">Quantity</h2>
              <div className="flex gap-2 items-center">
                <button onClick={() => data - 1 > 0 && setData(data - 1)}>
                  <Minus />
                </button>
                <div className="text-xs md:text-sm flex justify-center w-10 h-10 items-center">
                  {data}
                </div>
                <button onClick={() => setData(data + 1)}>
                  <Plus />
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              className="text-xs md:text-sm p-4 bg-black text-white"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
