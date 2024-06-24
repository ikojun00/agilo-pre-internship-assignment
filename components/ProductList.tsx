import React from "react";
import ProductItem from "./ProductItem";
import ProductInterface from "@/app/types/interfaces/ProductInterface";

interface ProductListProps {
  products: ProductInterface[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-20 mt-10">
      {products.map((item: ProductInterface) => (
        <div className="flex gap-4 md:flex-col" key={item.id}>
          <ProductItem {...item} />
        </div>
      ))}
    </div>
  );
}
