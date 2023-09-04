import React from "react";
import "./Footer.css";
import gpt3 from "../../assets/GPT-3.png";
import { FooterItem } from "../../components";
const Footer = () => {
  const footerItems = [
    {
      id: 1,
      title: "Links",
      links: ["Overons", "Social Media", "Counters", "Contact"],
    },
    {
      id: 2,
      title: "Company",
      links: ["Terms & Conditions", "Privacy Policy", "Contact"],
    },
    {
      id: 3,
      title: "Get in touch",
      links: [
        "Crechterwoord K12 182 DK Alknjkcb",
        "085-132567",
        "info@payme.net",
      ],
    },
  ];

  return (
    <div className="gpt3__footer section__padding">
      <h1 className="gradient__text">
        Do you want to step in to the <br /> future before others
      </h1>
      <button type="button">Request Early Access</button>
      <div className="gpt3__footer__info">
        <div className="gpt3__footer__info-title">
          <img src={gpt3} alt="GPT-3" />
          <p>
            Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved
          </p>
        </div>
        {footerItems.map((item) => (
          <FooterItem title={item.title} links={item.links} />
        ))}
      </div>
      <p className="gpt3__footer__last">© 2021 GPT-3. All rights reserved.</p>
    </div>
  );
};

export default Footer;
