import PropTypes from "prop-types";
import { useState } from "react";

const AddCategory = ({ setCategories }) => {
    // State for input value
    const [inputValue, setInputValue] = useState("");

    // Get the values from the input form
    const handleInputChange = e => {
        setInputValue(e.target.value);
    };

    return (
        <form>
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
