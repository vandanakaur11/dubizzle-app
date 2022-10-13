import React from "react";
import classes from "./CardBox.module.css";
import accordImg1 from "../../icons/accordImg1.PNG";
import accordImg2 from "../../icons/accordImg2.PNG";
import accordImg3 from "../../icons/accordImg3.PNG";
import accordImg4 from "../../icons/accordImg4.PNG";
import accordImg5 from "../../icons/accordImg5.PNG";
import accordImg6 from "../../icons/accordImg6.PNG";
import accordImg7 from "../../icons/accordImg7.PNG";
import accordImg8 from "../../icons/accordImg8.png";
import accordImg9 from "../../icons/accordImg9.PNG";

function CardBox() {
    return (
        <div className={classes.main}>
            <div className={classes.inner}>
                <div className={classes.innerCard}>
                    <img src={accordImg9} />
                    <div>Property for Rent</div>
                </div>
                <div className={classes.innerCard}>
                    <img src={accordImg2} />
                    <div>Property for Sale</div>
                </div>
                <div className={classes.innerCard}>
                    <img src={accordImg9} />
                    <div>Property Room for Rent</div>
                </div>
            </div>
            <div className={classes.inner}>
                <div className={classes.innerCard}>
                    <img src={accordImg8} />
                    <div>Motors</div>
                </div>
                <div className={classes.innerCard}>
                    <img src={accordImg7} />
                    <div>Classifieds</div>
                </div>
                <div className={classes.innerCard}>
                    <img src={accordImg4} />
                    <div>Furniture and Garden</div>
                </div>
            </div>
            <div className={classes.inner}>
                <div className={classes.innerCard}>
                    <img src={accordImg1} />
                    <div>Mobilephone and Tablet</div>
                </div>
                <div className={classes.innerCard}>
                    <img src={accordImg6} />
                    <div>Community</div>
                </div>
                <div className={classes.innerCard}>
                    <img src={accordImg3} />
                    <div>Jobs</div>
                </div>
            </div>
        </div>
    );
}

export default CardBox;
