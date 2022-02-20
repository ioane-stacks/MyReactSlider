import React, { useState } from "react";
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

    return (
        <div id="slider-container">
            <button className="forward" onClick={previousPicture}>
                <FaAngleLeft />
            </button>
            <img src={image} alt={image} className="slider-source" />
            <button className="next" onClick={nextPicture}>
                <FaAngleRight />
            </button>
        </div >
    );
}

export default Slider;