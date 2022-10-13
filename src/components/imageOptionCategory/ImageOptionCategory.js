import React from "react";
import classes from "./ImageOptionCategory.module.css";
import { WechatOutlined, HeartOutlined, SearchOutlined, UserOutlined, BorderOuterOutlined, PayCircleOutlined } from "@ant-design/icons";
import RangePicker from "../../components/rangePicker/RangePicker";
import hondaImg from "../../images/hondaImg.png";
import hyundaiImg from "../../images/hyundaiImg.png";
import bentleyImg from "../../images/bentleyImg.png";
import bmwImg from "../../images/bmwImg.png";
import kiaImg from "../../images/kiaImg.png";
import mercedesImg from "../../images/mercedes-benzImg.png";
import audiImg from "../../images/audiImg.png";
import toyotaImg from "../../images/toyotaImg.png";

function ImageOptionCategory() {
    return (
        <div className={classes.main}>
            <div className={classes.mainInner}>
                <div className={classes.left}>
                    <h2>Find the Best Used Vehicle in Dubai</h2>
                    <div className={classes.inputMain}>
                        <div className={classes.inputCont}>
                            <div className={classes.inputWrap}>
                                <div>Make and Model</div>
                                <div className={classes.inputWrapInner}>
                                    <SearchOutlined />
                                    <input placeholder="Select your car" />
                                </div>
                            </div>
                            <div className={classes.inputWrap}>
                                <div>Category</div>
                                <div className={classes.inputWrapInner}>
                                    <BorderOuterOutlined />
                                    <input placeholder="Select category" />
                                </div>
                            </div>
                        </div>
                        <div className={classes.inputCont}>
                            <div className={classes.inputWrap}>
                                <div>Price Min</div>
                                <div className={classes.inputWrapInner}>
                                    <PayCircleOutlined />
                                    <input placeholder="AED 2,000" />
                                </div>
                            </div>
                            <div className={classes.inputWrap}>
                                <div>Price Max</div>
                                <div className={classes.inputWrapInner}>
                                    <PayCircleOutlined />
                                    <input placeholder="AED 20,000,000" />
                                </div>
                            </div>
                        </div>
                        <div className={classes.range}>
                            <div>Price Range</div>
                            <RangePicker />
                        </div>
                        <div className={classes.Btn}>Search</div>
                    </div>
                </div>

                <div className={classes.right}>
                    <div>
                        <h2>Browse by Brand</h2>
                        <div className={classes.rightInner}>
                            <div className={classes.rightInnerTop}>
                                <div>
                                    <img src={audiImg} />
                                </div>
                                <div>
                                    <img src={hondaImg} />
                                </div>
                                <div>
                                    <img src={hyundaiImg} />
                                </div>
                                <div>
                                    <img src={bentleyImg} />
                                </div>
                            </div>
                            <div className={classes.rightInnerTop}>
                                <div>
                                    <img src={bmwImg} />
                                </div>
                                <div>
                                    <img src={kiaImg} />
                                </div>
                                <div>
                                    <img src={mercedesImg} />
                                </div>
                                <div>
                                    <img src={toyotaImg} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageOptionCategory;
