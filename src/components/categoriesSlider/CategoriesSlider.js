import React from "react";
import classes from "./CategoriesSlider.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productImg } from "../../data/Data";
import { useNavigate } from "react-router-dom";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    },
};

function CategoriesSlider({ heading }) {
    const history = useNavigate();
    function GotoDescription(data, i) {
        history("/description", { state: data });
    }
    return (
        <div>
            <div className={classes.headingWrap}>
                <h2>{heading}</h2>
                <h4></h4>
            </div>
            <div className={classes.main}>
                <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}>
                    {productImg.map((data, i) => (
                        <div key={i} className={classes.imgCard}>
                            <img className={classes.img} alt="/" src={data.name} onClick={() => GotoDescription(data, i)} />
                            <div className={classes.head}>AED 1000</div>
                            <div className={classes.para}>Product Name</div>
                            <div className={classes.para2}>Product Info</div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default CategoriesSlider;
