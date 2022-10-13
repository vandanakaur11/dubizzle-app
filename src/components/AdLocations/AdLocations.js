import React from "react";
import classes from "./AdLocations.module.css";
import abudhabiPic from "../../images/abudhabiPic.png";
import dubaiPic from "../../images/dubaiPic.png";
import sharjanPic from "../../images/sharjahPic.png";
import alAinPic from "../../images/alAinPic.png";
import ajmanPic from "../../images/ajmanPic.png";
import fujairah from "../../images/fujairahPic.png";
import khaima from "../../images/khaimahPic.png";

function AdLocations() {
    return (
        <div className={classes.main}>
            <h3>AD Locations</h3>
            <div className={classes.photoWrap}>
                <div className={classes.photoWrapOne}>
                    <img src={abudhabiPic} />
                </div>
                <div className={classes.photoWrapTwo}>
                    <img src={dubaiPic} />
                    <img src={sharjanPic} />
                </div>
            </div>
            <div className={classes.photoWrap}>
                <div className={classes.photoWrapTwo}>
                    <img src={alAinPic} />
                    <img src={ajmanPic} />
                </div>
                <div className={classes.photoWrapOne}>
                    <img src={fujairah} />
                </div>
            </div>
            <div className={classes.photoAlone}>
                <img src={khaima} />
            </div>
        </div>
    );
}

export default AdLocations;
