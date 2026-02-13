import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { blogArticles, blogCategories } from '../data/blogData';
import './Blog.css';

const Blog = () => {
  const { language } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const t = blogCategories[language];
  const blogArticlesList = blogArticles[language];

  const filteredArticles = selectedCategory === 'all'
    ? blogArticlesList
    : blogArticlesList.filter(article => article.category === selectedCategory);

  return (
    <div className="blog-page">
      <div className="hero-gradient-container">
        <div className="blog-hero">
          <div className="container">
            <h1>{language === 'th' ? 'อัปเดตและเรื่องราวกระบี่' : 'Krabi Updates & Stories'}</h1>
            <p>{language === 'th'
              ? 'ติดตามข่าวสารล่าสุดเกี่ยวกับตลาดอสังหาริมทรัพย์ โครงการใหม่ และไลฟ์สไตล์ในกระบี่'
              : 'Stay updated with the latest news about the property market, new developments, and lifestyle in Krabi'
            }</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="blog-filters">
          <button
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            {t.all}
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'market' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('market')}
          >
            {t.market}
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'development' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('development')}
          >
            {t.development}
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'investment' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('investment')}
          >
            {t.investment}
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'lifestyle' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('lifestyle')}
          >
            {t.lifestyle}
          </button>
        </div>
        <div className="blog-grid">
          {filteredArticles.map(article => (
            <article key={article.id} className="blog-card">
              <div className="blog-card-image">
                <img
                  src={article.image}
                  alt={article.title}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop';
                  }}
                />
                <div className="blog-card-category">
                  {t[article.category]}
                </div>
              </div>
              <div className="blog-card-content">
                <h2 className="blog-card-title">{article.title}</h2>
                <p className="blog-card-excerpt">{article.excerpt}</p>
                <Link to={`/blog/${article.id}`} className="blog-card-read-more">
                  {language === 'th' ? 'อ่านเพิ่มเติม' : 'Read More'}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
