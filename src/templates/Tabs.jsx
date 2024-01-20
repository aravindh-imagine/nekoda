import React, { useContext, useState } from "react";
import styles from "./Template.module.scss";
import { motion } from "framer-motion";
import sea from "./../assets/png/sea.png";
import { GrAdd } from "react-icons/gr";
import { cursorContext } from "../cursorContext";

const Tabs = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(cursorContext);
  const tabs = [
    {
      name: "Sea Freight",
      label: "Sea Freight",
      image: sea,
      render: () => {
        return (
          <div className={styles.content}>
            <strong className={styles.big_text_44}>
              Seamless Ocean Solutions <br /> with Nekoda Logistics.
            </strong>
            <p className={styles.small_text_16}>
              Trust Nekoda Logistics for reliable sea freight services,
              delivering cost-effective and secure transportation solutions. Our
              expert team ensures smooth sailing for your cargo, providing
              unmatched efficiency and peace of mind.
            </p>
          </div>
        );
      },
    },
    {
      name: "Air Freight",
      label: "Air Freight",
      image: sea,
      render: () => {
        return (
          <div className={styles.content}>
            <strong className={styles.big_text_44}>
              Seamless Ocean Solutions <br /> with Nekoda Logistics.
            </strong>
            <p className={styles.small_text_16}>
              Trust Nekoda Logistics for reliable sea freight services,
              delivering cost-effective and secure transportation solutions. Our
              expert team ensures smooth sailing for your cargo, providing
              unmatched efficiency and peace of mind.
            </p>
          </div>
        );
      },
    },
    {
      name: "Rail Freight",
      label: "Rail Freight",
      image: sea,
      render: () => {
        return (
          <div className={styles.content}>
            <strong className={styles.big_text_44}>
              Seamless Ocean Solutions <br /> with Nekoda Logistics.
            </strong>
            <p className={styles.small_text_16}>
              Trust Nekoda Logistics for reliable sea freight services,
              delivering cost-effective and secure transportation solutions. Our
              expert team ensures smooth sailing for your cargo, providing
              unmatched efficiency and peace of mind.
            </p>
          </div>
        );
      },
    },
    {
      name: "Transportation",
      label: "Transportation",
      image: sea,
      render: () => {
        return (
          <div className={styles.content}>
            <strong className={styles.big_text_44}>
              Seamless Ocean Solutions <br /> with Nekoda Logistics.
            </strong>
            <p className={styles.small_text_16}>
              Trust Nekoda Logistics for reliable sea freight services,
              delivering cost-effective and secure transportation solutions. Our
              expert team ensures smooth sailing for your cargo, providing
              unmatched efficiency and peace of mind.
            </p>
          </div>
        );
      },
    },
    {
      name: "Warehousing",
      label: "Warehousing",
      image: sea,
      render: () => {
        return (
          <div className={styles.content}>
            <strong className={styles.big_text_44}>
              Seamless Ocean Solutions <br /> with Nekoda Logistics.
            </strong>
            <p className={styles.small_text_16}>
              Trust Nekoda Logistics for reliable sea freight services,
              delivering cost-effective and secure transportation solutions. Our
              expert team ensures smooth sailing for your cargo, providing
              unmatched efficiency and peace of mind.
            </p>
          </div>
        );
      },
    },
    {
      name: "Customs Clearance",
      label: "Customs Clearance",
      image: sea,
      render: () => {
        return (
          <div className={styles.content}>
            <strong className={styles.big_text_44}>
              Seamless Ocean Solutions <br /> with Nekoda Logistics.
            </strong>
            <p className={styles.small_text_16}>
              Trust Nekoda Logistics for reliable sea freight services,
              delivering cost-effective and secure transportation solutions. Our
              expert team ensures smooth sailing for your cargo, providing
              unmatched efficiency and peace of mind.
            </p>
          </div>
        );
      },
    },
  ];

  const imageAnimation = {
    hidden: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
    },
    show: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleClick = (e, tab) => {
    e.preventDefault();

    setActiveTab(tab);
  };

  const isSelected = (tab) => activeTab.name === tab.name;

  return (
    <div className={styles.tab}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.tabHeader}>
            {tabs.map((tab, index) => (
              <motion.label
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className={`${styles.tabLabel} ${
                  isSelected(tab) ? `${styles.active}` : ""
                }`}
                key={tab.name}
                onClick={(e) => handleClick(e, tab)}>
                {tab.label}
              </motion.label>
            ))}
          </div>
          <div className={styles.tabContent}>
            <div className={styles.tabFlex}>
              <div className={styles.tabImage}>
                <motion.img
                  key={activeTab.name || "empty"}
                  src={activeTab.image}
                  className={styles.img}
                  variants={imageAnimation}
                  initial="hidden"
                  animate="show"></motion.img>
              </div>
              <div className={styles.tabTextContent}>
                {activeTab && activeTab?.render()}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
