import React from "react";
import NumbersTable from "../componentes/NumbersTable/NumbersTable";
import { Link } from "react-router-dom";
import "../css/HomePage.css";

function NumbersTablePage() {
  return (
    <div>
      <h2>NumbersTable</h2>
      <NumbersTable limit={12} />

      <Link to="/" className="back-button">
        🔙 Voltar
      </Link>
    </div>
  );
}

export default NumbersTablePage;
