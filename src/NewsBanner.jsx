import React, { useState, useEffect } from "react";
import banner1 from "/news-banner/newsbanner1.png";
import banner2 from "/news-banner/newsbanner2.png";
import banner3 from "/news-banner/newsbanner3.png";
import banner4 from "/news-banner/newsbanner4.png";

const NewsBanner = () => {
  const banners = [banner1, banner2, banner3, banner4];
  const [currentPicture, setCurrentPicture] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPicture((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="m-0 p-0">
      <img src={banners[currentPicture]} />
      {console.log(banner1)}
    </div>
  );
};

export default NewsBanner;
