"use client";

import ProductList from "@/components/ProductList";
import { useEffect, useState } from "react";
import ContentfulService from "../services/ContentfulService";
import PathnameBar from "@/components/PathnameBar";
import Spinner from "@/components/icons/Spinner";
import ProductInterface from "../types/interfaces/ProductInterface";

export default function Accessories() {
  const [products, setProducts] = useState<ProductInterface[]>();

  useEffect(() => {
    (async () => {
      const newProducts = await ContentfulService.getProductsByCategory(
        "accessories"
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
