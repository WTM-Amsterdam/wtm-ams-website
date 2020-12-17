import React from 'react'
import logoStacked from '../images/WTM logo_horiz_stacked_KO_rgb.svg'
import BackgroundImage from 'gatsby-background-image'
import {graphql, useStaticQuery} from 'gatsby'

const HomeSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "images/ams-1.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
console.log(data);
  const imageData = data?.desktop?.childImageSharp?.fluid

  return (
    <section className="container" id='home'>
      <div className="jumbotron">
        <BackgroundImage
          Tag="div"
          className="bg-img"
          fluid={imageData}
        />
        <div className="bg-text">
          <img src={logoStacked} className="head-logo"
               alt=""/>
          <h1>Amsterdam</h1>
          <a href="https://forms.gle/CkLYcRGR8h6Yeo2E8" target="_blank" className="button">
            <span><i aria-hidden="true"/></span>
            <p>Join us</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
