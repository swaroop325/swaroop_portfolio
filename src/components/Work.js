import React from 'react'
import GFT from '../images/gft.jpeg'
import CFT from '../images/cft.jpeg'
import Infy from '../images/infy.jpeg'

const Work = ({ close, article, articleTimeout }) => {
  return (
    <article
      id="work"
      className={`${article === 'work' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
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
  )
}

export default Work
