import React from "react";
import classes from "./CategoryScreen.module.css";
// import { Arro } from "react-icons/fa";
// import "font-awesome/css/font-awesome.min.css";
import CardMobile from "../cardMobile/CardMobile";
import arrowleft from "../../icons/arrow-left.png";
import { useNavigate } from "react-router-dom";
import { productImg } from "../../data/Data";

function CategoryScreen() {
    const history = useNavigate();
    function GotoHome() {
        history("/");
    }
    return (
        <div>
            <div className={classes.nav}>
                <div className={classes.navInner}>
                    <img src={arrowleft} onClick={() => GotoHome()} />
                    <div className={classes.category}>
                        <i>CATEGORIES</i>
                    </div>
                    <div className={classes.hide}>icon</div>
                </div>
            </div>
            {productImg.map((data, i) => (
                <div key={i}>
                    <CardMobile data={data} i={i} />
                </div>
            ))}
        </div>
    );
}

export default CategoryScreen;
