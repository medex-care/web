/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { error404 } from "../../constant/images";
import Footer from "../Footer";
import { Header } from "../../Components/HeaderNew";
import PageBanner from "../PageBanner";

const ImprintPage = () => {
  return (
    <>
      <Header />
      <div className="container bg-cover bg-no-repeat bg-center section-padding">
        <div className="mx-auto flex flex-col">
          <h2 className="mb-6 text-3xl">Impressum</h2>
          <div className="mb-10">
            <div className="bg-cover bg-no-repeat bg-center">
              <p>
                medex GmbH
                <br />
                Donaustra&szlig;e 64
                <br />
                87700 Memmingen
              </p>
              <p>
                Handelsregister: HRB 21020
                <br />
                Registergericht: Amtsgericht Memmingen
              </p>
              <p>
                <strong>Vertreten durch:</strong>
                <br />
                Marius Zoll
              </p>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: 22,
                  marginTop: 15,
                  marginBottom: 10,
                }}
              >
                Kontakt
              </p>
              <p>
                Telefon: 015127150688
                <br />
                E-Mail: info@medex-consulting.de
              </p>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: 22,
                  marginTop: 15,
                  marginBottom: 10,
                }}
              >
                Umsatzsteuer-ID
              </p>
              <p>
                Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
                Umsatzsteuergesetz:
                <br />
                DE367414432
              </p>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: 22,
                  marginTop: 15,
                  marginBottom: 10,
                }}
              >
                Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ImprintPage;
