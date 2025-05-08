import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Сайт создан: {new Date().toLocaleDateString()}</p>
      <p>Автор: Иванов И.И.</p>
    </footer>
  );
};

export default Footer;