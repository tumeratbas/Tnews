// NewsDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const { haberId } = useParams();
  const [seciliHaber, setSeciliHaber] = useState(null);

  useEffect(() => {
    // NewsAPI'den haber detaylarını almak için bir fonksiyon
    const fetchNewsDetail = async () => {
      try {
        const response = await fetch(`YOUR_NEWS_API_DETAIL_ENDPOINT/${haberId}`);
        const data = await response.json();
        setSeciliHaber(data);
      } catch (error) {
        console.error('Haber detayları alınamadı', error);
      }
    };

    // Haber detaylarını al
    fetchNewsDetail();
  }, [haberId]);

  if (!seciliHaber) {
    return <p>Haber detayları yükleniyor...</p>;
  }

  return (
    <div>
      <h2>{seciliHaber.title}</h2>
      <p>{seciliHaber.description}</p>
      {/* Diğer haber detayları */}
    </div>
  );
};

export default NewsDetail;
