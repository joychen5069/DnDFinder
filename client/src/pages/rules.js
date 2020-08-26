import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navigation/Navbar";
import Rules from '../components/communityRules/rules'

const RulesPage = (props) => {
  return (
    <>
      <div className="container mainWrapper">
        <Header />
        <Navbar logout={props.logout} />
        <div className="row ">
            <div className="col-sm-12 col-md-5">
              <Rules />
            </div>
          </div>
        
        <Footer />
      </div>
    </>
  );
};
export default RulesPage;
