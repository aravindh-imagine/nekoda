import React from "react";
import logo from "../assets/png/NEKODA-FULL-LOGO-WHITE-03 1.svg";
import { NavLink } from "react-router-dom";
import styles from "./Template.module.scss";
import { roots, services } from "../data/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className="">
          <img src={logo} alt="nekoda" draggable={false} />
          <p className={styles.text_white}>
            Your Trusted <br /> Partner in Seamless Logistics Solutions
          </p>
        </div>
        <ul className={styles.nav_group}>
          {roots.map((route, index) => (
            <li className={styles.nav_list} key={index}>
              <NavLink to={route.link}>{route.name}</NavLink>
            </li>
          ))}
        </ul>

        <ul className={styles.nav_group}>
          {services.map((service, index) => (
            <li className={styles.nav_list} key={index}>
              <NavLink to={""}>{service.name}</NavLink>
            </li>
          ))}
        </ul>
        <div className={styles.text_white}>
          <p>
            Warehousing (FTWZ / Bonded / Private)
            <br /> Project Handling
          </p>
        </div>
      </div>
      <div className={styles.copy_right}>
        © {currentYear} Nekoda, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
