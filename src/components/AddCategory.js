import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
    return (
        <form>
            <input type="text" />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
