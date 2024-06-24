import Link from "next/link";
import React from "react";
import Carousel from "./Carousel";
import ProductInterface from "@/app/types/interfaces/ProductInterface";

export default function ProductItem(item: ProductInterface) {
  return (
    <>
      <Carousel {...item} />
      <Link href={`${item.id}`}>
        <div className="pl-1">
          <h3 className="text-sm md:text-base">{item.name}</h3>
          <div className="flex gap-4 items-center">
            <h2
              className={`text-sm md:text-base ${
                item.oldPrice ? "text-red-500" : "text-black"
              }`}
            >
              {item.price}€
            </h2>
            {item.oldPrice !== null && (
              <h2 className="text-xs md:text-sm line-through text-slate-600">
                {item.oldPrice}€
              </h2>
            )}
          </div>
        </div>
      </Link>
    </>
  );
}
