import PropTypes from "prop-types";
import { useState } from "react";

const AddCategory = ({ setCategories }) => {
    // State for input value
    const [inputValue, setInputValue] = useState("");

    // Get the values from the input form
    const handleInputChange = e => {
        setInputValue(e.target.value);
    };

    // Save the input value in the categories state
    const handleFormSubmit = e => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(prevCats => [inputValue, ...prevCats]);
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
