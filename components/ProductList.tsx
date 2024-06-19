import React from "react";
import ProductItem from "./ProductItem";
import handleItem from "@/app/types/interfaces/HandleItem";

type handleDB = {
  db: handleItem[];
};

export default function ProductList({ db }: handleDB) {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-20 mt-10">
      {db.map((item) => (
        <div className="flex gap-4 md:flex-col" key={item.id}>
          <ProductItem {...item} />
        </div>
      ))}
    </div>
  );
}
