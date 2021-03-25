import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  // const handleAdd = () => {
  //   // setCategories(c => c.concat('Death Note'));
  //   setCategories(c => [...c, 'Death Note']);
  //   // setCategories(['Death Note', ...categories]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category, i) => (
          <GifGrid key={i} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
