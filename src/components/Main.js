import PropTypes from 'prop-types'
import React from 'react'
import ProfileImage from '../images/profile_pic.jpg'
import Leader from '../images/leader.jpg'
import GFT from '../images/gft.jpeg'
import CFT from '../images/cft.jpeg'
import Infy from '../images/infy.jpeg'
class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none', textAlign: 'center' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image profile">
            <img src={ProfileImage} alt="" />
          </span>
          <p>
            Passionate Web/Mobile Application Developer and obsessed with
            React.js and its frameworks. Focussed in Agile method of development
            and keen on bug free delivery of product. Tech Enthusiast and
            interested in working on anything new and emerging in tech.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <div className="workBlock">
            <div>
              <span className="workTitle">Intern - Member Technical Staff</span>
              <span style={{ float: 'right' }}>Dec 2018 - Feb 2019</span>
            </div>
            <div>
              <span className="workTitle">Member Technical Staff</span>
              <span style={{ float: 'right' }}>Apr 2019 - Apr 2020</span>
            </div>
            <div>
              <span>
                <img className="workImage" src={GFT} alt="" />
              </span>
              <span>GoFrugal Technologies </span>
              <span style={{ float: 'right' }}>Chennai, India</span>
            </div>
          </div>
          <div className="workBlock">
            <div>
              <span className="workTitle">React JS Developer</span>
              <span style={{ float: 'right' }}>Jun 2020 - Nov 2020</span>
            </div>
            <div>
              <span className="workTitle">Tech Lead - Frontend Team</span>
              <span style={{ float: 'right' }}>Dec 2020 - May 2021</span>
            </div>

            <div>
              <span>
                <img className="workImage" src={CFT} alt="" />
              </span>
              <span>Craftveda Technology Private Limited</span>
              <span style={{ float: 'right' }}>Kolkata, India (Remote)</span>
            </div>
          </div>
          <div className="workBlock">
            <span className="workTitle">Associate Consultant</span>
            <span style={{ float: 'right' }}>Jun 2021 - Present</span>
            <div>
              <span>
                <img className="workImage" src={Infy} alt="" />
              </span>
              <span>Infosys Limited</span>
              <span style={{ float: 'right' }}>Trivandrum, India</span>
            </div>
          </div>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={Leader} alt="" />
          </span>
          <p>Living in Trivandrum, India</p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
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
              <a
                href="https://github.com/swaroop325"
                className="icon fa-github"
              >
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
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
