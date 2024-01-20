import React from "react";
import styles from "./Template.module.scss";
import quotes from "./../assets/png/quotes.png";

const Testimonial = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <img src={quotes} alt="quotes" />
        <div className={styles.content}>
          <strong className={styles.big_text_54}>
            Grateful for your <br /> dedication; together, we'll <br /> conquer
            new logistics <br />
            horizons.
          </strong>
        </div>
        <div className={styles.profile_card}>
          <div className={styles.circle}></div>
          <div className={styles.name_card}>
            <label className={styles.nameLabel}>Chairmen</label>
            <div className={styles.name}>Shekhar Chaki</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
