import React, { useState } from 'react';

const Language = ({ onLanguageChange, activeLang }) => {
    const  [arClassName, setArClassName] = useState("nav-item nav-link active");
    const  [frClassName, setFrClassName] = useState("nav-item nav-link");
    const  [enClassName, setEnClassName] = useState("nav-item nav-link");
    const  [esClassName, setEsClassName] = useState("nav-item nav-link");
    
    const handleLangChange = (event) => {
        event.preventDefault();
        onLanguageChange(event.currentTarget.dataset.lang);
        switch (event.currentTarget.dataset.lang){
            case "FR": 
                setFrClassName("nav-item nav-link active");
                setArClassName("nav-item nav-link");
                setEnClassName("nav-item nav-link");
                setEsClassName("nav-item nav-link");
                break;
            case "EN":
                setEnClassName("nav-item nav-link active");
                setArClassName("nav-item nav-link");
                setFrClassName("nav-item nav-link");
                setEsClassName("nav-item nav-link");
                break;
            case "ES":
                setEsClassName("nav-item nav-link active");
                setArClassName("nav-item nav-link");
                setFrClassName("nav-item nav-link");
                setEnClassName("nav-item nav-link");
                break;
            default:
                setArClassName("nav-item nav-link active");
                setFrClassName("nav-item nav-link");
                setEnClassName("nav-item nav-link");
                setEsClassName("nav-item nav-link");
                break;
    };}
    return (
        <>
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <a
            className={arClassName}
            data-lang="AR"
            href="#"
            onClick={handleLangChange}
        >
            العربية
        </a>
        <a
            className={frClassName}
            href="#"
            data-lang="FR"
            onClick={handleLangChange}
        >
            Français
        </a>
        <a
            className={enClassName}
            href="#"
            data-lang="EN"
            onClick={handleLangChange}
        >
            English
        </a>
        <a
            className={esClassName}
            href="#"
            data-lang="ES"
            onClick={handleLangChange}
        >
            Español
        </a>
        <hr />
        </>
    );
}


export default Language;
