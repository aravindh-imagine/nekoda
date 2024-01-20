import React, { useContext, useState } from "react";
import styles from "./Template.module.scss";
import app_style from "./../App.module.scss";
import logo from "./../assets/png/NEKODA-FULL-LOGO-WHITE-03 1.svg";
import { NavLink } from "react-router-dom";
import { roots } from "../data/data";
import { cursorContext } from "../cursorContext";
import { motion } from "framer-motion";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);

  function headerScroll() {
    if (window.scrollY >= 600) {
      setStickyHeader(true);
    } else {
      setStickyHeader(false);
    }
  }

  window.addEventListener("scroll", headerScroll);

  const { mouseEnterHandler, mouseLeaveHandler } = useContext(cursorContext);

  return (
    <div
      className={
        stickyHeader
          ? `${styles.header} ${styles.fixedHeader}`
          : `${styles.header}`
      }>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="nekoda" draggable={false} />
        </div>

        <div
          className={`${app_style.ml_auto} ${app_style.flex} ${app_style.align_center} ${app_style.flex_col}`}>
          <button
            className={styles.menuButton}
            onClick={() => setMenuActive(true)}>
            <RxHamburgerMenu />
          </button>
          <ul
            className={
              menuActive
                ? ` ${styles.navbar} ${styles.mobileActive}`
                : `${styles.navbar}`
            }>
            <button
              className={`${styles.menuButton} ${styles.primary}`}
              onClick={() => setMenuActive(false)}>
              <RxCross1 />
            </button>
            {roots.map((route, index) => (
              <motion.li
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className={styles.nav_list}
                key={index}>
                <NavLink
                  to={route.link}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.current} ${styles.nav_button}`
                      : `${styles.nav_button}`
                  }
                  onClick={() => setMenuActive(false)}>
                  {route.name}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
