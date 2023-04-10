import React, { useEffect } from "react";
import './LeftMenu.css';
import { FiHome } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';
import { BiLibrary } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { Link, useParams } from "react-router-dom";


const LeftMenu = () => {
    const path = window.location.pathname;
    useEffect(() => {
        const nodes = document.querySelectorAll('.menu-item');
        nodes.forEach(node => {
            node.addEventListener('click', () => {
                nodes.forEach(n => n.classList.remove('active'));
                node.classList.add('active');
            });
        });
    }, [])

    const menuList = [
        { "title": "Home", "icon": <FiHome size={20}/> , "rurl" : '/home' },
        { "title": "Search", "icon": <FiSearch size={20} />,  "rurl" : '/search' },
        { "title": "Your Library", "icon": <BiLibrary size={20} />, "rurl": "/library" },
        { "title": "Create Playlist", "icon": <FaPlus size={20} />, "rurl": "playlist" },
        { "title": "Liked Songs", "icon": <BiLike size={20} /> , "rurl": "liked"}
    ]
    return (
        <div className="left-menu">
            <div className="container">
                <div className="col-1 pt-3" style={{ color: "white" }}><BsThreeDots size={30} /></div>
                {
                    menuList.map((item, index) => {
                        return (
                            <Link to={item.rurl} style={{textDecoration:"none"}} >
                            <div className={item.title === "Create Playlist" ? "menu-item row p-2 mt-3" : "menu-item row p-2"} key={index}>
                                <div className="menu-item-icon col-2">
                                    {item.icon}
                                </div>
                                <div className="col-10 mt-1" style={{ textOverFlow: "elipsis" }}>
                                    <h6>{item.title}</h6>
                                </div>
                            </div>
                            </Link>
                        )
                    })
                }
                <hr style={{ color: "white" }} />
            </div>
            <div className="container d-flex justify-content-center" style={{height:"30vh"}}>
                <div className="align-self-center" style={{cursor:'pointer'}}> <em>@TruthTunes</em></div>
            </div>
        </div>
    );
}

export default LeftMenu;