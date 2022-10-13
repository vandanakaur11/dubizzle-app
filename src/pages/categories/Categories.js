import React from "react";
import classes from "./Categories.module.css";
// import BottomNavbar from "../../components/bottomNavbar/BottomNavbar";
import ImageOptionCategory from "../../components/imageOptionCategory/ImageOptionCategory";
import CategoryCount from "../../components/categoryCount/CategoryCount";
import CategoriesSlider from "../../components/categoriesSlider/CategoriesSlider";
import Testimonials from "../../components/testimonials/Testimonials";

function Categories() {
    var heading = "Featured Listings";
    return (
        <div>
            {/* <BottomNavbar /> */}
            <ImageOptionCategory />
            <CategoryCount />
            <div className={classes.CategoriesSlideWrap}>
                {/* <h2>Featured Listings</h2> */}
                <CategoriesSlider heading={heading} />
            </div>
            <Testimonials />
        </div>
    );
}

export default Categories;
