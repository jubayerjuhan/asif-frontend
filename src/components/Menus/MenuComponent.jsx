import React from "react";
import MenuItem from "../UI/MenuItem/MenuItem";
import PropTypes from "prop-types";
import { Route } from "react-router";

const MenuComponent = (props) => {
  return (
    <React.Fragment>
      <MenuItem linkTo={"/DashboardPage"}>DashboardPage</MenuItem>

      <MenuItem linkTo={"/login"}>Login</MenuItem>

      <MenuItem linkTo={"/all"}>All</MenuItem>
      <MenuItem linkTo={"/category/men"}>Men</MenuItem>
      <MenuItem linkTo={"/orders"}>orders</MenuItem>
      <MenuItem linkTo={"/category/women"}>Women</MenuItem>
      <MenuItem linkTo={"/category/kids"}>Kids</MenuItem>
      <MenuItem linkTo={"/sale"}>Sale</MenuItem>
      <MenuItem linkTo={"/cart"}>
        Cart <span className="badge badge-light">{props.cartCount}</span>
      </MenuItem>
    </React.Fragment>
  );
};

MenuComponent.propTypes = {
  cartCount: PropTypes.number,
};

export default MenuComponent;
