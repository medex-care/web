/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import MobileMenu from "../MobileMenu";
import { Header } from "../HeaderNew";
import { Link } from "react-router-dom";
import heroImg from "../../assets/images/all-img/hero.png";
const HomeTwoHeader = () => {
  const scrollNav = useRef(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  let body = document.querySelector("body");
  const handleShowSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };
  useEffect(() => {
    // scrolling nav
    window.addEventListener("scroll", () => {
      let windowScroll = window.scrollY > 100;
      scrollNav.current.classList.toggle("rt-sticky-active", windowScroll);
    });
  }, []);
  showSearchBar
    ? body.classList.add("modal-open")
    : body.classList.remove("modal-open");

  body.classList.contains("modal-open")
    ? (document.documentElement.scrollTop = 0)
    : "";
  return (
    <section className=" xl:min-h-screen bg-[url('../images/banner/2.png')] bg-cover bg-no-repeat bg-center overflow-hidden xl:pb-[130px]">
      <Header />
      <div className="container relative">
        <div className="xl:max-w-[570px] xl:pt-[129px] lg:py-28 md:py-20 py-14  lg:space-y-10 space-y-6">
          <div className=" lg:text-[77px] lg:leading-[106.4px]  md:text-6xl md:leading-[72px] text-black font-bold text-5xl leading-[62px]">
            Willkommen bei <span className="text-primary">medex</span>
          </div>
          <div className=" plain-text text-gray leading-[30px] border-l-2 border-primary pl-4">
            Die medex GmbH ist Ihr kompetenter Partner für die Vermittlung von
            medizinischem Fachpersonal aus dem In- und Ausland. Mit umfassender
            Erfahrung und einem weitreichenden Netzwerk bieten wir
            maßgeschneiderte Lösungen für Unternehmen, die qualifizierte
            Mitarbeiter suchen, sowie für Fachkräfte, die neue berufliche
            Herausforderungen anstreben.
          </div>
          <div className="md:flex  md:space-x-4 space-y-3 md:space-y-0 pt-5">
            <a href="#about-us" className="btn btn-primary">
              Mehr erfahren
            </a>
            <Link to={"/contact"} className="btn btn-black">
              Kontaktieren
            </Link>
            {/* <a href="/contact" className="btn btn-black">
              Kontaktieren
            </a> */}
          </div>
        </div>
        <div className="imge-box  hidden  xl:block absolute right-[-60px] top-1/2  -translate-y-1/2 mt-[60px]  ">
          <img src={heroImg} width={500} height={500} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HomeTwoHeader;
