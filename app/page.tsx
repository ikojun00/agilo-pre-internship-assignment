"use client";

import ProductList from "@/components/ProductList";
import { useEffect, useState } from "react";
import ContentfulService from "./services/ContentfulService";
import PathnameBar from "@/components/PathnameBar";
import Spinner from "@/components/icons/Spinner";
import ProductItem from "./types/interfaces/ProductInterface";

export default function Home() {
  const [products, setProducts] = useState<ProductItem[]>();

  useEffect(() => {
    (async () => {
      const newProducts = await ContentfulService.getAllProducts();
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
