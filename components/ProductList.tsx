import Link from "next/link";
import React from "react";
import Image from "next/image";

type handleDB = {
  db: handleItem[];
};

type handleItem = {
  id: number;
  name: string;
  price: number;
  colorVariants: string[];
  shortDescription: string;
  image: string;
};

export default function ProductList({ db }: handleDB) {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-20 px-10 mt-10">
      {db.map((item) => (
        <div className="flex gap-4 md:flex-col sm:items-center" key={item.id}>
          <Link href={`${item.id}`}>
            <div className="bg-slate-100 p-4">
              <Image
                src="/shorts.jpg"
                alt="bla"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <h3>{item.name}</h3>
            <h2>{item.price}€</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
