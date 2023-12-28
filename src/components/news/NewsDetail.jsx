import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  // React Router'ın useParams fonksiyonu ile URL'den haberId parametresini alıyorum
  const { haberId } = useParams();
  
  // haber detayları için bir state ve set fonksiyonu kullanıyoruz
  const [seciliHaber, setSeciliHaber] = useState(null);

  // useEffect hook'u ile bileşenin yüklenmesi ve haber detaylarını çekmemiz sağlanır
  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        // News API kullanılarak haber detayları çekilir
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines/${haberId}?apiKey=6dd3d32a478b44888aab4122409e13d0`
        );
        const data = await response.json();
        // API yanıtındaki ilk makale, seciliHaber state'ine atanır
        setSeciliHaber(data.articles[0]);
      } catch (error) {
        console.error('Haber detayları alınamadı', error);
      }
    };

    // useEffect içindeki fetchNewsDetail fonksiyonu, haberId parametresi değiştikçe çalışır
    fetchNewsDetail();
  }, [haberId]);

  // Eğer haber detayları yüklenmemişse, kullanıcıya bir yükleme mesajı gösterilir
  if (!seciliHaber) {
    return <p>Haber detayları yükleniyor...</p>;
  }

  // Haber detayları yüklendiyse, kullanıcıya gösterilir
  return (
    <div>
      <h2>{seciliHaber.title}</h2>
      <p>{seciliHaber.description}</p>
      {/* Diğer haber detayları buraya eklenir */}
    </div>
  );
};

export default NewsDetail;
