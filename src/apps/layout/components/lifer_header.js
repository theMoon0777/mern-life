import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Affix, Row } from "antd";

import { commonContext } from "../../../redux/context";
import Linkbar from "./linkbar";

import { imageContext } from "../../../redux/context";
import { useSelector } from "react-redux";

const Header = () => {
    let month_arr = [
        "January",
        "Feburary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const month_cur = new Date().getMonth();
    console.log("THIS IS HEARder part", month_cur);
    const day_cur = new Date().getDate();
  const { state } = useContext(commonContext);
  const auth = useSelector(state => { return (state.auth) ? state.auth : "" });
  const image = useContext(imageContext).state;
  let month = "August"
  return (
        <div className="bb-gray">
            <div className="site-content-container">
                <div className="lx space-between">
                    <span>
                        <p className="font-size-m">Today is {month_arr[month_cur]} &nbsp; {day_cur}</p>
                    </span>
                    <div className="lx">
                        <div className="lx lx-col align-center center">
                            <p className="m-0">{(auth.user) ? auth.user.name : ""}</p>
                            <p className="m-0">{(auth.user)? auth.user.email : ""}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Header;
