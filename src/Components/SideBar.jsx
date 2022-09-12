import React from "react";
import "./SideBar.css";
import SideBarOption from "./SideBarOption.jsx";
import LinkIcon from "@material-ui/icons/Link";
import HomeIcon from "@material-ui/icons/Home"
import { Link, Outlet } from "react-router-dom";

export default function SideBar() {
    return (
        <div className="sidebar">
            <Link to={"/"} style={{ textDecoration: 'none' }}>
                <SideBarOption Icon={HomeIcon} title="Home" />
            </Link>
            <Link to={"/links"} style={{ textDecoration: 'none' }}>
                <SideBarOption Icon={LinkIcon} title="Links" number={2} />
            </Link>
            <Outlet />
        </div>
    )
}