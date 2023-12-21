import React from "react"

const SocialMedia = () => {
  return (
    <>
      <section className='social'>
        <div className='socBox'>
          <i className='fab fa-facebook-f'></i>
          <span>100,070 Likes</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-pinterest'></i>
          <span>9,420 Fans</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-twitter'></i>
          <span>15,900 Followers</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-instagram'></i>
          <span>300,001 Followers</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-youtube'></i>
          <span>4,700 Subscriber</span>
        </div>
      </section>
    </>
  )
}

export default SocialMedia
