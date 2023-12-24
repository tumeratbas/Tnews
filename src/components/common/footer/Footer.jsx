import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='tumer'>
            <p>Tümer, projesine destek verilmesini istiyor. Aşağıdan Tümer'e ulaşın!</p>
            <i className='fa fa-envelope'></i>
            <span> atbastumer@gmail.com </span> <br />
            <i className='fa fa-headphones'></i>
            <span> +90 1234556678</span>
          </div>
          <div className='box'>
            <h3>BAŞLIKLAR</h3>
            <ul>
              <li>
                <span>BOKS</span> <label>(5)</label>
              </li>
              <li>
                <span>MODA</span> <label>(6)</label>
              </li>
              <li>
                <span>SAĞLIK</span> <label>(7)</label>
              </li>
              <li>
                <span>DOĞA</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
          <p>© all rights reserved</p>
          <p>
            made with <i className='fa fa-heart'></i> by tumeratbas
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
