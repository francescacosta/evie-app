import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import 'modern-normalize/modern-normalize.css'

import './globalStyles.css'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Meta from '../components/Meta'

export default ({ children, data }) => {
  const { siteTitle, siteUrl, socialMediaCard, headerScripts } =
    data.settingsYaml || {}
  return (
    <Fragment>
      <Helmet defaultTitle={siteTitle} titleTemplate={`%s | ${siteTitle}`}>
        <link
          href="https://fonts.googleapis.com/css?family=Quicksand:500,700"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.typekit.net/ekv6pwy.css" />
      </Helmet>

      <Meta
        headerScripts={headerScripts}
        absoluteImageUrl={
          socialMediaCard &&
          socialMediaCard.image &&
          siteUrl + socialMediaCard.image
        }
      />

      <Nav />

      <Fragment>{children()}</Fragment>

      <Footer />
    </Fragment>
  )
}

export const query = graphql`
  query IndexLayoutQuery {
    settingsYaml {
      siteTitle
      siteDescription
      headerScripts
      socialMediaCard {
        image
      }
    }
  }
`
