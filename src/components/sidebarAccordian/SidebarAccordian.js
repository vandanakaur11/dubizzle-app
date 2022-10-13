import React, { useState } from "react";
import classes from "./SidebarAccordian.module.css";
import accordImg1 from "../../images/caricon.PNG";
import accordImg2 from "../../images/propertyforsaleicon.PNG";
import accordImg3 from "../../images/jobicon.PNG";
import accordImg4 from "../../images/classifiedicon.PNG";
import accordImg5 from "../../images/factoryicon.PNG";
import accordImg6 from "../../images/communityicon.PNG";
import accordImg7 from "../../images/classifiedicon.PNG";
import accordImg8 from "../../images/furnitureicon.PNG";
import accordImg9 from "../../images/propertyicon.PNG";
import accordImg10 from "../../images/mobile.PNG";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function SidebarAccordian() {
    const history = useNavigate();
    const [showAccord, setShowAccord] = useState(false);
    const [showAccord2, setShowAccord2] = useState(false);
    const [showAccord3, setShowAccord3] = useState(false);
    const [showAccord4, setShowAccord4] = useState(false);
    const [showAccord5, setShowAccord5] = useState(false);
    const [showAccord6, setShowAccord6] = useState(false);
    const [showAccord7, setShowAccord7] = useState(false);
    const [showAccord8, setShowAccord8] = useState(false);
    const [showAccord9, setShowAccord9] = useState(false);
    const [showAccord10, setShowAccord10] = useState(false);
    function handleAccord(val) {
        if (val === "acc1") {
            setShowAccord(!showAccord);
            setShowAccord2(false);
            setShowAccord3(false);
            setShowAccord4(false);
            setShowAccord5(false);
            setShowAccord6(false);
            setShowAccord7(false);
            setShowAccord8(false);
            setShowAccord9(false);
        }
        if (val === "acc2") {
            setShowAccord(false);
            setShowAccord2(!showAccord2);
            setShowAccord3(false);
            setShowAccord4(false);
            setShowAccord5(false);
            setShowAccord6(false);
            setShowAccord7(false);
            setShowAccord8(false);
            setShowAccord9(false);
        }
        if (val === "acc3") {
            setShowAccord(false);
            setShowAccord2(false);
            setShowAccord3(!showAccord3);
            setShowAccord4(false);
            setShowAccord5(false);
            setShowAccord6(false);
            setShowAccord7(false);
            setShowAccord8(false);
            setShowAccord9(false);
        }
        if (val === "acc4") {
            setShowAccord(false);
            setShowAccord2(false);
            setShowAccord3(false);
            setShowAccord4(!showAccord4);
            setShowAccord5(false);
            setShowAccord6(false);
            setShowAccord7(false);
            setShowAccord8(false);
            setShowAccord9(false);
        }
        if (val === "acc5") {
            setShowAccord(false);
            setShowAccord2(false);
            setShowAccord3(false);
            setShowAccord4(false);
            setShowAccord5(!showAccord5);
            setShowAccord6(false);
            setShowAccord7(false);
            setShowAccord8(false);
            setShowAccord9(false);
        }
        if (val === "acc6") {
            setShowAccord(false);
            setShowAccord2(false);
            setShowAccord3(false);
            setShowAccord4(false);
            setShowAccord5(false);
            setShowAccord6(!showAccord6);
            setShowAccord7(false);
            setShowAccord8(false);
            setShowAccord9(false);
        }
        if (val === "acc7") {
            setShowAccord(false);
            setShowAccord2(false);
            setShowAccord3(false);
            setShowAccord4(false);
            setShowAccord5(false);
            setShowAccord6(false);
            setShowAccord7(!showAccord7);
            setShowAccord8(false);
            setShowAccord9(false);
        }
        if (val === "acc8") {
            setShowAccord(false);
            setShowAccord2(false);
            setShowAccord3(false);
            setShowAccord4(false);
            setShowAccord5(false);
            setShowAccord6(false);
            setShowAccord7(false);
            setShowAccord8(!showAccord8);
            setShowAccord9(false);
        }
        if (val === "acc9") {
            setShowAccord(false);
            setShowAccord2(false);
            setShowAccord3(false);
            setShowAccord4(false);
            setShowAccord5(false);
            setShowAccord6(false);
            setShowAccord7(false);
            setShowAccord8(false);
            setShowAccord9(!showAccord9);
        }
        if (val === "acc10") {
            setShowAccord(false);
            setShowAccord2(false);
            setShowAccord3(false);
            setShowAccord4(false);
            setShowAccord5(false);
            setShowAccord6(false);
            setShowAccord7(false);
            setShowAccord8(false);
            setShowAccord9(false);
            setShowAccord9(!showAccord10);
        }
    }

    function GotoCategory() {
        history("/categories");
    }
    return (
        <div className={classes.main}>
            <h2>All Categories</h2>
            <div className={classes.accordionWrap}>
                <div className={classes.accordionWrapLeft}>
                    <img src={accordImg1} alt="/" />
                    <h3 onClick={() => GotoCategory()}>Motors</h3>
                </div>

                <div onClick={() => handleAccord("acc1")} className={classes.arrow}>
                    {showAccord === false ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
                </div>
            </div>
            {showAccord && (
                <div className={classes.subAccord}>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                </div>
            )}
            <div className={classes.accordionWrap}>
                <div className={classes.accordionWrapLeft}>
                    <img src={accordImg9} alt="/" />
                    <h3>Propert for Rent</h3>
                </div>
                <div onClick={() => handleAccord("acc2")} className={classes.arrow}>
                    {showAccord2 === false ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
                </div>
            </div>
            {showAccord2 && (
                <div className={classes.subAccord}>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                </div>
            )}
            <div className={classes.accordionWrap}>
                <div className={classes.accordionWrapLeft}>
                    <img src={accordImg2} alt="/" />
                    <h3>Property for Sale</h3>
                </div>
                <div onClick={() => handleAccord("acc3")} className={classes.arrow}>
                    {showAccord3 === false ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
                </div>
            </div>
            {showAccord3 && (
                <div className={classes.subAccord}>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                </div>
            )}{" "}
            <div className={classes.accordionWrap}>
                <div className={classes.accordionWrapLeft}>
                    <img src={accordImg7} alt="/" />
                    <h3>Classifieds</h3>
                </div>
                <div onClick={() => handleAccord("acc4")} className={classes.arrow}>
                    {showAccord4 === false ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
                </div>
            </div>
            {showAccord4 && (
                <div className={classes.subAccord}>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                </div>
            )}{" "}
            <div className={classes.accordionWrap}>
                <div className={classes.accordionWrapLeft}>
                    <img src={accordImg3} alt="/" />
                    <h3>Jobs</h3>
                </div>
                <div onClick={() => handleAccord("acc5")} className={classes.arrow}>
                    {showAccord5 === false ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
                </div>
            </div>
            {showAccord5 && (
                <div className={classes.subAccord}>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                </div>
            )}
            <div className={classes.accordionWrap}>
                <div className={classes.accordionWrapLeft}>
                    <img src={accordImg6} alt="/" />
                    <h3>Community</h3>
                </div>
                <div onClick={() => handleAccord("acc6")} className={classes.arrow}>
                    {showAccord6 === false ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
                </div>
            </div>
            {showAccord6 && (
                <div className={classes.subAccord}>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                </div>
            )}
            <div className={classes.accordionWrap}>
                <div className={classes.accordionWrapLeft}>
                    <img src={accordImg4} alt="/" />
                    <h3>Home Appliances</h3>
                </div>
                <div onClick={() => handleAccord("acc7")} className={classes.arrow}>
                    {showAccord7 === false ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
                </div>
            </div>
            {showAccord7 && (
                <div className={classes.subAccord}>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                </div>
            )}
            <div className={classes.accordionWrap}>
                <div className={classes.accordionWrapLeft}>
                    <img src={accordImg5} alt="/" />
                    <h3>Business And Industrial</h3>
                </div>
                <div onClick={() => handleAccord("acc8")} className={classes.arrow}>
                    {showAccord8 === false ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
                </div>
            </div>
            {showAccord8 && (
                <div className={classes.subAccord}>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                </div>
            )}
            <div className={classes.accordionWrap}>
                <div className={classes.accordionWrapLeft}>
                    <img src={accordImg8} alt="/" />
                    <h3>Furniture and Garden</h3>
                </div>
                <div onClick={() => handleAccord("acc9")} className={classes.arrow}>
                    {showAccord9 === false ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
                </div>
            </div>
            {showAccord9 && (
                <div className={classes.subAccord}>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                </div>
            )}
            <div className={classes.accordionWrap}>
                <div className={classes.accordionWrapLeft}>
                    <img src={accordImg10} alt="/" />
                    <h3>Mobile and Tablet</h3>
                </div>
                <div onClick={() => handleAccord("acc10")} className={classes.arrow}>
                    {showAccord10 === false ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
                </div>
            </div>
            {showAccord10 && (
                <div className={classes.subAccord}>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                    <div>SubMotors</div>
                </div>
            )}
        </div>
    );
}

export default SidebarAccordian;
