import React from "react";

const products = [
  {
    id: 1,
    name: "Basic Crew Neck Tee",
    price: 44.0,
    color: "Black",
    image: "/images/product_1.jpg",
    discount: 10,
  },
  {
    id: 2,
    name: "Basic Crew Neck Tee",
    price: 44.0,
    color: "Black",
    image: "/images/product_2.jpg",
    discount: 10,
  },
  {
    id: 3,
    name: "Basic Crew Neck Tee",
    price: 44.0,
    color: "Black",
    image: "/images/product_3.png",
    discount: 10,
  },
  {
    id: 4,
    name: "Basic Crew Neck Tee",
    price: 44.0,
    color: "Black",
    image: "/images/product_4.jpg",
    discount: 10,
  },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 text-center relative">
          <div className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 text-sm">
            {product.discount}%
          </div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-contain mb-2"
          />
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-gray-500">{product.color}</p>
          <p className="font-bold mt-1">${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;