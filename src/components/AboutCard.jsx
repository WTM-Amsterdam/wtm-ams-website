import React from 'react'
import Img from 'gatsby-image'
import {graphql, useStaticQuery} from 'gatsby'

const AboutCard = ({img, name, jobTitle, instagram, linkedIn}) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allImageSharp {
              edges {
                node {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            }
  `)
  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className="person">
        <div className="personimg">
          <Img
            fluid={data.allImageSharp.edges.find((element) =>
              (element?.node?.fluid?.src?.split('/')?.pop() === img))?.node?.fluid}
            alt="profile-picture"/>
        </div>
        <div className="persondetail">
          <p className="personunvan">{name}</p>
          <p className="persontitle">{jobTitle}</p>
        </div>
        <div className="icon-block">
          <a href={instagram} target="_blank" title={`Follow ${name} on Instagram`}>
            <i className="fab fa-instagram fa-fw" />
          </a>
          <a href={linkedIn} target="_blank" title={`Follow ${name} on LinkedIn`}>
            <i className="fab fa-linkedin-in fa-fw" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutCard
