"use client";

import ProductList from "@/components/ProductList";
import { useEffect, useState } from "react";
import ContentfulService from "../services/ContentfulService";
import PathnameBar from "@/components/PathnameBar";

export default function Accessories() {
  const [db, setDb] = useState([]);

  useEffect(() => {
    (async () => {
      const newProducts = await ContentfulService.getProductsByCategory(
        "accessories"
      );
      setDb(newProducts);
    })();
  }, []);

  return (
    <div className="px-10 mt-10">
      <PathnameBar />
      <ProductList db={db} />
    </div>
  );
}
