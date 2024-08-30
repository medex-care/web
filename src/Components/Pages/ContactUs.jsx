import React from "react";
import { call, mail, map } from "../../constant/images";
import ContactForm from "../ContactForm";
import Footer from "../Footer";
import {Header} from "../HeaderNew";
import PageBanner from "../PageBanner";

const ContactUs = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Kontakt"} pageName="Kontakt" />
      <div class="nav-tab-wrapper tabs  section-padding">
        <div class="container">
          <div class=" grid grid-cols-12 gap-[30px]">
            <div class="xl:col-span-5 lg:col-span-6 col-span-12 ">
              <div class="mini-title">Kontakt</div>
              <h4 class="column-title ">
                Treten Sie noch <span class="shape-bg">heute</span> mit uns in Kontakt
              </h4>
              <div>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered.
              </div>
              <ul class=" list-item space-y-6 pt-8">
                <li class="flex">
                  <div class="flex-none mr-6">
                    <div class="">
                      <img src={mail} alt="" class="" />
                    </div>
                  </div>
                  <div class="flex-1">
                    <h4 class=" lg:text-xl text-lg mb-1">E-Mail:</h4>
                    <div><a href="mailto:info@medex-consulting.de">info@medex-consulting.de</a></div>
                  </div>
                </li>
                <li class="flex">
                  <div class="flex-none mr-6">
                    <div class="">
                      <img src={call} alt="" class="" />
                    </div>
                  </div>
                  <div class="flex-1">
                    <h4 class=" lg:text-xl text-lg mb-1">Telefon:</h4>
                    <div>+49 151 27150688</div>
                  </div>
                </li>
                <li class="flex">
                  <div class="flex-none mr-6">
                    <div class="">
                      <img src={map} alt="" class="" />
                    </div>
                  </div>
                  <div class="flex-1">
                    <h4 class="lg:text-xl text-lg mb-1">Adresse:</h4>
                    <div>Donaustraße 64, 87700 Memmingen</div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="xl:col-span-7 lg:col-span-6 col-span-12">
              <div class="bg-white shadow-box7 p-8 rounded-md">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
