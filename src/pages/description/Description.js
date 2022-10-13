import React from "react";
import classes from "./Description.module.css";
// import BottomNavbar from "../../components/bottomNavbar/BottomNavbar";
import { useLocation } from "react-router-dom";
import ItemSlider from "../../components/itemSlider/ItemSlider";
import { HeartOutlined, ShareAltOutlined, PhoneOutlined, MessageOutlined } from "@ant-design/icons";
import ItemOverview from "../../components/itemOverview/ItemOverview";
import ItemDetails from "../../components/itemDetails/ItemDetails";
import arrowleft from "../../icons/arrow-left.png";
import { useNavigate } from "react-router-dom";
import Sean1 from "../../images/SeanImg.png";

function Description() {
    const { state } = useLocation();
    const history = useNavigate();
    function GotoHome() {
        history("/");
    }
    console.log(state, "ss");
    return (
        <div>
            <div className={classes.forPC}>
                {/* <BottomNavbar /> */}
                <div className={classes.main}>
                    <div>Home/Motors/Used Car/{`${state.productTitle}`}</div>
                    <h2>{state.productTitle}</h2>
                    <div>{state.productLocation}</div>
                </div>
                <div className={classes.sliderWrap}>
                    <div className={classes.sliderInnerWrap}>
                        <ItemSlider name={state.name} />
                    </div>
                    <div className={classes.sliderOption}>
                        <div className={classes.infoWrap}>
                            <h2>AED 200,00</h2>
                            <div>
                                <ShareAltOutlined className={classes.icon} />
                                <HeartOutlined className={classes.icon} />
                            </div>
                        </div>
                        <div className={classes.BtnSeller}>
                            <MessageOutlined className={classes.BtnIconSell} />
                            <div>Chat With Seller</div>
                        </div>
                        <div className={classes.BtnNo}>
                            <PhoneOutlined className={classes.BtnIconNo} />
                            <div>Show Phone Number</div>
                        </div>
                    </div>
                </div>
                <ItemOverview />
                <ItemDetails />
            </div>
            <div className={classes.forMobile}>
                <div className={classes.nav}>
                    <div className={classes.navInner}>
                        <img src={arrowleft} alt="/" onClick={() => GotoHome()} />
                        <div className={classes.category}>
                            <i>DESCRIPTION</i>
                        </div>
                        <div className={classes.hide}>icon</div>
                    </div>
                </div>
                <div className={classes.mainMob}>
                    <img src={state.name} />
                </div>
                <div className={classes.infoMob}>
                    <div className={classes.nameMob}>{state.productTitle}</div>
                    <div className={classes.addressMob}>{state.productLocation}</div>
                    <div className={classes.priceMob}>{state.productPrice}</div>
                </div>
                <div className={classes.itemInfoWrap}>
                    <div className={classes.itemInfo}>
                        <div>Company</div>
                        <div>Audi</div>
                    </div>
                    <div className={classes.itemInfo}>
                        <div>Color</div>
                        <div>Blue</div>
                    </div>
                    <div className={classes.itemInfo}>
                        <div>Type</div>
                        <div>SUV</div>
                    </div>
                    <div className={classes.itemInfo}>
                        <div>Fuel</div>
                        <div>Petrol</div>
                    </div>
                    <div className={classes.itemInfo}>
                        <div>Kilometers</div>
                        <div>100,000</div>
                    </div>
                </div>
                <div className={classes.overviewMob}>
                    <h3>Overview</h3>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book.
                        <br />
                        <br />
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
                <div className={classes.photoGallery}>
                    <h3>Photo Gallery</h3>
                    <div>
                        <div className={classes.photoCont}>
                            <img src={state.name} alt="" />
                            <img src={state.name} alt="" />
                            <img src={state.name} alt="" />
                        </div>
                        <div className={classes.photoCont}>
                            <img src={state.name} alt="" />
                            <img src={state.name} alt="" />
                            <img src={state.name} alt="" />
                        </div>
                        <div className={classes.photoCont}>
                            <img src={state.name} alt="" />
                            <img src={state.name} alt="" />
                            <img src={state.name} alt="" />
                        </div>
                    </div>
                </div>
                <div className={classes.contactWrap}>
                    <h3>Contact</h3>
                    <div className={classes.contactWrapInner}>
                        <img src={Sean1} alt="/" />
                        <div className={classes.imgInfo}>
                            <div>Larry Page</div>
                            <div>Santa Monica Beach</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Description;
