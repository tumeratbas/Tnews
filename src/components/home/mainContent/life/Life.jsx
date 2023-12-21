// Life.jsx
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Heading from "../../../common/heading/Heading";
import "../Ppost/ppost.css";

const Life = () => {
  const [lifeNews, setLifeNews] = useState([]);

  useEffect(() => {
    const fetchLifeNews = async () => {
      try {
        const apiKey = "6dd3d32a478b44888aab4122409e13d0";
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}&pageSize=3`
        );

        const data = await response.json();
        setLifeNews(data.articles);
      } catch (error) {
        console.error("Haberleri alırken bir hata oluştu:", error);
      }
    };

    fetchLifeNews();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="popularPost life">
        <Heading title="İş Başlıkları" />
        <div className="content">
          <Slider {...settings}>
            {lifeNews.map((newsItem) => (
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

export default Life;
