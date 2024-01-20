import React, { useContext, useState } from "react";
import styles from "./page.module.scss";
import aboutBanner from "../assets/png/aboutBanner.png";
import { cursorContext } from "../cursorContext";
import { AnimatePresence, motion } from "framer-motion";
import secure from "./../assets/png/secure.png";
import { GrAdd, GrSubtract } from "react-icons/gr";
import container from "../assets/png/Mask group.png";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      service: "Transportation",
      description: "On the Move with Nekoda Logistics.",
      fullDescription:
        "Depend on Nekoda Logistics for reliable ground transportation solutions. Our diverse fleet guarantees the safe and timely transport of your goods, providing flexibility and efficiency in meeting your logistics needs.",
    },
    {
      service: "Sea Freight",
      description: "Seamless Ocean Solutions with Nekoda Logistics",
      fullDescription:
        "Depend on Nekoda Logistics for reliable ground transportation solutions. Our diverse fleet guarantees the safe and timely transport of your goods, providing flexibility and efficiency in meeting your logistics needs.",
    },
    {
      service: "Air Freight",
      description: "Swift Air Solutions, Delivered by Nekoda.",
      fullDescription:
        "Depend on Nekoda Logistics for reliable ground transportation solutions. Our diverse fleet guarantees the safe and timely transport of your goods, providing flexibility and efficiency in meeting your logistics needs.",
    },
    {
      service: "Rail Freight",
      description: "Green and Efficient Rail Solutions by Nekoda.",
      fullDescription:
        "Depend on Nekoda Logistics for reliable ground transportation solutions. Our diverse fleet guarantees the safe and timely transport of your goods, providing flexibility and efficiency in meeting your logistics needs.",
    },
    {
      service: "Warehousing",
      description: "Secure Storage, Tailored by Nekoda.",
      fullDescription:
        "Depend on Nekoda Logistics for reliable ground transportation solutions. Our diverse fleet guarantees the safe and timely transport of your goods, providing flexibility and efficiency in meeting your logistics needs.",
    },
    {
      service: "Customs Clearance",
      description: "Navigating Customs Hassles, Simplified by Nekoda.",
      fullDescription:
        "Depend on Nekoda Logistics for reliable ground transportation solutions. Our diverse fleet guarantees the safe and timely transport of your goods, providing flexibility and efficiency in meeting your logistics needs.",
    },
  ];

  const handleClick = (e, index) => {
    debugger;
    e.preventDefault();
    setActiveService(index);
  };

  const { mouseEnterHandler, mouseLeaveHandler } = useContext(cursorContext);
  return (
    <>
      <div className={styles.bannerOne}>
        <div className={styles.Image}>
          <img src={aboutBanner} alt="About" draggable={false} />

          <strong className={styles.screenName}>Services</strong>
        </div>
      </div>
      <div className={`${styles.banner}`}>
        <div className={`${styles.container}`}>
          <div className={styles.content}>
            <strong className={styles.bold_text}>
              Secure courier for all <br /> your packages
            </strong>
            <span className={styles.small_text_16}>
              Choose peace of mind with our secure courier service, ensuring the
              safety of all your packages. At Nekoda, we prioritize the security
              and timely delivery of your shipments. Trust us to handle your
              valuable items with the utmost care and reliability, providing a
              secure and dependable courier solution
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
            <img src={secure} alt="banner" draggable={false} />
          </div>
        </div>
      </div>
      <div className={styles.tableBanner}>
        <div className={styles.container}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tableRow}>
                <th className={styles.tableHead}>Services</th>
                <th className={styles.tableHead}>Description</th>
                <th className={styles.tableHead}></th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr className={styles.tableRow} key={index}>
                  <td className={styles.tableData}>{service.service}</td>
                  <td className={styles.tableData}>
                    <p className={styles.description}>{service.description}</p>
                    <AnimatePresence>
                      {index === activeService && (
                        <motion.p
                          initial={{
                            opacity: 0,
                            height: 0,
                          }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                            paddingTop: "1rem",
                            transition: {
                              duration: 0.3,
                              ease: "easeInOut",
                            },
                          }}
                          exit={{ opacity: 0, height: 0 }}>
                          {service.fullDescription}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </td>
                  <td className={styles.tableData}>
                    <div
                      className={styles.circle}
                      onClick={(e) => handleClick(e, index)}>
                      {index === activeService ? <GrSubtract /> : <GrAdd />}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.handling}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Project Handling</h1>
          <div className={styles.flex}>
            <div className={styles.group}>
              <ul className={styles.itemList}>
                <h4 className={styles.subHeading}>
                  Heavy-lift/out-of-gauge handling:
                </h4>
                <li className={styles.item}>Transport feasibility studies</li>
                <li className={styles.item}>Road surveys</li>
                <li className={styles.item}>Transport engineering</li>
              </ul>
              <ul className={styles.itemList}>
                <h4 className={styles.subHeading}>Pre-carriage from EXW:</h4>
                <li className={styles.item}>Transport feasibility studies</li>
                <p className={styles.subItem}>Road</p>
                <p className={styles.subItem}>Rail</p>
                <p className={styles.subItem}>Inland waterway barging</p>
              </ul>
            </div>
            <div className={styles.group}>
              <ul className={styles.itemList}>
                <h4 className={styles.subHeading}>
                  Cargo consolidation at designated Marshaling/staging hubs
                </h4>
                <li className={styles.item}>
                  Packaging solutions and cargo preparation
                </li>
                <li className={styles.item}>Export formalities</li>
                <li className={styles.item}>
                  Dispatch of shipping advice and shipping documentation
                </li>
                <li className={styles.item}>
                  Import customs clearance and permit applications
                </li>
                <li className={styles.item}>
                  Setting equipment onto foundation or erection works using:
                </li>
                <p className={styles.subItem}>Mobile cranes</p>
                <p className={styles.subItem}>Mobile gantry cranes</p>
                <p className={styles.subItem}>Hydraulic jacking techniques</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.serviceEnd}>
        <img src={container} alt="container" draggable={false} />
      </div>
    </>
  );
};

export default Services;
