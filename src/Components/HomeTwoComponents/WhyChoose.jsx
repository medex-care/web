import React from "react";
import { solutions } from "../../constant/images";

const WhyChoose = () => {
  return (
    <div style={{backgroundColor: '#f1f1f1'}} className="about-area section-padding bg-[url('../images/all-img/section-bg-8.png')] bg-cover  bg-no-repeat bg-center">
      <div className="container">
        <div className="lg:grid grid-cols-12 lg:gap-10  space-y-6 lg:space-y-0">
          <div className="xl:col-span-5 lg:col-span-6 col-span-12">
            <div className="mini-title">Für Arbeitgeber</div>
            <h4 className="column-title ">
              <span className="shape-bg pb-4">Effiziente Lösungen</span> für
              Ihre Personalbedürfnisse
            </h4>
            <div className=" mb-8">
              Durch unsere Expertise und unser Engagement stellen wir sicher, dass wir die Bedürfnisse und Anforderungen beider Seiten verstehen und optimal erfüllen. Wir unterstützen unsere Kunden und Kandidaten während des gesamten Vermittlungsprozesses – von der ersten Kontaktaufnahme bis zur erfolgreichen Integration am neuen Arbeitsplatz. Dabei legen wir großen Wert auf Transparenz, Professionalität und eine persönliche Betreuung.
            </div>
          </div>
          <div className="xl:col-span-7 lg:col-span-6 col-span-12 ">
            <img
              src={solutions}
              alt=""
              className=" block w-full object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
