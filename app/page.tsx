"use client";

import ProductList from "@/components/ProductList";
import { useEffect, useState } from "react";
import ContentfulService from "./services/ContentfulService";

export default function Home() {
  const [db, setDb] = useState([]);

  useEffect(() => {
    (async () => {
      const newProducts = await ContentfulService.getAllProducts();
      setDb(newProducts);
    })();
  }, []);

  return (
    <>
      <ProductList db={db} />
    </>
  );
}
