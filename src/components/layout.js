import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import ProfileImage from '../images/profile.jpeg'

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: 'full stack developer, react, node.js, aws, devops, swaroop, web developer, singapore' },
              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:site', content: '@swaroop26390917' },
              { name: 'twitter:creator', content: '@swaroop26390917' },
              { name: 'twitter:title', content: 'Swaroop A.S - Full Stack Developer' },
              { name: 'twitter:description', content: data.site.siteMetadata.description },
              { name: 'twitter:image', content: ProfileImage },

              { property: 'og:title', content: 'Swaroop A.S - Full Stack Developer' },
              { property: 'og:type', content: 'website' },
              { property: 'og:url', content: 'https://swaroop325.web.app/' },
              { property: 'og:description', content: data.site.siteMetadata.description },
              { property: 'og:image', content: ProfileImage },
              { property: 'og:site_name', content: 'Swaroop A.S Portfolio' },
            ]}
          >
            <html lang="en" />
            <style type="text/css">{`
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }

              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                background: #0a0a19;
                color: #ffffff;
                overflow-x: hidden;
              }

              html {
                scroll-behavior: smooth;
              }

              ::-webkit-scrollbar {
                width: 10px;
              }

              ::-webkit-scrollbar-track {
                background: #0a0a19;
              }

              ::-webkit-scrollbar-thumb {
                background: linear-gradient(180deg, #00d4ff, #00ff88);
                border-radius: 5px;
              }

              ::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(180deg, #00b8e6, #00e673);
              }
            `}</style>
          </Helmet>
          <div>{children}</div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
