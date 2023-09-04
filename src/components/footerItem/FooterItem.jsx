import React from "react";
import "./FooterItem.css";
const FooterItem = ({ title, links }) => {
  return (
    <div className="gpt3__footerItem">
      <div className="gpt3__footerItem__title">{title}</div>
      {links.map((link) => (
        <div className="gpt3__footerItem__link">{link}</div>
      ))}
    </div>
  );
};

export default FooterItem;
