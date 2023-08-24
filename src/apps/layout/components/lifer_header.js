import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Affix, Row } from "antd";

import { commonContext } from "../../../redux/context";
import Linkbar from "./linkbar";

import { imageContext } from "../../../redux/context";

const Header = () => {
  const { state } = useContext(commonContext);
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
                            <p className="m-0">Wiliwork</p>
                            <p className="m-0">wiliwork@gmail.com</p>
                        </div>
                        <div className="lx align-center">
                            <img className="round w-50" src={image.avatar} alt="...loading"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Header;
