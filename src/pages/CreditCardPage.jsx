import React from "react";
import CreditCard from "../componentes/CreditCard/CreditCard";
import style from "../componentes/CreditCard/CreditCard.module.css";
import { Link } from "react-router-dom";
import "../css/HomePage.css";

function CreditCardPage() {
  return (
    <div>
      <h2>CreditCard</h2>
      <div className={style.cardContainer}>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <Link to="/" className="back-button">
        🔙 Voltar
      </Link>
    </div>
  );
}

export default CreditCardPage;
