import Image from "next/image";
import Link from "next/link";

const db = [
  {
    id: 1,
    name: "Classic White Tee",
    price: 19.99,
    colorVariants: ["White", "Black", "Gray"],
    shortDescription:
      "A timeless classic, the perfect white t-shirt for any wardrobe.",
    image: "/classic-white-tee.jpg",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 59.99,
    colorVariants: ["Blue", "Black"],
    shortDescription:
      "A versatile denim jacket that adds a stylish layer to any outfit.",
    image: "/denim-jacket.jpg",
  },
  {
    id: 3,
    name: "Summer Floral Dress",
    price: 49.99,
    colorVariants: ["Red", "Blue", "Yellow"],
    shortDescription:
      "A light and breezy dress with a beautiful floral print, perfect for summer days.",
    image: "/summer-floral-dress.jpg",
  },
  {
    id: 4,
    name: "Slim Fit Chinos",
    price: 39.99,
    colorVariants: ["Khaki", "Navy", "Olive"],
    shortDescription:
      "Comfortable and stylish slim fit chinos for a smart-casual look.",
    image: "/slim-fit-chinos.jpg",
  },
  {
    id: 5,
    name: "Cozy Knit Sweater",
    price: 29.99,
    colorVariants: ["Cream", "Burgundy", "Forest Green"],
    shortDescription: "Stay warm and stylish with this cozy knit sweater.",
    image: "/cozy-knit-sweater.jpg",
  },
  {
    id: 6,
    name: "Athletic Joggers",
    price: 34.99,
    colorVariants: ["Gray", "Black", "Navy"],
    shortDescription: "Comfortable joggers ideal for workouts or casual wear.",
    image: "/athletic-joggers.jpg",
  },
  {
    id: 7,
    name: "Button-Up Shirt",
    price: 44.99,
    colorVariants: ["White", "Blue", "Pink"],
    shortDescription:
      "A crisp button-up shirt that’s perfect for both office and casual wear.",
    image: "/button-up-shirt.jpg",
  },
  {
    id: 8,
    name: "Graphic Tee",
    price: 24.99,
    colorVariants: ["Black", "White", "Red"],
    shortDescription: "A fun and stylish graphic tee for everyday wear.",
    image: "/graphic-tee.jpg",
  },
  {
    id: 9,
    name: "Maxi Skirt",
    price: 39.99,
    colorVariants: ["Black", "Navy", "Coral"],
    shortDescription: "A flowing maxi skirt that combines comfort with style.",
    image: "/maxi-skirt.jpg",
  },
  {
    id: 10,
    name: "Puffer Jacket",
    price: 79.99,
    colorVariants: ["Black", "Navy", "Red"],
    shortDescription: "Stay warm and cozy with this insulated puffer jacket.",
    image: "/puffer-jacket.jpg",
  },
];

export default function Home() {
  return (
    <>
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
    </>
  );
}
