import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Restaurants from "./Restaurants";
import Category from "./Category";
import Orders from "./Orders";
import Offer from "./Offer";
import Header from "../shared/components/Header/header";
import Page404 from "./404";

const Content = ({ sidebarIsOpen, toggleSidebar }) => {
  return (
    <Container
      fluid
      className={classNames("content", { "is-open": sidebarIsOpen })}
    >
      <Header toggleSidebar={toggleSidebar} />

      <Routes toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen}>
        <Route path="*" element={<Navigate replace to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/category" element={<Category />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/error" element={<Page404 />} />
      </Routes>
    </Container>
  );
};

export default Content;
