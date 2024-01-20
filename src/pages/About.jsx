import React, { useContext } from "react";
import styles from "./page.module.scss";
import aboutBanner from "../assets/png/aboutBanner.png";
import { cursorContext } from "../cursorContext";
import { motion } from "framer-motion";
import about from "./../assets/png/about.png";
import { GrAdd } from "react-icons/gr";
import HappyClients from "../templates/HappyClients";
import Testimonial from "../templates/Testimonial";
import Tabs from "../templates/Tabs";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(cursorContext);

  return (
    <>
      <div className={styles.bannerOne}>
        <div className={styles.Image}>
          <img src={aboutBanner} alt="About" draggable={false} />

          <strong className={styles.screenName}>About Us</strong>
        </div>
      </div>
      <div className={`${styles.banner}`}>
        <div className={`${styles.container}`}>
          <div className={styles.content}>
            <strong className={styles.bold_text}>
              Nekoda Logistics,
              <br /> stands as your trusted <br /> partner for seamless <br />
              freight and project <br /> handling
            </strong>
            <span className={styles.small_text_16}>
              Your logistics challenges find expert solutions at Nekoda – where
              efficiency meets reliability.
            </span>

            <div className={`${styles.view_more}`}>
              <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className={styles.circle}>
                <GrAdd />
              </motion.div>
              <span className={styles.value}>View more</span>
            </div>
          </div>
          <div className={`${styles.border_left} ${styles.pl_3rem}`}>
            <img src={about} alt="banner" draggable={false} />
          </div>
        </div>
      </div>
      <HappyClients />
      <Testimonial />
      <Tabs />
    </>
  );
};

export default About;
