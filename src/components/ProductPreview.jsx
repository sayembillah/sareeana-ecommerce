// src/components/ProductPreview.jsx
import React, { useState } from "react";
import p1 from "/product-image/p1.jpg";
import { IoClose } from "react-icons/io5";

const ProductPreview = ({ onClose }) => {
  const thumbnails = [p1, p1, p1, p1, p1];
  const [selectedImage, setSelectedImage] = useState(thumbnails[0]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <IoClose size={24} />
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left: Images */}
          <div className="w-full md:w-1/2">
            {/* Main Image */}
            <div className="aspect-square overflow-hidden rounded-lg border mb-4">
              <img
                src={selectedImage}
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-1">
              {thumbnails.map((img, index) => (
                <button
                  key={index}
                  className={`min-w-[60px] w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === img ? "border-black" : "border-gray-200"
                  }`}
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              Premium Indian Silk Saree
            </h2>
            <p className="text-2xl font-bold text-black mb-3">BDT 1500</p>

            <p className="mb-1">
              <span className="font-semibold">Fabric:</span> Silk
            </p>
            <p className="mb-4 text-gray-700 text-sm">
              <span className="font-semibold">Description:</span> Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Esse quod corrupti,
              fuga possimus quibusdam tempora.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-4">
              <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-900 transition text-sm">
                Add to Cart
              </button>
              <button className="bg-white text-black border border-black px-5 py-2 rounded-md hover:bg-gray-100 transition text-sm">
                Order Now
              </button>
              <button className="text-red-500 text-lg hover:text-red-600 transition">
                ♥
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
