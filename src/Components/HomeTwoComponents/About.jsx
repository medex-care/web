import React from "react";

const About = () => {
  return (
    <div className="about-area section-padding">
      <div className="container">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="xl:col-span-7 lg:col-span-6 col-span-12">
            <img
              src={
                "https://saneware.de/wp-content/uploads/2021/01/Das_Krankenhauszukunftsgesetz.jpg"
              }
              alt=""
              className=" block w-full"
            />
          </div>
          <div className="xl:col-span-5 lg:col-span-6 col-span-12">
            <div className="mini-title">Arbeitskräftevermittlung</div>
            <h4 className="column-title ">
              Ihr Schlüssel zu <span className="shape-bg">qualifizierten</span> {" "}
              Fachkräften
            </h4>
            <div className=" mb-8">
             Wir setzen uns dafür ein, kontinuierlich innovative Ansätze zu entwickeln und unsere Prozesse zu optimieren, um den höchsten Standards gerecht zu werden. Dabei bleiben wir unseren Werten – Integrität, Verantwortung und Exzellenz – treu und arbeiten stets daran, das Vertrauen unserer Kunden und Kandidaten zu verdienen.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
