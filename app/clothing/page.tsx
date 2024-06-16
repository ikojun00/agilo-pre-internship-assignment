"use client";

import ProductList from "@/components/ProductList";
import ContentfulService from "../services/ContentfulService";
import { useEffect, useState } from "react";

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
    <>
      <ProductList db={db} />
    </>
  );
}
