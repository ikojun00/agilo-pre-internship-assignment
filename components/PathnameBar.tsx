import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Next from "./icons/Next";

export default function PathnameBar() {
  const array = usePathname()
    .split("/")
    .filter((item) => item !== "");

  return (
    <div className="flex gap-4 items-center border-b-2 py-4">
      <div>
        <Link href="/">
          <h2 className="text-xl">All Items</h2>
        </Link>
      </div>
      {array.map((item, index) => (
        <div key={index} className="flex items-center gap-4">
          <Next />
          <Link href={`/${array.slice(0, index + 1).join("/")}`}>
            <h2 className=" text-xl  capitalize">{item}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
