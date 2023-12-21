// Music.jsx
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Heading from "../../../common/heading/Heading";
import { Link } from "react-router-dom";
import "./music.css";

const Music = () => {
  const [musicNews, setMusicNews] = useState([]);

  useEffect(() => {
    const fetchMusicNews = async () => {
      try {
        // News API'den veri çekmek için API anahtarınızı kullanın
        const apiKey = "6dd3d32a478b44888aab4122409e13d0";
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=music&apiKey=${apiKey}&pageSize=3`
        );

        const data = await response.json();
        // Resim URL'si olan haberleri filtrele
        const musicNewsWithImages = data.articles.filter(
          (item) => item.urlToImage
        );

        setMusicNews(musicNewsWithImages);
      } catch (error) {
        console.error("Haberleri alırken bir hata oluştu:", error);
      }
    };

    fetchMusicNews();
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  };

  return (
    <>
      <section className="music">
        <Heading title="Müzik" />
        <div className="content">
          <Slider {...settings}>
            {musicNews.map((newsItem) => (
              <div className="items" key={newsItem.title}>
                <Link to={`/news/${encodeURIComponent(newsItem.title)}`}>
                  <div className="box shadow flexSB">
                    <div className="images">
                      <div className="img">
                        <img src={newsItem.urlToImage} alt={newsItem.title} />
                      </div>
                      <div className="category category1">
                        <span>{newsItem.category}</span>
                      </div>
                    </div>
                    <div className="text">
                      <h1 className="title">{newsItem.title.slice(0, 40)}...</h1>
                      <div className="date">
                        <i className="fas fa-calendar-days"></i>
                        <label>{newsItem.publishedAt}</label>
                      </div>
                      <p className="desc">{newsItem.description.slice(0, 250)}...</p>
                      <div className="comment">
                        <i className="fas fa-share"></i>
                        <label>Share / </label>
                        <i className="fas fa-comments"></i>
                        <label>{newsItem.comments}</label>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Music;
