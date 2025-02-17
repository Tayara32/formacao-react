import React from "react";
import BoxColor from "../componentes/BoxColor/BoxColor";
import { Link } from "react-router-dom";
import "../css/HomePage.css";

function BoxColorPage() {
  return (
    <div>
      <h2>BoxColor</h2>
      <BoxColor r={160} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <BoxColor r={0} g={135} b={255} />

      <Link to="/" className="back-button">
        🔙 Voltar
      </Link>
    </div>
  );
}

export default BoxColorPage;
