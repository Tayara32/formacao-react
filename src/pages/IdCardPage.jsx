import React from "react";
import IdCard from "../componentes/IdCard/IdCard";
import { Link } from "react-router-dom";
import "../css/HomePage.css";

function IdCardPage() {
  return (
    <div>
      <h2>IdCard</h2>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Link to="/" className="back-button">
        🔙 Voltar
      </Link>
    </div>
  );
}

export default IdCardPage;
