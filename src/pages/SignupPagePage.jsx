import React from "react";
import SignupPage from '../componentes/SignupPage/SignupPage' 
import { Link } from 'react-router-dom';
import '../css/HomePage.css'

function SignupPagePage() {
  return (
    <div>
      <h2>SignupPage</h2>
      <SignupPage />

      <Link to="/" className="back-button">🔙 Voltar</Link>
    </div>
  );
}

export default SignupPagePage;
