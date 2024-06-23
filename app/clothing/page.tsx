"use client";

import ProductList from "@/components/ProductList";
import ContentfulService from "../services/ContentfulService";
import { useEffect, useState } from "react";
import PathnameBar from "@/components/PathnameBar";

export default function Clothing() {
  const [db, setDb] = useState([]);

  useEffect(() => {
    (async () => {
      const newProducts = await ContentfulService.getProductsByCategory(
        "clothing"
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
