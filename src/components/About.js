import React from 'react'

const About = ({ close, article, articleTimeout }) => {
  return (
    <article
      id="about"
      className={`${article === 'about' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">About</h2>
      <p>Living in Trivandrum, India</p>
      {close}
    </article>
  )
}

export default About
