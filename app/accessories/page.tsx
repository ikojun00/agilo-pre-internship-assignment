"use client";

import ProductList from "@/components/ProductList";
import { useEffect, useState } from "react";
import ContentfulService from "../services/ContentfulService";

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
    <>
      <ProductList db={db} />
    </>
  );
}
