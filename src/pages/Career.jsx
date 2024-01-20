import React from "react";
import careerBanner from "../assets/png/careerBanner.png";
import joinOurTeam from "../assets/png/joinOurTeam.png";
import styles from "./page.module.scss";
import { GrAdd } from "react-icons/gr";

const Career = () => {
  const careers = [
    {
      position: "Stocking Associate",
      location: "Chennai",
      type: "Full Time",
    },
    {
      position: "Stocking Associate",
      location: "Chennai",
      type: "Full Time",
    },
    {
      position: "Stocking Associate",
      location: "Chennai",
      type: "Full Time",
    },
    {
      position: "Stocking Associate",
      location: "Chennai",
      type: "Full Time",
    },
  ];
  return (
    <>
      <div className={styles.bannerOne}>
        <div className={styles.Image}>
          <img src={careerBanner} alt="About" draggable={false} />

          <strong className={styles.screenName}>Career</strong>
        </div>
      </div>
      <div className={`${styles.banner}`}>
        <div className={`${styles.container}`}>
          <div className={styles.content}>
            <strong className={styles.bold_text}>
              Join Our Team, Shape <br /> the Future.
            </strong>
            <span className={styles.small_text_16}>
              Embark on a rewarding career with [Your Company Name]. We value
              innovation, teamwork, and growth. Explore exciting opportunities
              and contribute to our dynamic and thriving logistics family. Your
              journey begins here
            </span>
          </div>
          <div className={`${styles.border_left} ${styles.pl_3rem}`}>
            <img src={joinOurTeam} alt="banner" draggable={false} />
          </div>
        </div>
      </div>
      <div className={styles.tableBanner}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Open Positions</h1>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tableRow}>
                <th className={styles.tableHead}>Position</th>
                <th className={styles.tableHead}>Location</th>
                <th className={styles.tableHead}>Type</th>
                <th className={styles.tableHead}></th>
              </tr>
            </thead>
            <tbody>
              {careers.map((career, index) => (
                <tr className={styles.tableRow} key={index}>
                  <td className={styles.tableData}>{career.position}</td>
                  <td className={styles.tableData}>{career.location}</td>
                  <td className={styles.tableData}>{career.type}</td>
                  <td className={styles.tableData}>
                    <button className={styles.button}>
                      <GrAdd />
                      <span className={styles.buttonText}>Apply Now</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.formBanner}>
        <div className={styles.container}>
          <form className={styles.form}>
            <h1 className={styles.formHeading}>Become a part of our team</h1>
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
              <textarea placeholder="Message" className={styles.formControl} />
            </div>
            <br />

            <button className={styles.button}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Career;
