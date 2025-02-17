import React from "react";
import Random from "../componentes/Random/Random";
import { Link } from "react-router-dom";
import "../css/HomePage.css";

function RandomPage() {
  return (
    <div>
      <h2>Random</h2>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <Link to="/" className="back-button">
        🔙 Voltar
      </Link>
    </div>
  );
}

export default RandomPage;
