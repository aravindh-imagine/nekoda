import React from "react";
import contactBanner from "../assets/png/aboutBanner.png";
import styles from "./page.module.scss";

const Contact = () => {
  return (
    <>
      <div className={styles.bannerOne}>
        <div className={styles.Image}>
          <img src={contactBanner} alt="About" draggable={false} />

          <strong className={styles.screenName}>Get in Touch</strong>
        </div>
      </div>
      <div className={styles.contactBanner}>
        <div className={styles.container}>
          <div className={styles.contactFlex}>
            <div className={styles.information}>
              <h1 className={styles.informationHeading}>
                Get in touch with us
              </h1>
              <p className={styles.informationContent}>
                Connect with us for tailored logistics solutions. Your inquiries
                are our priority. Reach out and experience seamless shipping
                with Nekoda
              </p>
              <div className={styles.valueGroup}>
                <label className={styles.label}>Support Center 24/7</label>
                <div className={styles.value}>
                  <a href="tel:+37593156427">+37593156427</a>
                </div>
              </div>
              <div className={styles.valueGroup}>
                <label className={styles.label}>Our Location</label>
                <div className={styles.value}>
                  Lorem Ipsum Dolor Sit Amet Lorem
                </div>
              </div>
              <div className={styles.valueGroup}>
                <label className={styles.label}>Write to us</label>
                <div className={styles.value}>info.nekoda@gmail.com</div>
              </div>
            </div>
            <div className={styles.formBanner}>
              <div className={styles.container}>
                <form className={styles.form}>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      className={styles.formControl}
                      placeholder="Your Name"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="email"
                      className={styles.formControl}
                      placeholder="Your eMail"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <textarea
                      placeholder="Message"
                      className={styles.formControl}
                    />
                  </div>
                  <br />

                  <button className={styles.button}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mapBanner}>
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.07885882704!2d80.20901174999999!3d13.04752545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1705676987578!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
};

export default Contact;
