"use client";

import ProductList from "@/components/ProductList";
import { useEffect, useState } from "react";
import ContentfulService from "../services/ContentfulService";

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
    <>
      <ProductList db={db} />
    </>
  );
}
