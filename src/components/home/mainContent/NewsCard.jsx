import React from "react";
import "./NewsCard.css";

const NewsCard = ({ news }) => {
  // props'tan haber verilerini çek
  const { title, urlToImage, publishedAt, comments } = news;

  return (
    <div className="box shadow">
      <div className="images row">
        <div className="img">
          <img src={urlToImage} alt={title} />
        </div>
        {/* Kategori bilgisi için ayrı bir alan ekleyebilirim */}
      </div>
      <div className="text row">
        <h1 className="title">{title.slice(0, 40)}...</h1>
        <div className="date">
          <i className="fas fa-calendar-days"></i>
          <label>{new Date(publishedAt).toLocaleDateString()}</label>
        </div>
        <div className="comment">
          <i className="fas fa-comments"></i>
          <label>{comments || 0}</label>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
