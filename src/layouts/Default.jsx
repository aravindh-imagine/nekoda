import React, { useContext } from "react";
import styles from "../App.module.scss";
import Header from "../templates/Header";
import { Outlet } from "react-router-dom";
import Footer from "../templates/Footer";
import { cursorContext } from "../cursorContext";
import { motion } from "framer-motion";

const Default = () => {
  const { cursorVariants, cursorBg } = useContext(cursorContext);
  return (
    <div className={`${styles.w_full} ${styles.h_full} ${styles.relative}`}>
      <Header />
      <Outlet />
      <Footer />
      <motion.div
        className={styles.customCursor}
        variants={cursorVariants}
        animate={cursorBg}></motion.div>
    </div>
  );
};

export default Default;
