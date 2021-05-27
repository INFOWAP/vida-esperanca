import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/global.css';
import '../styles/pages/landing.css';
import logoImg from '../images/logo.png';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Vida Esperança" />

        <main>
          <h1>Leve a felicidade para o nosso futuro</h1>
          <p>Visite abrigos institucionais para crianças e mude o dia de muitas vidas.</p>
        </main>

        <div className="location">
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
