import React from "react";
import "./SideBarOption.css"

export default function SideBarOption({ Icon, title, number }) {
    return (
        <div className="sidebarOption">
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}