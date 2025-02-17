import React from "react";
import styles from "../componentes/LikeButton/LikeButton.module.css";
import LikeButton from "../componentes/LikeButton/LikeButton";
import { Link } from "react-router-dom";
import "../css/HomePage.css";

function LikeButtonPage() {
  return (
    <div>
      <h2>LikeButton</h2>
      <div className={styles.container}>
        <LikeButton />
        <LikeButton />
      </div>

      <Link to="/" className="back-button">
        🔙 Voltar
      </Link>
    </div>
  );
}

export default LikeButtonPage;
