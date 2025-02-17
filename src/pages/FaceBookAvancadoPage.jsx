import React from "react";
import FaceBookAvancado from "../componentes/FaceBookAvancado/FaceBookAvancado";
import { Link } from "react-router-dom";
import "../css/HomePage.css";

function FaceBookAvancadoPage() {
  return (
    <div>
      <h2>FaceBook - Avançado</h2>
      <FaceBookAvancado />

      <Link to="/" className="back-button">
        🔙 Voltar
      </Link>
    </div>
  );
}

export default FaceBookAvancadoPage;
