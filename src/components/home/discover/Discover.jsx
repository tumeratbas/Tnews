import React from "react";
import { discover } from "../../../dummyData"; // dummyData içindeki örnek verileri kullanma
import Heading from "../../common/heading/Heading";
import "./style.css"; // Stil dosyasını içeri aktarma

const Discover = () => {
  return (
    <>
      {/* Keşfet bölümünü temsil eden ana bileşen */}
      <section className='discover'>
        <div className='container'>
          {/* Başlık bileşenini kullanma */}
          <Heading title='Keşfet' />
          <div className='content'>
            {/* discover dizisindeki her bir öğe için bir kutu oluşturma */}
            {discover.map((val) => {
              return (
                <div className='box' key={val.id}>
                  {/* Görseli içeren kutu */}
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  {/* Başlık */}
                  <h1 className='title'>{val.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Discover;
