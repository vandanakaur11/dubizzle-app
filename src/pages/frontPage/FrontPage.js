import React from "react";
import classes from "./FrontPage.module.css";
// import Navbar from "../../components/navbar/Navbar";
// import Footer from "../../components/footer/Footer";
import ImageOption from "../../components/imageOption/ImageOption";
import SliderWrapper from "../../components/sliderWrapper/SliderWrapper";
import SidebarAccordian from "../../components/sidebarAccordian/SidebarAccordian";
import CardBox from "../../components/cardBox/CardBox";
import BottomNav from "../../components/bottomNav/BottomNav";
import backgroundMobile from "../../images/backgroundMobile.png";
import AdLocations from "../../components/AdLocations/AdLocations";
// import Vector from "../../icons/Vector.png";
import FrontOptionMobile from "../../components/frontOptionMobile/FrontOptionMobile";

function FrontPage() {
    return (
        <div>
            <div className={classes.forPC}>
                <ImageOption />
                <div className={classes.midSection}>
                    <div className={classes.midLeft}>
                        <SidebarAccordian />
                    </div>
                    <div className={classes.midRight}>
                        <SliderWrapper />
                    </div>
                </div>
            </div>
            <div className={classes.forMobile}>
                {/* <CardBox /> */}
                {/* <div className={classes.back}> */}
                {/* <img src={backgroundMobile} /> */}

                <FrontOptionMobile />
                {/* </div> */}
                <div className={classes.advertisment}>Advertisment</div>
                <AdLocations />

                <SliderWrapper />
            </div>
        </div>
    );
}

export default FrontPage;
