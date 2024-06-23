"use client";

import ProductList from "@/components/ProductList";
import { useEffect, useState } from "react";
import ContentfulService from "../services/ContentfulService";
import PathnameBar from "@/components/PathnameBar";

export default function Shoes() {
  const [db, setDb] = useState([]);

  useEffect(() => {
    (async () => {
      const newProducts = await ContentfulService.getProductsByCategory(
        "shoes"
      );
      setDb(newProducts);
    })();
  }, []);

  return (
    <div className="px-10 my-20">
      <PathnameBar />
      <ProductList db={db} />
    </div>
  );
}
