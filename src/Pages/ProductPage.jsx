import React from "react";
import p1 from "/product-image/p1.jpg";

const ProductPage = () => {
  return (
    <div class="flex h-[90vh] w-screen flex-row items-center justify-center bg-white px-2">
      <div class="picture h-[80vh] w-[50vw] min-w-[320px]">
        <div class="Bigpicture h-[80%] w-full">
          <img src={p1} className="h-full mx-auto " />
        </div>
        <div class="morePicture h-[20%] w-full flex gap-2 items-center justify-between  *:bg-gray-300 *:h-[80%] *:w-[18%] *:rounded-lg px-10">
          <div className="PerImage overflow-hidden">
            <img src={p1} className=" w-full h-full object-cover" />
          </div>
          <div className="PerImage overflow-hidden">
            <img src={p1} className=" w-full h-full object-cover" />
          </div>
          <div className="PerImage overflow-hidden">
            <img src={p1} className=" w-full h-full object-cover" />
          </div>
          <div className="PerImage overflow-hidden">
            <img src={p1} className=" w-full h-full object-cover" />
          </div>
          <div className="PerImage overflow-hidden">
            <img src={p1} className=" w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div class="description h-[80vh] w-[50vw]  bg-red-400">
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default ProductPage;
