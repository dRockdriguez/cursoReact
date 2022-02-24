import React, { useState } from "react";
import PropTypes  from "prop-types";

const AddCategory = ( { setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = ( { target } ) => {
    setInputValue(target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    
    if(inputValue.trim().length > 2) {
      setCategories(categories => [ inputValue, ...categories ])
      setInputValue("")
    }
  }

  return (
    <form onSubmit={ submitHandler }>
      <input 
        type="text"
        value={ inputValue }
        onChange={ onChangeHandler }/>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;
