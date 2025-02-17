import React from "react";
import FaceBook from "../componentes/FaceBook/FaceBook";
import { Link } from "react-router-dom";
import "../css/HomePage.css";

function FaceBookPage() {
  return (
    <div>
      <h2>FaceBook</h2>
      <FaceBook />

      <Link to="/" className="back-button">
        🔙 Voltar
      </Link>
    </div>
  );
}

export default FaceBookPage;
