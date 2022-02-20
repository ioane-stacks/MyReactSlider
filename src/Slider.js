import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
const Slider = ({ images }) => {
    const [index, setIndex] = useState(0);
    const { image } = images[index];
    const nextPicture = () => {
        setIndex(index === images.length - 1 ? 0 : index + 1);
    }
    const previousPicture = () => {
        setIndex(index === 0 ? images.length - 1 : index - 1);
    }

    const handleChange = (e) => {
        if (e.key === "ArrowRight") nextPicture();
        if (e.key === "ArrowLeft") previousPicture();
    }
    useEffect(() => {
        window.addEventListener('keydown', handleChange)
        return () => {
            window.removeEventListener('keydown', handleChange);
        }
    }, [handleChange]);

    return (
        <div id="slider-container">
            <button className="forward" onClick={previousPicture}>
                <FaAngleLeft />
            </button>
            <img src={image} alt={image} className="slider-source" />
            <button className="next" onClick={nextPicture}>
                <FaAngleRight />
            </button>
            <p className="image-counter">{index + 1} of {images.length}</p>
        </div >
    );
}

export default Slider;