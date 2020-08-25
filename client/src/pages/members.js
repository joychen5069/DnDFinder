import React, { Component } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./Pages.css";
import Navbar from "../components/navigation/Navbar";
import UserProfile from "../components/userProfile/userProfile";

const Members = (props) => {
  return (
    <>
      <div className="container mainWrapper">
        <Header />
        <Navbar logout={props.logout} />
        <h3 className="text-center pageTitle">Welcome to members dashboard!</h3>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <UserProfile />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Members;
