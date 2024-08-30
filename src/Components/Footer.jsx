/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import footerLogo from "../assets/images/logo/footer-logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const updatedDate = new Date().getFullYear();
  return (
    <footer className="bg-black bg-[url('../images/all-img/footer-bg-1.png')] bg-cover bg-center bg-no-repeat">
      {/* <div className="section-padding container">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          <div className="single-footer">
            <div className="lg:max-w-[270px]">
              <a href="#" className=" block">
                <img src={footerLogo} alt="" />
              </a>
              {/* <p>
                Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius
                enim eros elementum tristique. Duis cursus.
              </p>
            </div>
          </div>
          <div></div>
          <div className="single-footer">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                >
                  <iconify-icon icon="bxl:facebook"></iconify-icon>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                >
                  <iconify-icon icon="bxl:twitter"></iconify-icon>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                >
                  <iconify-icon icon="bxl:linkedin"></iconify-icon>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                >
                  <iconify-icon icon="bxl:instagram"></iconify-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="container border-t border-white border-opacity-[0.1] py-8 text-center text-base">
        &copy; Copyright {updatedDate} | medex GmbH | All Rights Reserved | <Link to={'imprint'}>Impressum</Link>
      </div>
    </footer>
  );
};

export default Footer;
