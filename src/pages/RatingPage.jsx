import React from "react";
import Rating from "../componentes/Rating/Rating";
import { Link } from "react-router-dom";
import "../css/HomePage.css";

function RatingPage() {
  return (
    <div>
      <h2>Rating</h2>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <Link to="/" className="back-button">
        🔙 Voltar
      </Link>
    </div>
  );
}

export default RatingPage;
