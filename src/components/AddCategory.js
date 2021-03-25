import PropTypes from "prop-types";
import React, { useState } from "react";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      // setCategories((c) => [...c, inputValue]);
      // setCategories( cats => [ inputValue, ...cats, ] );
      // Ver por que no me funciona de esta forma
      setCategories((c) => [inputValue, ...c]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputValue} 
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
