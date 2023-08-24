
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SiderElements = () => {
  const auth = useSelector(state => state.auth);

};

const Sidebar = () => {
  return (
    <div className="sidebar-div">
      <div>
        <SiderElements />
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
