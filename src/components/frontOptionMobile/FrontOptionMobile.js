import React from "react";
import { BellOutlined, LoginOutlined, WechatOutlined, HeartOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import Vector from "../../icons/Vector.png";
import classes from "./FrontOptionMobile.module.css";
import caricon from "../../images/caricon.PNG";
import classifiedicon from "../../images/classifiedicon.PNG";
import furnitureicon from "../../images/furnitureicon.PNG";
import factoryicon from "../../images/factoryicon.PNG";
import mobile from "../../images/mobile.PNG";
import propertyforsaleicon from "../../images/propertyforsaleicon.PNG";
import propertyicon from "../../images/propertyicon.PNG";
import jobicon from "../../images/jobicon.PNG";
import communityicon from "../../images/communityicon.PNG";
import SideDrawer from "../../components/sideDrawer/SideDrawer";
import { useNavigate } from "react-router-dom";
import iconBack from "../../images/iconBack.PNG";
function FrontOptionMobile() {
    const history = useNavigate();
    function GotoCategory() {
        history("/categoriesMobile");
        console.log("test");
    }
    return (
        <div className={classes.back}>
            {/* <img src={Vector} className={classes.vecIcon} /> */}

            <SideDrawer />

            <div className={classes.search}>
                <SearchOutlined />
                <input placeholder="Search your keyword" />
            </div>
            <div className={classes.options}>
                <div className={classes.cardWrap}>
                    <div className={classes.cardInner} onClick={() => GotoCategory()}>
                        <img src={caricon} />
                        <div>Motors</div>
                    </div>
                    <div className={classes.cardInner} onClick={() => GotoCategory()}>
                        <img src={propertyicon} />
                        <div>Property for Rent</div>
                    </div>
                    <div className={classes.cardInner} onClick={() => GotoCategory()}>
                        <img src={propertyforsaleicon} />
                        <div>Property for Sale</div>
                    </div>
                </div>
                <div className={classes.cardWrap}>
                    <div className={classes.cardInner} onClick={() => GotoCategory()}>
                        <img src={classifiedicon} />
                        <div>Classified</div>
                    </div>
                    <div className={classes.cardInner} onClick={() => GotoCategory()}>
                        <img src={jobicon} />
                        <div>Jobs</div>
                    </div>
                    <div className={classes.cardInner} onClick={() => GotoCategory()}>
                        <img src={communityicon} />
                        <div>Community</div>
                    </div>
                </div>
                <div className={classes.cardWrap}>
                    <div className={classes.cardInner} onClick={() => GotoCategory()}>
                        <img src={furnitureicon} />
                        <div>Furniture</div>
                    </div>
                    <div className={classes.cardInner} onClick={() => GotoCategory()}>
                        <img src={factoryicon} />
                        <div>Business and Industry</div>
                    </div>
                    <div className={classes.cardInner} onClick={() => GotoCategory()}>
                        <img src={mobile} />
                        <div>Mobile and Tablets</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FrontOptionMobile;
