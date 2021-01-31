import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
    // State for categories
    const [categories, setCategories] = useState(["One Punch"]);

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories} />
        </>
    );
};

export default GifExpertApp;
