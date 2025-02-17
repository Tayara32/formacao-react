import React from "react";
import Dice from "../componentes/Dice/Dice";
import { Link } from "react-router-dom";
import "../css/HomePage.css";

function DicePage() {
  return (
    <div>
      <h2>Dice</h2>
      <Dice />

      <Link to="/" className="back-button">
        🔙 Voltar
      </Link>
    </div>
  );
}

export default DicePage;
