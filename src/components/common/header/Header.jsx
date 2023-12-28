import React, { useState } from 'react';
import Head from './Head'; 
import './header.css';
import { Link } from 'react-router-dom'; 
import SearchBar from './SearchBar'; 

// Header bileşeni, sayfanın başlığını ve gezinme menüsünü içerir
const Header = () => {
  // Navbar'ın durumunu tutan state'in tanımlandığı kısım
  const [navbar, setNavbar] = useState(false);

  // Arama işlemini gerçekleştiren fonksiyon
  const handleSearch = (query) => {
    console.log('Arama yapılıyor:', query);
  };

  // Filtre değişikliğini takip eden fonksiyon
  const handleFilterChange = (filter) => {
    console.log('Filtre değişti:', filter);
  };

  // Header bileşeninin render edildiği kısım
  return (
    <>
      {/* Head bileşeni */}
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            {/* Gezinme menüsü */}
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
                <Link to='/komik'>Eğlenceli Haberler</Link>
              </li>
              <li>
                <Link to='/spor'>Spor</Link>
              </li>
              <li>
                <Link to='/yorum'>Yorumlar</Link>
              </li>
              <li>
                <Link to='/login'>Giriş Yap</Link>
              </li>
              {/* Arama çubuğu ve filtreleme bileşeni */}
              <SearchBar onSearch={handleSearch} onFilterChange={handleFilterChange} />
            </ul>
            {/* Navbar'ı açma/kapatma butonu */}
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
