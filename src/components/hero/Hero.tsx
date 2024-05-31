import React from "react";
import scss from "../hero/Hero.module.scss";
import nout from "../../assets/image_6-removebg-preview.png";
import nout2 from "../../assets/image 7.png";
import fon from "../../assets/Vector 1.png";
import logo1 from "../../assets/accessibility-outline 1.png";
import logo2 from "../../assets/analytics-outline 1.png";
import logo3 from "../../assets/cash-outline 1.png";
import logo4 from "../../assets/receipt-outline 1.png";

import logo5 from "../../assets/Vector (1).png";
import logo7 from "../../assets/Vector (3).png";
import logo8 from "../../assets/Vector.png";
import paym from "../../assets/image 14.png";

import mask from "../../assets/Group 429.png";
import maskfon from "../../assets/Mask Group.png";

import ava1 from "../../assets/Group 22.png";
import ava2 from "../../assets/Group 23.png";
import ava3 from "../../assets/Group 24.png";
import ava4 from "../../assets/Group 25.png";
import ava5 from "../../assets/Group 26.png";

import fin from "../../assets/Rectangle 5.png";

import belpos from "../../assets/belpos.png";
import serpos from "../../assets/serpos.png";

const Hero = () => {
  return (
    <>
      <div id={scss.hero}>
        <div className="container">
          <div className={scss.fons}>
            <img src={fon} alt="" />
          </div>
          {/* <div className={scss.fons1}>
            <img src={fon} alt="" />
          </div> */}
          <div className={scss.lo}>
            <div className={scss.logoshero}>
              <img className={scss.logo6} src={logo5} alt="" />
              <h1 className={scss.logo7}>Etsy</h1>
              <img className={scss.logo8} src={logo7} alt="" />
              <img className={scss.logo9} src={logo8} alt="" />
            </div>
          </div>

          <div className={scss.content}>
            <div className={scss.heroblock}>
              <div className={scss.herotext}>
                <h1>
                  Get Your <br /> Payment Faster
                </h1>
                <h4>
                  Blinqpley helps businesses in Africa get paid by anyone <br />{" "}
                  anywere in the world
                </h4>
                <button>Start Now</button>
              </div>
              <div className={scss.heroimg}>
                <img className={scss.nout} src={nout} alt="" />
                <img className={scss.nout2} src={nout2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="make">
        <div className="container">
          <div className={scss.make}>
            <div className={scss.makeblock}>
              <div className={scss.makebox1}>
                <div className={scss.mbox}>
                  <img src={logo1} alt="" />
                  <h2>Easy Access</h2>
                  <p>Now trask all of your translation easly</p>
                </div>

                <div className={scss.mbox}>
                  <img src={logo2} alt="" />
                  <h2>Use You Contennt</h2>
                  <p>Now trask all of your translation easly</p>
                </div>
              </div>

              <div className={scss.makebox2}>
                <div className={scss.mbox}>
                  <img src={logo3} alt="" />
                  <h2>Cashflow Visiblity</h2>
                  <p>Now trask all of your translation easly</p>
                </div>

                <div className={scss.mbox}>
                  <img src={logo4} alt="" />
                  <h2>Manager invoicing</h2>
                  <p>Now trask all of your translation easly</p>
                </div>
              </div>

              <div className={scss.maketext}>
                <img className={scss.belpos} src={belpos} alt="" />

                <h1>
                  Make & Share Payments <br /> With Community
                </h1>
                <p>
                  Hac sem ut eget tellus diam convallis lacus a, interdum <br />{" "}
                  nulla sem adipicing inw
                </p>
                <h4>Learm more</h4>
              </div>
            </div>
            <div className={scss.logos}>
              <img className={scss.logo6} src={logo5} alt="" />
              <h1 className={scss.logo7}>Etsy</h1>
              <img className={scss.logo8} src={logo7} alt="" />
              <img className={scss.logo9} src={logo8} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="pay">
        <div className="container">
          <div className={scss.pay}>
            <div className={scss.paytext}>
              <img className={scss.serpos} src={serpos} alt="" />
              <h5>CREDIT CARD</h5>
              <h1>
                Payment <br /> Gets Easier
              </h1>
              <p>
                Hac sem ut eget tellus diam convallis lacus a, interdum <br />
                nulla sem adipicing inw
              </p>
              <h4>Learm more</h4>
            </div>

            <div className={scss.payimg}>
              <img className="paym" src={paym} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="mob">
        <div className="container">
          <div className={scss.mob}>
            <div className={scss.mobimg}>
              <img src={mask} alt="" />
            </div>

            <div className={scss.mobtext}>
              <h5>MOBILE TRANSACTION</h5>
              <h1>
                Smart Mobile <br /> Banking
              </h1>
              <p>
                Hac sem ut eget tellus diam convallis lacus a, interdum <br />
                nulla sem adipicing inw
              </p>
              <h4>Learm more</h4>
            </div>
          </div>
        </div>
      </section>

      <section id="pay">
        <div className="container">
          <div className={scss.safe}>
            <div className={scss.safetext}>
              <h5>SECURE TRANSACTION</h5>
              <h1>Safe Yours Savings</h1>
              <p>
                Hac sem ut eget tellus diam convallis lacus a, interdum <br />
                nulla sem adipicing inw
              </p>
              <h4>Learm more</h4>
            </div>

            <div className={scss.safeimg}>
              <img className="paym" src={maskfon} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="final">
        <div className="container">
          <div className={scss.final}>
            <div className={scss.fon}>
              <img src={fin} alt="" />
            </div>
            <div className={scss.finblock}>
              <div className={scss.fintext1}>
                <h1>
                  What Our <span> Customer</span> <br /> Are saying
                </h1>
                <p>
                  Hac sem ut agat tellus diam convallis lacus a, interdum <br />{" "}
                  null sem lacus a, interdum nulla sem adipiscing inw
                </p>
              </div>

              <div className={scss.fintext2}>
                <p>
                  {" "}
                  Hac sem ut agat tellus diam convallis lacus a, interdum <br />{" "}
                  null sem lacus a, interdum nulla sem adipiscing inw
                </p>
                <h4>LEO MAYNUS</h4>
                <h6>CEO at Softpanda</h6>
              </div>

              <div className={scss.finimg}>
                <img className={scss.ava1} src={ava1} alt="" />
                <img className={scss.ava2} src={ava2} alt="" />
                <img className={scss.ava3} src={ava3} alt="" />
                <img className={scss.ava4} src={ava4} alt="" />
                <img className={scss.ava5} src={ava5} alt="" />
              </div>

              <div className={scss.block}>
                <h1>What Are You Waiting For</h1>
                <button>Try Blingpay</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
