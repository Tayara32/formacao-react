import React from "react";
import Carousel from "../componentes/Carousel/Carousel";
import { Link } from "react-router-dom";
import "../css/HomePage.css";

function CarouselPage() {
  return (
    <div>
      <h2>Carousel</h2>
      <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg",
        ]}
      />
      <Link to="/" className="back-button">
        🔙 Voltar
      </Link>
    </div>
  );
}

export default CarouselPage;
