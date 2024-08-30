/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { error404 } from "../../constant/images";
import Footer from "../Footer";
import {Header} from "../../Components/HeaderNew";

const ErrorPage = () => {
  return (
    <div className="">
      <Header />
      <div className="bg-cover bg-no-repeat bg-center">
        <div className="max-w-[570px] mx-auto flex flex-col items-center text-center justify-center px-4">
          <h2 className=" mb-6">Seite nicht gefunden</h2>
          <div className="mb-10">
            Die von Ihnen angeforderte Seite kann leider nicht angezeigt werden.
            Möglicherweise wurde sie verschoben oder existiert nicht mehr. Wir
            bitten um Ihr Verständnis und laden Sie ein, über die Startseite zu
            navigieren oder unsere Suchfunktion zu nutzen, um die gewünschten
            Informationen zu finden.
          </div>
          <Link to={"/"} className="btn btn-primary">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ErrorPage;
