import React from "react"
import "./side.css"
import Heading from "../../../common/heading/Heading"
import SocialMedia from "../social/SocialMedia"

//const allCat = [...new Set(popular.map((curEle) => curEle.catgeory))]
//console.log(allCat)

const Side = () => {

  const catgeory = ["Dünya", "Gezi", "Spor", "Eğlence", "Sağlık", "Moda", "İş", "Teknoloji"]
  return (
    <>
      <Heading title='Bağlı Kal' />
      <SocialMedia />

      <Heading title='Abone Ol' />

      <section className='subscribe'>
        <h1 className='title'>Hikayelerimize Abone Olun</h1>
        <form action=''>
          <input type='email' placeholder='Mail Adresiniz...' />
          <button>
            <i className='fa fa-paper-plane'></i> KAYIT
          </button>
        </form>
      </section>

      <section className='banner'>
        <img src='./images/reklam.png' alt='' />
      </section>


      <section className='catgorys'>
        <Heading title='Kategoriler' />
        {catgeory.map((val) => {
          return (
            <div className='category category1'>
              <span>{val}</span>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Side