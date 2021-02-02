import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import ProfileImage from '../images/profile_pic.jpg'
import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {
  let content

  if (location && location.pathname === '/') {
    content = <div>{children}</div>
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Swaroop portfolio' },
              { name: 'keywords', content: 'swaroop, swaroop325' },
              { name: 'twitter:site', content: 'Swaroop Portfolio' },
              { name: 'twitter:creator', content: 'Swaroop.site' },
              { name: 'twitter:title', content: 'Swaroop Portfolio' },
              { name: 'twitter:image', content: ProfileImage },

              { property: 'og:title', content: 'Swaroop A.S Portfolio' },
              { property: 'og:type', content: 'website' },
              {
                property: 'og:url',
                content: 'https://swaroop325.web.app/',
              },
              { property: 'og:description', content: 'Swaroop A.S Portfolio Website' },
              { property: 'og:image', content: ProfileImage },
              { property: 'og:site_name', content: 'Swaroop Portfolio' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
