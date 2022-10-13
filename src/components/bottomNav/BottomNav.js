import React from "react";
import classes from "./BottomNav.module.css";
import { HomeOutlined, SearchOutlined, PlusCircleOutlined, MessageOutlined, PlusOutlined, HeartOutlined } from "@ant-design/icons";
import homeBottom from "../../icons/homeBottom.png";
import heartBottom from "../../icons/heartBottom.png";
import searchBottom from "../../icons/searchBottom.png";
import messageBottom from "../../icons/messageBottom.png";
import plusBottom from "../../icons/plusBottom.png";

function BottomNav() {
    return (
        <div className={classes.main}>
            <div className={classes.wrapper}>
                <div className={classes.wrapperInner}>
                    {/* <HomeOutlined className={classes.icon} /> */}
                    <img src={homeBottom} className={classes.icon} />

                    {/* <div>Home</div> */}
                </div>
                <div className={classes.wrapperInner}>
                    {/* <SearchOutlined className={classes.icon} /> */}
                    <img src={searchBottom} className={classes.icon} />
                    {/* <div>Search</div> */}
                </div>
                <div className={classes.wrapperInner}>
                    {/* <PlusOutlined className={classes.iconAd} /> */}
                    <img src={plusBottom} className={classes.iconAd} />
                    {/* <PlusCircleOutlined className={classes.iconAd} /> */}
                    {/* <div>Post an ad</div> */}
                </div>
                <div className={classes.wrapperInner}>
                    {/* <HeartOutlined className={classes.icon} /> */}
                    <img src={heartBottom} className={classes.icon} />
                    {/* <MessageOutlined className={classes.icon} /> */}
                    {/* <div>Messages</div> */}
                </div>
                <div className={classes.wrapperInner}>
                    {/* <MessageOutlined className={classes.icon} /> */}
                    <img src={messageBottom} className={classes.icon} />
                    {/* <div>Profile</div> */}
                </div>
            </div>
        </div>
    );
}

export default BottomNav;
