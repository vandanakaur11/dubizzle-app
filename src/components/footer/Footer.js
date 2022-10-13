import React from "react";
import classes from "./Footer.module.css";

function Footer() {
    return (
        <div className={classes.wrap}>
            <div className={classes.main}>
                <div>
                    <h3>Company</h3>
                    <h4>About Us</h4>
                    <h4>Advertising</h4>
                    <h4>Careers</h4>
                    <h4>Terms of Use</h4>
                    <h4>Privacy Policy</h4>
                </div>
                <div>
                    <h3>UAE</h3>
                    <h4>Dubai</h4>
                    <h4>Abu Dhabi</h4>
                    <h4>Ras al Khaimah</h4>
                    <h4>Sharjah</h4>
                    <h4>Fujairah</h4>
                    <h4>Ajamn</h4>
                    <h4>Umm al Quwain</h4>
                    <h4>Al Ain</h4>
                </div>
                <div>
                    <h3>Other Countries</h3>
                    <h4>Egypt</h4>
                    <h4>Bahrain</h4>
                    <h4>Saudi Arabia</h4>
                    <h4>Lebanon</h4>
                    <h4>Kuwait</h4>
                    <h4>Oman</h4>
                    <h4>Qatar</h4>
                    <h4>Pakistan</h4>
                </div>
                <div>
                    <h3>Get Social</h3>
                    <h4>Facebook</h4>
                    <h4>Twitter</h4>
                    <h4>Youtube</h4>
                    <h4>Instagram</h4>
                </div>
                <div>
                    <h3>Support</h3>
                    <h4>Help</h4>
                    <h4>Contact Us</h4>
                </div>
                <div>
                    <h3>Languages</h3>
                    <h4>English</h4>
                    <h4>Arabic</h4>
                </div>
            </div>
            <div className={classes.copy}>&copy; dubizzle.com 2022, All Rights Reserved</div>
        </div>
    );
}

export default Footer;
