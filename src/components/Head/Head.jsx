import React from 'react';
import { Link } from 'react-router-dom';
import './Head.css';

const Head = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><Link to="/news">Новости</Link></li>
          <li><Link to="/about">О проекте</Link></li>
          <li><Link to="/contacts">Контакты</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Head;