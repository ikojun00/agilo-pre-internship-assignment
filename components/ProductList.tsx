import React from "react";
import ProductItem from "./ProductItem";

type handleDB = {
  db: handleItem[];
};

type handleItem = {
  id: number;
  name: string;
  price: number;
  colorVariants: string[];
  shortDescription: string;
  image: string[];
};

export default function ProductList({ db }: handleDB) {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-20 px-10 mt-10">
      {db.map((item) => (
        <div className="flex gap-4 md:flex-col sm:items-center" key={item.id}>
          <ProductItem {...item} />
        </div>
      ))}
    </div>
  );
}
