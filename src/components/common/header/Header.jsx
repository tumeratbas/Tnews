// src/components/Header.js

import React, { useState } from 'react';
import Head from './Head';
import './header.css';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';  // SearchBar'ı içe aktar

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const handleSearch = (query) => {
    console.log('Arama yapılıyor:', query);
    // Burada arama işlemlerini gerçekleştirebilir veya ana sayfa bileşenine iletebilirim
  };

  const handleFilterChange = (filter) => {
    console.log('Filtre değişti:', filter);
    // Burada filtreleme işlemlerini gerçekleştirebilir veya ana sayfa bileşenine iletebilirim
  };

  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? 'navbar' : 'flex'} onClick={() => setNavbar(false)}>
              <li>
                <Link to='/'>Ana Sayfa</Link>
              </li>
              <li>
                <Link to='/kultur'>Kültür</Link>
              </li>
              <li>
                <Link to='/politika'>Politika</Link>
              </li>
              <li>
                <Link to='/komik'>Komik Haberler</Link>
              </li>
              <li>
                <Link to='/spor'>Spor</Link>
              </li>
              <li>
                <Link to='/yorum'>Yorumlar</Link>
              </li>
              <SearchBar onSearch={handleSearch} onFilterChange={handleFilterChange} />
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
