// Ppost.jsx
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Heading from "../../../common/heading/Heading";
import "./ppost.css";

const Ppost = () => {
  const [ppostNews, setPpostNews] = useState([]);

  useEffect(() => {
    const fetchPpostNews = async () => {
      try {
        // News API'den veri çekmek için API anahtarınızı kullanın
        const apiKey = "6dd3d32a478b44888aab4122409e13d0";
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}&pageSize=2`
        );

        const data = await response.json();
        setPpostNews(data.articles);
      } catch (error) {
        console.error("Haberleri alırken bir hata oluştu:", error);
      }
    };

    fetchPpostNews();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="popularPost">
        <Heading title="Popüler Haberler" />
        <div className="content">
          <Slider {...settings}>
            {ppostNews.map((newsItem) => (
              <div className="items" key={newsItem.title}>
                <div className="box shadow">
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
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Ppost;
