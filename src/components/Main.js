import PropTypes from 'prop-types'
import React from 'react'

import About from './About'
import Certifications from './Certifications'
import Contact from './Contact'
import Intro from './Intro'
import Projects from './Projects'
import Work from './Work'

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
        <Intro
          close={close}
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
        />
        <Work
          close={close}
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
        />
        <About
          close={close}
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
        />
        <Projects
          close={close}
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
        />
        <Certifications
          close={close}
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
        />
        <Contact
          close={close}
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
        />
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
