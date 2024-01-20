import React from "react";
import styles from "./Template.module.scss";

const HappyClients = () => {
  return (
    <div className={styles.happyClient}>
      <div className={styles.container}>
        <div className={styles.group}>
          <div className={styles.item}>
            <label className={styles.itemLabel}>Delivered Packages</label>
            <p className={styles.count}>7255</p>
          </div>
          <div className={styles.item}>
            <label className={styles.itemLabel}>KM Per Month</label>
            <p className={styles.count}>5348</p>
          </div>
          <div className={styles.item}>
            <label className={styles.itemLabel}>Tons Of Goods</label>
            <p className={styles.count}>8500</p>
          </div>
          <div className={styles.item}>
            <label className={styles.itemLabel}>Satisfied Clients</label>
            <p className={styles.count}>3125</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyClients;
