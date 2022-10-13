import React from "react";
import classes from "./ImageOption.module.css";

function ImageOption() {
    return (
        <div>
            <div className={classes.imageWrapper}>
                <h1>
                    The Best Place to <span>Buy</span> your house, <span>Sell</span> your car or Find a <span>Job</span> in Dubai
                </h1>
                <div>
                    <div className={classes.options}>
                        <div className={classes.optionsInner}>
                            <label for="cars">Category</label>
                            <select>
                                <option value="Dubai">Electronics</option>
                                <option value="Dubai">Automotive</option>
                                <option value="Dubai">Property</option>
                                <option value="Dubai">Dubai</option>
                            </select>
                        </div>
                        <div className={classes.optionsInner}>
                            <label for="cars">Price Range</label>
                            <select>
                                <option className={classes.optionsOpt} value="Dubai">
                                    1000 AED
                                </option>
                                <option value="Dubai">2000 AED</option>
                                <option value="Dubai">3000 AED</option>
                                <option value="Dubai">4000 AED</option>
                            </select>
                        </div>
                        <div className={classes.optionsInner}>
                            <label for="cars">Location</label>
                            <select>
                                <option value="Dubai">Dubai</option>
                                <option value="Dubai">Sharjah</option>
                                <option value="Dubai">Abu Dhabi</option>
                                <option value="Dubai">Al Ain</option>
                            </select>
                        </div>
                        <div className={classes.optionsInner}>
                            <label for="cars">Keyword</label>
                            <input type="text" placeholder="Enter Your Keyword" />
                        </div>
                        <div className={classes.Btn}>
                            <div>Search</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageOption;
