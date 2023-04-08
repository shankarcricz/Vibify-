import React from "react";
import TopMain from "./TopMain";
import './MainComponent.css';
import BottomMain from "./BottomMain";

const MainComponent = () => {
    return <div className="main-component">
        <TopMain/>
        <BottomMain />
    </div>;
}

export default MainComponent;