import React from 'react'
import AboutCard from './AboutCard'
import aboutData from '../data/about.json'

const AboutSection = () => {
  return (
    <section className='container' id='about-us'>
      <h1 className='about-header'>About us</h1>
      <p className='about-text'>Women Techmakers Amsterdam is part of Google's Women Techmakers global program and
        part of the GDG Netherlands community.

        We provide visibility, community, and resources for women in technology.

        In the Netherlands, through regular events, workshops, support groups and sharing of resources, we support
        the
        local female tech community. The community includes women in tech as well as those who aspire to get into
        the
        industry. Read more about our activities under Events and join us to get involved!
      </p>

      <div className='row justify-content-center'>
        {aboutData.map(({name, ...aboutProps}) => (
          <AboutCard key={name} name={name} {...aboutProps} />
        ))}
      </div>
    </section>
  )
}

export default AboutSection
