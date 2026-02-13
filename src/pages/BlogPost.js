import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { blogArticles, blogCategories } from '../data/blogData';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const { language } = useApp();
  const articles = blogArticles[language];
  const categories = blogCategories[language];
  const article = articles.find(a => a.id === parseInt(id, 10));

  if (!article) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <p>{language === 'th' ? 'ไม่พบบทความ' : 'Article not found'}</p>
          <Link to="/blog">{language === 'th' ? 'กลับไปยังบล็อก' : 'Back to Blog'}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <div className="hero-gradient-container">
        <div className="blog-post-hero">
          <div className="container">
            <Link to="/blog" className="blog-post-back">
              {language === 'th' ? '← กลับไปยังบล็อก' : '← Back to Blog'}
            </Link>
          </div>
        </div>
      </div>
      <article className="blog-post-article container">
        <div className="blog-post-header-row">
          <div className="blog-post-header-content">
            <div className="blog-post-meta">
              <span className="blog-post-category">{categories[article.category]}</span>
            </div>
            <h1 className="blog-post-title">{article.title}</h1>
          </div>
          <div className="blog-post-image-wrap">
            <img
              src={article.image}
              alt={article.title}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop';
              }}
            />
          </div>
        </div>
        <div className="blog-post-body">
          <p>{article.excerpt}</p>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
