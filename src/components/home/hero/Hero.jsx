import React, { useState, useEffect } from "react";
import "./hero.css";
import Card from "./Card";

const Hero = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6dd3d32a478b44888aab4122409e13d0&pageSize=5"
        );

        const data = await response.json();

        // Resim URL'si olan haberleri filtrele
        const newsWithImages = data.articles.filter((item) => item.urlToImage);

        setItems(newsWithImages);
      } catch (error) {
        console.error("Haberleri alırken bir hata oluştu:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="hero">
      <div className="container">
        {items.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
