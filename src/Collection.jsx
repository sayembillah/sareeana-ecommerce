import { useState } from "react";
import CollectionItem from "./CollectionItem";
import ProductPreview from "./components//ProductPreview"; // Make sure it's imported

const Collection = ({ title, list }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handlePreviewOpen = (productData) => {
    setSelectedProduct(productData);
    setIsPreviewOpen(true);
  };

  const handlePreviewClose = () => {
    setIsPreviewOpen(false);
    setSelectedProduct(null);
  };

  // Sample data for demo purposes
  // const dummyProduct = {
  //   name: "Premium Indian Silk Saree",
  //   price: 1500,
  //   fabric: "Silk",
  //   images: ["/product-image/p1.jpg", "/product-image/p1.jpg"],
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quod corrupti, fuga possimus quibusdam tempora.",
  // };

  return (
    <div className="flex flex-col mb-10 items-center justify-center gap-10 px-4 md:px-8">
      <h1 className="Collection-title text-center text-3xl font-semibold">
        {title}
      </h1>

      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* slice used for filtering top 4 product */}
          {list.slice(0, 4).map((item) => (
            <CollectionItem
              key={item.id}
              onPreview={() => handlePreviewOpen(item)}
              product={item}
            />
          ))}
        </div>
      </div>

      {isPreviewOpen && (
        <ProductPreview
          product={selectedProduct}
          onClose={handlePreviewClose}
        />
      )}
    </div>
  );
};

export default Collection;
