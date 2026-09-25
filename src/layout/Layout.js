import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Contact from '../components/Contact/Contact'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <main>{children}</main> 
    <Contact />
     <Footer/>
    </Container>
  )
}
