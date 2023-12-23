// src/components/SearchBar.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

const SearchBar = ({ onSearch, onFilterChange }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = () => {
    onSearch({ query, category: selectedCategory });
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilterChange({ category });
  };

  return (
    <div className="search-bar">
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">Tüm Kategoriler</option>
        <option value="kultur">Kültür</option>
        <option value="politika">Politika</option>
        <option value="komik">Komik Haberler</option>
        <option value="spor">Spor</option>
        <option value="yorum">Yorumlar</option>
      </select>
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

export default SearchBar;
