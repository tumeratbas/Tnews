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
            <h3>LABELS</h3>
            {/*<i className='fa fa-chevron-right'></i>*/}
            <ul>
              <li>
                <span>Boxing</span> <label>(5)</label>
              </li>
              <li>
                <span>Fashion</span> <label>(6)</label>
              </li>
              <li>
                <span>Health</span> <label>(7)</label>
              </li>
              <li>
                <span>Nature</span> <label>(9)</label>
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
