"use client";

import ProductList from "@/components/ProductList";
import { useEffect, useState } from "react";
import ContentfulService from "./services/ContentfulService";
import PathnameBar from "@/components/PathnameBar";

export default function Home() {
  const [db, setDb] = useState([]);

  useEffect(() => {
    (async () => {
      const newProducts = await ContentfulService.getAllProducts();
      setDb(newProducts);
    })();
  }, []);

  return (
    <div className="px-10 my-10">
      <PathnameBar />
      <ProductList db={db} />
    </div>
  );
}
