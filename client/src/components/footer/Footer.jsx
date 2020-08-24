import React from "react";
import "../../pages/Pages.css";

const date = new Date();
const currentYear = date.getFullYear();

const Footer = () => {
  return (
    <>
      <footer>
        <p className="py-3">
          &copy;{currentYear} &bull; Dnd Finder &bull; Built by Joy Chen
        </p>
      </footer>
    </>
  );
};
export default Footer;
