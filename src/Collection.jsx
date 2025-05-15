import React from "react";
import CollectionItem from "./CollectionItem";

const Collection = ({ title }) => {
  return (
    <div className="flex flex-col mb-10 items-center justify-center gap-10 px-4 md:px-8">
      <h1 className="Collection-title text-center text-3xl font-semibold">
        {title}
      </h1>

      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CollectionItem />
          <CollectionItem />
          <CollectionItem />
          <CollectionItem />
        </div>
      </div>
    </div>
  );
};

export default Collection;
