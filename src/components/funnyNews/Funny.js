import React, { useState, useEffect } from "react";
import "./Funny.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Funny = () => {
  // Eğlenceli haberleri tutacak state
  const [funnyNews, setFunnyNews] = useState([]);

  // Sayfa yüklendiğinde eğlenceli haberleri çeken useEffect hook'u
  useEffect(() => {
    const fetchFunnyNews = async () => {
      try {
        const apiKey = "6dd3d32a478b44888aab4122409e13d0";
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=tr&category=general&apiKey=${apiKey}&pageSize=21`
        );

        const data = await response.json();
        // Çekilen haberleri state'e set etme
        setFunnyNews(data.articles);
      } catch (error) {
        console.error("Haberleri alırken bir hata oluştu:", error);
      }
    };

    // Eğlenceli haberleri çeken fonksiyonun çağrılması
    fetchFunnyNews();
  }, []);

  // React-slick için ayarlar
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
      {/* Eğlenceli haberleri gösteren bileşen */}
      <section className="Funny">
        <div class="baslik">
          {/* Bileşen başlığı */}
          <h1> Eğlenceli Haberler </h1>
        </div>
        <div className="content">
          <div className='logo'>
            {/* Eğlenceli haberler logosu */}
            <img src='../images/fun.png' alt='' />
          </div>
          {/* React-slick kullanılarak eğlenceli haberleri gösteren slider */}
          <Slider {...settings}>
            {funnyNews.map((newsItem) => (
              <div className="items" key={newsItem.title}>
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
                      {/* Yayın tarihi */}
                      <i className="fas fa-calendar-days"></i>
                      <label>{newsItem.publishedAt}</label>
                    </div>
                    <div className="comment">
                      {/* Yorum sayısı varsa kullan, yoksa varsayılan olarak 0 kabul et */}
                      <i className="fas fa-comments"></i>
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

export default Funny;
