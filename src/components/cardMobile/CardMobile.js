import React from "react";
import classes from "./CardMobile.module.css";
import { useNavigate } from "react-router-dom";

function CardMobile({ data, i }) {
    const history = useNavigate();
    function GotoDescription() {
        history("/description", { state: data });
    }
    console.log(data);
    return (
        <div>
            <div key={i} className={classes.card} onClick={() => GotoDescription()}>
                <div className={classes.cardLeft}>
                    <img src={data.name} alt="/" />
                </div>
                <div className={classes.cardRight}>
                    <div className={classes.info}>{data.productTitle}</div>
                    <div className={classes.location}>{data.productLocation}</div>
                    <div className={classes.price}>{data.productPrice}</div>
                    <div className={classes.date}>{data.productInfo}</div>
                </div>
            </div>
        </div>
    );
}

export default CardMobile;
