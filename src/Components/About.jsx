/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import lightImg from "../assets/images/svg/light.svg";
import aboutOne from "../assets/images/all-img/about1.png";
import targetImg from "../assets/images/svg/target.svg";
const About = () => {
  return (
    <div className="about-area section-padding">
      <div className="container">
        <div>
          <div className="mini-title">Warum die medex GmbH?</div>
          <h4 className="column-title ">
            <span className="shape-bg">Gründe</span> für uns
          </h4>
          <div>
            Bei der medex GmbH stehen Qualität, Zuverlässigkeit und individuelle Betreuung im Vordergrund. Hier sind einige Gründe, warum Sie sich für uns entscheiden sollten:
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10">
            <ul className=" list-item space-y-6 pt-8">
              <li className="flex">
                <div className="flex-none mr-6">
                  <div className="h-[72px] w-[72px] rounded-full">
                    <img
                      src={lightImg}
                      alt="lightImg"
                      className=" w-full h-full object-cover rounded-full block"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">Erfahrung und Expertise</h4>
                  <div>
                    Mit jahrelanger Erfahrung in der Vermittlung von Fach- und Führungskräften verfügen wir über tiefgehende Branchenkenntnisse und ein umfangreiches Netzwerk, das uns ermöglicht, die besten Kandidaten für Ihre Anforderungen zu finden.
                  </div>
                </div>
              </li>
              <li className="flex">
                <div className="flex-none mr-6">
                  <div className="h-[72px] w-[72px] rounded-full">
                    <img
                      src={targetImg}
                      alt=""
                      className=" w-full h-full object-cover rounded-full block"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">Transparenz und Vertrauen</h4>
                  <div>
                    Offenheit und Ehrlichkeit sind die Grundpfeiler unserer Arbeit. Wir pflegen eine transparente Kommunikation und bauen so Vertrauen zu unseren Kunden und Kandidaten auf.
                  </div>
                </div>
              </li>
            </ul>
            <ul className=" list-item space-y-6 pt-8">
              <li className="flex">
                <div className="flex-none mr-6">
                  <div className="h-[72px] w-[72px] rounded-full">
                    <img
                      src={lightImg}
                      alt="lightImg"
                      className=" w-full h-full object-cover rounded-full block"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">Internationale Reichweite</h4>
                  <div>
                    Unsere globale Präsenz und unsere spezialisierten Rekrutierungsprozesse machen uns zu einem starken Partner bei der Suche nach internationalen Fachkräften, insbesondere im Pflegebereich.
                  </div>
                </div>
              </li>
              <li className="flex">
                <div className="flex-none mr-6">
                  <div className="h-[72px] w-[72px] rounded-full">
                    <img
                      src={targetImg}
                      alt=""
                      className=" w-full h-full object-cover rounded-full block"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">Individuelle Betreuung</h4>
                  <div>
                    Wir legen großen Wert auf eine persönliche und maßgeschneiderte Betreuung sowohl unserer Kunden als auch der Kandidaten. Wir hören zu, verstehen Ihre Bedürfnisse und bieten Lösungen, die genau auf Ihre Anforderungen abgestimmt sind.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
