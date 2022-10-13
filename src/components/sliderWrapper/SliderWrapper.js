import React from "react";
import classes from "./SliderWrapper.module.css";
import CategoriesSlider from "../../components/categoriesSlider/CategoriesSlider";

function SliderWrapper() {
    var headingOne = "Popular in Residential For Rent";
    var headingTwo = "Popular in Used Cars For Sale";
    var headingThree = "Popular in Residential For Rent";
    var headingFour = "Popular in Residential For Rent";
    var headingFive = "Popular in Residential For Rent";
    var headingSix = "Popular in Residential For Rent";
    return (
        <div className={classes.sliderContainer}>
            <div>
                <CategoriesSlider heading={headingOne} />
                <CategoriesSlider heading={headingTwo} />
                <CategoriesSlider heading={headingThree} />
                <CategoriesSlider heading={headingFour} />
                <CategoriesSlider heading={headingFive} />
                <CategoriesSlider heading={headingSix} />
            </div>
        </div>
    );
}

export default SliderWrapper;
