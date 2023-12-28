import React, { useState, useEffect } from "react";
import "./Popular.css"; // Stil dosyasını içeri aktar
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../../common/heading/Heading"; // Başlık bileşenini içeri aktar

const Popular = () => {
  // popularNews state'i, genel kategorideki popüler haberleri tutar
  const [popularNews, setPopularNews] = useState([]);

  useEffect(() => {
    // Component mount edildiğinde çalışacak olan fonksiyon
    const fetchPopularNews = async () => {
      try {
        // News API'den veri çekmek için API anahtarınızı kullanın
        const apiKey = "6dd3d32a478b44888aab4122409e13d0";
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=tr&category=general&apiKey=${apiKey}&pageSize=8`
        );

        const data = await response.json();
        setPopularNews(data.articles);
      } catch (error) {
        console.error("Haberleri alırken bir hata oluştu:", error);
      }
    };

    fetchPopularNews(); // Popüler genel haberleri çekme işlemini başlat
  }, []);

  // Slider için ayarlar
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
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
      {/* Popüler genel haberleri gösteren ana bileşen */}
      <section className="popular">
        {/* Başlık bileşeni */}
        <Heading title="Gündemdeki Haberler" />
        <div className="content">
          {/* Slider içinde popüler genel haberleri gösteren bölüm */}
          <Slider {...settings}>
            {popularNews.map((newsItem) => (
              <div className="items" key={newsItem.title}>
                {/* Her bir popüler haber için bir kutu oluşturulur */}
                <div className="box shadow">
                  <div className="images row">
                    <div className="img">
                      {/* Haber görseli */}
                      <img src={newsItem.urlToImage} alt={newsItem.title} />
                    </div>
                    <div className="category category1">
                      {/* Başlığı kategori olarak kullanma */}
                      <span>{newsItem.title}</span>
                    </div>
                  </div>
                  <div className="text row">
                    {/* Haber başlığı */}
                    <h1 className="title">{newsItem.title.slice(0, 40)}...</h1>
                    <div className="date">
                      {/* Haber yayınlanma tarihi */}
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

export default Popular;
