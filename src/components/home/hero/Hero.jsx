import React, { useState, useEffect } from "react";
import "./hero.css";
import Card from "./Card";

// Hero bileşeni, haberleri çeken ve ekranda gösteren ana bileşen
const Hero = () => {
  // Haberleri içeren state'in tanımlandığı kısım
  const [items, setItems] = useState([]);

  // useEffect hook'u kullanılarak sayfa yüklendiğinde haberleri çeken fonksiyon
  useEffect(() => {
    const fetchNews = async () => {
      try {
        // News API kullanılarak haberleri çeken fetch işlemi
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6dd3d32a478b44888aab4122409e13d0&pageSize=5"
        );

        // Gelen verinin JSON formatına dönüştürülmesi
        const data = await response.json();

        // Resim URL'si olan haberlerin filtrelenmesi
        const newsWithImages = data.articles.filter((item) => item.urlToImage);

        // Filtrelenen haberlerin state'e set edilmesi
        setItems(newsWithImages);
      } catch (error) {
        console.error("Haberleri alırken bir hata oluştu:", error);
      }
    };

    // Haberleri çeken fonksiyonun useEffect içinde çağrılması
    fetchNews();
  }, []); // useEffect'in sadece bir kere çalışması için boş dependency array

  // Hero bileşeninin render edildiği kısım
  return (
    <section className="hero">
      <div className="container">
        {/* Haberleri gösteren Card bileşeninin map edildiği kısım */}
        {items.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
};

// Hero bileşeninin diğer bileşenlere export edildiği kısım
export default Hero;
