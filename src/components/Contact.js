import React from 'react'

const Contact = ({ close, article, articleTimeout }) => {
  return (
    <article
      id="contact"
      className={`${article === 'contact' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none', textAlign: 'center' }}
    >
      <h2 className="major">Contact</h2>
      <ul className="icons">
        <li>
          <a
            href="https://www.linkedin.com/in/swaroop-a-s-7ab296b8/"
            className="icon fa-linkedin"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/swaroop_a.s"
            className="icon fa-instagram"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/swaroop325" className="icon fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com/users/9311651/swaroop"
            className="icon fa-stack-overflow"
          >
            <span className="label">Stack Overflow</span>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/swaroop26390917"
            className="icon fa-twitter"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/A.S.SWAROOP/"
            className="icon fa-facebook"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
      </ul>
      {close}
    </article>
  )
}

export default Contact
