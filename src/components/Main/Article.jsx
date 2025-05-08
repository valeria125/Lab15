import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Article.css';

const News = () => (
  <div>
    <h1>Последние новости</h1>
    <p>Здесь будут отображаться последние новости нашего проекта.</p>
  </div>
);

const About = () => (
  <h1>Южный федеральный университет</h1>
);

const Contacts = () => (
  <div>
    <h1>Контакты</h1>
    <p>Телефон: +7 (888) 333-22-11</p>
  </div>
);

const NotFound = () => (
  <h1>404 - Страница не найдена</h1>
);

const Article = () => {
  return (
    <article className="article">
      <Routes>
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </article>
  );
};

export default Article;