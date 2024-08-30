import React, { useEffect } from "react";

import wfb from "../assets/images/social/wfb.svg";
import wt from "../assets/images/social/wt.svg";
import wi from "../assets/images/social/w-i.svg";
import wins from "../assets/images/social/w-ins.svg";
import search from "../assets/images/svg/search.svg";
import logo_o from "../assets/images/logo/logo.svg";
import logo from "../assets/images/logo/logo_w_trans.png";
import man2 from "../assets/images/banner/man2.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="site-header">
      <div className="bg-primary text-white py-3 md:block hidden">
        <div className=" container">
          <div className="grid lg:grid-cols-2  grid-cols-1 gap-5 ">
            <ul className=" flex  divide-x divide-white divide-opacity-25 text-base lg:justify-start justify-center">
              <li className="mr-4">Donaustraße 64, 87700 Memmingen</li>
              <li className="pl-4 lowercase">
                <a href="mailto:info@medex-consulting.de">
                  info@medex-consulting.de
                </a>
              </li>
            </ul>
            <ul className=" text-base flex  lg:justify-end justify-center divide-x divide-white divide-opacity-25 items-center">
              {/* <li className="px-2">Folgen Sie uns auf:</li>
              <li className="px-2">
                <a href="#">
                  <img src={wfb} alt="" />
                </a>
              </li>
              <li className="px-2">
                <a href="#">
                  <img src={wt} alt="" />
                </a>
              </li>
              <li className="px-2">
                <a href="#">
                  <img src={wi} alt="" />
                </a>
              </li>
              <li className="px-2">
                <a href="#">
                  <img src={wins} alt="" />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="main-header py-8 header-normal2  rt-sticky top-0 w-full z-[999] ">
        <div className="container">
          <div className=" flex items-center justify-between">
            <Link
              to={"/"}
              className="brand-logo flex-none lg:mr-10 md:w-auto lg:max-w-48 max-w-36"
            >
              <img src={logo} alt="" />
            </Link>
            <div className="flex items-center flex-1">
              <div className="flex-1 main-menu relative mr-[74px]">
                {/* <ul className="menu-active-classNamees">
                  <li>
                    <Link to={"/"}>Startseite</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Kontakt</Link>
                  </li>
                </ul> */}
              </div>
              <div className="flex-none flex">
                <div className="">
                  <Link
                    to={"/contact"}
                    className="btn bg-black text-white hidden lg:block"
                  >
                    Jetzt Kontaktieren!
                  </Link>
                  <Link
                    to={"/contact"}
                    className="btn bg-black text-white lg:hidden"
                  >
                    Kontakt
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
