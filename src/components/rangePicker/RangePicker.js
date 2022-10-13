import { Slider, Switch } from "antd";
import React from "react";

class RangePicker extends React.Component {
    state = {
        disabled: false,
    };

    handleDisabledChange = (disabled) => {
        this.setState({ disabled });
    };

    render() {
        const { disabled } = this.state;
        return (
            <div>
                {/* <Slider defaultValue={30} disabled={disabled} /> */}
                <Slider range defaultValue={[20, 50]} disabled={disabled} style={{ width: "100%" }} />
                {/* Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} /> */}
            </div>
        );
    }
}

export default RangePicker;
