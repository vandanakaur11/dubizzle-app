import React from "react";
import classes from "./ItemDetails.module.css";

function ItemDetails() {
    return (
        <div className={classes.main}>
            <div className={classes.wrap}>
                <div className={classes.info}>Doors</div>
                <div className={classes.infoVal}>5+doors</div>
            </div>
            <div className={classes.wrap}>
                <div className={classes.info}>Body condition</div>
                <div className={classes.infoVal}>Perfect inside and out</div>
            </div>
            <div className={classes.wrap}>
                <div className={classes.info}>Mechanical condition</div>
                <div className={classes.infoVal}>Perfect inside and out</div>
            </div>
            <div className={classes.wrap}>
                <div className={classes.info}>Seller type</div>
                <div className={classes.infoVal}>Owner</div>
            </div>
            <div className={classes.wrap}>
                <div className={classes.info}>Body Type</div>
                <div className={classes.infoVal}>SUV</div>
            </div>
            <div className={classes.wrap}>
                <div className={classes.info}>No. of Cylinders</div>
                <div className={classes.infoVal}>4</div>
            </div>
            <div className={classes.wrap}>
                <div className={classes.info}>Transmission Type</div>
                <div className={classes.infoVal}>Automatic Transmission</div>
            </div>
            <div className={classes.wrap}>
                <div className={classes.info}>Regional Specs</div>
                <div className={classes.infoVal}>Gcc Specs</div>
            </div>
            <div className={classes.wrap}>
                <div className={classes.info}>Horsepower</div>
                <div className={classes.infoVal}>200 - 300 HP</div>
            </div>
            <div className={classes.wrap}>
                <div className={classes.info}>Fuel Type</div>
                <div className={classes.infoVal}>Gasoline</div>
            </div>
            <div className={classes.wrap}>
                <div className={classes.info}>Extras</div>
                <div className={classes.infoVal}>
                    Climate Control, Keyless Entry, Leather Seats, Parking Sensors, Premium Sound System, Rear View Camera
                </div>
            </div>
            <div className={classes.wrap}>
                <div className={classes.info}>Streering Side</div>
                <div className={classes.infoVal}>Left Hand Side</div>
            </div>
            <h2>DESCRIPTION</h2>
            <div className={classes.desc}>
                {/* <h2>DESCRIPTION</h2> */}
                <div>
                    Lörem ipsum topsa trelöras. Kanas nysuvoligt. Serieskytt an exov. Nyd beren lölyhav. Stenovyse krod disam i bett. Pelyde
                    vybel, rere. Vas lyng. Nevis risast som dissade lade. Demostik käment miling. Geotaggning eurov treskade. Renågisk kar,
                    men bion. Mikrokemi tepiment. Geoblockering fav. Föjer sodir i homologi i migt. Laning intimitetskoordinator. Döfade
                    telig. Vivodat doliga. Megaling jivyst vodinde till airbaghjälm. Youtuber lande tåck. Sysesk päs att polypp. Difadade
                    föv. Mononånynar spermatvätt de vibel. Giganell fiktigt. Mugon prolingar. Reatris plavis, geora nere. Du kan vara
                    drabbad.
                </div>
            </div>
            <h2>INSPECTION AND HISTORY</h2>
            <div className={classes.inspect}>
                {/* <h2>INSPECTION AND HISTORY</h2> */}
                <div>
                    <div>
                        <div>icon</div>
                        <div>
                            <div>Accident History Check</div>
                            <div>
                                Get a detailed view of this vehicle’s accident history, import status, and mileage benchmarking.View sample
                                report
                            </div>
                            <div>Buy Report</div>
                        </div>
                    </div>
                    <div>
                        <div>icon</div>
                        <div>
                            <div>Accident History Check</div>
                            <div>
                                Get a detailed view of this vehicle’s accident history, import status, and mileage benchmarking.View sample
                                report
                            </div>
                            <div>Buy Report</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetails;
