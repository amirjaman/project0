import React from 'react';
import './Article.css'; // Assuming you have a CSS file for styling
import Navbar from '../../header-footer/Header'

const articles = [
  {
    id: 1,
    title: 'Investment Strategies for 2025',
    description: 'An overview of the best investment strategies for the upcoming year.',
    date: '2023-01-01',
    link: '/articles/investment-strategies-2023'
  },
  {
    id: 2,
    title: 'Understanding Stock Market Trends',
    description: 'A deep dive into the current trends in the stock market.',
    date: '2023-02-01',
    link: '/articles/stock-market-trends'
  },
  // Add more article objects here
];

const Article = () => {
  return (
    <div className="article">
      <Navbar/>
      <h1>Investment Articles</h1>
      <div className="article__list">
        {articles.map(article => (
          <div key={article.id} className="article__item">
            <h2 className="article__title">{article.title}</h2>
            <p className="article__description">{article.description}</p>
            <p className="article__date">Published on: {article.date}</p>
            <a href={article.link} className="article__link">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
