import React from 'react'
import ProfileImage from '../images/profile_pic.jpg'

const Intro = ({ close, article, articleTimeout }) => {
  return (
    <article
      id="intro"
      className={`${article === 'intro' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none', textAlign: 'center' }}
    >
      <h2 className="major">Intro</h2>
      <span className="image profile">
        <img src={ProfileImage} alt="" />
      </span>
      <p>
        Passionate Web/Mobile Application Developer and obsessed with React.js
        and its frameworks. Focussed in Agile method of development and keen on
        bug free delivery of product. Tech Enthusiast and interested in working
        on anything new and emerging in tech.
      </p>
      {close}
    </article>
  )
}

export default Intro
