import React from 'react'
import { Link } from 'react-router-dom';
import '../HomePage.css'

function HomePage() {
    return (
      <div className='homepage'>
          <div className="homepage-container">
            <h1 className="title">📚 ATIVIDADES</h1>
            <p className="description">
              Bem-vindo à  minha página de resolução de exercícios! 🚀
            </p>
            <nav className="menu">
              <ul>
                <li><Link to="/IdCard">🆔 Id Card</Link></li>
                <li><Link to="/Greetings">👋 Greetings</Link></li>
                <li><Link to="/Random">🎲 Random</Link></li>
                <li><Link to="/BoxColor">🎨 Box Color</Link></li>
                <li><Link to="/CreditCard">💳 Credit Card</Link></li>
                <li><Link to="/Rating">⭐ Rating</Link></li>
                <li><Link to="/DriverCard">🚗 Driver Card</Link></li>
                <li><Link to="/LikeButton">👍 Like Button</Link></li>
                <li><Link to="/ClickablePicture">📸 Clickable Picture</Link></li>
                <li><Link to="/Dice">🎲 Dice</Link></li>
                <li><Link to="/Carousel">📸 Carousel</Link></li>
                <li><Link to="/NumbersTable">🔢 Numbers Table</Link></li>
                <li><Link to="/FaceBook">📘 FaceBook</Link></li>
                <li><Link to="/FaceBookAvancado">📘 FaceBook Avançado</Link></li>
                <li><Link to="/SignupPage">📝 Signup Page</Link></li>
              </ul>
            </nav>
            <p>By Tayara Cruz</p>
          </div>
         
      </div>
    );
  }

export default HomePage