import React, { useState, useEffect } from "react";
import p1 from "/product-image/p1.jpg";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductPreview = ({ onClose }) => {
  const thumbnails = [p1, p1, p1, p1, p1];
  const [selectedImage, setSelectedImage] = useState(thumbnails[0]);

  // Transition state
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Wait for animation to finish
    setTimeout(onClose, 200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-lg max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh] transform transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
          onClick={handleClose}
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
                    selectedImage === img
                      ? "border-black"
                      : "border-gray-200 hover:border-gray-400"
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
              <Link
                to="/product/1"
                className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition text-sm flex items-center justify-center"
              >
                View Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
