import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import FeatureSongs from "./FeatureSongs";
import { useSelector } from "react-redux";
const TopMain = () => {
    let message = ''

    const CurrentTime = new Date().toLocaleTimeString();

    if (CurrentTime.includes("AM")) {
        if (CurrentTime.slice(0, 1) > 6 && CurrentTime.slice(0, 1) < 12) {
            message = 'Good Morning'
        } else {
            message = 'Hi Night owl'
        }
    } else {
        if (CurrentTime.slice(0, 1) > 12 && CurrentTime.slice(0, 1) < 4) {
            message = 'Good Afternoon'
        } else if (CurrentTime.slice(0, 1) > 4 && CurrentTime.slice(0, 1) < 7) {
            message = 'Good Evening'
        } else {
            message = 'Good Night'
        }
    }
    const arr = useSelector(state => state.songsList.color)
    useEffect(() => {
        const num = Math.ceil((Math.random() * 5))
        document.querySelector('.top-main').style.background = `linear-gradient(180deg, ${arr[num]}, black)` ;
    }, [])
    
    return (
        <div className="top-main">
            <div className="row navbar">
                <div className="col-2">
                    <div className="row">
                        <span className="col-6 chevron text-center"><BsChevronLeft /></span>
                        <span className="col-6 chevron text-center"><BsChevronRight /></span>
                    </div>
                </div>
                <div className="col-10 text-end">
                    <Button variant="outline-light text-bold" style={{ "margin-right": "45px" }}>Upgrade</Button>
                    <Button variant="outline-dark">Dark</Button>
                </div>
            </div>
            <div className="row"><h4 className="text-light">{message}</h4></div>
            <FeatureSongs />
        </div>
    );
}

export default TopMain;