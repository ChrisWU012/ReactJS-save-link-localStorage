import React from "react";

export default function HomePage() {
    const style = {
        fontFamily: "Verdana",
        display: "flex",
        alignItems: "center",
        width: "70vw",
        margin: "5px auto",
        fontSize: "40px"
    }
    return (
        <div className="home-page" style={style}>
            This is the Home Page.
            Please go the Link Page to explore more!
        </div>
    )
}