import React from "react";
import Greetings from "../componentes/Greetings/Greetings";
import { Link } from "react-router-dom";
import "../css/HomePage.css";

function GreetingsPage() {
  return (
    <div>
      <h2>Greetings</h2>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Link to="/" className="back-button">
        🔙 Voltar
      </Link>
    </div>
  );
}

export default GreetingsPage;
