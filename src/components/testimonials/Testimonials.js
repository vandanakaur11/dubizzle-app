import React from "react";
import classes from "./Testimonials.module.css";
import Sean1 from "../../images/SeanImg.png";

function Testimonials() {
    return (
        <div className={classes.main}>
            <h2>Testimonials</h2>
            <div className={classes.cardWrap}>
                <div className={classes.card}>
                    <div>
                        I've been using dubizzle now for 10 years, I've literally lost count of the number cars I've bought and sold from
                        it. Its become so addictive, I tend to log-on most days - planning the next car is both fast &amp; fun.
                    </div>
                    <div className={classes.avatar}>
                        <img src={Sean1} alt="/" />
                        <div>John Cary</div>
                    </div>
                </div>
                <div className={classes.card}>
                    <div>
                        I've been using dubizzle now for 10 years, I've literally lost count of the number cars I've bought and sold from
                        it. Its become so addictive, I tend to log-on most days - planning the next car is both fast &amp; fun.
                    </div>
                    <div className={classes.avatar}>
                        <img src={Sean1} alt="/" />
                        <div>John Cary</div>
                    </div>
                </div>
                <div className={classes.card}>
                    <div>
                        I've been using dubizzle now for 10 years, I've literally lost count of the number cars I've bought and sold from
                        it. Its become so addictive, I tend to log-on most days - planning the next car is both fast &amp; fun.
                    </div>
                    <div className={classes.avatar}>
                        <img src={Sean1} alt="/" />
                        <div>John Cary</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
