import React from "react";
import ClickablePicture from "../componentes/ClickablePicture/ClickablePicture";
import { Link } from "react-router-dom";
import "../css/HomePage.css";

function ClickablePicturePage() {
  return (
    <div>
      <h2>ClickablePicture</h2>
      <ClickablePicture
        img="./img/maxence.png"
        imgClicked="./img/maxence-glasses.png"
      />

      <Link to="/" className="back-button">
        🔙 Voltar
      </Link>
    </div>
  );
}

export default ClickablePicturePage;
