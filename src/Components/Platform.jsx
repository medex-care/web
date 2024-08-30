/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ok from "../assets/images/svg/ok.svg";
import about4 from "../assets/images/all-img/about4.png";

const Platform = () => {
  return (
    <div id="about-us" className="bg-[url('../images/all-img/section-bg-2.png')] bg-cover bg-no-repeat bg-center section-padding">
      <div className="container">
        <div className="lg:grid grid-cols-12 gap-[30px]">
          <div className="xl:col-span-5 lg:col-span-6 col-span-12">
            <div className="mini-title">Über uns</div>
            <h4 className="column-title ">
              Das sind {" "}
              <span className="shape-bg">Wir!</span>
            </h4>
            <div>
             Als kompetenter Partner vermittelt die medex GmbH Fachpersonal weltweit. Mit unserem umfangreichem Netzwerk und langjähriger Expertise bieten wir Ihnen maßgeschneiderte Lösungen für Ihr Unternehmen.
            </div>
            <ul className=" space-y-2 pt-8">
              <li className="flex flex-wrap">
                <div className="flex-none mr-3">
                  <div className="">
                    <img src={ok} alt="" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-lg mb-1 font-semibold">
                    Förderung der Integration ausländischer Pflegekräfte in den deutschen Arbeitsmarkt
                  </h4>
                </div>
              </li>
              <li className="flex flex-wrap">
                <div className="flex-none mr-3">
                  <div className="">
                    <img src={ok} alt="" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-lg mb-1 font-semibold">
                    Fokus auf nachhaltige und wertschöpfende Arbeitsbeziehungen
                  </h4>
                </div>
              </li>
              <li className="flex flex-wrap">
                <div className="flex-none mr-3">
                  <div className="">
                    <img src={ok} alt="" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-lg mb-1 font-semibold">
                    Persönliche Betreuung für den Erfolg von Kunden und Kandidaten
                  </h4>
                </div>
              </li>
            </ul>
          </div>
          <div className="xl:col-span-7 lg:col-span-6 col-span-12 lg:pt-0 md:pt-10 pt-6">
            <img src={about4} alt="" className=" mx-auto block w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
