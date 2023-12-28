import React, { useState } from 'react';
// FontAwesomeIcon bileşeni ve faSearch ikonu için gerekli importlar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css'; 

// SearchBar bileşeni, haber arama ve filtreleme işlemlerini gerçekleştirir
const SearchBar = ({ onSearch, onFilterChange }) => {
  // Arama sorgusu ve seçilen kategori için state'lerin tanımlandığı kısım
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Arama işlemini gerçekleştiren fonksiyon
  const handleSearch = () => {
    onSearch({ query, category: selectedCategory });
  };

  // Kategori değişikliğini takip eden fonksiyon
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilterChange({ category });
  };

  // SearchBar bileşeninin render edildiği kısım
  return (
    <div className="search-bar">
      {/* Kategori seçim dropdown'u */}
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">Tüm Kategoriler</option>
        <option value="kultur">Kültür</option>
        <option value="politika">Politika</option>
        <option value="komik">Komik Haberler</option>
        <option value="spor">Spor</option>
        <option value="yorum">Yorumlar</option>
      </select>
      {/* Haber arama input'u ve arama butonu */}
      <div className="search-input">
        <input
          type="text"
          placeholder="Haber ara..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

// SearchBar bileşeninin diğer bileşenlere export edildiği kısım
export default SearchBar;
