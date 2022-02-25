import PropTypes from 'prop-types'
import React from 'react'

import Leader from '../images/leader.jpg'
import About from './About'
import Contact from './Contact'
import Intro from './Intro'
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
