import React from "react";
import classes from "./Navbar.module.css";
import logo1 from "../../images/logo1.png";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
import icon5 from "../../images/icon5.png";
import icon6 from "../../images/icon6.png";
import SideDrawer from "../../components/sideDrawer/SideDrawer";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { BellOutlined, LoginOutlined, WechatOutlined, HeartOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const history = useNavigate();
    function GotoCategory() {
        history("/");
    }
    return (
        <div className={classes.navbarMain}>
            <div className={classes.InnerWrap}>
                <div className={classes.navbarWrap1}>
                    <img alt="" src={logo1} onClick={() => GotoCategory()} />
                </div>
                <div className={classes.navbarWrap2}>
                    <div className={classes.navbarWrap2Inner}>
                        <BellOutlined className={classes.icon} />
                        {/* <img alt="" src={icon1} /> */}
                        <div>Notifications</div>
                    </div>
                    <div className={classes.navbarWrap2Inner}>
                        <WechatOutlined className={classes.icon} />
                        {/* <img alt="" src={icon2} /> */}
                        <div>My Chat</div>
                    </div>
                    <div className={classes.navbarWrap2Inner}>
                        <HeartOutlined className={classes.icon} />
                        {/* <img alt="" src={icon3} /> */}
                        <div>Favorite</div>
                    </div>
                    <div className={classes.navbarWrap2Inner}>
                        <SearchOutlined className={classes.icon} />
                        {/* <img alt="" src={icon4} /> */}
                        <div>Searches</div>
                    </div>
                </div>
                <div className={classes.navbarWrap3}>
                    <div className={classes.navbarWrap3Inner}>
                        {/* <img alt="" src={icon5} /> */}
                        <LoginOutlined className={classes.icon} />
                        <div>Login</div>
                    </div>
                    <div className={classes.navbarWrap3Inner}>
                        {/* <img alt="" src={icon6} /> */}
                        <UserOutlined className={classes.icon} />
                        <div>SignUp</div>
                    </div>
                </div>
                <div className={classes.navbarWrap4}>
                    <div>Place Your Add</div>
                </div>
                {/* <div className={classes.sidebarIcon}>
                <SideDrawer />
            </div> */}
            </div>
        </div>
    );
}

export default Navbar;
