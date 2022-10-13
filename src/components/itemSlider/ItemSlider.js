import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const ItemSlider = ({ name }) => {
    const items = [
        <img src={name} onDragStart={handleDragStart} style={{ width: "100%" }} />,
        <img src={name} onDragStart={handleDragStart} style={{ width: "100%" }} />,
        <img src={name} onDragStart={handleDragStart} style={{ width: "100%" }} />,
    ];
    console.log(name);
    return <AliceCarousel mouseTracking items={items} />;
};

export default ItemSlider;
