import * as React from 'react'
import '../custom.css'
import IconBar from '../components/IconBar'
import Navigation from '../components/Navigation'
import HomeSection from '../components/HomeSection'
import AboutSection from '../components/AboutSection'
import EventSection from '../components/EventSection'
import Footer from '../components/Footer'

const IndexPage = () => {
  return (
    <>
      <title>Women Techmakers Amsterdam</title>

      <Navigation/>

      <HomeSection/>

      <IconBar/>

      <AboutSection/>

      <EventSection/>

      <Footer />
    </>
  )
}

export default IndexPage
