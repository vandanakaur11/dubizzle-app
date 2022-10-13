import React from "react";
import classes from "./ItemOverview.module.css";
import carhistoryicon from "../../icons/carhistoryicon.PNG";
import Trim from "../../icons/Trim.png";
import Km from "../../icons/Km.png";
import Warranty from "../../icons/Warranty.png";
import Color from "../../icons/Color.png";
import Calender from "../../icons/Calendar.png";

export default function ItemOverview() {
    return (
        <div className={classes.main}>
            <h2>Item Overview</h2>
            <div className={classes.cardWrapMain}>
                <div className={classes.cardWrap}>
                    <div>HISTORY CHECK</div>
                    <img alt="/" src={carhistoryicon} />
                    <div>Available</div>
                </div>
                <div className={classes.cardWrap}>
                    <div>TRIM</div>
                    <img alt="/" src={Trim} />
                    <div>Standard</div>
                </div>
                <div className={classes.cardWrap}>
                    <div>KILOMETERS</div>
                    <img alt="/" src={Km} />
                    <div>112000</div>
                </div>
                <div className={classes.cardWrap}>
                    <div>WARRANTY</div>
                    <img alt="/" src={Warranty} />
                    <div>Does not apply</div>
                </div>
                <div className={classes.cardWrap}>
                    <div>COLOR</div>
                    <img alt="/" src={Color} />
                    <div>Grey</div>
                </div>
                <div className={classes.cardWrap}>
                    <div>YEAR</div>
                    <img alt="/" src={Calender} />
                    <div>2014</div>
                </div>
            </div>
        </div>
    );
}
