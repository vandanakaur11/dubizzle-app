import React from "react";
import classes from "./Layout.module.css";
import FrontPage from "../pages/frontPage/FrontPage";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import Categories from "../pages/categories/Categories";
import Description from "../pages/description/Description";
import CategoryScreen from "../components/categoryScreen/CategoryScreen";
import BottomNav from "../components/bottomNav/BottomNav";
import BottomNavbar from "../../src/components/bottomNavbar/BottomNavbar";

function Layout() {
    return (
        <div>
            <div className={classes.forPC}>
                <Router>
                    <Navbar />
                    <BottomNavbar />
                    <Routes>
                        <Route exact path="/" element={<FrontPage />}></Route>
                        <Route exact path="/categories" element={<Categories />}></Route>
                        <Route exact path="/description" element={<Description />}></Route>
                    </Routes>
                    <Footer />
                </Router>
            </div>
            <div className={classes.forMobile}>
                <Router>
                    {/* <Navbar /> */}
                    <Routes>
                        <Route exact path="/" element={<FrontPage />}></Route>
                        <Route exact path="/categoriesMobile" element={<CategoryScreen />}></Route>
                        <Route exact path="/description" element={<Description />}></Route>
                    </Routes>
                    <BottomNav />
                </Router>
            </div>
        </div>
    );
}

export default Layout;
