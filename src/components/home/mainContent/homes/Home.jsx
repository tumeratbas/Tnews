import React from "react";
import Side from "../../sideContent/side/Side";
import Life from "../life/Life";
import Music from "../musics/Music";
import Popular from "../popular/Popular";
import Ppost from "../Ppost/Ppost";
import "./style.css";

const Homes = () => {
  return (
    <>
      {/* Ana sayfa içeriğini temsil eden ana bileşen */}
      <main>
        <div className='container'>
          {/* Ana içerik bölümü */}
          <section className='mainContent'>
            {/* Popüler, Keşfet, Yaşam ve Müzik bileşenlerini içeren bölüm */}
            <Popular />
            <Ppost />
            <Life />
            <Music />
          </section>
          {/* Yan içerik bölümü */}
          <section className='sideContent'>
            {/* Yan içerik bileşeni */}
            <Side />
          </section>
        </div>
      </main>
    </>
  );
};

export default Homes;
