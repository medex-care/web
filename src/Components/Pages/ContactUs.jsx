import React from "react";
import { call, mail, map, contact } from "../../constant/images";
import ContactForm from "../ContactForm";
import Footer from "../Footer";
import { Header } from "../HeaderNew";
import PageBanner from "../PageBanner";

const ContactUs = () => {
  return (
    <>
      <Header />
      <div class="nav-tab-wrapper tabs section-padding">
        <div className="container">
          <div className=" grid grid-cols-12 gap-[30px]">
            <div className="xl:col-span-5 lg:col-span-6 col-span-12 ">
              <div className="mini-title">Kontakt</div>
              <h4 className="column-title ">
                Treten Sie noch <span className="shape-bg">heute</span> mit uns
                in Kontakt
              </h4>
              <div>
                Haben Sie Fragen oder Anregungen? Wir freuen uns darauf, von
                Ihnen zu hören.
              </div>
              <ul className=" list-item space-y-6 pt-8">
                <li className="flex">
                  <div className="flex-none mr-6">
                    <div className="">
                      <img src={mail} alt="" className="" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className=" lg:text-xl text-lg mb-1">E-Mail:</h4>
                    <div>
                      <a href="mailto:info@medex-consulting.de">
                        info@medex-consulting.de
                      </a>
                    </div>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-none mr-6">
                    <div className="">
                      <img src={call} alt="" className="" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className=" lg:text-xl text-lg mb-1">Telefon:</h4>
                    <div>+49 151 27150688</div>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-none mr-6">
                    <div className="">
                      <img src={map} alt="" className="" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="lg:text-xl text-lg mb-1">Adresse:</h4>
                    <div>Donaustraße 64, 87700 Memmingen</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="xl:col-span-7 lg:col-span-6 col-span-12">
              {/* <div className="bg-white shadow-box7 p-8 rounded-md"> */}
              {/* <ContactForm /> */}
              <img src={contact} />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
