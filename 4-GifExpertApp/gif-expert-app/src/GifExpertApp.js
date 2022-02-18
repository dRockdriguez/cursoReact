import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import 'animate.css';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
      <h2 className="animate__animated animate__bounce">GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ul>
        {categories.map((el) => (
          <GifGrid 
          key={`${el}${Date.now()}`}
          category={el}></GifGrid>
        ))}
      </ul>
    </>
  );
};

export default GifExpertApp;
