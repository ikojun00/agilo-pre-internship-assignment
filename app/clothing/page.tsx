"use client";

import ProductList from "@/components/ProductList";
import ContentfulService from "../services/ContentfulService";
import { useEffect, useState } from "react";
import PathnameBar from "@/components/PathnameBar";
import Spinner from "@/components/icons/Spinner";
import ProductInterface from "../types/interfaces/ProductInterface";

export default function Clothing() {
  const [products, setProducts] = useState<ProductInterface[]>();

  useEffect(() => {
    (async () => {
      const newProducts = await ContentfulService.getProductsByCategory(
        "clothing"
      );
      setProducts(newProducts);
    })();
  }, []);

  if (!products) {
    return (
      <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="px-10 my-10">
      <PathnameBar />
      <ProductList products={products} />
    </div>
  );
}
