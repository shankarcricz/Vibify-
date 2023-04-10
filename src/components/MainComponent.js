import React, { useEffect } from "react";
import TopMain from "./TopMain";
import './MainComponent.css';
import BottomMain from "./BottomMain";
import { useDispatch } from "react-redux";
import { addCurrent } from "../store";

const MainComponent = () => {
    const dispatch = new useDispatch();
   
    return <div className="main-component">
        <TopMain />
        <BottomMain />
    </div>;
}

export default MainComponent;