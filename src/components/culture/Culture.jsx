import React, { useState, useEffect } from "react";
import "./Culture.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Heading from "../../../common/heading/Heading";

const Culture = () => {
  const [cultureNews, setCultureNews] = useState([]);

  useEffect(() => {
    const fetchCultureNews = async () => {
      try {
        const apiKey = "6dd3d32a478b44888aab4122409e13d0";
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=${apiKey}&pageSize=21`
        );

        const data = await response.json();
        setCultureNews(data.articles);
      } catch (error) {
        console.error("Haberleri alırken bir hata oluştu:", error);
      }
    };

    fetchCultureNews();
  }, []);

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    rows: 7,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  };

  return (
    <>
      <section className="Culture">
      <div class="baslik">
          <h1> Kültür Haberleri </h1>
            </div>
        <div className="content">
          <div className='logo'>
            <img src='../images/culture.jpeg' alt='' />
          </div>
          <Slider {...settings}>
            {cultureNews.map((newsItem) => (
              <div className="items" key={newsItem.title}>
                <div className="box shadow">
                  <div className="images row">
                    <div className="img">
                      <img src={newsItem.urlToImage} alt={newsItem.title} />
                    </div>
                    <div className="category category1">
                      {/* Başlığı kategori olarak kullanma */}
                      <span>{newsItem.title}</span>
                    </div>
                  </div>
                  <div className="text row">
                    <h1 className="title">{newsItem.title.slice(0, 40)}...</h1>
                    <div className="date">
                      <i className="fas fa-calendar-days"></i>
                      <label>{newsItem.publishedAt}</label>
                    </div>
                    <div className="comment">
                      <i className="fas fa-comments"></i>
                      {/* Yorum sayısı varsa kullan, yoksa varsayılan olarak 0 kabul et */}
                      <label>{newsItem.comments !== undefined ? newsItem.comments : 0}</label>
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

export default Culture;
