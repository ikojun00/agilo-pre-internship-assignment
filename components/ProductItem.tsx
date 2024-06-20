import Link from "next/link";
import React from "react";
import handleItem from "@/app/types/interfaces/HandleItem";
import Carousel from "./Carousel";

export default function ProductItem(item: handleItem) {
  return (
    <>
      <Carousel {...item} />
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
