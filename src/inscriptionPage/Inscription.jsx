/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import Language from "./Language";
import Form from "./formInscription"
//import logoNoBg from '../images/logoNoBg.png'

const Inscription = () => {
  const [pageLang, setPageLang] = useState("");
  var labelLang = {};

  const displayLang = () => {
    switch (pageLang) {
      case "FR":
        labelLang = {
          a: "Nom",
          b: "Prenom",
          c: "E-mail",
          d: "Pays",
          d1: "Maroc",
          d2: "Espagne",
          d3: "France",
          d4: "Autre",
          d5: "Choisir votre pays",
          e: "Accepter tous les termes et conditions.",
          f: "Envoyer"
        };
        return "Bonjour cher fan ! Rejoignez maintenant sur le site de notre club.";
      case "EN":
        labelLang = {
          a: "First name",
          b: "Last name",
          c: "E-mail",
          d: "Country",
          d1: "Morocco",
          d2: "Spain",
          d3: "France",
          d4: "Other",
          d5: "Choose your country",
          e: "Accept all terms and conditions",
          f: "Submit",
        };
        return "Hello dear fan! Join now on our club's website.";
      case "ES":
        labelLang = {
          a: "Nombre",
          b: "Apellido",
          c: "Correo electrónico (E-mail)",
          d: "País",
          d1: "Marruecos",
          d2: "España",
          d3: "Francia",
          d4: "Otro",
          d5: "Elegir tu país",
          e: "Aceptar todos los términos y condiciones",
          f: "Enviar",
        };
        return "Hola querido fanático. Únete ahora en el sitio web de nuestro club.";
      default:
        labelLang = {
          a: "النسب",
          b: "الاسم",
          c: "البريد الالكتروني",
          d: "الدولة",
          d1: "المغرب",
          d2: "إسبانيا",
          d3: "فرنسا",
          d4: "أخرى",
          d5: "اختر بلدك",
          e: "قبول جميع الشروط والأحكام.",
          f: "إرسال"
        };
        return "مرحبًا عزيزي المشجع! انضم الآن على موقع نادينا";
    }
  };

  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark pt-20">
        <a className="navbar-brand" href="#">
          Dynamo Casablanca
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Language onLanguageChange={(value) => {setPageLang(value);}} activeLang={pageLang}/>
          </div>
        </div>
      </nav>
      
      <div className="container-fluid d-flex flex-column align-items-center mt-5">
        <div className="text-center">
          <h1>{displayLang()}</h1>
          <hr />
        </div>
        <Form labelLang={labelLang} />
      </div>
    </>
  );
};

export default Inscription;
