import React from 'react'
import { BodyPage } from '../Styles/StyledComponents'
import HeaderNav from '../components/HeaderNav'
import Card from '../components/Card'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <BodyPage>
        <HeaderNav/>
        <Card/>
        <Footer/>
    </BodyPage>
  )
}

export default Home