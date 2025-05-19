import axios from "axios"; // Library for making HTTP requests
import { useEffect, useState, useCallback } from "react"; // React hooks for state and lifecycle management
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Icons for collapsible filter sections
import { IoClose } from "react-icons/io5"; // Icon for closing mobile filter sidebar
import CollectionItem from "../CollectionItem"; // Component for rendering individual product items
import ProductPreview from "../components/ProductPreview"; // Component for showing product details in a preview modal

// Constants defining filter options
const CATEGORIES = [
  "Silk",
  "Georgette",
  "Organza",
  "Cotton",
  "Chiffon",
  "Banarasi",
  "Net",
  "Others",
]; // List of product categories for filtering
const SORT_OPTIONS = [
  "Featured",
  "Best Selling",
  "Best Rated",
  "Price: High to Low",
  "Price: Low to High",
  "Latest to Oldest",
  "Oldest to Latest",
]; // Sorting options for products

// FilterSection Component: Reusable component for collapsible filter sections
const FilterSection = ({ title, children }) => {
  // State to manage whether the filter section is open or collapsed
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-4">
      {/* Button to toggle the visibility of the filter section */}
      <button
        className="flex justify-between items-center w-full text-left font-medium mb-2"
        onClick={() => setOpen(!open)} // Toggles the open state
      >
        <span>{title}</span>{" "}
        {/* Section title (e.g., "Price Range", "Category") */}
        <span
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`} // Rotates icon when section is open
        >
          {/* Displays up or down chevron based on open state */}
          {open ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
        </span>
      </button>
      {/* Collapsible content area with smooth animation */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`} // Controls visibility and height with animation
      >
        {children} {/* Renders child components (e.g., checkboxes, inputs) */}
      </div>
    </div>
  );
};

// FilterSidebar Component: Sidebar for filtering products by price, category, availability, and sort order
const FilterSidebar = ({
  onClose, // Function to close the mobile sidebar (optional, used in mobile view)
  selectedCategories, // Array of currently selected categories
  setSelectedCategories, // Function to update selected categories
  setMaxPrice, // Function to set max price
  setMinPrice, // Function to set min price
  minPrice, // Minimum price
  maxPrice, // Maximum price
}) => {
  // FilterSidebar only handles UI and state updates for filters; filtering logic is in Shop component

  return (
    <div className="w-full md:w-[260px] bg-white p-4 md:p-6 text-sm">
      {/* Mobile-only header with close button */}
      {onClose && (
        <div className="flex justify-between items-center mb-4 sm:hidden">
          <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
          <button onClick={onClose}>
            <IoClose size={24} /> {/* Icon to close the mobile sidebar */}
          </button>
        </div>
      )}
      {/* Price Range Filter Section */}
      <FilterSection title="Price Range">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            {/* Input for minimum price */}
            <input
              type="number"
              placeholder="Min"
              className="w-full border px-2 py-1.5 rounded-md"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <span className="text-gray-500">-</span> {/* Separator */}
            {/* Input for maximum price */}
            <input
              type="number"
              placeholder="Max"
              className="w-full border px-2 py-1.5 rounded-md"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
          {/* Button to apply price filter */}
          <button
            className="bg-black text-white rounded-md py-1.5 text-sm hover:bg-gray-900"
            onClick={() => {
              // Filtering is reactive to minPrice and maxPrice changes in Shop component
            }}
          >
            Show
          </button>
          <button
            className="bg-black text-white rounded-md py-1.5 text-sm hover:bg-gray-900"
            onClick={() => {
              // Clear price filters and reset to default values
              setMinPrice("");
              setMaxPrice("");
            }}
          >
            Clear
          </button>
        </div>
      </FilterSection>
      <hr className="my-4 border-gray-200" /> {/* Divider */}
      {/* Category Filter Section */}
      <FilterSection title="Category">
        <div className="space-y-2">
          {/* Checkbox for showing all products (clears category filters) */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedCategories.length === 0} // Checked if no categories are selected
              className="accent-black"
              onChange={(e) => e.target.checked && setSelectedCategories([])} // Clears selected categories
            />
            <span className="text-gray-700">All Products</span>
          </label>
          {/* Checkboxes for each category */}
          {CATEGORIES.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                value={cat}
                className="accent-black"
                checked={selectedCategories.includes(cat)} // Checked if category is selected
                onChange={(e) => {
                  const { value, checked } = e.target;
                  // Add or remove category from selectedCategories
                  setSelectedCategories((prev) =>
                    checked ? [...prev, value] : prev.filter((c) => c !== value)
                  );
                }}
              />
              <span className="text-gray-700">{cat}</span>
            </label>
          ))}
        </div>
      </FilterSection>
      <hr className="my-4 border-gray-200" /> {/* Divider */}
      {/* Availability Filter Section */}
      <FilterSection title="Availability">
        <div className="space-y-2">
          {/* Checkbox for in-stock products */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-black" />
            <span className="text-gray-700">In Stock</span>
          </label>
          {/* Checkbox for out-of-stock products */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-black" />
            <span className="text-gray-700">Out of Stock</span>
          </label>
        </div>
      </FilterSection>
      <hr className="my-4 border-gray-200" /> {/* Divider */}
      {/* Sort By Filter Section */}
      <FilterSection title="Sort By">
        <div className="space-y-2">
          {/* Radio buttons for sorting options */}
          {SORT_OPTIONS.map((option, idx) => (
            <label
              key={option}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="sort" // Groups radio buttons together
                defaultChecked={idx === 0} // Selects the first option by default
                className="accent-black"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </FilterSection>
    </div>
  );
};

// Shop Component: Main component for the shop page
const Shop = () => {
  // State to control visibility of mobile filter sidebar
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  // State to store the product selected for preview
  const [previewProduct, setPreviewProduct] = useState(null);
  // State to store all products fetched from the API
  const [productData, setProductData] = useState([]);
  // State to store filtered products based on selected categories
  const [filteredProducts, setFilteredProducts] = useState([]);
  // State to store selected categories for filtering
  const [selectedCategories, setSelectedCategories] = useState([]);
  // Initialize minPrice and maxPrice as empty strings to indicate no price filtering initially
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");

  // Function to filter products based on selected categories and price range
  const filterProduct = useCallback(() => {
    // Parse minPrice and maxPrice; treat empty string as no filter
    const min = minPrice === "" ? NaN : parseFloat(minPrice);
    const max = maxPrice === "" ? NaN : parseFloat(maxPrice);

    // Filter products by category if any selected, else all
    let filtered =
      selectedCategories.length === 0
        ? productData
        : productData.filter((p) => selectedCategories.includes(p.category));

    // Further filter products by price range
    filtered = filtered.filter((product) => {
      const price = product.price;
      const withinMin = isNaN(min) || price >= min;
      const withinMax = isNaN(max) || price <= max;
      return withinMin && withinMax;
    });

    setFilteredProducts(filtered);
  }, [productData, selectedCategories, minPrice, maxPrice]); // Dependencies for useCallback

  // Fetch products from API when component mounts
  useEffect(() => {
    axios.get("http://localhost:3000/products").then(({ data }) => {
      setProductData(data); // Store all products
      setFilteredProducts(data); // Initialize filtered products
      // Initialize minPrice and maxPrice as empty strings (no price filter)
      setMinPrice("");
      setMaxPrice("");
    });
  }, []); // Empty dependency array means this runs once on mount

  // Re-filter products when selected categories change
  useEffect(() => {
    filterProduct();
  }, [selectedCategories, filterProduct]); // Runs when selectedCategories or filterProduct changes

  // Add useEffect to run filterProduct when minPrice or maxPrice changes
  useEffect(() => {
    filterProduct();
  }, [minPrice, maxPrice, filterProduct]);

  // Toggle body overflow to prevent scrolling when mobile filters are open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", showMobileFilters);
    // Cleanup: Remove overflow-hidden when component unmounts or filters close
    return () => document.body.classList.remove("overflow-hidden");
  }, [showMobileFilters]); // Runs when showMobileFilters changes

  // Function to render the product grid
  const renderProductGrid = () => (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* Map over filtered products to render each one */}
      {filteredProducts.map((item) => (
        <CollectionItem
          key={item.id} // Unique key for React's rendering optimization
          product={item} // Product data passed to component
          onPreview={() => setPreviewProduct(item)} // Opens product preview
        />
      ))}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      {/* Mobile Filter Button (visible only on small screens) */}
      <div className="sm:hidden sticky top-0 z-30 bg-white border-b p-4">
        <button
          onClick={() => setShowMobileFilters(true)} // Opens mobile filter sidebar
          className="bg-black text-white px-4 py-2 rounded-md text-sm"
        >
          Filter
        </button>
      </div>

      {/* Desktop Layout: Sidebar + Product Grid */}
      <div className="hidden md:flex flex-row flex-grow">
        {/* Fixed-width sidebar for filters */}
        <div className="w-[260px] border-r border-gray-200">
          <FilterSidebar
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            setMaxPrice={setMaxPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            minPrice={minPrice}
          />
        </div>
        {/* Main content area with product grid */}
        <div className="flex-1 p-4 md:p-6 overflow-y-auto">
          {renderProductGrid()} {/* Renders the product grid */}
          <div className="text-center mt-8 text-gray-400">
            Scroll down to load more products...
          </div>
        </div>
      </div>

      {/* Mobile Layout: Product Grid Only */}
      <div className="block md:hidden p-4">
        <div className="grid grid-cols-2 gap-4">{renderProductGrid()}</div>
        <div className="text-center mt-8 text-gray-400">
          Scroll down to load more products...
        </div>
      </div>

      {/* Mobile Filter Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity duration-300 ${
          showMobileFilters
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`} // Dark overlay when mobile filters are open
        onClick={() => setShowMobileFilters(false)} // Closes sidebar when clicked
      />
      <div
        className={`fixed inset-y-0 left-0 z-50 w-4/5 max-w-xs bg-white shadow-lg transform transition-transform duration-300 ${
          showMobileFilters ? "translate-x-0" : "-translate-x-full"
        }`} // Sliding mobile filter sidebar
      >
        <FilterSidebar
          onClose={() => setShowMobileFilters(false)} // Closes mobile sidebar
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      </div>

      {/* Product Preview Modal */}
      {previewProduct && (
        <ProductPreview
          product={previewProduct} // Product data for preview
          onClose={() => setPreviewProduct(null)} // Closes the preview
        />
      )}
    </div>
  );
};

export default Shop; // Export the Shop component for use in other parts of the app
