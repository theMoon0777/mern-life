import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Affix, Row } from "antd";

import { commonContext } from "../../../redux/context";
import Linkbar from "./linkbar";

import { imageContext } from "../../../redux/context";
import { useSelector } from "react-redux";

const Header = () => {
  const { state } = useContext(commonContext);
  const auth = useSelector(state => { return (state.auth) ? state.auth : "" });
  const image = useContext(imageContext).state;
  let month = "August"
  return (
        <div className="bb-gray">
            <div className="site-content-container">
                <div className="lx space-between">
                    <span>
                        <p className="font-size-m">Today is {month}</p>
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
