import React, { useState } from "react";
import p1 from "/product-image/p1.jpg";

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(p1);
  const thumbnails = [p1, p1, p1, p1, p1];

  const Accordion = ({ title, children }) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="border-b border-gray-200 py-3">
        <button
          className="flex justify-between w-full text-left font-medium text-gray-700"
          onClick={() => setOpen(!open)}
        >
          <span>{title}</span>
          <span>{open ? "-" : "+"}</span>
        </button>
        {open && <div className="mt-2 text-sm text-gray-600">{children}</div>}
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 px-4 md:px-20 py-10 bg-white">
      {/* Left: Images */}
      <div className="w-full md:w-1/2">
        <div className="aspect-square overflow-hidden rounded-lg border mb-4">
          <img
            src={selectedImage}
            alt="Product"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-3">
          {thumbnails.map((img, i) => (
            <button
              key={i}
              className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                selectedImage === img ? "border-black" : "border-gray-200"
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`thumb-${i}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right: Info */}
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Premium Indian Silk Saree
        </h1>
        <p className="text-3xl font-bold text-black mb-4">BDT 1500</p>

        <p className="mb-2">
          <span className="font-semibold">Fabric:</span> Silk
        </p>
        <p className="mb-6 text-gray-700">
          <span className="font-semibold">Description:</span> Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Esse quod corrupti, fuga
          possimus quibusdam tempora maxime reiciendis dolore harum iste ullam
          adipisci eum assumenda sequi, vel architecto. Cumque, praesentium et.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition">
            Add to Cart
          </button>
          <button className="bg-white text-black border border-black px-6 py-2 rounded-md hover:bg-gray-100 transition">
            Order Now
          </button>
          <button className="text-red-500 text-xl hover:text-red-600 transition">
            ♥
          </button>
        </div>

        {/* Accordions */}
        <Accordion title="Delivery Information">
          Delivery within 3-5 business days. Free shipping over BDT 1000.
        </Accordion>
        <Accordion title="Return Policy">
          Returns accepted within 7 days of delivery. Must be unused and with
          original packaging.
        </Accordion>
      </div>
    </div>
  );
};

export default ProductPage;
