import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import FeatureSongs from "./FeatureSongs";
import { useSelector } from "react-redux";
import { AiFillBackward, AiFillForward } from "react-icons/ai";

const TopMain = () => {
  let message = "";
  const [translate, setTranslate] = useState(0);
  const CurrentTime = new Date().toLocaleTimeString();

  if (CurrentTime.includes("AM")) {
    if (CurrentTime.slice(0, 1) > 6 && CurrentTime.slice(0, 1) < 12) {
      message = "Good Morning";
    } else {
      message = "Hi Night owl";
    }
  } else {
    if (CurrentTime.slice(0, 1) > 12 && CurrentTime.slice(0, 1) < 4) {
      message = "Good Afternoon";
    } else if (CurrentTime.slice(0, 1) > 4 && CurrentTime.slice(0, 1) < 7) {
      message = "Good Evening";
    } else {
      message = "Good Night";
    }
  }
  const toggleSign = () => {
    document.querySelector('.bubble')?.classList.remove('d-none')
  }
  const handleBackCarousel = (e) => {
    console.log(e.target.values)
    setTranslate(prev => prev + 200);
  }
  const handleForwardCarousel = () => {
    setTranslate(prev => prev - 200);
  }
  useEffect(() => {
    const num = Math.ceil(Math.random() * 5);
  }, []);

  return (
    <div className="top-main">
      <div className="row navbar">
        <div className="col-2">
          <div className="row">
            <span className="col-6 chevron text-center">
              <BsChevronLeft />
            </span>
            <span className="col-6 chevron text-center">
              <BsChevronRight />
            </span>
          </div>
        </div>
        <div className="col-10 text-end">
          <Button
          onClick={toggleSign}
            variant="outline-light text-bold"
            style={{ "margin-right": "45px" }}
          >
            Sign In
          </Button>
          <Button variant="outline-dark">Logout</Button>
          <div
            style={{
              textAlign: "center",
              flexWrap: "nowrap",
              overflow: "hidden",
              width: "200px",
              height: "120px",
              zIndex:1,
              position:'absolute',
            }}
            className="bubble row d-none">
            <div className="block first_block col" style={{transform : `translateX(${translate}px)`}}>
              <label for="name" className="p-2" style={{ color: "white" }}>
                Name
              </label>
              <input
                id="name"
                style={{ border: "1px solid black" }}
                type="text"
              ></input>
              <div className="row">
                <span className="col">
                  <AiFillBackward aria-disabled style={{ color: "grey" }} size="30px" />
                </span>
                <span className="col">
                  <AiFillForward onClick={handleForwardCarousel} style={{ color: "white" }} size="30px" />
                </span>
              </div>
            </div>
            <div className="block second_block col" style={{transform : `translateX(${translate}px)`}}>
              <label for="email" className="p-2" style={{ color: "white" }}>
                Email
              </label>
              <input
                id="email"
                style={{ border: "1px solid black" }}
                type="text"
              ></input>
              <div className="row">
                <span className="col">
                  <AiFillBackward onClick={handleBackCarousel} style={{ color: "white" }} size="30px" />
                </span>
                <span className="col">
                  <AiFillForward onClick={handleForwardCarousel} style={{ color: "white" }} size="30px" />
                </span>
              </div>
            </div>
            <div className="col block third_block" style={{transform : `translateX(${translate}px)`}}>
              <label for="password" className="p-2" style={{ color: "white" }}>
                Password
              </label>
              <input
                id="password"
                style={{ border: "1px solid black" }}
                type="text"
              ></input>
              <div className="row">
                <span className="col">
                  <AiFillBackward onClick={handleBackCarousel} style={{ color: "white" }} size="30px" />
                </span>
                <span className="col">
                  <AiFillForward onClick={handleForwardCarousel} style={{ color: "white" }} size="30px" />
                </span>
              </div>
            </div>
            <div className="col block fourth_block" style={{transform : `translateX(${translate}px)`}}>
              <label
                for="passwordConfirm"
                className="p-2"
                style={{ color: "white" }}
              >
                PasswordC
              </label>
              <input
                id="password"
                style={{ border: "1px solid black" }}
                type="text"
              ></input>
              <div className="row">
                <span className="col">
                  <AiFillBackward onClick={handleBackCarousel} style={{ color: "white" }} size="30px" />
                </span>
                <span className="col">
                  <AiFillForward style={{ color: "grey" }} size="30px" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h4 className="text-light">{message}</h4>
      </div>
      <FeatureSongs />
    </div>
  );
};

export default TopMain;
