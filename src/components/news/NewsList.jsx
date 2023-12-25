// NewsList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NewsList = ({ haberler }) => {
  return (
    <div>
      <h2>Son Haberler</h2>
      <ul>
        {haberler.map((item) => (
          <li key={item.id}>
            {/* Her bir haber başlığına tıklanınca NewsDetail componentine yönlendirme yapacak bağlantı */}
            <Link to={`/haber/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
