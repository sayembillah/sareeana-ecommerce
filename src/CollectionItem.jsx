import React from "react";
import productImage from "/product-image/p1.jpg";
import { FaRegHeart, FaEye } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const CollectionItem = ({ onPreview, list }) => {
  return (
    <div className="relative w-full group rounded overflow-hidden shadow-sm bg-white transition duration-300">
      {/* Image & Heart Icon */}
      <div className="relative">
        <img
          src={productImage}
          alt="Product"
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button className="absolute top-3 right-3 bg-black/50 p-2 rounded-full hover:bg-red-500 transition">
          <FaRegHeart size={18} color="white" />
        </button>

        {/* Subtle Hover Icons at Bottom */}
        <div className="absolute bottom-0 left-0 w-full px-4 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex justify-center space-x-4 bg-black/60 backdrop-blur-sm py-2 rounded">
            <IoCartOutline
              size={20}
              className="text-white hover:scale-110 transition cursor-pointer"
            />
            <FaEye
              size={18}
              className="text-white hover:scale-110 transition cursor-pointer"
              onClick={onPreview}
            />
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 text-center">
        <p className="font-semibold text-base">Premium Indian Silk Saree</p>
        <p className="text-gray-500 text-sm">BDT 1500</p>
      </div>
    </div>
  );
};

export default CollectionItem;
