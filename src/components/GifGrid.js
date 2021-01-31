import PropTypes from "prop-types";
import { useFetchGif } from "../hooks/useFetchGif";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
    // Get the images from useFetchGif custom hook
    const { data: images, loading } = useFetchGif(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && (
                <p className="animate__animated animate__flash">Loading...</p>
            )}

            <div className="card-grid">
                {images.map(img => (
                    <GifGridItem key={img.id} title={img.title} url={img.url} />
                ))}
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};

export default GifGrid;
