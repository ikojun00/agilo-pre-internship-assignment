import ProductList from "@/components/ProductList";

const db = [
  {
    id: 1,
    name: "Classic White Tee",
    price: 19.99,
    colorVariants: ["White", "Black", "Gray"],
    shortDescription:
      "A timeless classic, the perfect white t-shirt for any wardrobe.",
    image: [
      "/shorts.jpg",
      "/nonfiction.webp",
      "/romance.webp",
      "/nonfiction.webp",
    ],
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 59.99,
    colorVariants: ["Blue", "Black"],
    shortDescription:
      "A versatile denim jacket that adds a stylish layer to any outfit.",
    image: [
      "/shorts.jpg",
      "/nonfiction.webp",
      "/romance.webp",
      "/nonfiction.webp",
    ],
  },
  {
    id: 3,
    name: "Summer Floral Dress",
    price: 49.99,
    colorVariants: ["Red", "Blue", "Yellow"],
    shortDescription:
      "A light and breezy dress with a beautiful floral print, perfect for summer days.",
    image: [
      "/shorts.jpg",
      "/nonfiction.webp",
      "/romance.webp",
      "/nonfiction.webp",
    ],
  },
  {
    id: 4,
    name: "Slim Fit Chinos",
    price: 39.99,
    colorVariants: ["Khaki", "Navy", "Olive"],
    shortDescription:
      "Comfortable and stylish slim fit chinos for a smart-casual look.",
    image: [
      "/shorts.jpg",
      "/nonfiction.webp",
      "/romance.webp",
      "/nonfiction.webp",
    ],
  },
  {
    id: 5,
    name: "Cozy Knit Sweater",
    price: 29.99,
    colorVariants: ["Cream", "Burgundy", "Forest Green"],
    shortDescription: "Stay warm and stylish with this cozy knit sweater.",
    image: [
      "/shorts.jpg",
      "/nonfiction.webp",
      "/romance.webp",
      "/nonfiction.webp",
    ],
  },
  {
    id: 6,
    name: "Athletic Joggers",
    price: 34.99,
    colorVariants: ["Gray", "Black", "Navy"],
    shortDescription: "Comfortable joggers ideal for workouts or casual wear.",
    image: [
      "/shorts.jpg",
      "/nonfiction.webp",
      "/romance.webp",
      "/nonfiction.webp",
    ],
  },
  {
    id: 7,
    name: "Button-Up Shirt",
    price: 44.99,
    colorVariants: ["White", "Blue", "Pink"],
    shortDescription:
      "A crisp button-up shirt that’s perfect for both office and casual wear.",
    image: [
      "/shorts.jpg",
      "/nonfiction.webp",
      "/romance.webp",
      "/nonfiction.webp",
    ],
  },
  {
    id: 8,
    name: "Graphic Tee",
    price: 24.99,
    colorVariants: ["Black", "White", "Red"],
    shortDescription: "A fun and stylish graphic tee for everyday wear.",
    image: [
      "/shorts.jpg",
      "/nonfiction.webp",
      "/romance.webp",
      "/nonfiction.webp",
    ],
  },
  {
    id: 9,
    name: "Maxi Skirt",
    price: 39.99,
    colorVariants: ["Black", "Navy", "Coral"],
    shortDescription: "A flowing maxi skirt that combines comfort with style.",
    image: [
      "/shorts.jpg",
      "/nonfiction.webp",
      "/romance.webp",
      "/nonfiction.webp",
    ],
  },
  {
    id: 10,
    name: "Puffer Jacket",
    price: 79.99,
    colorVariants: ["Black", "Navy", "Red"],
    shortDescription: "Stay warm and cozy with this insulated puffer jacket.",
    image: [
      "/shorts.jpg",
      "/nonfiction.webp",
      "/romance.webp",
      "/nonfiction.webp",
    ],
  },
];

export default function Accessories() {
  return (
    <>
      <ProductList db={db} />
    </>
  );
}
