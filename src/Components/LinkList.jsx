import React, { useState, useEffect } from "react";
import "./LinkList.css"
import DeleteIcon from "@material-ui/icons/Delete"

export default function LinkList(props) {
    const [Links, setLink] = useState(() => {
        const localData = localStorage.getItem("links");
        return localData ? JSON.parse(localData) : [{ tag: "Google", link: "https://google.com" }, { tag: "Youtube", link: "https://www.youtube.com/" }]
    });
    useEffect(() => {
        localStorage.setItem("links", JSON.stringify(Links));
    }, [Links]);
    function delLink(e) {
        let index = e.target.id;
        setLink((preVal) => {
            let newLinks = [...preVal];
            newLinks.splice(index, 1);
            return newLinks;
        });
    }

    function addLink(e) {
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        setLink((preValue) => {
            let newData = [...preValue];
            newData.push(formProps);
            return newData;
        })
        e.preventDefault();
    }

    return (
        <div className="linkList">
            <h1>List of links</h1>
            <br></br>
            <br></br>

            {Links.filter((val) => {
                if (props.keyword === "" || props.keyword === undefined) {
                    return val;
                } else if (val.link.toLowerCase().includes(props.keyword.toLowerCase())) {
                    return val;
                } else return false;
            }).map((obj, index) => {
                return (
                    <div className="link" key={index}>
                        <h3 className="grid-item">{obj.tag}</h3>
                        <a className="grid-item" href={obj.link} target="_blank" rel="noreferrer">
                            {obj.link}
                        </a>
                        <br />
                        <button onClick={delLink} id={index} className="delete-icon grid-item">
                            <DeleteIcon />
                        </button>
                        <br />
                    </div>
                );
            })}

            <br />

            <div className="new-link">
                <form onSubmit={addLink}>
                    <input type="text" name="tag" placeholder="tag" />
                    <br />
                    <br />
                    <input type="text" name="link" placeholder="link" />
                    <br />
                    <br />
                    <button type="submit" value="Submit">Add new link</button>
                </form>
            </div>
        </div>
    );
}
