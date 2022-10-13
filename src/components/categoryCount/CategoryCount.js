import React from "react";
import classes from "./CategoryCount.module.css";

function CategoryCount() {
    return (
        <div>
            <div className={classes.main}>
                <div className={classes.wrap}>
                    <div className={classes.title}>USED CARS FOR SALE</div>
                    <div className={classes.count}>15,611</div>
                </div>
                <div className={classes.wrap}>
                    <div className={classes.title}>NUMBER PLATES</div>
                    <div className={classes.count}>5,611</div>
                </div>
                <div className={classes.wrap}>
                    <div className={classes.title}>AUTO PARTS AND ACCESSORIES</div>
                    <div className={classes.count}>611</div>
                </div>
                <div className={classes.wrap}>
                    <div className={classes.title}>MOTORCYCLE</div>
                    <div className={classes.count}>1511</div>
                </div>
                <div className={classes.wrap}>
                    <div className={classes.title}>HEAVY VEHICLES</div>
                    <div className={classes.count}>311</div>
                </div>
                <div className={classes.wrap}>
                    <div className={classes.title}>BOATS</div>
                    <div className={classes.count}>11</div>
                </div>
            </div>
        </div>
    );
}

export default CategoryCount;
