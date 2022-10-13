import React from "react";
import classes from "./BottomNavbar.module.css";

function BottomNavbar() {
    return (
        <div className={classes.main}>
            <div>Motors</div>
            <div>Property For Sale</div>
            <div>Property For Rent</div>
            <div>Classified</div>
            <div>Furniture and Garden</div>
            <div>Mobile and Tablets</div>
            <div>Jobs</div>
            <div>Community</div>
        </div>
    );
}

export default BottomNavbar;
