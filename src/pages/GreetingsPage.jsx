import React from "react";
import Greetings from "../componentes/Greetings/Greetings";

function GreetingsPage() {
  return (
    <div>
      <h2>Greetings</h2>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
    </div>
  );
}

export default GreetingsPage;
