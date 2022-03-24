import React from "react";

const FeaturedTech = () => {
  const images = [
    "html.png",
    "css.png",
    "firefox.png",
    "sublime.png",
    "terminal.png",
    "yarn.png",
    "npm.png",
  ];
  return (
    <div className="flex flex-col items-center md:items-start">
      <p className="text-white/40 tracking-wider text-sm">
        TEKNOLOGI YANG DI GUNAKAN
      </p>
      <div className="text-2xl flex gap-5 ">
        {images.map((img, i) => {
          return (
            <img
              src={`/icons/${img}`}
              className="w-8 object-contain my-6"
              alt=""
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedTech;
