// Comments.js

import React, { useState, useEffect } from "react";
import "./comments.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Comments = () => {
  const [commentsNews, setCommentsNews] = useState([]);

  useEffect(() => {
    const fetchCommentsNews = async () => {
      try {
        const apiKey = "6dd3d32a478b44888aab4122409e13d0";
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${apiKey}&pageSize=10`
        );

        const data = await response.json();
        setCommentsNews(data.articles.map((article) => ({ ...article, commentCount: 0 })));
      } catch (error) {
        console.error("Haberleri alırken bir hata oluştu:", error);
      }
    };

    fetchCommentsNews();
  }, []);

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 800,
    rows: 10,
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

  const handleCommentSubmit = (newsItemIndex, commentText) => {
    if (commentText.trim() !== "") {
      setCommentsNews((prevNews) => {
        const updatedNews = [...prevNews];
        updatedNews[newsItemIndex].commentCount += 0.5;
        return updatedNews;
      });
    }
  };

  return (
    <>
      <section className="Comments">
        <div className="baslik">
          <h1> Haber Yorumlayın</h1>
        </div>
        <div className="content">
          <div className="logo">{/* Belki resim koyarım */}</div>
          <Slider {...settings}>
            {commentsNews.map((newsItem, index) => (
              <div className="itemsComment" key={newsItem.title}>
                <div className="box shadow">
                  <div className="images row">
                    <div className="img">
                      <img src={newsItem.urlToImage} alt={newsItem.title} />
                    </div>
                    <div className="category category1">
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
                      <label>{newsItem.commentCount !== undefined ? newsItem.commentCount : 0}</label>
                      <div className="commentfield">
                        <textarea
                          id={`yorum-${index}`}
                          name={`yorum-${index}`}
                          rows={8}
                          cols={100}
                          placeholder="Yorumunuzu yazınız..."
                        ></textarea>
                        <div className="gonder">
                          <button
                            onClick={() => handleCommentSubmit(index, document.getElementById(`yorum-${index}`).value)}
                          >
                            Gönder
                          </button>
                        </div>
                      </div>
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

export default Comments;
