import axios from "axios";
import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import CollectionItem from "../CollectionItem";
import ProductPreview from "../components/ProductPreview";

const FilterSection = ({ title, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium mb-2"
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>
        <span
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          {open ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const FilterSidebar = ({ onClose }) => (
  <div className="w-full md:w-[260px] bg-white p-4 md:p-6 text-sm">
    {/* Mobile Close Button */}
    {onClose && (
      <div className="flex justify-between items-center mb-4 sm:hidden">
        <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
        <button onClick={onClose}>
          <IoClose size={24} />
        </button>
      </div>
    )}

    {/* Actual Filters */}
    <FilterSection title="Price Range">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            className="w-full border border-gray-300 px-2 py-1.5 rounded-md focus:outline-none"
          />
          <span className="text-gray-500">-</span>
          <input
            type="number"
            placeholder="Max"
            className="w-full border border-gray-300 px-2 py-1.5 rounded-md focus:outline-none"
          />
        </div>
        <button
          className="bg-black text-white rounded-md py-1.5 text-sm hover:bg-gray-900 transition"
          onClick={() => {
            console.log("Filter products based on price");
          }}
        >
          Show
        </button>
      </div>
    </FilterSection>

    <hr className="my-4 border-gray-200" />

    <FilterSection title="Category">
      <div className="space-y-2">
        {["All Products", "Silk", "Georgette", "Organza", "Cotton"].map(
          (cat, index) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={index === 0}
                className="accent-black"
              />
              <span className="text-gray-700">{cat}</span>
            </label>
          )
        )}
      </div>
    </FilterSection>

    <hr className="my-4 border-gray-200" />

    <FilterSection title="Availability">
      <div className="space-y-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="accent-black" />
          <span className="text-gray-700">In Stock</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="accent-black" />
          <span className="text-gray-700">Out of Stock</span>
        </label>
      </div>
    </FilterSection>

    <hr className="my-4 border-gray-200" />

    <FilterSection title="Sort By">
      <div className="space-y-2">
        {[
          "Featured",
          "Best Selling",
          "Best Rated",
          "Price: High to Low",
          "Price: Low to High",
          "Latest to Oldest",
          "Oldest to Latest",
        ].map((option, idx) => (
          <label
            key={option}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name="sort"
              defaultChecked={idx === 0}
              className="accent-black"
            />
            <span className="text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    </FilterSection>
  </div>
);

const Shop = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [previewProduct, setPreviewProduct] = useState(null);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const { data } = await axios.get("http://localhost:3000/products");
      setProductData(data);
    }
    getProducts();
  }, []);

  useEffect(() => {
    if (showMobileFilters) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [showMobileFilters]);

  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      {/* Filter Button (Mobile) */}
      <div className="sm:hidden sticky top-0 z-30 bg-white border-b border-gray-200 p-4">
        <button
          onClick={() => setShowMobileFilters(true)}
          className="bg-black text-white px-4 py-2 rounded-md text-sm"
        >
          Filter
        </button>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex md:flex-row flex-grow">
        <div className="w-[260px] border-r border-gray-200 shrink-0">
          <FilterSidebar />
        </div>
        <div className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {productData.map((item) => (
              <CollectionItem
                key={item.id}
                product={item}
                onPreview={() => setPreviewProduct(item)}
              />
            ))}
          </div>
          <div className="text-center mt-8 text-gray-400">
            Scroll down to load more products...
          </div>
        </div>
      </div>

      {/* Mobile product grid (shown only on small screens) */}
      <div className="block md:hidden p-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          {productData.map((item) => (
            <CollectionItem
              key={item.id}
              product={item}
              onPreview={() => setPreviewProduct(item)}
            />
          ))}
        </div>
        <div className="text-center mt-8 text-gray-400">
          Scroll down to load more products...
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity duration-300 ${
          showMobileFilters
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowMobileFilters(false)}
      />
      <div
        className={`fixed inset-y-0 left-0 z-50 w-4/5 max-w-xs bg-white shadow-lg overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          showMobileFilters ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <FilterSidebar onClose={() => setShowMobileFilters(false)} />
      </div>
      {previewProduct && (
        <ProductPreview
          product={previewProduct}
          onClose={() => setPreviewProduct(false)}
        />
      )}
    </div>
  );
};

export default Shop;
