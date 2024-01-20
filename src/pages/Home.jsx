import React, { useContext, useEffect, useState } from "react";
import banner from "./../assets/png/slider/nekoda.png";
import page from "./page.module.scss";
import about from "./../assets/png/about.png";
import { GrAdd } from "react-icons/gr";
import Tabs from "../templates/Tabs";
import Testimonial from "../templates/Testimonial";
import ocean from "../assets/png/oceanFreight.svg";
import rail from "../assets/png/railFreight.svg";
import land from "../assets/png/landFreight.svg";
import air from "../assets/png/airFreight.svg";
import secure from "../assets/png/secure.png";
import HappyClients from "../templates/HappyClients";
import logo from "../assets/png/NGL-LOGO-300X300PIXELS 1.png";
import { motion } from "framer-motion";
import { cursorContext } from "../cursorContext";

const Home = () => {
  let slideInterval;
  const autoScroll = true;
  const slides = [
    {
      slideName: "Transportation",
      slideImg: banner,
      render: () => {
        return (
          <div className={page.sliderIn}>
            <div className={page.logo}>
              <img src={logo} alt="logo" draggable={false} />
            </div>
            <div className={page.content}>
              <strong className={page.heading}>
                Your Trusted <br /> Partner in Seamless <br /> Logistics
                Solutions
              </strong>
              <p className={page.subHeading}>
                No matter the location we got you covered with our global
                shipping!
              </p>
            </div>
          </div>
        );
      },
    },
    {
      slideName: "Sea Freight",
      slideImg: banner,
      render: () => {
        return (
          <div className={page.sliderIn}>
            <div className={page.logo}>
              <img src={logo} alt="logo" draggable={false} />
            </div>
            <div className={page.content}>
              <strong className={page.heading}>
                Your Trusted <br /> Partner in Seamless <br /> Logistics
                Solutions
              </strong>
              <p className={page.subHeading}>
                No matter the location we got you covered with our global
                shipping!
              </p>
            </div>
          </div>
        );
      },
    },
    {
      slideName: "Air Freight",
      slideImg: banner,
      render: () => {
        return (
          <div className={page.sliderIn}>
            <div className={page.logo}>
              <img src={logo} alt="logo" draggable={false} />
            </div>
            <div className={page.content}>
              <strong className={page.heading}>
                Your Trusted <br /> Partner in Seamless <br /> Logistics
                Solutions
              </strong>
              <p className={page.subHeading}>
                No matter the location we got you covered with our global
                shipping!
              </p>
            </div>
          </div>
        );
      },
    },
    {
      slideName: "Rail Freight",
      slideImg: banner,
      render: () => {
        return (
          <div className={page.sliderIn}>
            <div className={page.logo}>
              <img src={logo} alt="logo" draggable={false} />
            </div>
            <div className={page.content}>
              <strong className={page.heading}>
                Your Trusted <br /> Partner in Seamless <br /> Logistics
                Solutions
              </strong>
              <p className={page.subHeading}>
                No matter the location we got you covered with our global
                shipping!
              </p>
            </div>
          </div>
        );
      },
    },
    {
      slideName: "Warehousing",
      slideImg: banner,
      render: () => {
        return (
          <div className={page.sliderIn}>
            <div className={page.logo}>
              <img src={logo} alt="logo" draggable={false} />
            </div>
            <div className={page.content}>
              <strong className={page.heading}>
                Your Trusted <br /> Partner in Seamless <br /> Logistics
                Solutions
              </strong>
              <p className={page.subHeading}>
                No matter the location we got you covered with our global
                shipping!
              </p>
            </div>
          </div>
        );
      },
    },
    {
      slideName: "Customers Clearance",
      slideImg: banner,
      render: () => {
        return (
          <div className={page.sliderIn}>
            <div className={page.logo}>
              <img src={logo} alt="logo" draggable={false} />
            </div>
            <div className={page.content}>
              <strong className={page.heading}>
                Your Trusted <br /> Partner in Seamless <br /> Logistics
                Solutions
              </strong>
              <p className={page.subHeading}>
                No matter the location we got you covered with our global
                shipping!
              </p>
            </div>
          </div>
        );
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (e, index) => {
    e.preventDefault();

    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  function autoSlide() {
    slideInterval = setInterval(nextSlide, 3000);
  }

  const imageAnimation = {
    hidden: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
    },
    show: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        delay: 0,
        duration: 0,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    if (autoScroll) {
      autoSlide();
    }

    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  const { mouseEnterHandler, mouseLeaveHandler } = useContext(cursorContext);

  return (
    <>
      <div className={page.slider}>
        <div className={page.list}>
          {slides.map((slide, index) => (
            <div
              className={
                index === currentIndex
                  ? `${page.item} ${page.currentItem}`
                  : `${page.item}`
              }
              key={index}>
              {index === currentIndex && (
                <motion.img
                  key={slide.slideName || "empty"}
                  src={slide.slideImg}
                  variants={imageAnimation}
                  initial="hidden"
                  animate="show"></motion.img>
              )}

              {/* <div className={page.inside_banner}></div> */}
            </div>
          ))}
        </div>
        <div className={page.thumbnail}>
          <div className={page.group}>
            {slides.map((slide, index) => (
              <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className={
                  index === currentIndex
                    ? `${page.thumbnailItem} ${page.activeThumbnail}`
                    : `${page.thumbnailItem}`
                }
                key={index}
                onClick={(e) => handleClick(e, index)}>
                {slide.slideName}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className={`${page.banner} ${page.bg_grey}`}>
        <div className={`${page.container}`}>
          <div className={page.content}>
            <strong className={page.bold_text}>
              Nekoda Logistics,
              <br /> stands as your trusted <br /> partner for seamless <br />
              freight and project <br /> handling
            </strong>
            <span className={page.small_text_16}>
              Your logistics challenges find expert solutions at Nekoda – where
              efficiency meets reliability.
            </span>

            <div className={`${page.view_more}`}>
              <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className={page.circle}>
                <GrAdd />
              </motion.div>
              <span className={page.value}>View more</span>
            </div>
          </div>
          <div className={`${page.border_left} ${page.pl_3rem}`}>
            <img src={about} alt="banner" draggable={false} />
          </div>
        </div>
      </div>
      <Tabs />
      <Testimonial />
      <div className={page.freight}>
        <div className={page.container}>
          <div className={page.group}>
            <div className={page.item}>
              <div className={page.itemImage}>
                <img src={ocean} alt="Ocean Freight" draggable={false} />
              </div>
              <label className={page.label}>Ocean Freight</label>
              <p className={page.text}>
                Global sea freight expertise – secure, timely, and
                cost-effective cargo solutions with Nekoda
              </p>
            </div>
            <div className={page.item}>
              <div className={page.itemImage}>
                <img src={rail} alt="Rail Freight" draggable={false} />
              </div>
              <label className={page.label}>Rail Freight</label>
              <p className={page.text}>
                Sustainable, efficient, and cost-effective freight
                transportation for your cargo.
              </p>
            </div>
            <div className={page.item}>
              <div className={page.itemImage}>
                <img src={land} alt="Land Freight" draggable={false} />
              </div>
              <label className={page.label}>Land Freight</label>
              <p className={page.text}>
                Dependable land freight by Nekoda– timely, secure, and flexible
                transport for your valuable cargo.
              </p>
            </div>
            <div className={page.item}>
              <div className={page.itemImage}>
                <img src={air} alt="Air Freight" draggable={false} />
              </div>
              <label className={page.label}>Air Freight</label>
              <p className={page.text}>
                Swift and reliable air freight solutions by Nekoda – ensuring
                your cargo reaches its destination seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${page.banner}`}>
        <div className={`${page.container}`}>
          <div className={page.content}>
            <strong className={page.bold_text}>
              Secure courier for all <br /> your packages
            </strong>
            <span className={page.small_text_16}>
              Choose peace of mind with our secure courier service, ensuring the
              safety of all your packages. At Nekoda, we prioritize the security
              and timely delivery of your shipments. Trust us to handle your
              valuable items with the utmost care and reliability, providing a
              secure and dependable courier solution
            </span>

            <div className={`${page.view_more}`}>
              <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className={page.circle}>
                <GrAdd />
              </motion.div>
              <span className={page.value}>View more</span>
            </div>
          </div>
          <div className={`${page.border_left} ${page.pl_3rem}`}>
            <img src={secure} alt="banner" draggable={false} />
          </div>
        </div>
      </div>
      <HappyClients />
      <div className={page.parallax}>
        <div className={page.container}>
          <div className={page.group}>
            <strong className={page.heading}>
              Reliable Deliveries,
              <br /> Unmatched Security: <br /> Your Trusted Courier Partner.
            </strong>
            <p className={page.subHeading}>
              We offers a spectrum of services including Sea and Air Freight,
              Customs <br /> Clearance, Warehousing, Transportation, Rail
              Freight, and expert Project <br /> Handling
            </p>
          </div>
        </div>
      </div>
      <div className={page.innovative}>
        <div className={page.container}>
          <div className={page.innoText}>
            An innovative service for easy & fast <br /> shipments,
            transportation coordinated by <br /> qualified staff
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
