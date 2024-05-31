import React from "react";
import scss from "../footer/Footer.module.scss";
import logofoot from "../../../assets/Logo.svg";

import vec3 from "../../../assets/in.png";
import vec2 from "../../../assets/Vector (4).png";
import vec1 from "../../../assets/Vector (5).png";

import cc from "../../../assets/Vector (6).png";

const Footer = () => {
  return (
    <footer id={scss.footer}>
      <div className="container">
        <div className={scss.footer}>
          <div className={scss.footbox1}>
            <img className={scss.logofoot} src={logofoot} alt="" />
            <div className={scss.footlogo}>
              <img src={vec1} alt="" />
              <img src={vec2} alt="" />
              <img src={vec3} alt="" />
            </div>
            <div className={scss.ppp}>
              <img src={cc} alt="" />
              <p>
                Copy Right 2021. <br /> All rights reserved
              </p>
            </div>
          </div>

          <div className={scss.footbox2}>
            <h4>Services</h4>
            <a href="">Design</a>
            <a href="">Coding</a>
            <a href="">Developepment</a>
            <a href="">Marketing</a>
            <a href="">Digital Marketing</a>
            <a href="">Product Design</a>
          </div>

          <div className={scss.footbox3}>
            <h4>Product</h4>
            <a href="">Hotel Marnagement</a>
            <a href="">Rent Marnagement</a>
            <a href="">Micro-Finance</a>
            <a href="">industry</a>
            <a href="">Dhoko</a>
          </div>

          <div className={scss.footbox4}>
            <h4>Company</h4>
            <a href="">Las Vegas</a>
            <a href="">New York</a>
            <a href="">Tokio</a>
            <a href="">Paris</a>
          </div>

          <div className={scss.footbox5}>
            <div className={scss.footlogo}>
              <img src={vec1} alt="" />
              <img src={vec2} alt="" />
              <img src={vec3} alt="" />
            </div>
            <div className={scss.ppp}>
              <img src={cc} alt="" />
              <p>Copy Right 2021. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
