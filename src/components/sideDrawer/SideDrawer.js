import { MenuOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Drawer, Button } from "antd";
import Vector from "../../icons/Vector.png";
import classes from "./SideDrawer.module.css";

const SideDrawer = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                <img src={Vector} className={classes.vecIcon} />
            </Button>
            <Drawer title="" placement="left" onClose={onClose} visible={visible}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};

export default SideDrawer;
